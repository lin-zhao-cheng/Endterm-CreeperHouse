import ProductItem from "../components/ProductItem";
import {Spin} from "antd";
import { LoadingOutlined } from '@ant-design/icons';
import { useContext } from "react";
import { StoreContext } from "../store";

export default function ProductList() {
    const { state: { page: { products }, requestProducts: { loading } } } = useContext(StoreContext);
    const antIcon = <LoadingOutlined style={{ fontSize: 80, color: "#81ff83" }} spin />;
    return (
        <>
        {loading
            ? (
            <div className="ProductList_container spinner-wrap">
                <Spin indicator={antIcon} className="spinner" />
            </div>
            ) : (
            <div className="ProductList_container">
                {products.map(product =>(
                    <ProductItem product={product} />
                ))}
            </div>
            )
        }
        </>
    );
}
  