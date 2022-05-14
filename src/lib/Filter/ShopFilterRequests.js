import { GetFilteredProducts, GetProducts } from "../endpoints";

export const getAllProductsWithFilterAsync = async (category) => {
  console.log(category);
  const filterParameters = { category: category };
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
