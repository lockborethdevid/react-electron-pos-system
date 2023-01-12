import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EditCategoryModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Edit Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="d-flex flex-column" >
                    {/* Category name */}
                    <Form.Group className="mb-3" controlId="categoryName">
                        <h6>Name</h6>
                        <Form.Control
                            type="text"
                            placeholder="Enter a category name"

                        />
                    </Form.Group>

                    {/* Submit button */}
                    <div className="d-flex flex-row">
                        <Button variant="primary" type="submit" className="w-100">
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
