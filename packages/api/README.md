# Weddingflare: API

## Overview

The goal with the API portion of this project was to create a (hopefully) very simple Cloudflare Worker-based API to handle form submissions on the main site. Note that aside from storing the upstream API keys as secrets, this API has 0 security features.
This lack of a security implmentation is intentional, as this project is intended to be a functional boilerplate, rather than a fully implmented SaaS solution.

## Current Functionality

### Email

If a `Message` object is included in the RSVP POST request, create an ICS calendar invite and send via SendGrid. No `message` property on the POST content automaticlly disables email sending.

#### Secret(s)

- `SENDGRID_API_KEY` The API key from your SendGrid account, used to initialize the SendGrid Node SDK and connect to the API.

### Notion

Enter the RSVP form responses into a Notion database.

#### Secrets

- `NOTION_API_KEY` The API key from your Notion integration, used to initialize the Notion Node SDK and connect to the API.
- `NOTION_DATABASE_ID` The ID of the database where new RSVP entries should be created.
