import { createStore, combineReducers } from "redux";
const initialForm = {
  name: "",
  code_medicine: "",
  item: "",
  item1: "",
  item2: "",
  item3: "",
  item4: ""
};
const formReducer = (data = initialForm, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...data, name: action.name };
    case "CHANGE_CODE_MEDICINE":
      return { ...data, code_medicine: action.code_medicine };
    case "CHANGE_ITEM":
      return { ...data, item: action.item};
    case "CHANGE_ITEM1":
      return { ...data, item1: action.item1};
    case "CHANGE_ITEM2":
      return { ...data, item2: action.item2};
    case "CHANGE_ITEM3":
      return { ...data, item3: action.item3 };
    case "CHANGE_ITEM4":
      return { ...data, item4: action.item4 };
    default: ///
      return data;
  }
};
const MedicineReducer = (Medicine = [], action) => {
  switch (action.type) {
    case "ADD_MEDICINE":
      return [...Medicine, action.Medicine];
    case "DELETE_MEDICINE":
      return Medicine.filter((Medicine) => +Medicine.id !== +action.id);
    default:
      break;
  }
  return Medicine;
};

const rootReducer = combineReducers({
  Medicine: MedicineReducer,
  form: formReducer,
});

export const store = createStore(rootReducer);
