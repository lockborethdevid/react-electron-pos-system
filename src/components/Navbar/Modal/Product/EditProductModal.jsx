import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function EditProductModal(props) {
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
                <Form className="d-flex flex-column">
                    <Form.Group
                        className="d-flex flex-column mb-3"
                        controlId="formBasicEmail"
                    >
                        <h6>
                            Category
                        </h6>
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
                        <h6>Product Name</h6>
                        <Form.Control type="text" placeholder="Enter a product name" />
                    </Form.Group>

                    {/*Price*/}
                    <Form.Group className="mb-3" controlId="price">
                        <h6>Price</h6>
                        <Form.Control type="text" placeholder="Price" />
                    </Form.Group>
                    {/* Product name */}
                    <Form.Group className="mb-3" controlId="stock">
                        <h6>Stock</h6>
                        <Form.Control type="text" placeholder="Price" />
                    </Form.Group>
                    {/* Product name */}
                    <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                        <Form.Check

                            className="stockcheck"
                            type="checkbox"

                        />
                        <label className="mt-1 ms-2"> Disable stock check</label>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="price">
                        <h6>Picture</h6>
                        <Form.Control type="file" />
                    </Form.Group>
                    {/* Submit button */}
                    <div className="d-flex">
                        <Button variant="primary" type="submit" className="w-100">
                            Save
                        </Button>
                        <Button variant="danger mx-2" style={{width:30}} type="submit" className="w-100">
                            Cancel
                        </Button>

                    </div>

                </Form>
            </Modal.Body>
        </Modal>
    );
}

export default EditProductModal;
