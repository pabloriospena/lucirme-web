// src/pages/api/checktomate-access.js
export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, whatsapp, business } = body;
    
    const apiKey = import.meta.env.MAILERLITE_API_KEY;
    const groupId = import.meta.env.MAILERLITE_CHECKTOMATE_GROUP_ID;

    if (!apiKey || !groupId) {
      return new Response(
        JSON.stringify({ error: 'Configuración incompleta' }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const mailerLiteResponse = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        email,
        name,
        fields: {
          phone: whatsapp,
          company: business || ''
        },
        groups: [groupId],
        status: 'active'
      })
    });

    if (!mailerLiteResponse.ok) {
      const errorText = await mailerLiteResponse.text();
      console.error('MailerLite Error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Error al guardar en MailerLite' }), 
        { status: mailerLiteResponse.status, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Lead guardado' }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('API Error:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};