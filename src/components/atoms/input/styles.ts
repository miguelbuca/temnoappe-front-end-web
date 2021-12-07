import styled from "styled-components";
import Theme from "../../../interface/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  margin-bottom: 1rem;
  position: relative;

  &>span{
      position: absolute;
      color: #ccc;
      background-color: ${({ theme }: Theme) => theme.colors.white};
      margin-top: -.5rem;
      margin-left: 1rem;
      padding: 0 .5rem;
  }

  & > *:not(:first-child) {
    padding: 1rem 1.5rem;
    border: solid 1px ${({ theme }: Theme) => theme.colors.gray};
    border-radius: 8px;
    background-color: transparent;
    outline: none;
  }

  &>textarea{
    resize: none;
    height: 5rem;
  }
`;
