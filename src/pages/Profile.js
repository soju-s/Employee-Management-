import React from "react";
import { Card, Row } from "react-bootstrap";

function Profile() {
  return (
    <div
      style={{ marginBottom: "200px", marginTop: "100px" }}
      className="container "
    >
      <Card className="shadow col-lg-6 mx-auto mt-5">
        <Card.Body>
          <Row>
            <div className="col">
              <div className="profile-image d-flex justify-content-center">
                <img
                  className="rounded-circle border p-1"
                  width={"200px"}
                  height={"200px"}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
                  alt="profile-image"
                />
              </div>
            </div>
          </Row>
          <div className="text-center mt-3">
            <h3>Max Miller</h3>
            <h5>
              <i class="fa-solid fa-envelope text-primary"></i>
              maxmiller@gmail.com
            </h5>
            <h5>
              <i class="fa-solid fa-phone text-danger"></i>9898989898
            </h5>
            <h5>
              <i class="fa-solid fa-venus-mars text-warning"></i>Male
            </h5>
            <h5>
              <i class="fa-solid fa-location-dot text-info"></i>Manhattan
            </h5>
            <h5>
              <i class="fa-solid fa-chart-line text-success"></i>Active
            </h5>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
