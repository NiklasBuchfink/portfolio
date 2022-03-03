import gql from 'graphql-tag'

export const projectQuery = gql`
  query projectQuery {
    projects {
      id
      link
      letter
      image {
        alternativeText
        formats
      }
      color
      title
      subtitle
      categories {
        id
        title
      }
      startpage
      order
    }
  }
`
export const startpageQuery = gql`
  query startpageQuery {
    startpage {
      heroimage {
        alternativeText
        formats
      }
    }
  }
`

export const aboutpageQuery = gql`
  query aboutpageQuery {
    aboutpage {
      headerparagraph
      headerimage {
        alternativeText
        formats
      }
      HowIWork {
        ... on ComponentAboutPageHowiwork {
          id
          subtitle
          text
        }
      }
      DesignTools {
        ... on ComponentAboutPageDesignTools {
          id
          name
        }
      }
      ProgrammingTools {
        ... on ComponentAboutPageProgrammingTools {
          id
          name
        }
      }
      WorkExperience {
        ... on ComponentAboutPageWorkExperience {
          id
          title
          text
          linktext
          linkadress
          date
        }
      }
      Education {
        ... on ComponentAboutPageEducation {
          id
          title
          text
          linktext
          linkadress
          date
        }
      }
      Volunteering {
        ... on ComponentAboutPageVolunteering {
          id
          title
          text
          linktext
          linkadress
          date
        }
      }
      FreeTime {
        ... on ComponentAboutPageFreeTime {
          id
          image {
            formats
            alternativeText
          }
          title
          text
          linkadress
          order
        }
      }
    }
  }
`

export const legalpageQuery = gql`
  query legalpageQuery {
    legalpage {
      content
    }
  }
`

export const privacypageQuery = gql`
  query privacypageQuery {
    privacypage {
      content
    }
  }
`
