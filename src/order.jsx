function Order(props) {
  return (
    <div className="order">
      <p>
        We're open untill {props.closeHour}:00. Come visit us or order online!
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default Order;
