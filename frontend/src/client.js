import React from 'react'
import BrowserRouter from 'react-router-dom/BrowserRouter'
import { hydrate } from 'react-dom'

import { ApolloProvider } from 'react-apollo'
import { ApolloClient, InMemoryCache } from 'apollo-boost'
import { BatchHttpLink } from 'apollo-link-batch-http'

import App from './App'

const client = new ApolloClient({
  link: new BatchHttpLink({ uri: 'http://localhost:8000/gql/' }),
  cache: new InMemoryCache(),
})

hydrate(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
