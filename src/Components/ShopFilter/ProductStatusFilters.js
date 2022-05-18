import classes from "./ProductStatusFilters.module.css";

const ProductStatusFilters = (props) => {
  return (
    <div className={classes.filter}>
      <div>
        <h4 className={classes.title}>{props.title}</h4>
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            props.onSaleChange(e);
          }}
        />
        On Sale
      </div>
      <div>
        <input
          type="checkbox"
          onChange={(e) => {
            props.onStockChange(e);
          }}
        />
        In Stock
      </div>
    </div>
  );
};

export default ProductStatusFilters;
