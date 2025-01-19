import styled from '@emotion/styled'

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

export const Filters = styled.div`
    width: 770px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px 22px;
    margin-bottom: 18px;
`;

export const Form = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const RowElement = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Label = styled.label`
    width: 100%;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.36px;
`;

export const LabelBtn = styled.label`
    width: 100%;
    font-size: 14px;
    font-style: italic;
    font-weight: 500;
    line-height: 16.94px;
    color: #65A8FF;
    cursor: pointer;
`;


export const Inpit = styled.input`
    width: 100%;
    height: 42px;
    border-radius: 15px;
    border: none;
    background: #30333F;
    padding: 0 14.35px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19.36px;
    
    &::placeholder {
        color: #FFFFFFB2;
    }
`;


export const Textarea = styled.textarea`
    width: 100%;
    min-height: 163px;
    border-radius: 15px;
    border: none;
    background: #30333F;
    padding: 15px;
    font-weight: 700;
    font-size: 14px;
    line-height: 18.2px;
    
    &::placeholder {
        color: #FFFFFFB2;
    }
`;

export const BtnBlock = styled.div`
    display: flex;
    width: 100%;
    justify-content: end;
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

