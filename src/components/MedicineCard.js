import React from "react";
import { Card, Button } from "antd";
import { DeleteOutlined, EditOutlined, PrinterOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import "./css/card.css";
import { firestore } from "../index";
import { withRouter } from "react-router-dom";

const MedicineCard = (props) => {
  const { name, code_medicine, item, item1, item2, item3, item4 } = props;
  const dispatch = useDispatch();
  const deleteMedicine = (id) => {
    firestore.collection("Medicine").doc(props.id).delete();
    dispatch({ type: "DELETE_Medicine", id: props.id });
  };
  return (
    <Card id="p-card" title={code_medicine + " "}>
      <p id="name">
        <b>{name}</b>
      </p>
      <p>รับประทานครั้งละ {item} </p>
      <p>{item1} </p>
      <p>{item2} {item3}</p>
      <p>{item4}</p>

      <p id="del-btn">
        <Button
          icon={<EditOutlined />}
          onClick={() => {
            props.history.push("/edit/" + props.id);
          }}
        />{" "}
        <Button
          icon={<PrinterOutlined />}
          onClick={() => {
            props.history.push("/medicinelables/");
          }}
        />{" "}
        <Button
          icon={<DeleteOutlined />}
          type="danger"
          onClick={() => {
            deleteMedicine();
          }}
        />
      </p>
    </Card>
  );
};

export default withRouter(MedicineCard);
