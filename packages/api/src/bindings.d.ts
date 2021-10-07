export {};

declare global {
  const WF_PROD_KV: KVNamespace;
  const WF_DEV_KV: KVNamespace;

  const SENDGRID_API_KEY: string;
  const NOTION_API_KEY: string;
  const NOTION_DATABASE_ID: string;
}
