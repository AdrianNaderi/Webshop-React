import { GetFilterData, GetFilteredProducts, GetProducts } from "../endpoints";
import { transformFilterDataCategories, transformFilterDataColors, transformFilterDataSizes } from "../Transform/filter";

export const getAllProductsWithFilterAsync = async (category, color, size, brand, onSale, inStock) => {
  console.log(category);
  const filterParameters = { category: category, color: color, size: size, brand: brand, onSale: onSale, inStock: inStock };
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

export const getAllProducts = async () => {
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
