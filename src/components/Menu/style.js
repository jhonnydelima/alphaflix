import styled from 'styled-components';

export const LogoImage = styled.img`
    max-width: 168px;

    @media (max-width: 800px) {
        max-width: 105px;
    }
`;

export const MenuWrapper = styled.nav`
    height: 94px;
    width: 100%;
    z-index: 100;

    align-items: center;
    display: flex;
    justify-content: space-between;

    left: 0;
    padding-left: 5%;
    padding-right: 5%;
    position: fixed;
    top: 0;

    background-color: var(--black);
    border-bottom: 2px solid var(--primary);

    @media (max-width: 800px) {
        height: 40px;
        justify-content: center;
    }
`;