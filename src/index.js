import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { split } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import App from './components/App'

// Paste your own project ID here
const projectId = `__YOUR_PROJECT_ID__`

const httpLink = createHttpLink({ uri: `https://api.graph.cool/simple/v1/${projectId}` })

const wsLink = new WebSocketLink({
  uri: `wss://subscriptions.graph.cool/v1/${projectId}`,
  options: {
    reconnect: true
  }
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

const client = new ApolloClient({
  link,
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
})
ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
