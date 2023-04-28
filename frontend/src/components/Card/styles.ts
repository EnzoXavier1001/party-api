import styled from "styled-components";

export const Card = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;


`

export const WrapperImg = styled.div`
    position: relative;

    img {
        width: 100%;
        height: 300px;
        display: block;
        object-fit: cover;
    }
    
    &::after {
            content: "";
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.4);
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: all 0.5s ease 0s;
        }

        &:hover::after {
            opacity: 1;
        }
   
`

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.4rem;
`

export const CardTitle = styled.h2`
    font-size: 1.8rem;
    color: var(--second-color);
    font-weight: 600;
`

export const CardImage = styled.image`
    max-width: 100%;
    display: block;
`

export const Button = styled.button`
    background-color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.6rem 1.8rem;
    border-radius: 8px;
    color: var(--second-color);
    border: 1px solid var(--second-color);
    font-weight: 600;
    font-size: 1.7rem;
`