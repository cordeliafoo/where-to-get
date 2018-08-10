import React from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const query = gql`
{
    allDishes {
      id
    }

}

`

class HomeView extends React.Component {

  render() {
    // const { data } = this.props
    // console.log(data)

    return <div>HomeView</div>
  }
}

HomeView = graphql(query)(HomeView)
export default HomeView
