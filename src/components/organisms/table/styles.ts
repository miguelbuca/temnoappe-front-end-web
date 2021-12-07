import styled from "styled-components";
import Theme from "../../../interface/theme";

export const Container = styled.table`
  font-size: 0.8rem;
  border-collapse: collapse;

  & a,
  & a:link {
    flex: 1;
    display: flex;
    align-items: center;
    text-decoration: none !important;
    text-decoration: none;
    color: inherit !important;
    
    & span{
      flex: 1;
      padding: 0 .5rem !important;

      &:last-child{
        flex: 3;
      }
    }
  }

  & td,
  th {
    text-align: start !important;
    flex: 1;
  }

  & tr {
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.005);
    }
  }

  & thead {
    width: 100%;

    & tr {
      background-color: ${({ theme }: Theme) => theme.colors.grayLight};
      border-bottom: solid 0.08rem rgba(0, 0, 0, 0.05);
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;

      & > th {
        text-transform: uppercase;
        padding: 1rem 0.5rem;
      }
    }
  }

  & tbody tr {
    border-radius: 8px;
  }

  & tr {
    display: flex;
    align-items: center;
    width: 100%;

    &:nth-child(2n) {
      background-color: ${({ theme }: Theme) => theme.colors.grayLight};
    }

    & th,
    td {
      color: #6e6e6e;
      align-items: flex-start;

      &:last-child {
        flex: 3;
      }
    }

    & td:nth-child(2){
        color: ${({ theme }: Theme) => theme.colors.black};
      }
  }
`;
export const Image = styled.img`
  height: 2.5rem;
  width: 2.5rem;
`;
