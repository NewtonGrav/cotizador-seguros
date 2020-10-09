import React, { useState } from 'react';
import styled from '@emotion/styled';
import { diferenciaDeAnios, porcentajeAumentoDeMarca } from './../helpers';

const Campo = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
`;

const Label = styled.label`
	flex: 0 0 100px;
`;

const Select = styled.select`
	width: 100%;
	padding: 1rem;
	border: 1px solid #e1e1e1;
`;

const InputRadio = styled.input`
	margin: 0 0.5rem 0 1.5rem;
`;

const Button = styled.button`
	width: 100%;
	margin-top: 3rem;
	padding: 1rem;
	font-weight: bold;
	text-transform: uppercase;
	border: none;
	background-color: #22b5c9;
	color: white;
	transition: background-color 0.3s ease;

	:hover {
		cursor: pointer;
		background-color: #1fa5b7;
	}
`;

const Error = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	padding: 1rem;
	text-align: center;
	background-color: red;
	color: white;
	font-size: 1.25rem;
`;

const Formulario = () => {
	const [datos, setDatos] = useState({
		marca: '',
		anio: '',
		plan: '',
	});
	const [errorFormulario, setErrorFormulario] = useState(false);

	const { marca, anio, plan } = datos;

	const obtenerDatos = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const cotizarSeguro = (e) => {
		e.preventDefault();

		const MONTO_BASE = 2000;
		const PORCENTAJE_POR_ANIO = 3;

		if (marca.trim() === '' || anio.trim() === '' || plan.trim() === '') {
			setErrorFormulario(true);
			return;
		}
		setErrorFormulario(false);

		let total = MONTO_BASE;

		total -= (PORCENTAJE_POR_ANIO / 100) * total * diferenciaDeAnios(anio);

		total *= porcentajeAumentoDeMarca(marca);
		console.log(total);

		// TODO Plan (Basico - 	20% | COmpleto - 50%)

		// TODO TOTAL (helper)
	};

	return (
		<form onSubmit={cotizarSeguro}>
			{errorFormulario ? <Error>Todos los campos son obligatorios</Error> : null}

			<Campo>
				<Label htmlFor='marca'>Marca</Label>
				<Select name='marca' value={marca} id='marca' onChange={obtenerDatos}>
					<option value=''>-- Seleccione --</option>
					<option value='americano'>Americano</option>
					<option value='europeo'>Europeo</option>
					<option value='asiatico'>Asiatico</option>
				</Select>
			</Campo>

			<Campo>
				<Label htmlFor='anio'>Año</Label>
				<Select name='anio' value={anio} id='anio' onChange={obtenerDatos}>
					<option value=''>-- Seleccione --</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
					<option value='2018'>2018</option>
					<option value='2017'>2017</option>
					<option value='2016'>2016</option>
					<option value='2015'>2015</option>
					<option value='2014'>2014</option>
					<option value='2013'>2013</option>
					<option value='2012'>2012</option>
				</Select>
			</Campo>

			<Campo>
				<Label htmlFor='plan'>Plan</Label>
				<label htmlFor='plan-basico'>
					<InputRadio
						id='plan-basico'
						type='radio'
						name='plan'
						value='basico'
						checked={plan === 'basico'}
						onChange={obtenerDatos}
					/>
					Básico
				</label>
				<label htmlFor='plan-completo'>
					<InputRadio
						id='plan-completo'
						type='radio'
						name='plan'
						value='completo'
						checked={plan === 'completo'}
						onChange={obtenerDatos}
					/>
					Completo
				</label>
			</Campo>

			<Button type='submit'>Cotizar</Button>
		</form>
	);
};

export default Formulario;
