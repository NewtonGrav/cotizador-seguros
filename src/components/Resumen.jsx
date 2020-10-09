import React from 'react';

function Resumen({ datos }) {
	const { marca, anio, plan } = datos;

	if (marca === '' || (anio === '') | (plan === '')) return null;

	return (
		<div>
			<h2>Resumen</h2>
			<ul>
				<li>Marca: {marca}</li>
				<li>Año: {anio}</li>
				<li>Plan: {plan}</li>
			</ul>
		</div>
	);
}

export default Resumen;
