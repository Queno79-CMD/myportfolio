## Personal Portfolio (Cybersecurity Theme)

Modern, production-ready portfolio built with **Next.js**, **React**, **Tailwind CSS**, and **Framer Motion**.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Customize

- **Basic info + links**: `src/data/site.ts`
- **Projects**: `src/data/projects.ts`
- **Skills**: `src/data/skills.ts`

## Contact Form (API)

The contact form posts to `POST /api/contact`.

- **Works without configuration**: returns success and logs messages on the server.
- **Optional email delivery (Resend)**: copy `.env.example` to `.env.local` and set:
  - `RESEND_API_KEY`
  - `CONTACT_TO_EMAIL`
  - `CONTACT_FROM_EMAIL`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
