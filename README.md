# Eventflare

![App Overview](https://raw.githubusercontent.com/CS-5/eventflare/main/docs/app.png)

## Introduction

### What this project is:

- A security guy's foray, diving (for essentially the first time) in to [React](https://reactjs.org/), [TailwindCSS](https://tailwindcss.com/), [NextJS](https://nextjs.org/), [Lerna](https://lerna.js.org/), and [Cloudflare Workers](https://workers.cloudflare.com/).
- A fairly lightweight frontend and API for simple events such as weddings, open houses, meet ups, and more.
- A submission for the [Cloudflare Developer Summer Challenge](https://challenge.developers.cloudflare.com/)!
- (Eventually) my personal wedding website 😊

### What this project is not:

- The best example of how to work with the technologies and projects mentioned above (I'm learning 100% of this as I go... pull requests anyone?).
- A bullet-proof (both in security and functionality) solution for advertising and handling RSVP's for events. There are definitely some tweaks that should be made before it can be considered production-ready.
- A UI/UX design masterpiece.

### Where you can help (if you're interested):

If you happened to stumble upon this project and think it's neat, see ways it can be improved, or have a suggestion - by all means please share it! This project is half-learning experience, half-working app.

## Development and Configuration

1. Make sure to run `npm install` to install the dependencies for all packages.
2. Configure your site using `site.json` and customize with the pages and components in `pages/` and `components/`.
3. Run the site in development (watch) mode with `npm run dev`, which uses Cloudflare Wrangler beta to proxy requests to Next. If you'd like to just run the frontend, use `npm run next:dev` instead.

### Optional: Automated Deployments

For automated deployments, make sure to make note of the workflow defined in [`.github/workflows/deploy.yml`](https://github.com/CS-5/eventflare/blob/main/.github/workflows/deploy.yml). This workflow requires one repository secret to be defined:

- `CF_PAGES_HOOK` the Cloudflare Pages hook URL to preform a "manual" build/deploy of your pages project.

The workflow is triggered on new version tags. This is fairly simple:

`npm version`

### Cloudflare Pages Configuration

- The build environment is NextJS.
- The build command should be `npm run build`. This makes sure the right dependencies are installed and forces NPM to run the NextJS build commands.
- The root directory should be `/`.
- I chose to disable building on Pull Requests, and since deployments are triggered by a webhook, I paused automated deployments.
- Define enviornment variables as appropriate (see `.env.example`).
