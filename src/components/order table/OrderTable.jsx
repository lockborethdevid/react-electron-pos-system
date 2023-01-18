import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { ModalHeader } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMinus, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
function OrderTable(props) {

    return (
        <Modal
            fullscreen
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Body className="m-0 p-0" style={{ backgroundColor: "#D9D9D9" }}>
                <div className="row px-4 pt-4" style={{ backgroundColor: "#D9D9D9", height: "100vh" }}>

                    <div className="col-5" style={{ backgroundColor: "#fffff" }}>
                        <h5 className="mb-3">Table order</h5>
                        <div className="bg-light p-3" >
                            <Form>
                                <Form.Group as={Row} className="mb-3 mx-3" controlId="formPlaintextEmail">
                                    <Form.Label column sm="3" className="p-1">
                                        Table No.:
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" placeholder="Name" disabled />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} className="mb-3 mx-3" controlId="formPlaintextPassword">
                                    <Form.Label column sm="3" className="p-1">
                                        Name:
                                    </Form.Label>
                                    <Col sm="9">
                                        <Form.Control type="text" placeholder="Name" disabled />
                                    </Col>
                                </Form.Group>
                            </Form>
                            <div className="d-flex flex-column">
                                <div className=" text-center mt-2">
                                    <h5>Order Item(s)</h5>
                                </div>

                                <Table >
                                    <thead>
                                        <tr>
                                            <th>Items</th>
                                            <th>price</th>
                                            <th>Qty</th>
                                            <th>T/p</th>
                                        </tr>
                                    </thead>
                                </Table>
                            </div>

                        </div>
                    </div>
                    <div className="col-7" >
                        <div className="row  bg-light" >
                            <div className="column pt-4 d-flex">
                                <div className="col-8">
                                    <button className="btn btn-ct  mx-2">Foods</button>
                                    <button className="btn btn-ct  mx-2">Drinks</button>
                                    <button className="btn btn-ct  mx-2">Desserts</button>
                                    <button className="btn btn-ct mx-2">All</button>
                                    <button className="btn btn-ct mx-2">All</button>
                                </div>
                                <div className="col-4">
                                    <form className="d-flex">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search all product here..."
                                        />
                                        <button type="submit" className="btn btn-light">
                                            <FontAwesomeIcon color="#231F20" icon={faSearch} size="lg" />
                                        </button>
                                    </form>
                                </div>

                            </div>
                            <div className="row mx-4 text-center pb-5 pt-3">
                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>                      <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>

                                <div style={{ backgroundColor: "#ECE9E5", borderRadius: 10 }} className="col-2 d-flex p-2 flex-column justify-content-center text-center mt-2 mx-2" >
                                    <div>
                                        <img style={{ objectFit: "contain", width: "95%", height: "60%" }} src="https://media-cdn.tripadvisor.com/media/photo-s/11/47/0a/34/best-place-for-relaxing.jpg" alt="" />
                                    </div>
                                    <h6>Khmer noodle</h6>
                                    <h6>2$</h6>
                                    <div className="d-flex justify-content-center text-center">
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faMinus} size="sm" />
                                        </div>

                                        <p className="mx-3" style={{ fontWeight: "bold", fontSize: "18px", alignItems: "center", textAlign: "center" }}>0</p>
                                        <div style={{ borderRadius: 8, border: "2px solid #F7AD23", alignItems: "center", height: 25 }}>
                                            <FontAwesomeIcon className="p-1" color="#231F20" icon={faPlus} size="sm" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-end mt-2">
                            <div className="d-flex">
                                <p className="p-2" style={{ fontSize: "16px", fontWeight: "bold", color: "#3AD664" }}>Delete</p>
                                <p className="p-2" style={{ fontSize: "16px", fontWeight: "bold", color: "#3AD664" }}>Cancel</p>

                                <p className="p-2" style={{ fontSize: "16px", fontWeight: "bold", color: "#3AD664" }}>Save</p>

                                <p className="p-2" style={{ fontSize: "16px", fontWeight: "bold", color: "#3AD664" }}>Done</p>

                            </div>

                        </div>




                    </div>


                </div>

            </Modal.Body>
        </Modal>

    );
}


export default OrderTable;
