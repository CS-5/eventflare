# Eventflare

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

See the respective README's in [`packages/api`](https://github.com/CS-5/eventflare/tree/main/packages/api) and [`packages/web`](https://github.com/CS-5/eventflare/tree/main/packages/web) for more information about those specific packages. While you're here though:

1. Make sure to run `npm install` to install the dependencies for all packages and install Cloudflare Wrangler `npm install -g @cloudflare/wrangler`.
2. Configure your Wrangler deployment in [`packages/api/wrangler.toml`](https://github.com/CS-5/eventflare/blob/main/packages/api/wrangler.toml).
3. Customize the application however you'd like. This is less-so a static site generator "template" and more of a forkable boilerplate.

### Optional: Automated Deployments

For automated deployments, make sure to make note of the workflow defined in [`.github/workflows/deploy.yml`](https://github.com/CS-5/eventflare/blob/main/.github/workflows/deploy.yml). This workflow requires two repository secrets to be defined:

- `CF_API_TOKEN` Your Cloudflare API token with permission to manage workers.
- `CF_PAGES_HOOK` the Cloudflare Pages hook URL to preform a "manual" build/deploy of your pages project.

The workflow is triggered on new tags. This is fairly simple with Lerna:

`npx lerna version` (may need `--force-publish` in some situations).

### Cloudflare Pages

Because of how this project is structured, Cloudflare pages can act slightly weird. A few settings that could/should be tweaked:

- The build environment is NextJS
- The build command should be `cd packages/web && npm install && npm run build && npm run export`. This makes sure the right dependencies are installed and forces NPM to run the NextJS build commands.
- The root directory should be `/`. This is required to ensure Cloudflare Pages can access the `packages/lib` directory.
- I chose to disable building on Pull Requests, and since deployments are triggered by a webhook, I paused automated deployments.
