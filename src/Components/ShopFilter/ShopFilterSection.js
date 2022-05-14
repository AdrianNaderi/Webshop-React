import StringFilter from "./StringFilter";
import { categories, colors, sizes } from "../../SD/placeholders";
import RangeFilter from "./RangeFilter";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import useHttp from "../../hooks/useHttp";
import { getAllProducts, getAllProductsWithFilterAsync } from "../../lib/Filter/ShopFilterRequests";
import { GetFilteredProducts } from "../../lib/endpoints";

const ShopFilterSection = () => {
  const categoryFilter = useSelector((state) => state.filter.categories);
  const colorsFilter = useSelector((state) => state.filter.colors);
  const sizesFilter = useSelector((state) => state.filter.sizes);
  const dispatch = useDispatch();
  // console.log("Categories   " + categoryFilter);
  // console.log("Colors   " + colorsFilter);
  // console.log("Sizes   " + sizesFilter);
  const { sendReq, data, error, loading } = useHttp(getAllProductsWithFilterAsync);

  console.log(data);

  const handleCategoryFiltering = (category) => {
    dispatch(filterActions.setCategoryFilter({ category: category }));
    sendReq("Shes");
  };

  const handleColorFiltering = (color) => {
    dispatch(filterActions.setColorFilter({ color: color }));
  };

  const handleSizeFiltering = (size) => {
    dispatch(filterActions.setSizeFilter({ size: size }));
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
    </>
  );
};

export default ShopFilterSection;
