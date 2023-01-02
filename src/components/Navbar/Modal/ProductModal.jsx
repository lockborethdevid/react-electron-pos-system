import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";

function ProductModel(props) {
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
          <Form className="d-flex">
            <Form.Group
              className="d-flex flex-column mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label className="font-weight-bold d-flex justify-content-start">
                Category
              </Form.Label>
              {/* Catgory */}
              <Form.Select defaultChecked>
                <option hidden className="font-size">
                  Select Category{" "}
                </option>
                <option>category 1</option>
                <option>category 2</option>
                <option>category 3</option>
              </Form.Select>
            </Form.Group>
            {/* Product name */}
            <Form.Group className="mb-3" controlId="productName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter a product name" />
            </Form.Group>
  
            {/*Price*/}
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" placeholder="Price" />
            </Form.Group>
            {/* Product name */}
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" placeholder="Price" />
            </Form.Group>
            {/* Product name */}
            <Form.Group className="mb-3 " controlId="formBasicCheckbox">
              <Form.Check
                className="stockcheck"
                type="checkbox"
                label="Disable stock check"
              />
            </Form.Group>
  
            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Picture</Form.Label>
              <Form.Control type="file" />
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