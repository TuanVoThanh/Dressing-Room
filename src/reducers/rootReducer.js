import { combineReducers } from "redux";
import ProductReducer from "./productReducer";
import CategoryReducer from "./categoryReducer";
import SelectedTypeReducer from "./selectedTypeReducer";
import ModelReducer from "./modelReducer";

const RootReducer = combineReducers({
  // Danh sách state lưu trữ trên store
  products: ProductReducer,
  category: CategoryReducer,
  selectedType: SelectedTypeReducer,
  model: ModelReducer,
});

export default RootReducer;
