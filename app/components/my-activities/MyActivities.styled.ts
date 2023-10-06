import styled from 'styled-components';

export const Container = styled.div`
 display: grid;
 grid-auto-flow: row;
 gap: 10px;
`;		

export const Card = styled.div`
	border-radius: 35px;
  background-color:#C1D8C3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
	cursor: pointer;
  padding: 20px;
  transition: transform 0.3s; 

  &:hover {
    transform: scale(1.01); /* Optional: Slightly enlarge the card on hover */
  }
`;
