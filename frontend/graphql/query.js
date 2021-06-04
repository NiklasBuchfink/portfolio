import gql from 'graphql-tag'

export const projectQuery = gql`
  query projectQuery {
    projects{
      id
      link
      letter
      image {alternativeText, formats}
      color
      title
      subtitle
      categories {id, title}
      startpage
    }
  }
`
export const startpageQuery = gql`
  query startpageQuery {
    startpage{
      heroimage {alternativeText, formats}
    }
  }
`

export const aboutpageQuery = gql`
  query aboutpageQuery{
    aboutpage{
      headerparagraph
      headerimage{alternativeText, formats}
    }
  }
`