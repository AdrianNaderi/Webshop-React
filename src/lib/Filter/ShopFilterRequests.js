import { GetFilterData, GetFilteredProducts, GetProducts } from "../endpoints";
import { transformFilterDataCategories, transformFilterDataColors, transformFilterDataSizes } from "../Transform/filter";

export const getAllProductsWithFilterAsync = async (filter) => {
  const filterParameters = { category: filter.category, color: filter.color, size: filter.size, brand: filter.brand, onSale: filter.onSale, inStock: filter.inStock, displayCount: filter.displayCount, page: filter.page };
  const response = await fetch(GetFilteredProducts, {
    method: "POST",
    body: JSON.stringify(filterParameters),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const jsonStr = await response.json();
  return jsonStr;
};

export const getAllProducts = async (displayOptions) => {
  console.log(displayOptions.count);
  console.log(displayOptions.page);

  const response = await fetch(GetProducts);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const jsonStr = await response.json();
  return jsonStr;
};

export const getFilterDataAsync = async () => {
  const response = await fetch(GetFilterData);
  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const jsonStr = await response.json();
  let categories = transformFilterDataCategories(jsonStr.result.categories);
  let colors = transformFilterDataColors(jsonStr.result.colors);
  let sizes = transformFilterDataSizes(jsonStr.result.sizes);
  let filterData = { categories, colors, sizes };
  return filterData;
};
