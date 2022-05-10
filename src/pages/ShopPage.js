import Content from "../Components/Layout/Content";
import OneSpace from "../Components/Layout/OneSpace";
import ShopFilterSection from "../Components/ShopFilter/ShopFilterSection";

const ShopPage = () => {
  return (
    <>
      <Content>
        <OneSpace>
          <ShopFilterSection />
        </OneSpace>
      </Content>
    </>
  );
};

export default ShopPage;
