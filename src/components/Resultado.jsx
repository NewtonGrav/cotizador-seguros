import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p`
	margin-top: 2rem;
	padding: 1rem;
	text-align: center;
	background-color: #22b5c9;
`;

const ResultadoCotizacion = styled.div`
	padding: 0.5rem;
	border: 1px solid #26c6da;
	position: relative;
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
			<TransitionGroup component='p' className='resultado'>
				<CSSTransition
					classNames='resultado'
					key={cotizacion}
					timeout={{ enter: 500, exit: 500 }}
				>
					<CotizacionP>El total es $ {cotizacion}</CotizacionP>
				</CSSTransition>
			</TransitionGroup>
		</ResultadoCotizacion>
	);
};

export default Resultado;
