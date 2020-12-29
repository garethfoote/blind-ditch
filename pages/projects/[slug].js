import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProject, getAllProjects } from "../../lib/api";
import Head from "next/head";
import { Widgets } from "../../components/Widgets";
import Layout from "../../components/layout";
import { Intro } from "../../components/Intro";
import { extract } from "oembed-parser";
import { ProjectPageTitle } from "../../components/ProjectPageTitle";

export default function Project({ project }) {
  const router = useRouter();

  if (!router.isFallback && !project?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const details = project.projectFields.details;

  const date = (
    <>
      <time dateTime={details.yearStart}>{details.yearStart}</time>
      {details.yearEnd && " - "}
      {details.yearEnd && (
        <time dateTime={details.yearEnd}>{details.yearEnd}</time>
      )}
    </>
  );

  return (
    <Layout>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <article>
          {" "}
          <Head>
            <title>{project.title}</title>
          </Head>
          <Intro />
          <ProjectPageTitle
            title={project.title}
            date={date}
            types={details.projectTypes}
            description={project.content}
          />
          {/* <div>
            <time dateTime={details.yearStart}>{details.yearStart}</time>
            {details.yearEnd && " - "}
            {details.yearEnd && (
              <time dateTime={details.yearEnd}>{details.yearEnd}</time>
            )}
          </div> */}
          {/* <Text isLarge={true} content={project.content} /> */}
          {/* <div dangerouslySetInnerHTML={{ __html: project.content }} /> */}
          <Widgets widgets={project.projectFields.flexibleContent} />
          {/* <div className={styles.imageConstrained}></div> */}
        </article>
      )}
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
    revalidate: 1, // In seconds
  };
}

export async function getStaticPaths() {
  const allProjects = await getAllProjects();
  return {
    paths: allProjects.edges.map(({ node }) => `/projects/${node.slug}`) || [],
    fallback: false,
  };
}
