import React, { Component } from "react";
import QRCode from 'qrcode.react'
import './css/logo.css';
import { withRouter } from "react-router-dom";

class qrcode extends Component {
    state = {
        value: 'แก้ปวด ลดไข้ รับประทานครั้งละ 2 เม็ด วันละ 1 ครั้ง หลังอาหาร เช้า'
    }
    
    render() {
        return (
            <div>
                <QRCode
                    id='abc'
                    value={this.state.value}
                    style={{ width: 75 , height: 75}}
                />
            </div>
        );
    }
}


export default withRouter(qrcode);
