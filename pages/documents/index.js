import { getDocuments, getDocumentsPageFields } from "../../lib/api";
import { getOembed } from "../../lib/utils";
import { useRouter } from "next/router";

import Head from "next/head";
import Layout from "../../components/layout";
import { Documents, DocumentHeader } from "../../components/Documents";

export default function Index({ allDocs, docsPageFields }) {
  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch - Documents</title>
          <meta
            name="description"
            content={docsPageFields.documentsPageIntroText}
          />
        </Head>
        <div className="px-xs md:px-lg mx-auto mb-xl">
          <DocumentHeader title={docsPageFields.documentsPageIntroText} />
          <Documents documents={allDocs} />
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
  const docsPageFields = await getDocumentsPageFields();

  allDocs.nodes = await getOembeds(allDocs.nodes);

  return {
    props: {
      allDocs: allDocs.nodes,
      docsPageFields: docsPageFields
        ? docsPageFields.page.documentsPageFields
        : { documentsPageIntroText: "Intro dummy text" },
    },
    revalidate: 1, // In seconds
  };
}
