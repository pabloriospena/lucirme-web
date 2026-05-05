export async function POST({ request }) {
  try {
    const { name, email, whatsapp, business } = await request.json();
    const apiKey = import.meta.env.MAILERLITE_API_KEY;
    const groupId = import.meta.env.MAILERLITE_CHECKTOMATE_GROUP_ID;

    if (!apiKey || !groupId) {
      return new Response('Configuración incompleta', { status: 500 });
    }

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

    if (!response.ok) throw new Error('MailerLite API error');
    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('CheckTomate API Error:', error);
    return new Response('Error interno', { status: 500 });
  }
}