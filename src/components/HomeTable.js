import React from "react";
import { Card, Dropdown, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeTable() {
  return (
    <>
      <div className="container mt-5">
        <Row>
          <div className="col">
            <Card className="shadow">
              <Table className="align-items-center" responsive="sm">
                <thead className="thead-danger">
                  <tr className="table-dark">
                    <th>No</th>
                    <th>Full Name</th>
                    <th>E-mail</th>
                    <th>Mobile</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Max Miller</td>
                    <td>maxmiller@gmail.com</td>
                    <td>1234578956</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-status">
                          Active
                        </Dropdown.Toggle>
                      </Dropdown>
                    </td>
                    <td>
                      <img
                        className="rounded-circle"
                        width={"50px"}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png"
                        alt="profile-image"
                      />
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-action">
                          <i class="fa-solid fa-ellipsis-vertical fa-beat"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/profile/1`}
                            >
                              {" "}
                              <i class="fa-solid fa-eye text-success"></i>
                              <span className="ms-2 fs-5">View</span>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            <Link
                              style={{ textDecoration: "none" }}
                              to={`/edit-profile/1`}
                            >
                              {" "}
                              <i class="fa-solid fa-pen text-warning"></i>
                              <span className="ms-2 fs-5">Edit</span>
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <i class="fa-solid fa-trash text-danger"></i>
                            <span className="ms-2 fs-5"> Delete</span>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
}

export default HomeTable;
