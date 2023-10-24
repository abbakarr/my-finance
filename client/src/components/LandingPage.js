import React from "react";
import Navigation from "./Navbar";
import Footer from "./Footer";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from "react-bootstrap";
import Login from "./Login";

const Landingpage = () => {
  return (
    <div>
      <Navigation />
      <section className="bg-grey text-dark p-5 text-center text-sm-start section">
        <div className="Container">
          <div className="d-sm-flex justify-content-between">
            <div className="bg">
              <h1>
                Track all your
                <span className="text-warning"> flows of Finances</span>
              </h1>
              <p className="lead my-2">
                Register to track all your personal or business expenses. Know
                where your money is going{" "}
              </p>
              <Button className="btn btn-primary btn-lg bg-dark">
  <Link to="/login" className="text-white text-decoration-none">
    Try for free
  </Link>
</Button>
            </div>
          </div>
        </div><br></br>
        <div className="products">

        <div className="product-card">
            <h3>Financial Management</h3>
            <div className="info-group">
                <p>(234) 7037434973</p>
            </div>
            <div className="info-group">
                <p>fin@finance.com</p>
            </div>
        </div>
        
        <div className="product-card">
            <h3>Tax Management</h3>
            <div className="info-group">
                <p>(234) 555-2345</p>
            </div>
            <div className="info-group">
                <p>tax@finance.com</p>
            </div>
        </div>
        
        <div className="product-card">
            <h3>Audit Compliance</h3>
            <div className="info-group">
                <p>(234) 555-4567</p>
            </div>
            <div className="info-group">
                <p>admin@finance.com</p>
            </div>
        </div>
        
        <div className="product-card">
            <h3>Expense Analytics</h3>
            <div className="info-group">
                <p>(234) 89623456</p>
            </div>
            <div className="info-group">
                <p>audit@finance.com</p>
            </div>
        </div>
        
    </div>

      </section>
      <Footer />
    </div>
  );
};

export default Landingpage;
