export async function POST({ request }) {
  try {
    const { name, email, whatsapp, business } = await request.json();
    
    // Obtener variables desde Vercel
    const apiKey = import.meta.env.MAILERLITE_API_KEY;
    const groupId = import.meta.env.MAILERLITE_CHECKTOMATE_GROUP_ID;

    // Validar que existan las claves
    if (!apiKey || !groupId) {
      console.error('❌ Faltan variables de entorno en el servidor');
      return new Response('Error de configuración', { status: 500 });
    }

    // Enviar datos a MailerLite
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
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

    if (!response.ok) {
      const errorData = await response.text();
      console.error('❌ Error MailerLite:', errorData);
      throw new Error('Fallo al conectar con MailerLite');
    }

    console.log('✅ Lead guardado:', email);
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('❌ Error en API:', error);
    return new Response('Error interno', { status: 500 });
  }
}