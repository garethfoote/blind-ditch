import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Container from "../../components/container";
import Intro from "../../components/intro";
import { ProjectList } from "../../components/ProjectList";
import { HomepageArticle } from "../../components/HomepageArticle";
import { AnnouncementLink } from "../../components/Announcements";

import { SectionTitle } from "../../components/SectionTitle";
import { Text } from "../../components/Text";
import { MainImage } from "../../components/MainImage";
import { HighlightBox } from "../../components/HighlightBox";
import { PullQuote } from "../../components/PullQuote";
import { Gallery } from "../../components/Gallery";
import { PageBreak } from "../../components/PageBreak";
// import { Image } from "../../components/Image";

export default function Components() {
  return (
    <>
      <Layout>
        <Head>
          <title>Blind Ditch</title>
        </Head>
        <Intro />
        <Container>
          <SectionTitle title="Projects" />
        </Container>
        <Container>
          <Text
            isLarge={true}
            content="Based on interviews with 40 city centre residents about the views from their windows, this dispersed, digital portrait of Exeter uses a range of social and participatory art practice, to gently explore the meeting points of public and private space."
          />
          <Text content="During the development of the work we experienced and shared life in This City’s Centre from new and surprising angles – from the privacy of other people’s homes – through other people’s eyes. Inviting us to think more deeply about how daily life in this … and any British provincial city, can shape us, provoke us, define us." />
          {/* 
          <HighlightBox
            html={
              "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
            }
          /> */}
          <PullQuote
            quote={
              "<p>Sad to leave Exeter (have discovered that all the best artists are hiding there secretly constructing a creative utopia in which art and ‘real-life’ switch roles intermittently).</p>"
            }
          />
        </Container>
        <div className="max-w-2xl mx-auto my-xl">
          <MainImage
            contextPos="br"
            context="Image context & credit Image context & credit Image context & credit Image context & credit Image context & credit Image context & credit "
            width={860}
            image={{
              mediaDetails: {
                height: 1707,
                width: 2560,
              },
              sourceUrl:
                "http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg",
              altText: "",
            }}
          />
        </div>
        <Container>
          <Text content="During the development of the work we experienced and shared life in This City’s Centre from new and surprising angles – from the privacy of other people’s homes – through other people’s eyes. Inviting us to think more deeply about how daily life in this … and any British provincial city, can shape us, provoke us, define us." />
        </Container>
        <div className="max-w-2xl mx-auto my-lg">
          <Image
            src="http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg"
            width={860}
            height={860 * (1707 / 2560)}
            layout="responsive"
          />
        </div>
        <PageBreak />

        <Container>
          <SectionTitle title="Windows" />
          <Text
            isLarge={true}
            content="Based on interviews with 40 city centre residents about the views from their windows, this dispersed, digital portrait of Exeter uses a range of social and participatory art practice, to gently explore the meeting points of public and private space."
          />

          <div className="max-w-6xl mx-auto my-xl">
            <Gallery
              width={860}
              images={[
                {
                  mediaDetails: {
                    height: 1920,
                    width: 1152,
                  },
                  sourceUrl:
                    "http://garfoo.dreamhosters.com/wp-content/uploads/2020/12/touching_ground_by_batjorge-d7ez2hj.jpg",
                  altText: "",
                },
                {
                  mediaDetails: {
                    height: 1707,
                    width: 2560,
                  },
                  sourceUrl:
                    "http://garfoo.dreamhosters.com/wp-content/uploads/2020/11/IMG_0433-scaled.jpg",
                  altText: "",
                },
              ]}
            />
          </div>
        </Container>
        <Text content="During the development of the work we experienced and shared life in This City’s Centre from new and surprising angles – from the privacy of other people’s homes – through other people’s eyes. Inviting us to think more deeply about how daily life in this … and any British provincial city, can shape us, provoke us, define us." />
      </Layout>
    </>
  );
}
