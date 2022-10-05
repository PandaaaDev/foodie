import { useEffect } from 'react'
import { Formik, useFormik } from 'formik'
import { TextField, Button } from '@mui/material'
import './IgredientForm.scss'
const IngredientForm = () => {
	const validate = values => {
		const errors = {}
		if (values.ingredientName.trim() === '') {
			errors.ingredientName = 'Pole jest puste wprowadź poprawną wartość '
		}
		if (values.ingredientCarbs <= 0) {
			errors.ingredientCarbs = 'Wprowadź poprawną wartość'
		}
		if (values.ingredientFat <= 0) {
			errors.ingredientFat = 'Wprowadź poprawną wartość'
		}
		if (values.ingredientProtein <= 0) {
			errors.ingredientProtein = 'Wprowadź poprawną wartość'
		}
		if (values.ingredientSodium <= 0) {
			errors.ingredientSodium = 'Wprowadź poprawną wartość'
		}
		if (values.ingredientPotasium <= 0) {
			errors.ingredientPotasium = 'Wprowadź poprawną wartość'
		}
		if (values.ingredientKcal <= 0) {
			errors.ingredientKcal = 'Wprowadź poprawną wartość'
		}
		console.log(errors)
		return errors
	}
	const ingredientForm = useFormik({
		initialValues: {
			ingredientCarbs: 0,
			ingredientFat: 0,
			ingredientKcal: 0,
			ingredientName: '',
			ingredientPotasium: 0,
			ingredientProtein: 0,
			ingredientSodium: 0,
		},
		validate,
		onSubmit: values => {
			console.log(values)
		},
	})
	const data = [
		{ id: 'ingredientName', label: 'Nazwa Produktu', variant: 'standard', type: 'text' },
		{ id: 'ingredientCarbs', label: 'Węglowodany', variant: 'standard', type: 'number' },
		{ id: 'ingredientProtein', label: 'Białko', variant: 'standard', type: 'number' },
		{ id: 'ingredientPotasium', label: 'Potas', variant: 'standard', type: 'number' },
		{ id: 'ingredientSodium', label: 'Sód', variant: 'standard', type: 'number' },
		{ id: 'ingredientFat', label: 'Tłuszcz', variant: 'standard', type: 'number' },
		{ id: 'ingredientKcal', label: 'Kcal', variant: 'standard', type: 'number' },
	]
	return (
		<form onSubmit={ingredientForm.handleSubmit} className='form'>
			<div className='input-container'>
				{data.map(e => {
					return (
						<>
							<TextField
								key={e.id}
								id={e.id}
								name={e.id}
								label={e.label}
								type={e.type}
								variant={e.variant}
								onChange={ingredientForm.handleChange}
								onBlur={ingredientForm.handleBlur}
							/>
							{ingredientForm.touched && ingredientForm.errors ? (
								<div>{ingredientForm.errors.id}</div>
							) : null}
						</>
					)
				})}
			</div>
			<Button className='form-button' variant='outlined' type='submit'>
				Dodaj
			</Button>
		</form>
	)
}

export default IngredientForm
