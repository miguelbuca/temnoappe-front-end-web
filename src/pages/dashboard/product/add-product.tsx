import { useState } from "react";
import Input, { TextArea } from "../../../components/atoms/input";
import { useDispatch } from "react-redux";
import Form from "../../../components/organisms/form";
import { setProduct } from "../../../redux/product/action";
import { Container } from "./add-product.styles";

import useRedirect from '../../../hooks/useRedirect'

const AddProduct = () => {

  const dispatch = useDispatch();
  const { goBack  } = useRedirect()

  const [name, setName] = useState<string>('')
  const [url, setUrl] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  return (
    <Container>
      <Form onSave={() => {

        dispatch(setProduct({
          name: name,
          photo: url,
          description: desc
        }))

        goBack()
        
      }} title={"Cadastrar novo Produto"} save>
        <div>
          <Input
            label="Nome do produto"
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            label="URL da imagem"
            type="url"
            onChange={(e) => setUrl(e.target.value)}
            required
          />
          <TextArea
            label="Descrição do produto"
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
      </Form>
    </Container>
  );
};

export default AddProduct;
