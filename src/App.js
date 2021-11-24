import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  createHttpLink,
} from "@apollo/client";
import Home from "./Screens/Home/Home";
import { setContext } from "@apollo/client/link/context";

function App() {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GITHUB_GRAPHAPI_ENDPOINT,
  });

  const authLink = setContext((_, { headers }) => {
    console.log(headers, "E");
    // get the authentication token from local storage if it exists
    const token = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
    console.log(token, "TOK");
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `bearer ${token}` : "",
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
