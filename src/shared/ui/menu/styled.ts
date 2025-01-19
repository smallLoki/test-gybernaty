import styled from '@emotion/styled'




export const Menu = styled.span`
    position: relative;
    width: 53px;
    height: 53px;
    padding: 2px 15px;
    border-radius: 15px;
    color: #434555;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    cursor: pointer;
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 100%;
    right: 50%;
    width: auto;
    height: auto;
    padding: 10px;
    border-radius: 15px;
    background: #E5E6EE;
    color: #30333F;
    font-weight: 400;
    font-size: 15px;
    line-height: 19.5px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const Item = styled.div`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: left;
    gap: 9px;
    align-items: center;
`;

