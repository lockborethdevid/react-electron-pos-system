import React from "react";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./order.css"
function Order() {

    return (
        <div className="d-flex flex-column m-2">
            <div className="d-flex flex-row justify-content-between">
                <Button style={{backgroundColor:"#D9D9D9",border:"none",color:"#00000"}} size="sm" className="px-3 text-dark">

                    <span style={{marginRight:10,marginLeft:0}}>
                        <FontAwesomeIcon
                        style={{backgroundColor:"#ffff",borderRadius:30}}
                            className=""
                            icon={faPlusCircle}
                            color="#3AD664"
                            size={"xl"}
                        />
                    </span>
                    Add Table
                </Button>
                <div className="d-flex" style={{borderRadius:15,backgroundColor:"#D9D9D9"}}>
                
                        <input  type="text" id="search" className="form-control" placeholder="Search category by name or sku" />
                        <span style={{padding:10}}>
                       
                                <FontAwesomeIcon
                                    className="mx-1"
                                    icon={faSearch}
                                    color="#000000"
                                    size={"xl"}
                                />
                           
                        </span>
                    
                </div>
            </div>


        </div>

    );
}


export default Order;
