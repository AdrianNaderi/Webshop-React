import Content from "../Components/Layout/Content";
import Fifty from "../Components/Layout/Fifty";
import WhiteSpace from "../Components/Layout/WhiteSpace";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import ProductPic from "../Components/ProductDetail/ProductPic/ProductPic";

const ProductDetailPage = () => {
  return (
    <>
      <WhiteSpace bot="20px" top="150px">
        <Content>
          <Fifty>
            <ProductPic />
          </Fifty>
          <Fifty>
            <ProductDetail />
          </Fifty>
        </Content>
      </WhiteSpace>
    </>
  );
};

export default ProductDetailPage;
