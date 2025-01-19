import styled from '@emotion/styled'

export const Header = styled.nav`
    height: calc(100vh - 80px);
    width: 443px;
    padding: 49px 48px;
    background: #30333F;
`;

export const Button = styled.button`
    height: 50px;
    width: 241px;
    padding: 0;
    margin-bottom: 42px;
    border-radius: 10px;
    border: none;
    background: #E5E6EE;
    font-weight: 700;
    font-size: 24px;
    line-height: 31.2px;
    color: #434555;
`;

export const Menu = styled.div`
    height: auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 33px;
`;

export const Item = styled.div`
    position: relative;
    height: ${props => (props.active ? '32px' : '24px')};
    padding-bottom: ${props => (props.active ? '8px' : 'none')};
    background: #30333F;
    font-weight: 400;
    font-size: 20px;
    line-height: 24.2px;
    color: #ffffff;
    cursor: pointer;
    &:after {
        content: '';
        position: absolute;
        display: ${props => (props.active ? 'block' : 'none')};
        width: 100%;
        height: 5px;
        background: #E5E6EE;
        border-radius: 2.5px;
        bottom: 0;
    }
`;




