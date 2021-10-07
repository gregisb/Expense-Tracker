import styled from 'styled-components';

export const Container = styled.div`
    
`;

export const Header = styled.div`
    background-color: #004358;
    height: 150px;
    text-align: center;
    font-family: 'Montserrat', sans-serif


    @media(max-width: 800px) {
        margin-top: -40;
        margin-right: 10px;
        margin-left: 10px;        
      }

      @media(max-width: 500px) {
        width: 460px;
        flex-wrap: wrap;
        margin-right: 10px;
        border-radius: 10px   
      }

      @media(max-width: 200px) {
        width: 100%     
      }

     
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: white;
    padding-top: 30px;

`;

export const Body = styled.div`
    margin: auto;
    max-width: 980px;
    margin-bottom: 50px;
    font-family: 'Montserrat', sans-serif

    
`;
