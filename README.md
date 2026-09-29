# Fieldhouse Forge

Fieldhouse Forge is a fictional athletic-equipment manufacturer website created as a design and product demonstration. The company, projects, products, resources, and claims are entirely fictional. No products or services are offered for sale.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verification

```bash
npm run lint
npm run type-check
npm run test
npm run build
npx playwright install chromium
npm run test:e2e
```

## Privacy behavior

The Request a Quote form is a local-only demonstration. Its submit handler performs no fetch, server action, storage, analytics, email, logging, or persistence. Entered values exist only in ephemeral browser state and are discarded on refresh or navigation.

## Original assets

All production images were generated specifically for this concept with OpenAI’s built-in image-generation model. Prompt provenance and accessibility decisions are recorded in [`docs/asset-manifest.md`](docs/asset-manifest.md). No imagery, copy, marks, or code was taken from the inspiration or competitor sites studied during planning.

## Deployment

The app is a standard Next.js 16 App Router project and requires no runtime environment variables. Import the GitHub repository into Vercel and deploy with framework defaults. Custom-domain configuration is intentionally deferred.
