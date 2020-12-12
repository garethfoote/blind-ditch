export const IMAGE_MEDIAITEM = `
fragment Image on MediaItem {
  mediaDetails {
    height
    width
  }
  sourceUrl
}`;

export const ANNOUNCEMENT_FIELDS = `
  fragment AnnouncementFields on Announcement {
    id
    title
    slug
    content
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
          image {
            ...Image
          }
        }
        ... on Project_Projectfields_FlexibleContent_BodyImageBlock {
          fieldGroupName
          context
          image {
            ...Image
          }
        }
        ... on Project_Projectfields_FlexibleContent_TextBlock {
          fieldGroupName
          text
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
