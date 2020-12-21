import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Layout from "../../components/layout";
import { getProject, getAllProjects } from "../../lib/api";
import Head from "next/head";
import styles from "./Projects.module.css";
import { Widgets } from "../../components/Widgets";
import { extract } from "oembed-parser";
import Intro from "../../components/intro";
import { Text } from "../../components/Text";

export default function Project({ project }) {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const details = project.projectFields.details;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <article>
            {" "}
            <Head>
              <title>{project.title}</title>
            </Head>
            <Intro />
            <h1>{project.title}</h1>
            <div>
              <time dateTime={details.yearStart}>{details.yearStart}</time>
              {details.yearEnd && " - "}
              {details.yearEnd && (
                <time dateTime={details.yearEnd}>{details.yearEnd}</time>
              )}
            </div>
            <Text isLarge={true} content={project.content} />
            {/* <div dangerouslySetInnerHTML={{ __html: project.content }} /> */}
            <Widgets widgets={project.projectFields.flexibleContent} />
            {/* <div className={styles.imageConstrained}></div> */}
          </article>
        )}
      </Container>
    </Layout>
  );
}

const getOembed = async (item) => {
  const fieldName = "project_Projectfields_FlexibleContent_EmbedBlock";

  if (item.fieldGroupName === fieldName) {
    item.oembedDetails = await extract(item.oembed);
    return Promise.resolve(item);
  } else {
    return Promise.resolve(item);
  }
};

const getOEmbeds = async (flexContent) => {
  return Promise.all(flexContent.map((item) => getOembed(item)));
};

export async function getStaticProps({ params }) {
  let data = await getProject(params.slug);

  data.project.projectFields.flexibleContent = await getOEmbeds(
    data.project.projectFields.flexibleContent
  );

  return {
    props: {
      project: data.project,
    },
  };
}

export async function getStaticPaths() {
  const allProjects = await getAllProjects();
  return {
    paths: allProjects.edges.map(({ node }) => `/projects/${node.slug}`) || [],
    fallback: false,
  };
}
