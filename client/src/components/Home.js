import React from "react";
import Navigations from "./Navbar";
import { Container } from 'react-bootstrap';
import Footer from "./Footer";
import Balance from "./Balance";
import Transactions from "./Transactions";
import Add from "./Add";
import Report from "./Report";
import { GlobalProvider } from "../context/GlobalState";
import Category from "./Categories";
const Home = () => {
  return (
    <div>
      <Navigations />
      <section className="section">
      <GlobalProvider>
      <Container className="my-5 mx-auto">
        <h1 className="mb-4">Finance Tracker</h1>
        <Balance />
        <div className="d-lg-flex justify-content-around flex-fill bd-highlight">
        <Category />
        <Add />
        </div>
        <br></br>
        <Transactions />
      </Container>
    </GlobalProvider>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
