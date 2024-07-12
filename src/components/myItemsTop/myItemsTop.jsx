import React from "react";
import HeaderComponent from "../../components/Header/HeaderComponent";
import Form from "react-bootstrap/Form";
import Footer from "../../components/footer/Footer";
import "./myItemsTop.css";

const MyItemsTop = () => {
  return (
    <>
      <div>
        <HeaderComponent />
      </div>
      <div className="myItems-container">
        <h1 className="h1-top">MEUS PEDIDOS</h1>
        <div className="box-top">
          <div className="top">
            <input type="text" className="input-top" />
          </div>
          <div className="select-top">
            <Form.Select
              aria-label="Default select example"
              className="select-calendary"
            >
              <option>Todos</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Select
              aria-label="Default select example"
              className="select-filter"
            >
              <option>Todos</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyItemsTop;
