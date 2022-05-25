export const transformFilterDataCategories = (data) => {
  let categories = [];
  let categoryName = "";
  let categoryQuantity = 0;
  for (const key in data) {
    categoryName = data[key].category;
    categoryQuantity = data[key].count;
    let categoryItem = { name: categoryName, quantity: categoryQuantity };
    categories.push(categoryItem);
  }
  return categories;
};
export const transformFilterDataColors = (data) => {
  let colors = [];
  let colorName = "";
  let colorHex = "";
  let colorQuantity = 0;
  for (const key in data) {
    colorName = data[key].color;
    colorHex = data[key].hex;
    colorQuantity = data[key].count;
    let colorItem = { name: colorName, hex: colorHex, quantity: colorQuantity };
    colors.push(colorItem);
  }
  return colors;
};
export const transformFilterDataSizes = (data) => {
  let sizes = [];
  let sizeName = "";
  let sizeQuantity = 0;
  for (const key in data) {
    sizeName = data[key].size;
    sizeQuantity = data[key].count;
    let sizeItem = { name: sizeName, quantity: sizeQuantity };
    sizes.push(sizeItem);
  }
  return sizes;
};
