import StringFilter from "./StringFilter";
import { categories, colors, sizes } from "../../SD/placeholders";
import RangeFilter from "./RangeFilter";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import useHttp from "../../hooks/useHttp";
import { getAllProducts, getAllProductsWithFilterAsync } from "../../lib/Filter/ShopFilterRequests";
import { GetFilteredProducts } from "../../lib/endpoints";

const ShopFilterSection = () => {
  const dispatch = useDispatch();
  const { sendReq, data, error, loading } = useHttp(getAllProductsWithFilterAsync); //Will be moved to the place where we display products.
  console.log(data);

  const handleCategoryFiltering = (category) => {
    dispatch(filterActions.setCategoryFilter({ category: category }));
  };

  const handleColorFiltering = (color) => {
    dispatch(filterActions.setColorFilter({ color: color }));
  };

  const handleSizeFiltering = (size) => {
    dispatch(filterActions.setSizeFilter({ size: size }));
  };

  const hanndleOnSaleFiltering = (e) => {
    if (e.target.checked) {
      dispatch(filterActions.setOnSaleFilter());
      return;
    }
    dispatch(filterActions.resetOnSaleFilter());
  };

  const hanndleInStockFiltering = (e) => {
    if (e.target.checked) {
      dispatch(filterActions.setInStockFilter());
      return;
    }
    dispatch(filterActions.resetInStockFilter());
  };

  return (
    <>
      <StringFilter
        title={"Product Categories"}
        items={categories}
        onFiltering={(category) => handleCategoryFiltering(category)}
        onRemoveFilter={() => {
          dispatch(filterActions.resetCategoryFilter());
        }}
      />
      <RangeFilter title={"Filter by Price"} />
      <StringFilter
        title={"Filter by Color"}
        items={colors}
        checkbox={true}
        onFiltering={(color) => handleColorFiltering(color)}
        onRemoveFilter={() => {
          dispatch(filterActions.resetColorFilter());
        }}
      />
      <StringFilter
        title={"Filter by Size"}
        items={sizes}
        onFiltering={(size) => handleSizeFiltering(size)}
        onRemoveFilter={() => {
          dispatch(filterActions.resetSizeFilter());
        }}
      />
      <StringFilter
        title={"Filter by Size"}
        items={sizes}
        onFiltering={(size) => handleSizeFiltering(size)}
        onRemoveFilter={() => {
          dispatch(filterActions.resetSizeFilter());
        }}
      />
      <div>
        <input type="checkbox" onChange={hanndleOnSaleFiltering} />
        On Sale
      </div>
      <div>
        <input type="checkbox" onChange={hanndleInStockFiltering} />
        In Stock
      </div>
    </>
  );
};

export default ShopFilterSection;
