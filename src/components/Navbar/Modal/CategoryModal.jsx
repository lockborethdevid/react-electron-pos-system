import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import Form from "react-bootstrap/Form";

function CategoryModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="d-flex">
                    {/* Category name */}
                    <Form.Group className="mb-3 w-100 " controlId="categoryName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter a category name" />
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