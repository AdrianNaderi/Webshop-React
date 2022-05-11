import StringFilter from "./StringFilter";
import { categories } from "../../SD/placeholders";

const ShopFilterSection = () => {
  return (
    <>
      <StringFilter title={"Product Categories"} items={categories}/>
    </>
  );
};

export default ShopFilterSection;
