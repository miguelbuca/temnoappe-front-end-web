import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input, { TextArea } from "../../../components/atoms/input";
import Form from "../../../components/organisms/form";
import { InitialState } from "../../../interface/redux";
import { updateProduct, deleteProduct } from "../../../redux/product/action";
import { Container } from "./update-product.styles";
import useRedirect from '../../../hooks/useRedirect'

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const { toURL, goBack  } = useRedirect()
  const { id, name, photo: url, description }: Product = useSelector(
    (state: InitialState) => state.products.selectedProduct
  );

  const [productName, setProductName] = useState<string>('')
  const [productURL, setProductURL] = useState<string>('')
  const [productDesc, setProductDesc] = useState<string>('')

  const query = (fun: any) => {
    dispatch(fun)
    goBack()
  }

  useEffect(() => {
    if(!id)toURL('/')
  }, [id,toURL])

  useEffect(() => {
    setProductName(name)
    setProductURL(url)
    setProductDesc(description)
  }, [name, url, description])

  return (
    <Container>
      <Form onSave={() => {

        query(updateProduct({
          id,
          name: productName,
          photo: productURL,
          description: productDesc
        }))
        
      }}
      

onDelete={() => query(deleteProduct(id))}

       desc={"#Id:" + id} title={"Atualizar produto"} save remove cancel>
        <div>
          <Input
            value={productName}
            label="Nome do produto"
            type="text"
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <Input
            value={productURL}
            label="URL da imagem"
            type="url"
            onChange={(e) => setProductURL(e.target.value)}
            required
          />
          <TextArea
            value={productDesc}
            label="Descrição do produto"
            onChange={(e) => setProductDesc(e.target.value)}
            required
          />
        </div>
      </Form>
    </Container>
  );
};

export default UpdateProduct;
