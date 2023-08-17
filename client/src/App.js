import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// Contexts
import { DialogsProvider } from "./utils/contexts/DialogsContext";
// AccountDialogs
import DialogsContainer from "./components/AccountDialogs";

import Home from "./pages/Home";
import Shelter from "./pages/Shelter";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Success from "./pages/Success";
import RegisterShelter from "./pages/RegisterShelter";
import Shelters from "./pages/Shelters";
import Dashboard from "./pages/Dashboard";
import ShelterProfile from "./pages/ShelterProfile";
import Auth from "./utils/auth";

// Create an HTTP link to connect to the GraphQL server -> The link is configured to send requests to the "/graphql" endpoint.
// The "uri" option specifies the URL to which the requests will be sent.
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Get the token from the "localStorage" with the key "id_token".
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");

  // Modifies the headers of each outgoing HTTP request by adding an "authorization" header with the authentication token to authenticate the user with the GraphQL server.
  // This function is provided to Apollo Client through "setContext" to customize the headers before sending a request to the GraphQL server.
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// All pages inside ApolloProvider can use client to make queries "localhost:3001/graphql"
function App() {
  const pages = [
    {
      name: "Home",
      component: Home,
      path: "/",
    },
    {
      name: "Shelters",
      component: Shelters,
      path: "/Shelters",
    },
    {
      name: "",
      component: Success,
      path: "/success",
    },
    {
      name: "Dashboard",
      component: Dashboard,
      path: "/dashboard",
    },
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <ApolloProvider client={client}>
      {/* Router, Routes and Route follow the documentation from react-router-dom */}
      <Router>
        <DialogsProvider>
          {/* <Navbar /> */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
            }}
          >
            <Header>
              <Nav
                pages={pages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shelters" element={<Shelters />} />
              <Route path="/register-shelter" element={<RegisterShelter />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/success" element={<Success />} />
              {Auth.loggedIn() && Auth.getProfile().data.role === "shelter" && (
                <Route path="/shelter-profile" element={<ShelterProfile />} />
              )}
              <Route path="/shelters/:id" element={<Shelter />} />
              <Route
                path="*"
                element={<h1 className="display-2">Wrong page!</h1>}
              />
              <Route path="/register-shelter" element={<RegisterShelter />} />
            </Routes>
            <Footer />
          </div>
          <DialogsContainer />
        </DialogsProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
