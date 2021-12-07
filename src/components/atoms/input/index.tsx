import {
  InputTextProps,
  TextAreaTextProps,
} from "../../../interface/components";
import { Container } from "./styles";

const Input = ({ label, ...args }: InputTextProps) => {
  return (
    <Container>
      <span>
        <small>{label}</small>
      </span>
      <input {...args} />
    </Container>
  );
};

export default Input;

export const TextArea = ({ label, ...args }: TextAreaTextProps) => {
  return (
    <Container>
      <span>
        <small>{label}</small>
      </span>
      <textarea {...args} />
    </Container>
  );
};
