import Content from "../Components/Layout/Content";
import Seventyfive from "../Components/Layout/Seventyfive";
import Twentyfive from "../Components/Layout/Twentyfive";
import WhiteSpace from "../Components/Layout/WhiteSpace";
import LayoutFilterSection from "../Components/LayoutFilter/LayoutFilterSection";
import LayoutOptions from "../Components/LayoutFilter/LayoutOptions";
import ShopFilterSection from "../Components/ShopFilter/ShopFilterSection";

const ShopPage = () => {
  return (
    <>
      <WhiteSpace bot="40px" top="150px">
        <Content color="#F6F6F6">
          <Twentyfive>
            <LayoutFilterSection />
          </Twentyfive>
          <Seventyfive>
            <LayoutOptions />
          </Seventyfive>
        </Content>
      </WhiteSpace>
      <Content>
        <Twentyfive>
          <ShopFilterSection />
        </Twentyfive>
      </Content>
    </>
  );
};

export default ShopPage;
