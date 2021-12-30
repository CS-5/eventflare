# Eventflare: API

## Overview

The goal with the API portion of this project is to create a (hopefully) very simple Cloudflare Worker-based API to handle form submissions on the main site. Note that aside from storing the upstream API keys as secrets, this API has 0 security features.

This lack of a security implementation is intentional, as this project is intended to be a functional boilerplate, rather than a fully implemented SaaS solution.

## Handlers

All handlers work based on a best-effort model. Therefore if an environment variable is not defined, a required object is missing, or there is an error upstream - the handler will quietly fail.

### Workers KV

Log RSVP responses in Workers KV. May eventually create an "admin" UI to view responses in the future. After a response is received, the RSVP ID is returned to the console of the frontend. This can then be used to view the contents of an RSVP at the `/api/rsvp/:id` endpoint, or all current submissions (up to 1000) can be downloaded as a CSV at the `/api/rsvp/csv` endpoint.

### Email

If a `Message` object is included in the RSVP POST request, a confirmation email message is sent. No `message` property on the POST content automatically disables email sending.

#### Secret

- `SENDGRID_API_KEY` The API key from your SendGrid account, used to initialize the SendGrid Node SDK and connect to the API.

### Notion

Enter the RSVP form responses into a Notion database.

#### Secrets

- `NOTION_API_KEY` The API key from your Notion integration, used to initialize the Notion Node SDK and connect to the API.
- `NOTION_DATABASE_ID` The ID of the database where new RSVP entries should be created.

## To-Do

- [ ] Support more endpoints for submitting notifications/updating documents
- [ ] Implement some sort of security layer to get rid of spam submissions (_especially_ for email)

## Development and Configuration

1. As described in the project root's [README](https://github.com/CS-5/eventflare), Lerna is used to manage shared dependencies and handle publishing. To install dependencies, first run: `npm install` from the project root. _Note: This command doesn't always seem to work (still learning exactly how to do monorepos) so if there are missing dependencies, `npm install` within an individual package folder usually fixes them._

2. Check out `.env.example` for the possible environment variables. Note that variables must be set manually (Wrangler does not read `.env` files). If a variable is not set, that piece of code will not be enabled. Secrets can be sent to Cloudflare Workers as secrets using `wrangler secret put ENV_VAR_NAME`.

3. Customize the code as-needed!

4. `wrangler publish` to send up to the cloud!