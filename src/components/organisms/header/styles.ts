import styled from "styled-components";
import Theme from "../../../interface/theme";

export const Continer = styled.header`
  position: sticky !important;
  top: 0;
  left: 0;
  display: flex;
  z-index: 10;

  & > div {
    position: relative;
    background-color: ${({ theme }: Theme) => theme.colors.white} !important;
    padding: 1rem;
    flex: 1;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: ${({ theme }: Theme) => theme.colors.white};
      height: .08rem;
      width: 100%;
      border-top: solid .08rem rgba(0,0,0,.05);
      border-bottom: solid .08rem rgba(0,0,0,.05);
    }
  }
`;
