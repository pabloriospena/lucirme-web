const prerender = false;
async function POST({ request }) {
  try {
    const data = await request.json();
    if (!data || !data.email) {
      return new Response(JSON.stringify({ error: "Datos incompletos" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const { name, email, company, source = "profesionales_leadmagnet" } = data;
    const apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZGZmMzNkODYxNGU2YmIxNDI3ZmUxODYzMTRlYTM5ODM1MTFjMDgxMGUzMjUxYWFmYzM4ODE2M2FkZDE2YWFmMGRhZTM3M2YwYTY5MzM1NzMiLCJpYXQiOjE3NzgwMjYxNTEuNjg0MDMyLCJuYmYiOjE3NzgwMjYxNTEuNjg0MDM0LCJleHAiOjQ5MzM2OTk3NTEuNjc2NTE2LCJzdWIiOiIyMDYwMTMyIiwic2NvcGVzIjpbXX0.JD0-iANJZZGu_eSXNKCep7csBss93uIAdJk__AWPBhWavJKxKnoXRn98dzJKITwtDMiF5DErHADFHoJG0Ee6TiKAjyZDSflyn1-Hc-rdKrv0p4DMCclCNRKVh_GVCdmVL9nMCGJAnOMH6FTfShbzs02Tz-c2aLfu9SWdwC6_huS5_BD5QX7stbHH6uQICj-T0r2vwps1nYPsb5hrBvjPrMfZXNhahGqjGcfmbSGMLefKhbVBt_iShYFYXO9MnTjF7T2KsaEchjyyp0Cl3S05XjSfin6hhS2Kuz9S6F_M3QDjxD6lYkCCuzqzy725bc3h1vyfLANiQe2YsRC-t_lQwoQhcdi1cIyUZHaV_T7MsMW-Fun_uv418rxQqEUpI53YiU9n3Hf5NDnUs7woWt5kZu6-YgqGuRI6cMkFnND6XDNsM2EO3iRk1n1Ve_gJPVqbVf16ui0KnFZmRIaDBfn1b-tlN1aLfNEeLWlpe4bA_u1L34fMkk8nSF8h3VWQuLyKq2jDsEoh1ZR1s1LXupBTPxS2rZt_BoO1rdn03WDZrJACglEH8ay6wmAtFZcAOP7S0D2LN89p8NAfHuBGQhKK_2Dr7EHVKRLv-dA2alXNY5Jk2dkqtUIRAH9oOiMp1N2aOiIQsnNvnihQIuE9XT89fUk2KG7rRCO6ie-dTdc0cDY";
    let groupId;
    let fields = { source };
    if (source === "empresas_propuesta") {
      groupId = "186852008835155575";
      if (company) fields.company = company;
    } else {
      groupId = "186731201916045075";
    }
    if (!apiKey || !groupId) {
      return new Response(JSON.stringify({ error: "Configuración incompleta" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Accept": "application/vnd.api+json"
      },
      body: JSON.stringify({
        email,
        name,
        fields,
        groups: [groupId],
        status: "active"
      })
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("MailerLite error:", err);
      return new Response(JSON.stringify({ error: "Error en MailerLite" }), {
        status: res.status,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Error interno" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
