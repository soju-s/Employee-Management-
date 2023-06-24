import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import HomeTable from "../components/HomeTable";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // to redirect to register page when add btn is clicked

  const addUser = () => {
    // navigate to register

    navigate("/register");
  };

  return (
    <div className="container mt-5">
      <div className="first-div">
        <div className="search-add d-flex justify-content-between">
          <div className="search col-md-4">
            <Form className="d-flex">
              <Form.Control
                style={{ width: "300px" }}
                required
                type="text"
                placeholder="Search Employee Name"
              />
              <Button className="ms-2" variant="success">
                Search
              </Button>
            </Form>
          </div>
          <div className="add">
            <button onClick={addUser} className="btn btn-warning">
              <i className="fa-solid fa-user-plus fa-fade"></i> Add
            </button>
          </div>
        </div>
      </div>
      <div className="sec-div">
        <HomeTable />
      </div>
    </div>
  );
}

export default Home;
