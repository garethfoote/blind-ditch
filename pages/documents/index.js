import { getDocuments } from "../../lib/api";
import { getOembed } from "../../lib/utils";
import { useEffect } from "react";

import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo";
import { SectionTitle } from "../../components/SectionTitle";
import { Documents } from "../../components/Documents";

export default function Index({ allDocs: { nodes } }) {
  useEffect(() => {
    // document.querySelector("body").classList.add("document");
  });

  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Nav />
        <div className="h-12 mb-sm md:mb-md lg:mb-sm">
          <Logo />
        </div>
        <div className="container mx-auto mb-xl">
          <SectionTitle>Documents</SectionTitle>

          <Documents documents={nodes} />
        </div>
      </Layout>
    </>
  );
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
  const allDocs = await getAllDocuments();

  allDocs.nodes = await getOembeds(allDocs.nodes);

  return {
    props: { allDocs },
    revalidate: 1, // In seconds
  };
}
