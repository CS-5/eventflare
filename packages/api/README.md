# Weddingflare: API

## Overview

The goal with the API portion of this project was to create a (hopefully) very simple Cloudflare Worker-based API to handle form submissions on the main site. Note that aside from storing the upstream API keys as secrets, this API has 0 security features.

This lack of a security implmentation is intentional, as this project is intended to be a functional boilerplate, rather than a fully implmented SaaS solution.

## Current Functionality

### Email

If a `Message` object is included in the RSVP POST request, create an ICS calendar invite and send via SendGrid. No `message` property on the POST content automaticlly disables email sending.

#### Secret

- `SENDGRID_API_KEY` The API key from your SendGrid account, used to initialize the SendGrid Node SDK and connect to the API.

### Notion

Enter the RSVP form responses into a Notion database.

#### Secrets

- `NOTION_API_KEY` The API key from your Notion integration, used to initialize the Notion Node SDK and connect to the API.
- `NOTION_DATABASE_ID` The ID of the database where new RSVP entries should be created.

## Development and Configuration

1. As described in the project root's [Readme](https://github.com/CS-5/weddingflare/blob/main/README.md), Lerna is used to manage shared dependencies and handle publishing. To install base dependencies, first run: `npx lerna bootstrap` from the project root.

2. Check out `.env.example` for the possible enviornment variables. If a variable is not set, that piece of code will not be enabled. Variables can be sent to Cloudflare Workers as secrets using `wrangler secret put ENV_VAR_NAME`.

3. Customize the code as-needed!

4. `wrangler publish` to send up to the cloud.
