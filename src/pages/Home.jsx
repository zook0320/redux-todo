import React from "react";
import Header from "../uiComponent/Header";
import Layout from "../uiComponent/Layout"; 
import Form from "../todosComponent/Form";
import List from "../todosComponent/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
