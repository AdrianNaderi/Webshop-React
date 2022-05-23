import ProductPicSvg from "./ProductPicSvg";
import classes from "./ProductPicItem.module.css";

const ProductPicItem = (props) => {
  return (
    <div className={classes.container} style={props.style}>
      <ProductPicSvg pic={props.pic} />
    </div>
  );
};

export default ProductPicItem;
