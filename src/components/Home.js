import React, { useEffect, useState } from "react";
import MedicineCard from "./MedicineCard";
import { firestore } from "../index";
import "./css/Home.css";
import { Divider, Tooltip, Button, Modal } from "antd";
import MedicineForm from "./MedicineForm";

const Home = (props) => {
  const [Medicine, setMedicine] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const getFirestoreData = () => {
    firestore.collection("Medicine").onSnapshot((snapshot) => {
      let MedicinenData = snapshot.docs.map((Medicine) => {
        const {
          name,
          code_medicine,
          item,
          item1,
          item2,
          item3,
          item4,
        } = Medicine.data();
        return {
          name,
          code_medicine,
          item,
          item1,
          item2,
          item3,
          item4,
        };
      });
      setMedicine(MedicinenData);
    });
  };
  useEffect(() => {
    getFirestoreData();
  }, []);
  if (Medicine.length === 0) {
    return (
      <div id="anouce">
        <p>No Medicine Information</p>
      </div>
    )
  }

  return (
    <div className="type">
      <Button
        type="dashed"
        onClick={showModal}
        style={{ width: "20%", height: "30px" }}
      >
        Add New Medicine Information
      </Button>
      <Modal 
      visible={isModalVisible} 
      onCancel={handleCancel}
      footer={null}
      >
        <div className="list-view-container">
          <MedicineForm />
        </div>
      </Modal>
      <div className="outer-border">
        <p id="head">
          <Divider>List of all Medicine</Divider>
        </p>
        <div className="list-view-container">
          {Medicine.map((Medicine, idx) => (
            <div>
              <MedicineCard {...Medicine} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
