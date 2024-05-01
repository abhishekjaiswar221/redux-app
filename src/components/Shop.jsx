import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state/index";
import { bindActionCreators } from "redux";

const Shop = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.amount);
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Deposit or Withdraw Money</h3>
        <div className="flex-row d-flex justify-content-center align-items-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              withdrawMoney(100);
            }}
          >
            -
          </button>
          <p className="m-2">Update Balance({balance})</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              depositMoney(100);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default Shop;
