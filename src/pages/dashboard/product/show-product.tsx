import { useEffect } from "react";
import Form from "../../../components/organisms/form";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./show-product.styles";
import { InitialState } from "../../../interface/redux";
import { getProducts, setSelectedProduct } from "../../../redux/product/action";
import Table from "../../../components/organisms/table";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const products = useSelector(
    (state: InitialState) => state.products?.products
  );

  //const loading = useSelector((state: InitialState) => state.products?.loading);
  //const error = useSelector((state: InitialState) => state.products?.error);

  useEffect(() => {
    dispatch(getProducts([]));
  }, [dispatch]);

  return (
    <Container>
      <Form
        desc={"Clique em um produto para editá-lo"}
        title={"Produtos"}
        redirect={{
          title: "Novo produto",
          route: "/add",
        }}
        style={{
          maxWidth: "none",
        }}
      >
        <>
          <Table
            redirectTo='/update'
            onClickElement={(e) => dispatch(setSelectedProduct(e))}
            data={products}
            columns={[
              {
                key: "photo",
                name: "Foto",
                type: "image",
              },
              {
                key: "name",
                name: "Nome",
                type: "none",
              },
              {
                key: "description",
                name: "Descrição",
                type: "none",
              },
            ]}
          />
        </>
      </Form>
    </Container>
  );
};

export default ShowProduct;
