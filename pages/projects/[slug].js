import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getProject, getAllProjects } from "../../lib/api";
import Head from "next/head";
import { Widgets } from "../../components/Widgets";
import Layout from "../../components/layout";
import { Logo } from "../../components/Logo";
import { extract } from "oembed-parser";
import { ProjectPageTitle } from "../../components/ProjectPageTitle";
import classnames from "classnames";
import Nav from "../../components/Nav/Nav";

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
        <>
          <Head>
            <title>{project.title}</title>
          </Head>
          <div className="relative">
            <div className="relative z-40">
              <Nav />
            </div>
            <Logo />
            <article>
              <ProjectPageTitle
                title={project.title}
                date={date}
                types={details.projectTypes}
                description={project.content}
                heroImage={project.featuredImage?.node}
              />

              <div
                className={classnames({
                  "relative -top-20": project.featuredImage != null,
                })}
              >
                {project.content && (
                  <div className="px-6 sm:12">
                    <div
                      dangerouslySetInnerHTML={{ __html: project.content }}
                      className="strong-block bg-offwhite border-0 border-black border-solid p-4 mx-auto text-center max-w-sm sm:max-w-md text-sm sm:text-md"
                    />
                  </div>
                )}
                <Widgets widgets={project.projectFields.flexibleContent} />
              </div>
            </article>
          </div>
        </>
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
    paths:
      allProjects.nodes.map((project) => `/projects/${project.slug}`) || [],
    fallback: false,
  };
}
