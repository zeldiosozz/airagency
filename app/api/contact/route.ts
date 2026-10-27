const MAX_BODY_BYTES = 12_000;
const VALID_SERVICES = new Set([
  'SEO & Organic Growth',
  'Paid Acquisition',
  'Social Media Management',
  'Content Marketing',
  'Branding & Identity',
  'Email Marketing',
  'Marketing Strategy',
  'Web Design & Development',
  'Full-Service Engagement',
]);
const VALID_BUDGETS = new Set([
  'Under $5,000',
  '$5,000 – $10,000',
  '$10,000 – $25,000',
  '$25,000+',
]);

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_BYTES) {
      return Response.json({ error: 'The form submission is too large.' }, { status: 413 });
    }
    payload = JSON.parse(body);
  } catch {
    return Response.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  if (!payload || typeof payload !== 'object') {
    return Response.json({ error: 'Invalid form submission.' }, { status: 400 });
  }

  const form = payload as Record<string, unknown>;
  if (isString(form.website) && form.website.trim()) {
    return Response.json({ success: true });
  }

  const { fullName, workEmail, companyName, primaryService, monthlyBudget, projectOverview } = form;

  if (
    !isString(fullName) || fullName.trim().length < 1 || fullName.length > 120 ||
    !isString(workEmail) || workEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(workEmail) ||
    !isString(companyName) || companyName.length > 160 ||
    !isString(primaryService) || !VALID_SERVICES.has(primaryService) ||
    !isString(monthlyBudget) || !VALID_BUDGETS.has(monthlyBudget) ||
    !isString(projectOverview) || projectOverview.trim().length < 15 || projectOverview.length > 5_000
  ) {
    return Response.json({ error: 'Please check the form fields and try again.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !from || !to) {
    return Response.json(
      { error: 'The contact form is not configured yet. Please email hello@airmarketingagency.com.' },
      { status: 503 }
    );
  }

  const subjectName = fullName.replace(/[\r\n]+/g, ' ').trim();
  const emailText = [
    `Name: ${fullName.trim()}`,
    `Work email: ${workEmail.trim()}`,
    `Company: ${companyName.trim() || 'Not provided'}`,
    `Primary focus: ${primaryService}`,
    `Monthly budget: ${monthlyBudget}`,
    '',
    'Commercial goal:',
    projectOverview.trim(),
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: workEmail.trim(),
        subject: `New website inquiry from ${subjectName}`,
        text: emailText,
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) {
      return Response.json(
        { error: 'We could not send your inquiry right now. Please try again or email hello@airmarketingagency.com.' },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: 'We could not send your inquiry right now. Please try again or email hello@airmarketingagency.com.' },
      { status: 502 }
    );
  }
}
