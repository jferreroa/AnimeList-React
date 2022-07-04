import React from 'react';

import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

import { Contenedor } from './Components/Contenedor';

const client = new ApolloClient({
  uri: 'https://graphql.anilist.co',
  cache: new InMemoryCache()
});


function App() {
  return (

    <ApolloProvider client={client}>
      <Contenedor />
    </ApolloProvider>

  );
}

export default App;
