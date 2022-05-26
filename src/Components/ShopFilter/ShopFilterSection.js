import StringFilter from "./StringFilter";
import { categories, colors, sizes, brands } from "../../SD/placeholders";
import RangeFilter from "./RangeFilter";
import { useDispatch, useSelector } from "react-redux";
import { filterActions } from "../../store/filter-slice";
import useHttp from "../../hooks/useHttp";
import { getFilterDataAsync } from "../../lib/Filter/ShopFilterRequests";
import BrandFiltering from "./BrandFiltering";
import ProductStatusFilters from "./ProductStatusFilters";
import { useEffect } from "react";

const ShopFilterSection = () => {
  const dispatch = useDispatch();
  const { sendReq, data, error, loading } = useHttp(getFilterDataAsync, true);

  useEffect(() => {
    sendReq();
  }, []);

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

  const handleBrandFiltering = (brand) => {
    dispatch(filterActions.setBrandFilter({ brand: brand }));
  };

  if (loading) {
    return (
      <>
        <p>Loading</p>
      </>
    );
  }

  if (!loading) {
    return (
      <>
        <StringFilter
          title={"Product Categories"}
          items={data.categories}
          onFiltering={(category) => handleCategoryFiltering(category)}
          onRemoveFilter={() => {
            dispatch(filterActions.resetCategoryFilter());
          }}
        />
        <RangeFilter title={"Filter by Price"} />
        <StringFilter
          title={"Filter by Color"}
          items={data.colors}
          checkbox={true}
          onFiltering={(color) => handleColorFiltering(color)}
          onRemoveFilter={() => {
            dispatch(filterActions.resetColorFilter());
          }}
        />
        <StringFilter
          title={"Filter by Size"}
          items={data.sizes}
          onFiltering={(size) => handleSizeFiltering(size)}
          onRemoveFilter={() => {
            dispatch(filterActions.resetSizeFilter());
          }}
        />
        <div>
          <BrandFiltering
            title="Filter by Brand"
            brands={brands}
            onFiltering={(brand) => handleBrandFiltering(brand)}
            onRemoveFilter={() => {
              dispatch(filterActions.resetBrandFilter());
            }}
          />
        </div>
        <ProductStatusFilters title="Product Status" onSaleChange={(e) => hanndleOnSaleFiltering(e)} onStockChange={(e) => hanndleInStockFiltering(e)} />
      </>
    );
  }
};

export default ShopFilterSection;
