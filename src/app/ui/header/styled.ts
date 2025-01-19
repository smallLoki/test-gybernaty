import styled from '@emotion/styled'

export const Header = styled.header`
    height: 80px;
    width: 100%;
    background: #2A2C35;
    display: flex;
    justify-content: space-between;
`;

export const LogoBlock = styled.div`
    height: 80px;
    width: 443px;
    display: flex;
    padding-left: 45.55px;
    gap: 15px;
    align-items: center;
    /*& > * {
        width: 33px;
        height: 33px;
    }*/
`;

export const H3 = styled.h3`
    height: 26px;
    font-weight: 400;
    font-size: 20px;
    line-height: 26px;
`;

export const CentralBlock = styled.div`
    width: calc(100% - 1134px);
    height: 80px;
    display: flex;
    padding-left: 20.7px;
    align-items: center;
`;

export const Title = styled.h4`
    height: 20.8px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20.8px;
    vertical-align: center;
`;

export const RightBlock = styled.div`
    width: 691px;
    height: 80px;
    padding: 0 27.45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const SearchPanel = styled.div`
    width: 533px;
    height: 80px;
    display: flex;
    align-items: center;
    gap: 26px;
`

export const InpitSearch = styled.input`
    width: 412px;
    height: 42px;
    border-radius: 10px;
    border: none;
    background: #30333F;
    padding: 0 14.35px;
    
    &::placeholder {
        color: #FFFFFFB2;
    }
`;

export const BtnBlock = styled.div`
    width: 65px;
    display: flex;
    gap: 15px;
`;


