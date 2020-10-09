import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import styled from '@emotion/styled';

const Contenedor = styled.div`
	max-width: 640px;
	margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
	background: #fff;
	padding: 3rem;
`;

function App() {
	const [resumen, setResumen] = useState({
		cotizacion: '',
		datos: { marca: '', anio: '', plan: '' },
	});

	const {datos} = resumen;

	return (
		<Contenedor>
			<Header titulo='Cotizador de seguros' />

			<ContenedorFormulario>
				<Formulario setResumen={setResumen} />

				<Resumen datos={datos} />
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;
