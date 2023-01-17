import React, { useContext, useEffect, useState } from "react";
import "./Content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCategory } from "../../services/product-service";
import { TokenContext } from "../../pages/Auth";
import Order from "../Order/Orde";

const Content = () => {
  const [categories, setCategories] = useState([]);
  const token = window.localStorage.getItem("user");

  // api call to get all categories
  useEffect(() => {
    getCategory(token).then((response) => {
      console.log("All categories", response);
      setCategories(response.data);
      console.log("array of objects", categories);
    });
  }, []);
  return (
    <div className="container-test m-4">
      <div id="pos-view">
        <div className="row">
          {/* --- Order Info --- */}
          <div className="col-md-4">
            <div className="card-box mx-auto p-auto">
            <Order/>
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
                  <div id="menulist" className="categories">
                    <button className="btn btn-ct  mx-2">All</button>
                    {categories.map((category, index) => (
                      <button className="btn btn-ct  mx-2" id={index}>
                        {category.categoriesName}
                      </button>
                    ))}

                    {/* <button className="btn btn-ct  mx-2">Foods</button>
                    <button className="btn btn-ct  mx-2">Drinks</button>
                    <button className="btn btn-ct  mx-2">Desserts</button>
                    <button className="btn btn-ct mx-2">All</button>
                    <button className="btn btn-ct mx-2">All</button> */}
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
