import React from 'react';
import styled from '@emotion/styled';

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align:center;
  background-color: #00838f;
  color: white;
  margin-top: 2rem;
`;

function Resumen({ datos }) {
	const { marca, anio, plan } = datos;

	if (marca === '' || (anio === '') | (plan === '')) return null;

	return (
		<ContenedorResumen>
			<h2>Resumen</h2>
			<ul>
				<li>Marca: {marca}</li>
				<li>Año: {anio}</li>
				<li>Plan: {plan}</li>
			</ul>
		</ContenedorResumen>
	);
}

export default Resumen;
