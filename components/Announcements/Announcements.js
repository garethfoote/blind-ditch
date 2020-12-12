import Link from "next/link";

export const AnnouncementLink = ({ details, slug, title }) => {
  return (
    <article>
      <div>
        {details.type} {details.date && " | "}
        {details.date && <time dateTime={details.date}>{details.date}</time>}
      </div>

      {details.connected ? (
        <Link
          as={`/projects/${details.connected.slug}`}
          href="/projects/[slug]"
        >
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
      ) : (
        <Link as={`/announcements/${slug}`} href="/announcements/[slug]">
          <a
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </Link>
      )}
    </article>
  );
};
