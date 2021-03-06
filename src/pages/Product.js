import { Layout } from "antd";

import Navbar from "../components/Navbar";
import Titlebar from "../components/Titlebar";

// import ProductHeader from "../components/ProductHeader";

import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import { setProductDetail } from "../actions";
import { StoreContext } from "../store"
function Product({match}) {
  
  const { dispatch } = useContext(StoreContext);
  useEffect(() => {
     setProductDetail(dispatch, match.params.productId, match.params.cate,0,0)
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Layout className="container">
      <Navbar />
      <div className="gobal_content_flex">
        <Titlebar />
         <ProductDetail/>
        <Footer />
      </div>
    </Layout>
  );
}

export default Product;
