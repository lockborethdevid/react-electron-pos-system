import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  editCategory,
  getCategory,
} from "../../../../services/product-service";
import { useRecoilValue, useRecoilState } from "recoil";
import { tokenAtom, categoriesAtom } from "../../../../atom/Atom";
import { useEffect, useState } from "react";

function EditCategoryModal(props) {
  const token = useRecoilValue(tokenAtom);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useRecoilState(categoriesAtom);
  const handleEditCategory = () => {
    try {
      editCategory(token, props.categoryId, category).then(async (response) => {
        // console.log("Edit response ", response);
        if (response.status === 200) {
          const response = await getCategory(token);
          setCategories(response.data);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit Category
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="d-flex flex-column">
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
          <div className="d-flex flex-row">
            <Button
              variant="primary"
              className="w-100"
              onClick={(e) => handleEditCategory()}
            >
              Save
            </Button>
            <Button variant="danger" type="submit" className="w-100">
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default EditCategoryModal;
