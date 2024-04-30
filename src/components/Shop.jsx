const Shop = () => {
  return (
    <div>
      <div className="container my-5 d-flex flex-column justify-content-center align-items-center">
        <h3>Deposit or Withdraw Money</h3>
        <div className="flex-row d-flex justify-content-center align-items-center">
          <button className="btn btn-primary">-</button>
          <p className="m-2">Update Balance</p>
          <button className="btn btn-primary">+</button>
        </div>
      </div>
    </div>
  );
};
export default Shop;
