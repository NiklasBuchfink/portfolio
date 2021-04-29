import gql from 'graphql-tag'

export const projectsQuery = gql`
  query projectsQuery {
    projects {
      title
      id
    }
  }
`
