import { getAllDocuments } from "../../lib/api";
import { getOembed } from "../../lib/utils";

import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo";
import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";
import { Documents } from "../../components/Documents";

export default function Index({ allDocs: { nodes } }) {
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
          <div className="text-center px-5 max-w-xl mx-auto">
            <Text
              isCentred={true}
              content="Short description or reminder of the type of work you ususally embark on with a reminder that there is a lot more if people visit the archive or explore by media type."
            />
          </div>

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
