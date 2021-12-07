import styled from "styled-components";
import Theme from "../../../interface/theme";

export const Container = styled.button`
    background-color: ${(({ theme }: Theme) => theme.colors.green)};
    color: ${(({ theme }: Theme) => theme.colors.white)};
    padding: .6rem .9rem;
    border-radius: 10px;
    border: none !important;
    cursor: pointer;
`