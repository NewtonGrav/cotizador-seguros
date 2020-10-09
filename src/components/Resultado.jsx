import React from 'react';
import styled from '@emotion/styled';

const Mensaje = styled.p`
	margin-top: 2rem;
	padding: 1rem;
	text-align: center;
	background-color: #22b5c9;
`;

const ResultadoCotizacion = styled.div`
	padding: 1.5rem;
	margin-top: 1rem;
	text-align: center;
	background-color: #22b5c9;
`;

const CotizacionP = styled.p`
	color: white;
	padding: 1rem;
	text-transform: uppercase;
	font-weight: bold;
	margin: 0;
`;

const Resultado = ({ cotizacion }) => {
	return cotizacion === 0 ? (
		<Mensaje>Elige Marca, Año y un Plan</Mensaje>
	) : (
		<ResultadoCotizacion>
			<CotizacionP>
				El total es
				<br />
				<br />$ {cotizacion}
			</CotizacionP>
		</ResultadoCotizacion>
	);
};

export default Resultado;
