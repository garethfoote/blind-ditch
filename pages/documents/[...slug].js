import {
  getDocuments,
  getProjects,
  getProject,
  getDocumentsPageFields,
} from "../../lib/api";
import { getOembed } from "../../lib/utils";
import { useRouter } from "next/router";

import Head from "next/head";
import Layout from "../../components/layout";
import { Documents, DocumentHeader } from "../../components/Documents";

export default function Document({ allDocs, project, docsPageFields }) {
  const router = useRouter();
  const { slug } = router.query;

  allDocs = allDocs?.filter((item) => {
    return item.documentsFields.project.slug == slug[0];
  });

  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch - Documents related to {project?.title}</title>
          <meta
            name="description"
            content={docsPageFields.documentsPageIntroText}
          />
        </Head>
        <main className="px-xs md:px-lg mx-auto mb-xl">
          <DocumentHeader title={docsPageFields.documentsPageIntroText} />
          <Documents documents={allDocs} filteredBy={project?.title} />
        </main>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const allProjects = await getProjects();
  return {
    paths:
      allProjects.nodes.map((project) => `/documents/${project.slug}`) || [],
    fallback: "blocking",
  };
}

async function getOembeds(allDocs) {
  const promises = allDocs.map(async (doc) => {
    const type = doc.documentsFields.type.toLowerCase();
    if (["video", "sound"].indexOf(type) >= 0) {
      const url = doc.documentsFields[doc.documentsFields.type.toLowerCase()];
      doc.documentsFields = await getOembed(doc.documentsFields, url);
      return doc;
    } else {
      return doc;
    }
  });
  return Promise.all(promises);
}

export async function getStaticProps({ params }) {
  const allDocs = await getDocuments();
  const project = await getProject(params.slug[0]);
  const docsPageFields = await getDocumentsPageFields();

  allDocs.nodes = await getOembeds(allDocs.nodes);

  return {
    props: {
      allDocs: allDocs.nodes,
      docsPageFields: docsPageFields
        ? docsPageFields.page.documentsPageFields
        : { documentsPageIntroText: "Intro dummy text" },
      ...project,
    },
    revalidate: 1, // In seconds
  };
}
