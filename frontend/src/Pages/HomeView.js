import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
  {
    allDishes {
      id
      title
      description
    }
  }
`

class HomeView extends React.Component {
  render() {
    console.log(this.props)
    return <div>HomeView</div>
  }
}

HomeView = graphql(query)(HomeView)
export default HomeView
