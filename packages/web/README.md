# Weddingflare: Frontend

## Overview

The goal with the web frontend is to create an easily modifiable, flexible, and lightweight event page, with support for an RSVP form, schedule of events, location, and more. The RSVP form submits its content to the Weddingflare API, to be handled in whatever way makes the most sense.

## To-Do

- [ ] Add more polish to the UI
- [ ] Form security?
- [ ] Potentially collapse frontend code and API into a [Flareact](https://flareact.com/) powered project
- [ ] Make the site easier to customize (possibly convert it to a static-site generator theme?)

## Development and Configuration

1. As described in the project root's [README](https://github.com/CS-5/weddingflare), Lerna is used to manage shared dependencies and handle publishing. To install dependencies, first run: `npx lerna bootstrap` from the project root.

2. Update the constants in `pages/index.tsx` and the enviornment variables from `.env.example` to set up the frontend.

3. Update any of the custom `theme-` extensions in `tailwind.config.js` to customize colors, fonts, and more across the site.

4. Update any icons/images in the `public` directory.

5. Dive in to the code itself and tweak it!

6. Building is as simple as `npm run build` followed by `npm run export` to create the static files.
