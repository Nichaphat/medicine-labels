import React from "react";
import "./css/MenuComponents.css";
import { Row, Col, Button, } from "antd";
import { withRouter } from 'react-router-dom'
import { DatabaseOutlined } from "@ant-design/icons";

const TopBar = (props) => {
    
    const Logoff = () => {

        props.history.push("/login")
    }
    

    return (
        <div className="top-bar">
            <Row>
                <Col span={5} id="centered">
                    <div className="col-4 left"><h1 id="header">Medicine Labels</h1></div>
                </Col>
                <Col span={19}>
                    <div className="menu">
                        <div className="col-4 right menu-item items" ><a href="/" ><DatabaseOutlined /> Medicine Warehouse</a></div>
                        <div className="col-4 right menu-item items"><Button type="danger" onClick={() => { Logoff() }}>Logout</Button></div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default withRouter(TopBar)