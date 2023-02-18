import { Client } from "@notionhq/client";

const auth = process.env.NOTION_TOKEN;
if (!auth) {
  throw new Error("NOTION_TOKEN is not set");
}

export const notion = new Client({ auth });
