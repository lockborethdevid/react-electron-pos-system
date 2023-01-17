import React, { useContext, useEffect, useState } from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProductModel from "./Modal/Product/ProductModal";
import CategoryModal from "./Modal/Category/CategoryModal";
import DisplayCategoryModal from "./Modal/Category/DisplayCategoryModal";
import {
  faBarcode,
  faCreditCard,
  faGear,
  faPlus,
  faPowerOff,
  faRightFromBracket,
  faShoppingBasket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { logout } from "../../services/auth-service";

import DiaplayProductModal from "./Modal/Product/DiaplayProductModal";
const NavBar = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("user"));
  });
  const [modalCategoryShow, setCategoryModalShow] = useState(false);
  const [modalProductShow, setProductModalShow] = useState(false);
  const [modalDisplayCategoryShow, setDisplayCategoryShow] = useState(false);
  const [modalDisplayProductShow, setDisplayProductShow] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    try {
      logout(token)
        .then((response) => {
          if (
            response.status === 200 &&
            response.data.message === "successful logout"
          ) {
            localStorage.removeItem("user");
            navigate("/auth");
          }
          console.log(response);
        })
        .catch((error) => {
          console.log("message error: ", error);
        });
    } catch (err) {
      console.log("logout function error message: ", err);
    }
  };
  const testlogout = () => {
    localStorage.removeItem("user");
    navigate("/auth");
  };
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex ~">
              <Nav className="mx-2 mb-3 btn-product">
                <div className="button-list pull-left m-t-15 m-l-10">
                  <div className="btn-group p_one">
                    <div onClick={() => setDisplayProductShow(true)}>
                      <button
                        id="barcodeIcon"
                        type="button"
                        className="btn barIcon waves-effect waves-light"
                      >
                        <FontAwesomeIcon
                          icon={faBarcode}
                          color="#ffff"
                          size={"sm"}
                        />
                      </button>
                      <button
                        id="productModal"
                        type="button"
                        className="btn btn-nav btn-default  waves-effect waves-light"
                      >
                        Products
                      </button>
                    </div>

                    <button
                      id="plusIcon"
                      type="button"
                      className="btn btn-warning  plusIcon waves-effect waves-light"
                      onClick={() => setProductModalShow(true)}
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="#ffff"
                        size={"lg"}
                      />
                    </button>
                  </div>
                </div>
              </Nav>
              <Nav className=" mb-3 btn-category">
                <div class="button-list pull-left m-t-15 m-l-10">
                  <div class="btn-group p_two">
                    <div onClick={() => setDisplayCategoryShow(true)}>
                      <button
                        id="gridIcon"
                        type="button"
                        class="btn  gridIcon btn-warning waves-effect waves-light"
                      >
                        ⋮⋮⋮
                      </button>
                      <button
                        id="categoryModal"
                        type="button"
                        class="btn  btn-nav btn-default waves-effect waves-light"
                      >
                        Categories
                      </button>
                    </div>
                    <button
                      id="plusIcon"
                      type="button"
                      className="btn  plusIcon btn-warning waves-effect waves-light"
                      onClick={() => setCategoryModalShow(true)}
                    >
                      <FontAwesomeIcon
                        icon={faPlus}
                        color="#ffff"
                        size={"lg"}
                      />
                    </button>
                  </div>
                </div>
              </Nav>

              <Nav className="mx-2 mb-3">
                <div className="button-list pull-left m-t-15 m-l-10">
                  <button className="btn tapIcon">
                    <FontAwesomeIcon
                      icon={faShoppingBasket}
                      color="#ffff"
                      size={"sm"}
                    />
                  </button>
                  <button
                    id="openTab"
                    type="button"
                    className="btn  btn-nav btn-info waves-effect waves-light"
                  >
                    Open Tabs
                  </button>
                </div>
              </Nav>
              <Nav className="mb-3">
                <div className="button-list pull-left m-t-15 m-l-10 d-flex">
                  <button className="btn userIcon">
                    <FontAwesomeIcon icon={faUser} color="#ffff" size={"sm"} />
                  </button>

                  <button
                    id="customzerOrder"
                    type="button"
                    onClick="$(this).getCustomerOrders()"
                    className=" btn-nav btn btn-info waves-effect waves-light "
                  >
                    Customer Orders
                  </button>
                </div>
              </Nav>
            </div>
            <div className="d-flex">
              <Nav className="mx-1 mb-3 btn-product">
                <div className="button-list pull-left m-t-15 m-l-10">
                  <div className="btn-group p_one">
                    <button
                      id="setting"
                      type="button"
                      className="btn  btn-nav btn-warning waves-effect waves-light"
                    >
                      <FontAwesomeIcon
                        icon={faGear}
                        color="#ffff"
                        size={"sm"}
                      />
                    </button>
                  </div>
                </div>
              </Nav>

              <Nav className="mx-1 mb-3">
                <div className="button-list pull-left m-t-15 m-l-10">
                  <button className="btn creditIcon waves-effect waves-light">
                    <FontAwesomeIcon
                      icon={faCreditCard}
                      color="#ffff"
                      size={"sm"}
                    />
                  </button>
                  <button
                    id="transaction"
                    type="button"
                    className="btn  btn-nav waves-effect waves-light"
                  >
                    Transactions
                  </button>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div className="button-list pull-left m-t-15 m-l-10">
                  <button className="btn userIcons">
                    <FontAwesomeIcon icon={faUser} color="#ffff" size={"sm"} />
                  </button>
                  <button
                    id="user"
                    type="button"
                    className="btn   btn-nav waves-effect waves-light"
                  >
                    Users
                  </button>
                  <button
                    id="plusUser"
                    type="button"
                    className="btn plusUserIcon   btn-nav waves-effect waves-light"
                  >
                    <FontAwesomeIcon
                      icon={faPlus}
                      color="#808080"
                      size={"lg"}
                    />
                  </button>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div className="button-list pull-left m-t-15 m-l-10">
                  <button className="btn user-btn">
                    <FontAwesomeIcon
                      icon={faUser}
                      color="#808080"
                      size={"sm"}
                    />
                  </button>
                  <button
                    id="username"
                    type="button"
                    className="btn text-secondary  btn-nav waves-effect waves-light"
                  >
                    Username
                  </button>
                </div>
              </Nav>
              <Nav className="mb-3">
                <div className="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="exit"
                    type="button"
                    className="btn btn-warning  btn-nav waves-effect waves-light"
                    onClick={() => handleLogout()}
                  >
                    <FontAwesomeIcon
                      icon={faRightFromBracket}
                      color="#ffff"
                      size={"sm"}
                    />
                  </button>
                </div>
              </Nav>
              <Nav className="mx-1 mb-3">
                <div className="button-list pull-left m-t-15 m-l-10">
                  <button
                    id="close"
                    type="button"
                    className="btn btn-danger  btn-nav waves-effect waves-light"
                    onClick={() => testlogout()}
                  >
                    <FontAwesomeIcon
                      icon={faPowerOff}
                      color="#ffff"
                      size={"sm"}
                    />
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
      <DisplayCategoryModal
        show={modalDisplayCategoryShow}
        onHide={() => setDisplayCategoryShow(false)}
      />
      <DiaplayProductModal
        show={modalDisplayProductShow}
        onHide={() => setDisplayProductShow(false)}
      />
    </>
  );
};

export default NavBar;
