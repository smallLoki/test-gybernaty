import styled from "@emotion/styled";

export const MainBlock = styled.main`
    height: calc(100vh - 80px);
    width: 100%;
    display: flex;
    justify-content: space-between;
`;



export const MainDiv = styled.div`
    height: calc(100vh - 80px);
    width: calc(100vw - 443px);
    background: #434555;
    padding: 25px 40px;
    overflow: auto;
`;

export const Breadcrumbs = styled.div`
    font-weight: 400;
    font-size: 20px;
    font-style: italic;
    line-height: 24.2px;
    color: #ffffff;
    display: flex;
    gap: 8px;
    margin-bottom: 18px;
`;

export const Section = styled.span`
    color: ${props => (props.Active ? '#FFF' : '#65A8FF')};
`;

export const Title = styled.h2`
    margin-bottom: 18px;
    font-weight: 700;
    font-size: 36px;
    line-height: 43.57px;
`

export const FiltersBlock = styled.div`
    display: flex;
    margin-bottom: 18px;
    justify-content: space-between;
    gap: 20px 22px;
`;

export const Filters = styled.div`
    width: 770px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 22px;
    margin-bottom: 18px;
`;

export const InpitSearch = styled.input`
    width: 324px;
    height: 42px;
    border-radius: 10px;
    border: none;
    background: #30333F;
    padding: 0 14.35px;
    
    &::placeholder {
        color: #FFFFFFB2;
    }
`;

export const CheckBox = styled.div`
    display: flex;
    height: 42px;
    padding: 0 14px;
    border-radius: 10px;
    align-items: center;
    background: #E5E6EE;
    color: #30333F;
    font-weight: 600;
    font-size: 16px;
    line-height: 20.8px;
    cursor: pointer;
`;

export const DropdownList = styled.div`
    display: flex;
    height: 42px;
    padding: 0 14px;
    border-radius: 10px;
    align-items: center;
    gap: 8px;
    background: #30333F;
    color: #E5E6EE;
    font-weight: 600;
    font-size: 16px;
    line-height: 20.8px;
    cursor: pointer;
`;

export const Tag = styled.div`
    display: flex;
    height: 42px;
    padding: 0 14px;
    border-radius: 10px;
    align-items: center;
    gap: 8px;
    background: #E5E6EE;
    color: #30333F;
    font-weight: 400;
    font-size: 15px;
    line-height: 19.5px;
    cursor: pointer;
`;

export const BtnBlock = styled.div`
    display: flex;
    gap: 15px;
`;

export const Button = styled.button`
    width: 79px;
    height: 42px;
    padding: 0;
    border-radius: 10px;
    border: 1.5px solid #E5E6EE;
    background: ${props => (props.OK ? '#E5E6EE' : 'transparent')};
    color: ${props => (props.OK ? '#30333F' : '#E5E6EE')};
    font-weight: 400;
    font-size: 16px;
    line-height: 20.8px;
`;

export const Table = styled.div`
    width: 100%;
    height: calc(100vh - 404px);
    border-radius: 15px;
    border: 2.5px solid #30333F;
    overflow: auto;
`;

export const Status = styled.span`
    width: 93px;
    height: 30px;
    padding: 2px 15px;
    border-radius: 15px;
    background: #E5E6EE;
    color: #434555;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
`;

export const NoProjects = styled.div`
    width: 100%;
    height: calc(100% - 65px);
    padding-bottom: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CenterText = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    gap: 7px;
`;
