import { getDocuments, getProjects } from "../../lib/api";
import { getOembed } from "../../lib/utils";
import { useRouter } from "next/router";

import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo";
import { SectionTitle } from "../../components/SectionTitle";
import { Documents, DocumentHeader } from "../../components/Documents";

export default function Document({ allDocs: { nodes } }) {
  const router = useRouter();
  const { slug } = router.query;

  nodes = nodes.filter((item) => {
    return item.documentsFields.project.slug == slug[0];
  });

  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <div className="px-xs md:px-lg mx-auto mb-xl">
          <DocumentHeader />
          <Documents documents={nodes} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const allProjects = await getProjects();
  return {
    paths:
      allProjects.nodes.map((project) => `/documents/${project.slug}`) || [],
    fallback: false,
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

export async function getStaticProps() {
  const allDocs = await getDocuments();

  allDocs.nodes = await getOembeds(allDocs.nodes);

  return {
    props: { allDocs },
    revalidate: 1, // In seconds
  };
}
