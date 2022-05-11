import { categories } from "../../SD/placeholders";

const CategoryFilter = (props) => {
  const showCategories = categories.map((category) => <li>{category.name}</li>);

  return (
    <>
      <h4>Product Categories</h4>
      <ul>{showCategories}</ul>
    </>
  );
};

export default CategoryFilter;
