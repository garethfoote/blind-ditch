import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import { Intro } from "../components/Intro";
import { PageBreak } from "../components/PageBreak";
import { AnnouncementList } from "../components/AnnouncementList";
import { HomepageArticle } from "../components/HomepageArticle";
import { ProjectList } from "../components/ProjectList";
import { SectionTitle } from "../components/SectionTitle";
import { PullQuote } from "../components/PullQuote";
import { Text } from "../components/Text";
import Container from "../components/container";
import { getHomepage } from "../lib/api";

export default function Index({ hpProperties, preview }) {
  const announcements = hpProperties.page.homepageFields.connectedAnnouncements;
  const projects = hpProperties.page.homepageFields.connectedProjects;
  const article = hpProperties.page.homepageFields.connectedArticle;
  const testimonials = hpProperties.page.homepageFields.testimonials;

  projects;

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Intro />
        <Container max="xl">
          <Text
            isCentred={true}
            makeLarge={true}
            content={hpProperties.page.content}
          />
        </Container>
        <div className="max-w-2xl mx-auto px-5 pb-xl">
          <div className="lg:absolute lg:w-64 xl:w-80 right-10 top-10 h-auto">
            <PullQuote
              quote={
                "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
              }
            />
          </div>
        </div>
        <PageBreak topSpacing="0" spacing="xl" />
        <AnnouncementList announcements={announcements} />
        <PageBreak spacing="xl" />

        {/* <h1>20 Years</h1> */}
        <HomepageArticle page={article} />
        <PageBreak spacing="xl" />

        <SectionTitle>Work</SectionTitle>
        <div className="text-center px-5 max-w-xl mx-auto">
          <Text
            isCentred={true}
            content="Short description or reminder of the type of work you ususally embark on with a reminder that there is a lot more if people visit the archive or explore by media type."
          />
          <div className="text-center mb-xl">
            <Link as={`/projects`} href="/projects">
              <a className="button my-md relative top-4">
                <span className="title-accent px-8">View Full Archive</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="container mx-auto mb-xl p-5">
          <ProjectList projects={projects} />
        </div>
        {/* <div
          className="container mx-auto"
          style={{ width: "300px", height: "150px" }}
        >
          <HighlightBox html={"<h1>Hello, World!</h1>"} />
        </div> */}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const hpProperties = await getHomepage();
  return {
    props: {
      hpProperties,
      preview,
    },
    revalidate: 1, // In seconds
  };
}
