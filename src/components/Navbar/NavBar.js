import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="none" expand="lg" class="navbar">
        <div className="row">
          <div class="col-sm-12">
            <div class="button-list pull-left m-t-15 m-l-10">
              <div class="btn-group p_one">
                <button
                  id="productModal"
                  data-toggle="modal"
                  data-target="#Products"
                  type="button"
                  class="btn btn-default waves-effect waves-light"
                >
                  <span class="btn-label">
                    <i class=" 	glyphicon glyphicon-barcode"></i>{" "}
                  </span>{" "}
                  Products
                </button>
                <button
                  id="newProductModal"
                  data-toggle="modal"
                  data-target="#newProduct"
                  type="button"
                  class="btn btn-warning waves-effect waves-light"
                >
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <div class="btn-group p_two">
                <button
                  id="categoryModal"
                  data-toggle="modal"
                  data-target="#Categories"
                  type="button"
                  class="btn btn-default waves-effect waves-light"
                >
                  <span class="btn-label">
                    <i class="glyphicon glyphicon-th"></i>{" "}
                  </span>{" "}
                  Categories
                </button>
                <button
                  id="newCategoryModal"
                  data-toggle="modal"
                  data-target="#newCategory"
                  type="button"
                  class="btn btn-warning waves-effect waves-light"
                >
                  <i class="fa fa-plus"></i>
                </button>
              </div>

              <button
                id="viewRefOrders"
                data-toggle="modal"
                data-target="#holdOrdersModal"
                type="button"
                class="btn btn-info waves-effect waves-light"
              >
                <span class="btn-label">
                  <i class="fa fa-shopping-basket"></i>{" "}
                </span>{" "}
                Open Tabs
              </button>

              <button
                id="viewCustomerOrders"
                data-toggle="modal"
                data-target="#customerModal"
                type="button"
                onclick="$(this).getCustomerOrders()"
                class="btn btn-info waves-effect waves-light"
              >
                <span class="btn-label">
                <FontAwesomeIcon icon={"fa-solid fa-user" }/>
                </span>{" "}
                Customer Orders
              </button>
            </div>
          </div>
        </div>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
