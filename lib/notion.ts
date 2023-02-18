import { Client } from "@notionhq/client";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const auth = process.env.NOTION_TOKEN;
if (!auth) {
  throw new Error("NOTION_TOKEN is not set");
}

export const notion = new Client({ auth });

const softwareDatabaseId = process.env.SOFTWARE_DATABASE_ID as string;
if (!softwareDatabaseId) {
  throw new Error("SOFTWARE_DATABASE_ID is not set");
}

// get software
export async function getSoftware() {
  const response = await notion.databases.query({
    database_id: softwareDatabaseId,
  });

  // read over results and return:
  // title, description, slug
  const software = response.results
    // Make page is a PageObjectResponse
    .filter((page: object): page is PageObjectResponse => "properties" in page)
    .map((page) => {
      const id = page.id;

      // @ts-ignore
      const title = page.properties?.Name.title[0].plain_text;
      const description =
        // @ts-ignore
        page.properties?.["Short Description"].rich_text[0].plain_text;
      // @ts-ignore
      const slug = page.properties?.slug.rich_text[0].plain_text;

      // @ts-ignore
      const order = page.properties?.order.number;

      // @ts-ignore
      const url = page.properties?.URL.url;

      // @ts-ignore
      const date = page.properties?.date.rich_text[0].plain_text;

      if ([title, description, slug, order, url, date].includes(undefined)) {
        throw new Error("Page missing expected properties");
      }

      return {
        title,
        description,
        id,
        slug,
        order,
        url,
        date,
      };
    })
    .sort((a, b) => a.order - b.order);

  return software;
}

// get software by slug
export async function getSoftwareBySlug(slug: string) {
  const software = await getSoftware();
  return software.find((s) => s.slug === slug);
}
