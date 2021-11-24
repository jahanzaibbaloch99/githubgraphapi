import logo from "./logo.svg";
import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from "@apollo/client";
import Home from "./Screens/Home/Home";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.github.com/graphql",
    credentials: "same-origin",
    headers: {
      Authorization: `Bearer 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`,
    },
  }),
  cache: new InMemoryCache(),
});
console.log(client, "");
function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}

export default App;
