import { Link } from "react-router-dom";
import { FormProps } from "../../../interface/components";
import Button from "../../atoms/button";
import { Continer, Body, Title, Footer, Desc } from "./styles";

const Form = ({
  title,
  children,
  desc,
  save,
  redirect,
  cancel,
  remove,
  ...args
}: FormProps) => {
  return (
    <Continer onSubmit={e=>e.preventDefault()} {...args}>
      <div>
        <Title>{title}</Title>
        {desc && <Desc>{desc}</Desc>}
      </div>
      <Body>
        <div>{children}</div>
      </Body>
      <Footer>
        <div>
          {save && <Button onClick={args?.onSave} title="Salvar" />}
          {redirect && (
            <Button>
              <Link to={redirect?.route}>{redirect?.title}</Link>
            </Button>
          )}
        </div>
        <div>
          {remove && <Button onClick={args?.onDelete} title="Excluir" />}
          {cancel && (
            <Button onClick={args?.onCancel}>
              <Link to='/'>Cancelar</Link>
            </Button>
          )}
        </div>
      </Footer>
    </Continer>
  );
};

export default Form;
