// src/pages/api/leadmagnet-access.js

export const prerender = false;

export async function POST({ request }) {
  try {
    const data = await request.json();
    
    // Validación básica
    if (!data || !data.email) {
      return new Response(JSON.stringify({ error: 'Datos incompletos' }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // ✅ Sin WhatsApp ni business: solo nombre y email
    const { name, email } = data;
    
    const apiKey = import.meta.env.MAILERLITE_API_KEY;
    // 🔹 Nueva variable de entorno para este grupo específico
    const groupId = import.meta.env.MAILERLITE_PROFESSIONALES_GROUP_ID;

    if (!apiKey || !groupId) {
      return new Response(JSON.stringify({ error: 'Configuración incompleta' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // ✅ Mismo endpoint de MailerLite que CheckTomate (ya probado)
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
        // ✅ Sin campos phone/company → fields con source para identificar
        fields: { source: 'profesionales_leadmagnet' },
        groups: [groupId],
        status: 'active'
      })
    });

    if (!res.ok) {
      const err = await res.text();
      console.error('MailerLite error:', err);
      return new Response(JSON.stringify({ error: 'Error en MailerLite' }), { 
        status: res.status,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ error: 'Error interno' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}