import {
  PROJECT_FIELDS,
  DOCUMENTS_FIELDS,
  IMAGE_MEDIAITEM,
  ANNOUNCEMENT_FIELDS,
  PAGE_FIELDS,
  HOMEPAGE_FIELDS,
  DOCUMENTSPAGE_FIELDS,
} from "./fragments";

import consolere from "console-remote-client";

const console_re = consolere.connect({
  server: "https://console.re",
  channel: "8ffe-dfbf-be7e",
});

const API_URL = process.env.WORDPRESS_API_URL;

async function fetchAPI(query, { variables } = {}) {
  const headers = {
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
  };
  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      "Authorization"
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  return await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })
    .then((res) => res.text())
    .then((text) => {
      // console.log("text", text);
      let json = {};
      try {
        json = JSON.parse(text);
      } catch (err) {
        console.re.error("Error with API request...", text);
      }
      return json.data;
    });

  // const res = await fetch(API_URL, {
  //   method: "POST",
  //   headers,
  //   body: JSON.stringify({
  //     query,
  //     variables,
  //   }),
  // });

  // let json = {};
  // try {
  //   json = await res.json();
  // } catch (err) {
  //   console.error(err);
  // }

  // if (json.errors) {
  //   console.error(json.errors);
  //   throw new Error("Failed to fetch API");
  // }
  // return json.data;
}

export async function getProject(slug) {
  const data = await fetchAPI(
    `
  ${PROJECT_FIELDS}
  
  query ProjectsBySlug($id: ID!, $idType: ProjectIdType!) {
    project(id: $id, idType: $idType) {
      ...ProjectFields
      content
    }
  }
  `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  return data;
}

export async function getProjects(sortField = "yearStart") {
  const data = await fetchAPI(`

  ${PROJECT_FIELDS}

    {
      projects(first: 100) {
        nodes {
          ...ProjectFields
          content
        }
      }
    }
  `);

  data?.projects.nodes.sort((a, b) => {
    return (
      parseInt(a.projectFields.details[sortField]) -
      parseInt(b.projectFields.details[sortField])
    );
  });

  data.projects.nodes.forEach((p) => {
    console.log(p.title);
  });

  return data?.projects;
}

export async function getAnnouncement(slug) {
  const data = await fetchAPI(
    `  
    ${IMAGE_MEDIAITEM}
    ${ANNOUNCEMENT_FIELDS}
    query AnnouncementBySlug($id: ID!, $idType: AnnouncementIdType!) {
      announcement(id: $id, idType: $idType) {
        ...AnnouncementFields
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "SLUG",
      },
    }
  );

  return data;
}

export async function getAnnouncements() {
  const data = await fetchAPI(`
  ${IMAGE_MEDIAITEM}
  ${ANNOUNCEMENT_FIELDS}

  query Announcements {
    announcements {
      edges {
        node {
          ...AnnouncementFields
        }
      }
    }
  }`);

  return data?.announcements;
}

export async function getDocuments(sortField = "yearStart") {
  const data = await fetchAPI(`

  ${DOCUMENTS_FIELDS}

    {
      docs(first: 100, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          ...DocumentFields
        }
      }
    }
  `);

  // data?.projects.nodes.sort(
  //   (a, b) =>
  //     parseInt(a.projectFields.details[sortField]) -
  //     parseInt(b.projectFields.details[sortField])
  // );

  return data?.docs;
}

export async function getDocumentsPageFields() {
  const data = await fetchAPI(
    `  
    ${DOCUMENTSPAGE_FIELDS}
    
    query PageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        ...DocumentsPageFields
      }
    }
  `,
    {
      variables: {
        id: "documents",
        idType: "URI",
      },
    }
  );

  return data;
}

export async function getHomepage(projectsSortfield = "yearStart") {
  const data = await fetchAPI(
    `  
    ${HOMEPAGE_FIELDS}
    
    query PageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        ...HomepageFields
      }
    }
  `,
    {
      variables: {
        id: "home",
        idType: "URI",
      },
    }
  );

  data.page.homepageFields.connectedProjects.sort(
    (a, b) =>
      parseInt(a?.projectFields.details[projectsSortfield]) -
      parseInt(b?.projectFields.details[projectsSortfield])
  );

  return data;
}

export async function getPage(slug) {
  const data = await fetchAPI(
    `  
    ${PAGE_FIELDS}
    
    query PageBySlug($id: ID!, $idType: PageIdType!) {
      page(id: $id, idType: $idType) {
        ...PageFields
      }
    }
  `,
    {
      variables: {
        id: slug,
        idType: "URI",
      },
    }
  );

  return data;
}

export async function getPages() {
  const data = await fetchAPI(`
  ${PAGE_FIELDS}

  query Pages {
    pages {
      edges {
        node {
          ...PageFields
        }
      }
    }
  }`);

  return data?.pages;
}
