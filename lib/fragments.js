export const IMAGE_MEDIAITEM = `
fragment Image on MediaItem {
  mediaDetails {
    height
    width
  }
  sourceUrl
  altText
  title
}`;

export const ANNOUNCEMENT_FIELDS = `
  fragment AnnouncementFields on Announcement {
    id
    title
    slug
    content
    featuredImage {
      node {
        ...Image
      }
    }
    announcementFields {
      connected {
        ... on Project {
          id
          title
          slug
        }
      }
      date
      type
    }
  } 
`;

export const PAGE_FIELDS = `

  ${IMAGE_MEDIAITEM}

  fragment PageFields on Page {
    id
    title
    slug
    uri
    content
    featuredImage {
      node {
        ...Image
      }
    }
    pageFields {
      fieldGroupName
      summary
      displayInFooter
      displayOnHomepage
    }
  }
`;

export const HOMEPAGE_FIELDS = `

  ${IMAGE_MEDIAITEM}
  ${ANNOUNCEMENT_FIELDS}

  fragment HomepageFields on Page {
    id
    title
    slug
    uri
    content
    homepageFields {
      fieldGroupName
      testimonials {
        fieldGroupName
        testimonial
      }
      connectedArticle {
        ... on Page {
          id
          title
          content
          slug
          featuredImage {
            node {
              ...Image
            }
          }
          pageFields {
            fieldGroupName
            summary
          }
        }
      }
      connectedAnnouncements {
        ...AnnouncementFields
      }
      connectedProjects {
        ... on Project {
          id
          slug
          title
          featuredImage {
            node {
              ...Image
            }
          }
          projectFields {
            details {
              yearEnd
              yearStart
              location
              projectTypes {
                name
              }
            }
            flexibleContent {
              ... on Project_Projectfields_FlexibleContent_MainImageBlock {
                fieldGroupName
                image {
                  ...Image
                }
              }
            }
          } 
        }
      }
    }
  }
`;

export const PROJECT_FIELDS = `
  ${IMAGE_MEDIAITEM}

  fragment ProjectFields on Project {
    id
    slug
    title
    content
    featuredImage {
      node {
        ...Image
      }
    }
    projectFields {
      details {
        yearEnd
        yearStart
        location
        projectTypes {
          name
        }
      }
      flexibleContent {
        ... on Project_Projectfields_FlexibleContent_MainImageBlock {
          fieldGroupName
          context
          contextPos
          image {
            ...Image
          }
        }
        ... on Project_Projectfields_FlexibleContent_TextBlock {
          fieldGroupName
          text
          makeLarge
        }
        ... on Project_Projectfields_FlexibleContent_PullQuoteBlock {
          fieldGroupName
          quote
          context  
        }
        ... on Project_Projectfields_FlexibleContent_EmbedBlock {
          fieldGroupName
          oembed
        }
      }
    }
  }
`;
