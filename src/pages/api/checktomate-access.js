// ⚠️ IMPORTANTE: Este archivo debe estar en src/pages/api/
// y NO debe tener frontmatter (---)

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    if (!data || !data.email) {
      return new Response(JSON.stringify({ error: 'Email requerido' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    
    const { name, email, whatsapp, business } = data;
    const apiKey = process.env.MAILERLITE_API_KEY;
    const groupId = process.env.MAILERLITE_CHECKTOMATE_GROUP_ID;

    if (!apiKey || !groupId) {
      console.error('❌ Faltan variables:', { hasKey: !!apiKey, hasGroupId: !!groupId });
      return new Response(JSON.stringify({ error: 'Configuración' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const res = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.api+json'
      },
      body: JSON.stringify({
        email,
        name,
        fields: { phone: whatsapp, company: business || '' },
        groups: [groupId],
        status: 'active'
      })
    });

    if (!res.ok) {
      const err = await res.text().catch(() => 'error');
      console.error('❌ MailerLite:', err);
      return new Response(JSON.stringify({ error: 'Error externo' }), { 
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('❌ API Error:', error);
    return new Response(JSON.stringify({ error: error.message }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}