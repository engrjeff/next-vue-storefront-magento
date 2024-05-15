# Alokai Showpo UK

## Tech Stack:

### Middleware:

- Alokai SDK for Magento 2
- Express.js
- TypeScript

### Storefront:

- Alokai SDK for Next.js
- Next.js
- React.js
- TypeScript
- TailwindCSS - styling
- Radix UI - unstyled, headless UI library
- Storefront UI - styled but can be modified with TailwindCSS
  - can be used for future pages

## What's inside?

It's a monorepo created using Turborepo

### Apps and Packages

- `middlware`: a Alokai middleware for Magento 2
- `storefront`: a [Next.js](https://nextjs.org/) app
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Setup Environment Variables

1. Middleware (/apps/middleware)
   Rename `.env.example` to `.env`
2. Storefront (/apps/storefront)
   Rename `env.example` to `.env.local`

### Build

To build all apps and packages, run the following command:

```
npm build
```

### Develop

To develop all apps and packages, run the following command:

```
npm dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
