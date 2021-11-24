import React from "react";
import { Input, Row, Col, Divider, Button, message } from "antd";
import "./css/Form.css";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../index";

const MedicineForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const Medicine = useSelector((state) => state.Medicine);
  const reset = () => {
    window.location.reload()
  }
  const addMedicine = () => {
    dispatch({
      type: "ADD_MEDICINE",
      Medicine: {
        ...form,
        id: Medicine.length > 0 ? Medicine[Medicine.length - 1].id + 1 : 0,
      },
    });
    firestore
      .collection("Medicine")
      .doc()
      .set({ ...form });
    message.success("Add new medicine information");
  };

  return (
    <div className="outer-form">
      <div className="input-form">
        <p>
          <Divider>Add New Medicine Information</Divider>
        </p>
        <p>
          <Row gutter={10}>
            <Col span={12}>
              <Input
                placeholder="ชื่อยา"
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_NAME",
                    name: e.target.value,
                  })
                }
              />
            </Col>
            <Col span={12}>
              <Input
                placeholder="รหัสยา"
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_CODE_MEDICINE",
                    code_medicine: e.target.value,
                  })
                }
              />
            </Col>
          </Row>
        </p>
        <p>
          <Divider orientation="left">รายละเอียดการรับประทานยา</Divider>
        </p>
        <p>
          <Input
            placeholder="รับประทานครั้งละกี่เม็ด"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_ITEM",
                item: e.target.value,
              })
            }
          />
        </p>
        <p>
          <Input
            placeholder="วันละกี่ครั้ง"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_ITEM1",
                item1: e.target.value,
              })
            }
          />
        </p>
        <p>
          <Input
            placeholder="ก่อนอาหาร / หลังอาหาร / ก่อนนอน"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_ITEM2",
                item2: e.target.value,
              })
            }
            />
        </p>
        <p>
          <Input
            placeholder="เช้า / เที่ยง / เย็น / ก่อนนอน"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_ITEM3",
                item3: e.target.value,
              })
            }
          />
        </p>
        <p>
              <Input
                placeholder="อื่นๆ"
                onChange={(e) =>
                  dispatch({
                    type: "CHANGE_ITEM4",
                    item4: e.target.value,
                  })
                }
              />
        </p>
        <p id="button-col">
          <Button type="primary" onClick={() => addMedicine()} a href="/">
            Add
          </Button>
          {" "}
          <Button type="danger" onClick={() => reset()}>
            Clear
          </Button>
        </p>
      </div>
    </div>
  );
};

export default MedicineForm;
