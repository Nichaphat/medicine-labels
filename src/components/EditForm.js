import React, { useEffect } from "react";
import { Input, Row, Col, Divider, Button, notification, Select } from "antd";
import "./css/Form.css";
import { useDispatch, useSelector } from "react-redux";
import { firestore } from "../index";

const EditForm = (props) => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const popupNotification = (type) => {
    notification[type]({
      message: "Updated",
      description: "Your data has been updated.",
    });
  };
 
  const updateData = async () => {
    await firestore
      .collection("Medicine")
      .doc(props.match.params.Medicine_id)
      .set(form);
    popupNotification("success");
  };
 
  const fetchData = () => {
     firestore
      .collection("Medicine")
      .doc(props.match.params.Medicine_id)
      .get()
      .then((medicine) => {
        // dispatch({
        //   type: "CHANGE_NAME",
        //   name: medicine.data().name,
        // });
        // dispatch({
        //   type: "CHANGE_CODE_MEDICINE",
        //   code_medicine: medicine.data().code_medicine,
        // });
        // dispatch({
        //   type: "CHANGE_ITEM",
        //   item: medicine.data().item,
        // });
        // dispatch({
        //   type: "CHANGE_ITEM1",
        //   item1: medicine.data().item1,
        // });
        // dispatch({
        //   type: "CHANGE_ITEM2",
        //   item2: medicine.data().item2,
        // });
        // dispatch({
        //   type: "CHANGE_ITEM3",
        //   item3: medicine.data().item3,
        // });

        // dispatch({
        //   type: "CHANGE_ITEM4",
        //   item4: medicine.data().item4,
        // });
      });
  }
  
  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, []);
  const { Option } = Select;

  return (
    <div className="outer-form">
      <div className="input-form">
        <p>
          <Divider>Edit Information</Divider>
        </p>
        <p>
          <Row gutter={10}>
            <Col span={12}>
              <Input
                value={form.name}
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
                value={form.code_medicine}
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
          <Select  style={{ width: '100%' }} defaultValue="รับประทานครั้งละกี่เม็ด"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_ITEM",
                item: e,
              })
            }>
            <Option value="ครึ่งเม็ด">รับประทานครั้งละ ครึ่งเม็ด</Option>
            <Option value="1 เม็ด">รับประทานครั้งละ 1 เม็ด</Option>
            <Option value="2 เม็ด">รับประทานครั้งละ 2 เม็ด</Option>
            <Option value="3 เม็ด">รับประทานครั้งละ 3 เม็ด</Option>
          </Select>
        </p>
        <p>
           <Select style={{ width: '100%' }} defaultValue="วันละกี่ครั้ง"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_ITEM1",
                item1: e,
              })
            }>
            <Option value="1 ครั้ง">วันละ 1 ครั้ง</Option>
            <Option value="2 ครั้ง">วันละ 2 ครั้ง</Option>
            <Option value="3 ครั้ง">วันละ 3 ครั้ง</Option>
            <Option value="4 ครั้ง">วันละ 4 ครั้ง</Option>
          </Select>
        </p>
        <p>
            <Select style={{ width: '100%' }} defaultValue="ก่อนอาหาร / หลังอาหาร / ก่อนนอน"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_ITEM2",
                item2: e,
              })
            }>
            <Option value="ก่อนอาหาร">ก่อนอาหาร</Option>
            <Option value="หลังอาหาร">หลังอาหาร</Option>
            <Option value="ก่อนนอน">ก่อนนอน</Option>
          </Select>
        </p>
        <p>
           <Select style={{ width: '100%' }} defaultValue="เช้า / เที่ยง / เย็น / ก่อนนอน"
            onChange={(e) =>
              dispatch({
                type: "CHANGE_ITEM3",
                item3: e,
              })
            }>
            <Option value="เช้า">เช้า</Option>
            <Option value="เย็น">เย็น</Option>
            <Option value="เช้า เย็น">เช้า-เย็น</Option>
            <Option value="เช้า เที่ยง เย็น">เช้า เที่ยง เย็น</Option>
            <Option value="ก่อนนอน">ก่อนนอน</Option>
          </Select>
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
          <Button type="primary" onClick={() => updateData()}>
            Edit
          </Button>{" "}
        </p>
      </div>
    </div>
  );
};

export default EditForm;
