import React from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductModel from "./Modal/ProductModal";
import CategoryModal from "./Modal/CategoryModal";
import {
  faGear,
  faPlus,
  faPowerOff,
  faRightFromBracket,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [modalCategoryShow, setCategoryModalShow] = React.useState(false);
  const [modalProductShow, setProductModalShow] = React.useState(false);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav ">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex ~">
              <Nav className="mx-3 mb-3 btn-product">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <div class="btn-group p_one">
                    <button 
        
                      id="productModal"
                      data-toggle="modal"
                      data-target="#Products"
                      type="button"
                      class="btn btn-default btn-sm waves-effect waves-light"
                    >
                      <span class="btn-label">
                        <i class=" 	glyphicon glyphicon-barcode"></i>{" "}
                      </span>{" "}
                      Products
                    </button>
                    <button
                      id="newProductModal"
                      type="button"
                      class="btn btn-warning  btn-sm waves-effect waves-light"
                      onClick={() => setProductModalShow(true)}
                  
                    >
                      <FontAwesomeIcon  icon={faPlus} color="#ffff" size={"lg"} />
                    </button>
                  </div>
                </div>
              </Nav>
              <Nav className=" mb-3 btn-category">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <div class="btn-group p_two">
                    <button
                      id="categoryModal"
                      type="button"
                      class="btn  btn-sm btn-default waves-effect waves-light"
                    >
                      <span class="btn-label">
                        <i class="glyphicon glyphicon-th"></i>{" "}
                      </span>{" "}
                      Categories
                    </button>
                    <button
                      id="newCategoryModal"
                      type="button"
                      class="btn  btn-sm btn-warning waves-effect waves-light"
                      onClick={() => setCategoryModalShow(true)}
                    >
                      <FontAwesomeIcon icon={faPlus} color="#ffff" size={"lg"} />
                    </button>
                  </div>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="openTab"
                    type="button"
                    class="btn  btn-sm btn-info waves-effect waves-light"
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={faShoppingBasket}
                        color="#ffff"
                        size={"lg"}
                      />
                    </span>{" "}
                    Open Tabs
                  </button>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="customzerOrder"
                    type="button"
                    onclick="$(this).getCustomerOrders()"
                    class=" btn-sm btn btn-info waves-effect waves-light"
                  >
                    <span class="btn-label">
                      <FontAwesomeIcon icon={faUser} color="#ffff" size={"lg"} />
                    </span>{" "}
                    Customer Orders
                  </button>
                </div>
              </Nav>
            </div>
            <div className="d-flex">
              <Nav className="mx-1 mb-3 btn-product">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <div class="btn-group p_one">
                    <button
                      id="setting"
                      type="button"
                      class="btn  btn-sm btn-warning waves-effect waves-light"
                    >
                      <FontAwesomeIcon icon={faGear} color="#ffff" size={"lg"} />
                    </button>
                  </div>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="openTab"
                    type="button"
                    class="btn btn-info  btn-sm waves-effect waves-light"
                  >
                    <span>
                      <FontAwesomeIcon
                        icon={faShoppingBasket}
                        color="#ffff"
                        size={"lg"}
                      />
                    </span>{" "}
                    Transactions
                  </button>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="openTab"
                    type="button"
                    class="btn btn-info  btn-sm waves-effect waves-light"
                  >
                    <span>
                      <FontAwesomeIcon icon={faUser} color="#ffff" size={"lg"} />
                    </span>{" "}
                    Users
                  </button>
                  <button
                    id="addUser"
                    type="button"
                    class="btn btn-secondary  btn-sm waves-effect waves-light"
                  >
                    <FontAwesomeIcon icon={faPlus} color="#ffff" size={"lg"} />
                  </button>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="openTab"
                    type="button"
                    class="btn btn-info  btn-sm waves-effect waves-light"
                  >
                    <span>
                      <FontAwesomeIcon icon={faUser} color="#ffff" size={"lg"} />
                    </span>{" "}
                    Username
                  </button>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="openTab"
                    type="button"
                    class="btn btn-warning  btn-sm waves-effect waves-light"
                  >
                    <FontAwesomeIcon icon={faRightFromBracket} color="#ffff" size={"lg"} />
                  </button>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="openTab"
                    type="button"
                    class="btn btn-danger  btn-sm waves-effect waves-light"
                  >
                    <FontAwesomeIcon icon={faPowerOff} color="#ffff" size={"lg"} />
                  </button>
                </div>
              </Nav>
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>

      {/* Product modal */}
      <ProductModel
        show={modalProductShow}
        onHide={() => setProductModalShow(false)}
      />
      {/* Category modal */}
      <CategoryModal
        show={modalCategoryShow}
        onHide={() => setCategoryModalShow(false)}
      />
    </>
  );
};

export default NavBar;
