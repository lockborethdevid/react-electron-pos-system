import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { getCategory } from "../../../../services/product-service";
import { addProduct } from "../../../../services/product-service";
import { useRecoilState, useRecoilValue } from "recoil";
import { tokenAtom } from "../../../../atom/Atom";
function ProductModel(props) {
  const [show, setShow] = useState(false);
  const [dataForm, setDataForm] = useState({ categoryId: "", productName: "", productImage: "", quantity: 0, price: 0 })
  const [optionCategory, setOptionCategory] = useState([])
  const token = useRecoilValue(tokenAtom);
  // categoryId, productName, productImage, quantity, price data needed
  //get it form api
  const getCategories = async () => {
    const result = await getCategory(token)
    setOptionCategory(result.data)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(dataForm).map((keys) => {
      const valueData = dataForm[keys]
      const data = `${keys}`
      formData.append(data, valueData)
    })
    await addProduct(token, formData)
  }

  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column" onSubmit={handleSubmit}>
          <Form.Group
            className="d-flex flex-column mb-3"
            controlId="formBasicSelect"
          >
            <h6>
              Category
            </h6>
            {/* Catgory */}
            <Form.Select required defaultChecked onChange={(e) => setDataForm({ ...dataForm, categoryId: e.currentTarget.value })} onClick={() => getCategories()}>
              {/* <option hidden className="font-size">
                Select Category{" "}
              </option> */}
              {optionCategory ? optionCategory.map((item, idx) => {
                // console.log(item);
                return (
                  <option key={idx} value={item._id} >{item.categoriesName}</option>
                )
              }) : <option>none</option>}

            </Form.Select>
          </Form.Group>
          {/* Product name */}
          <Form.Group className="mb-3" controlId="productName">
            <h6>Product Name</h6>
            <Form.Control required type="text" placeholder="Enter a product name" onChange={e => setDataForm({ ...dataForm, productName: e.target.value })} />
          </Form.Group>

          {/*Price*/}
          <Form.Group className="mb-3" controlId="price">
            <h6>Price</h6>
            <Form.Control required onChange={e => setDataForm({ ...dataForm, price: parseInt(e.target.value) })} type="number" placeholder="Price" />
          </Form.Group>
          {/* Product name */}
          <Form.Group className="mb-3" controlId="stock">
            <h6>Stock</h6>
            <Form.Control required onChange={e => setDataForm({ ...dataForm, quantity: parseInt(e.target.value) })} type="number" placeholder="Qty" />
          </Form.Group>
          {/* Product name */}
          {/* <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
            <Form.Check

              className="stockcheck"
              type="checkbox"

            />
            <label className="mt-1 ms-2"> Disable stock check</label>

          </Form.Group> */}

          <Form.Group className="mb-3" controlId="price">
            <h6>Picture</h6>
            <Form.Control required onChange={e => setDataForm({ ...dataForm, productImage: e.target.files[0] })} type="file" />
          </Form.Group>
          {/* Submit button */}
          <Button variant="primary" type="submit" className="w-100">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ProductModel;