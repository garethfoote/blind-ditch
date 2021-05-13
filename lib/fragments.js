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
          projectFields {
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
    }
    speakerFields {
      fieldGroupName
      members {
        date
        name
        profile
        role
        projects {
          ... on Project {
            id
            slug
            title
          }
        }
        image {
          ...Image
        }
      }
    }
  }
`;

export const DOCUMENTSPAGE_FIELDS = `

fragment DocumentsPageFields on Page {
  documentsPageFields {
    fieldGroupName
    documentsPageIntroText
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
      ourWorkIntroText
      testimonials {
        fieldGroupName
        testimonial
        context
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
              locationShort
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
        locationShort
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
        ... on Project_Projectfields_FlexibleContent_GallerySingleBlock {
          fieldGroupName
          image {
            ...Image
          }
        }
        ... on Project_Projectfields_FlexibleContent_SectionTitleBlock {
          fieldGroupName
          text
        }
        ... on Project_Projectfields_FlexibleContent_GalleryTwoBlock {
          fieldGroupName
          images {
            ...Image
          }
        }
        ... on Project_Projectfields_FlexibleContent_Gallery {
          fieldGroupName
          images {
            ...Image
          }
        }
      }
    }
  }
`;

export const DOCUMENTS_FIELDS = `
  ${IMAGE_MEDIAITEM}

  fragment DocumentFields on Doc {
    title
    id
    documentsFields {
      date
      project {
        ... on Project {
          id
          slug
          title
        }
      }
      type
      video
      sound
      fileDownload {
        fileSize
        title
        mediaItemUrl
      }
      image {
        ...Image
      }
    }
  }
`;
