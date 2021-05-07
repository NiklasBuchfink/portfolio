import gql from 'graphql-tag'

export const projectQuery = gql`
  query projectQuery {
    projects{
      id
      letter
      image {url, alternativeText}
      color
      title
      subtitle
      categories {id, title}
      startpage
    }
  }
`
