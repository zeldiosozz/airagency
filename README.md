# Air Marketing Agency Website

Marketing site built with Next.js App Router, React, TypeScript, Tailwind CSS, and Motion.

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Set the values in `.env.local` as described below. The site can run without the email settings, but the contact form will return a configuration error until they are present.

## Production environment

- `NEXT_PUBLIC_SITE_URL`: canonical site origin, including `https://` (for example, `https://www.example.com`). Used for metadata, sitemap, and robots output.
- `RESEND_API_KEY`: server-only Resend API key.
- `CONTACT_FROM_EMAIL`: sender address on a domain verified with Resend, optionally with a display name.
- `CONTACT_TO_EMAIL`: inbox that receives contact requests.

Verify the sending domain in Resend, then add these values to the hosting provider's environment configuration before building and deploying. Do not commit `.env.local` or production secrets.

## Production checks

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The build output can be served with `npm start` after a successful production build.
