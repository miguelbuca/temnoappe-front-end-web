import styled from "styled-components";
import Theme from "../../../interface/theme";

export const Container = styled.div`
    display: flex;
    background-color: ${(({ theme }: Theme)=>theme.colors.white)};
    flex: 1;
    padding: 1rem;
    margin-right:10rem ;
`