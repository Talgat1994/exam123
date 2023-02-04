import "./App.css";
import Reducer from "./components/Reducer";
import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import ThemeProvider from "./components/providers/ThemeProvider";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Layout>
          <Header />
          <Reducer />
        </Layout>
      </ThemeProvider>
    </div>
  );
};

export default App;
