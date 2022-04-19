import React from "react";
import { Card, Divider} from "antd";
import { useDispatch } from "react-redux";
import { firestore } from "../index";
import { withRouter } from "react-router-dom";
import QRCode from "./QRCode";
import './css/logo.css';

const Medicinelables = (props) => {
  const { name, code_medicine, item, item1, item2, item3, item4 } = props;

  return (
    <Card id="pp-card" style={{ width: 500}}>
      <div className="font">
      <Divider orientation="left">โฟลิค แอซิด 5 มิลลิกรัม
</Divider>
      <div>รับประทานครั้งละ 1 เม็ด </div>
      <div>วันละ 1 ครั้ง หลังอาหาร เช้า</div>
      <div>ยาบำรุงเลือด</div>
      <Divider orientation="right"> <QRCode /> </Divider>
      </div>
    </Card>
  );
};

export default withRouter(Medicinelables);
