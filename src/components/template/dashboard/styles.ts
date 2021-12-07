import styled from "styled-components";

export const Continer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;

    &>div:last-child{
        padding: 1rem;
        display: flex;
        flex: 1;
    }
`