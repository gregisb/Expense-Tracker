import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;
    background-color: #FFF;
    padding: 20px;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    margin-top: 20px;
    font-family: 'Montserrat', sans-serif


    @media(max-width: 800px) {
        margin-top: -40;
        margin-right: 10px;
        margin-left: 10px;        
      }

      @media(max-width: 500px) {
        width: 450px;
        flex-wrap: wrap;
        margin-right: 15px     
      }

      @media(max-width: 200px) {
        width: 100%     
      }
`;

export const TableHeadCollumn = styled.th<{ width?: number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'}
    padding: 10px 0;
    text-align: left;
    font-family: 'Montserrat', sans-serif


`;