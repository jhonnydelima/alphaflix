import styled from "styled-components";

const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 5px;
    color: var(--white);
    font-size: 16px;
    font-weight: bold;
    padding: 16px 24px;
    outline: none;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
        opacity: .5;
    }

    @media (max-width: 800px) {
        background-color: var(--primary);
        border: 0;
        border-radius: 0;
        bottom: 0;
        left: 0;
        right: 0;
        position: fixed;
        text-align: center;
    }
`;

export default Button;