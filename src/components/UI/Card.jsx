import "../UI/Card.css";

const Card = (props) => {
  // add a space so it suppose to look like
  // ex:"card expense-item"
  const classes = "card " + props.className;
  //   children??
  return <div className={classes}>{props.children}</div>;
}

export default Card;
