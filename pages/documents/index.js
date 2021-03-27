import { getDocuments } from "../../lib/api";
import { getOembed } from "../../lib/utils";

import Head from "next/head";
import Layout from "../../components/layout";
import Nav from "../../components/Nav/Nav";
import { Logo } from "../../components/Logo";
import { SectionTitle } from "../../components/SectionTitle";
import { Documents } from "../../components/Documents";

export default function Index({ allDocs: { nodes } }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <div className="px-xs md:px-lg mx-auto mb-xl">
          <div className="">
            <svg
              width="70"
              height="96"
              viewBox="0 0 70 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M69 95H1V1H49.5714L69 21.4V95Z"
                stroke="#1F1F1F"
                stroke-width="2"
              />
              <path d="M49 22V1L69 22H49Z" fill="#1F1F1F" />
            </svg>
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
  const allDocs = await getDocuments();

  allDocs.nodes = await getOembeds(allDocs.nodes);

  return {
    props: { allDocs },
    revalidate: 1, // In seconds
  };
}
