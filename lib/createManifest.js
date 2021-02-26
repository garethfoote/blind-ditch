// https://github.com/vercel/next.js/discussions/10949#discussioncomment-365850
// Horrible workaround for getting global data into pages.

import dotenv from "dotenv";
import fs from "fs";
import fetch from "node-fetch";

dotenv.config({ path: ".env.local" });

async function fetchAPI(query) {
  const headers = { "Content-Type": "application/json" };
  const res = await fetch(process.env.WORDPRESS_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

async function getPages() {
  const data = await fetchAPI(`
  query Pages {
    pages {
      edges {
        node {
          title
          slug
          uri
          pageFields {
            displayInFooter
          }
        }
      }
    }
  }`);

  return data.pages;
}

async function createManifestsFromCMS() {
  const allPages = await getPages();
  const footerPages = allPages.edges.filter((page) => {
    return page.node.pageFields.displayInFooter == true;
  });

  fs.writeFile(
    "./data/global-manifest.json",
    JSON.stringify({ footer: footerPages }),
    (err) => {
      if (err) throw err;
      console.info("Global data manifest written to file");
    }
  );
}

export async function main() {
  try {
    await createManifestsFromCMS();
  } catch (err) {
    throw new Error(err);
  }
}

main();
