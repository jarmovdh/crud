import styled from 'styled-components';

export const Button = styled.button`
  width: 80px; 
  height: 80px; 
  border-radius: 50%; 
  border: 1px solid black; 
  background-color: #6A9C89;
  text-align: center;
  line-height: 50px; 
  font-size: 8px; 
  cursor: pointer;
  transition: background-color 0.3s;

	&:hover {
		background-color: #C1D8C3;
	}
`;