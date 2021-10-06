import styled from 'styled-components'

export const Container = styled.div`
    background-color: white;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;

    @media(max-width: 800px) {
        margin-top: -40;
        margin-right: 10px;
        margin-left: 10px;        
      }

      @media(max-width: 500px) {
        width: 420px;
        flex-wrap: wrap;
        margin-right: 120px     
      }

      @media(max-width: 200px) {
        width: 100%      
      }

`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;

`;

export const MonthArrow = styled.div`
    width: 40px;
    text-align: center;
    font-size: 25px;
    cursor: pointer;
`;

export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;

export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;