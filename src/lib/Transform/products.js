export const transformShopProduct = (data) => {
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
