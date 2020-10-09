import React, { useState } from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

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
		cotizacion: 0,
		datos: { marca: '', anio: '', plan: '' },
	});
	const [cargando, setCargando] = useState(false);

	const { cotizacion, datos } = resumen;

	return (
		<Contenedor>
			<Header titulo='Cotizador de seguros' />

			<ContenedorFormulario>
				<Formulario setResumen={setResumen} setCargando={setCargando} />

				<Resumen datos={datos} />

				{cargando ? <Spinner /> : null}

				{!cargando ? <Resultado cotizacion={cotizacion} /> : null}
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;
