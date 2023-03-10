import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { addCategory } from "../../../../services/product-service";
import { useRecoilValue } from "recoil";
import { tokenAtom } from "../../../../atom/Atom";

function CategoryModal(props) {
  const [category, setCategory] = useState("");
  const token = useRecoilValue(tokenAtom);

  // Add Category
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      addCategory(category, token).then((response) => {
        if (response.status === 200) {
          window.location.reload();
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Category</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column" onSubmit={handleAddCategory}>
          {/* Category name */}
          <Form.Group className="mb-3" controlId="categoryName">
            <h6>Name</h6>
            <Form.Control
              type="text"
              placeholder="Enter a category name"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
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

export default CategoryModal;
