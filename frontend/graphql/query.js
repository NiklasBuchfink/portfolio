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
      id
      heroimage {alternativeText, formats}
    }
  }
`
