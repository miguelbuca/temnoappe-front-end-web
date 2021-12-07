import styled from "styled-components";
import Theme from "../../../interface/theme";

export const Continer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Image = styled.img`
  width: auto;
  max-height: 3rem;
  margin-right: 1.5rem;
`;
export const Title = styled.strong`
  color: ${({ theme }: Theme) => theme.colors.blue};
`;
