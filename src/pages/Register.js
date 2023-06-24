import React from "react";
import { Card, Form, Row } from "react-bootstrap";

function Register() {
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center mt-3">Register Employee Details</h1>
        <Card className="shadow mt-5 p-3">
          <div className="text-center">
            <img
              className="rounded-circle border p-1"
              width={"100px"}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
              alt="profile-image"
            />
          </div>
          <Form>
            <Row>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control required type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control required type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Mobile</Form.Label>
                <Form.Control required type="number" placeholder="Mobile" />
              </Form.Group>
              <Form.Group className="col-lg-6 mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Check type="radio" label={'Male'} name="gender" value={'Male'}/>
                <Form.Check type="radio" label={'Female'} name="gender" value={'Female'}/>
               
              </Form.Group>
             
            </Row>
          </Form>
        </Card>
      </div>
    </div>
  );
}

export default Register;
