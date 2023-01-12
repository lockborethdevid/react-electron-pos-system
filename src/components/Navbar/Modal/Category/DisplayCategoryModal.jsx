
import Modal from "react-bootstrap/Modal";
import React from "react";
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import EditCategoryModal from "./EditCategoryModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation, faExclamation } from "@fortawesome/free-solid-svg-icons";

function DisplayCategoryModal(props) {
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
                    <Modal.Title id="contained-modal-title-vcenter">Category</Modal.Title>
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
                                <th>Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Drink</th>
                                <th className="d-flex ">
                                    <button className="btn btn-warning" onClick={() => setEditCategoryShow(true)} >EDIT</button>
                                    <button className="btn btn-danger" onClick={handleShow}>delete</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </Modal.Body>
            </Modal>
            <EditCategoryModal
                show={modalEditCategoryShow}
                onHide={() => setEditCategoryShow(false)}
            />
            <Modal show={show} onHide={handleClose}


                centered>

                <Modal.Body className="d-flex flex-column text-center">
                    <div  className="align-self-center my-4" style={{borderRadius:100, background:"#ffff", width:110,height:110,border: "4px solid #f8bb86"}}>
                        <FontAwesomeIcon
                        className="mt-2"
                            icon={faExclamation}
                            color="#f8bb86"
                            size={"5x"}
                        />
                    </div>


                    <div className="d-flex flex-column text-center ">
                        <h4>Are you sure?</h4>
                        <h6>You are about to delete this category.</h6>
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

        </div>

    );
}

export default DisplayCategoryModal;
