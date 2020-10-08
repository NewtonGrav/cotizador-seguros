import React from 'react';
import styled from '@emotion/styled'

const ContenedorHeader = styled.header`
	padding: 10px;
	font-weight: bold;
	background: #22b5c9;
	color: #fff;
`;

const TituloH1 = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: 'Slabo 27px', sans-serif;
  text-align: center;
`;


const Header = ({ titulo }) => {
	return (
		<ContenedorHeader>
			<TituloH1>{titulo}</TituloH1>
		</ContenedorHeader>
	);
};

export default Header;
