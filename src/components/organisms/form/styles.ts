import styled from "styled-components";
import Theme from "../../../interface/theme";

export const Continer = styled.form`
  display: flex;
  max-width: 50%;
  flex: 1;
  padding: 2rem 0;
  flex-direction: column;
`;

export const Title = styled.h3`
  color: ${({ theme }: Theme) => theme.colors.black};
`

export const Desc = styled.small`
  color: #ccc;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 2rem;

  &>*{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`
export const Footer = styled.div`
  display: flex;
  flex-direction: row;

  &>div{
    display: flex;
    align-items: center;

    &:first-child{
      flex: 1;

      & a,
        & a:link{
          color: ${({ theme }: Theme) => theme.colors.white} !important;
          text-decoration: none;
        }

    }
    &:last-child{
      &>button{
        color: ${({ theme }: Theme) => theme.colors.black};
        background-color: ${({ theme }: Theme) => theme.colors.gray};
        &:first-child{
          margin-right: .5rem;
          background-color: ${({ theme }: Theme) => theme.colors.red};
          color: ${({ theme }: Theme) => theme.colors.white};
        }
      }
    }
  }
`