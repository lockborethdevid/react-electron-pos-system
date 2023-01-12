
import Modal from "react-bootstrap/Modal";
import React from "react";
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import EditProductModal from "./EditProductModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";

function DiaplayProductModal(props) {
    const [modalEditCategoryShow, setEditCategoryShow] = React.useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-around" >
                        <div></div>
                        <div className="d-flex mb-3 align-items-center">
                            <h6 className="mx-2" variant="primary">Search:</h6>
                            <Col xs={12} className="">
                                <input type="text" id="search" className="form-control" placeholder="Search category by name or sku" />
                            </Col>
                        </div>
                    </div>
                    <table className="table table-bordered" id="categoryList">
                        <thead>
                            <tr>
                                <th>Barcode</th>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <div className="d-flex" style={{
                                        width: 80,
                                        height: 60,
                                        maxHeight: 80,
                                        maxWidth: 120

                                    }}>
                                        <img style={{ objectFit: `contain` }} src="https://thumbs.dreamstime.com/b/barcode-vector-icon-bar-code-web-barcode-vector-icon-bar-code-web-white-background-169690153.jpg" alt="" />
                                    </div>
                                </th>
                                <th>
                                    <div className="d-flex justify-content-center" style={{
                                  
                                        height: 50,
                                        maxHeight: 80,
                                        maxWidth: 120

                                    }}>
                                        <img className="" style={{ objectFit: `contain` }} src="data:image/jpeg;base64,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" alt="" />
                                    </div>
                                </th>
                           
                                <th>Drink</th>
                                <th>8</th>
                                <th>2</th>
                                <th>drink</th>
                                <th className="d-flex ">
                                    <button className="btn btn-warning mx-2" onClick={() => setEditCategoryShow(true)} >EDIT</button>
                                    <button className="btn btn-danger" onClick={handleShow}>delete</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
            <EditProductModal
                show={modalEditCategoryShow}
                onHide={() => setEditCategoryShow(false)}
            />
            <Modal show={show} onHide={handleClose}


                centered>

                <Modal.Body className="d-flex flex-column text-center">
                    <div className="align-self-center my-4" style={{ borderRadius: 100, background: "#ffff", width: 110, height: 110, border: "4px solid #f8bb86" }}>
                        <FontAwesomeIcon
                            className="mt-2"
                            icon={faExclamation}
                            color="#f8bb86"
                            size={"5x"}
                        />
                    </div>


                    <div className="d-flex flex-column text-center ">
                        <h4>Are you sure?</h4>
                        <h6>You are about to delete this product.</h6>
                    </div>
                    <div className="d-flex flex-row justify-content-center mt-4 mb-3">
                        <Button size="lg" variant="primary" className="mx-2" onClick={handleClose}>
                            Yes, delete it!
                        </Button>
                        <Button size="lg" variant="danger" onClick={handleClose}>
                            Cancel

                        </Button>
                    </div>

                </Modal.Body>

            </Modal>

        </div >

    );
}

export default DiaplayProductModal;
