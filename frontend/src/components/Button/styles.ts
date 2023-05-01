import styled from "styled-components";

export const Button = styled.button`
    background-color: ${props => props.buttonBackground};
    color: ${props => props.buttonColor};
    border: none;
    outline: none;
    font-size: 1.8rem;
    padding: 0.8rem 1.8rem;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        filter: brightness(0.8);
    }
`