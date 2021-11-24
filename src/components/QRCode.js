import React, { Component } from "react";
import QRCode from 'qrcode.react'
import './css/logo.css';
import { withRouter } from "react-router-dom";

class qrcode extends Component {
    state = {
        value: 'พาราเซตามอล 500 มิลลิกรัม รับประทานครั้งละ 1-2 เม็ด ห่างกันอย่างน้อย 6 ชม. เวลาปวดหรือมีไข้'
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
