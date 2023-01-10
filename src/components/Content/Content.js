import React, { useEffect, useState } from "react";
import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCategory } from "../../services/product-service";

const Content = () => {
  useEffect(() => {
    getCategory().then((response) => {
      console.log("All categories", response);
    });
  }, []);
  return (
    <div className="container-test m-4">
      <div id="pos-view">
        <div className="row">
          {/* --- Order Info --- */}
          <div className="col-md-4">
            <div className="card-box">
              <p>order</p>
            </div>
          </div>
          {/* --- Menu Info --- */}
          <div className="col-md-8">
            <div className="card-box p-3">
              <div className="row">
                <div className="col-md-5">
                  <form>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search all product here..."
                    />
                    {/* <button type="submit">
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                    </button> */}
                  </form>
                </div>
                <div className="col-md-7">
                  <div id="menulist" className="categories float-end">
                    <button className="btn btn-ct mx-2">All</button>
                    <button className="btn btn-ct  mx-2">Foods</button>
                    <button className="btn btn-ct  mx-2">Drinks</button>
                    <button className="btn btn-ct  mx-2">Desserts</button>
                    <button className="btn btn-ct mx-2">All</button>
                    <button className="btn btn-ct mx-2">All</button>
                    <button className="btn btn-ct  mx-2">Foods</button>
                    <button className="btn btn-ct  mx-2">Drinks</button>
                    <button className="btn btn-ct  mx-2">Desserts</button>
                    <button className="btn btn-ct mx-2">All</button>
                    <button className="btn btn-ct  mx-2">Foods</button>
                    <button className="btn btn-ct  mx-2">Drinks</button>
                    <button className="btn btn-ct  mx-2">Desserts</button>
                  </div>
                </div>
                <hr className="my-3" />
                <div className="row mx-4">
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>

                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                  <div class="card col-2">
                    <div class="image">
                      <img src="https://food-guide.canada.ca/themes/custom/wxtsub_bootstrap/images/food_guide_visual_en.png" />
                    </div>
                    <div class="title">
                      <h6>Coca</h6>
                    </div>
                    <div className="col des">
                      <p>
                        STOCK 0 <br />
                        asdasd8.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
