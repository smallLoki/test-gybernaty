import styled from '@emotion/styled'


export const Actionblock = styled.div`
    display: flex;
    gap: 100px;
`;

export const ActionBtn = styled.div`
    display: flex;
    width: 96px;
    justify-content: center;
    gap: 100px;
    color: ${props => (props.OK ? '#65A8FF' : '#F88379')};
    cursor: pointer;
`;
