import StringFilter from "./StringFilter";
import { categories, colors, sizes } from "../../SD/placeholders";

const ShopFilterSection = () => {
  return (
    <>
      <StringFilter title={"Product Categories"} items={categories} />
      <StringFilter title={"Filter by Color"} items={colors} />
      <StringFilter title={"Filter by Size"} items={sizes} />
    </>
  );
};

export default ShopFilterSection;
