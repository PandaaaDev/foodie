import { useEffect } from 'react'
import { useFormik } from 'formik'
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
	return (
		<form onSubmit={ingredientForm.handleSubmit} className='form'>
			<div className='input-container'>
				<TextField
					id='ingredientName'
					name='ingredientName'
					label='Nazwa Produktu'
					variant='standard'
					type='text'
					onChange={ingredientForm.handleChange}
					value={ingredientForm.values.ingredientName}
				/>
				<TextField
					id='ingredientCarbs'
					variant='standard'
					label='Węglowodany'
					name='ingredientCarbs'
					type='number'
					onBlur={ingredientForm.handleBlur}
					onChange={ingredientForm.handleChange}
					value={ingredientForm.values.ingredientCarbs}
				/>
				<TextField
					id='ingredientFat'
					name='ingredientFat'
					label='Tłuszcz'
					variant='standard'
					type='number'
					onBlur={ingredientForm.handleBlur}
					onChange={ingredientForm.handleChange}
					value={ingredientForm.values.ingredientFat}
				/>
				<TextField
					id='ingredientProtein'
					variant='standard'
					label='Białko'
					name='ingredientProtein'
					type='number'
					onBlur={ingredientForm.handleBlur}
					onChange={ingredientForm.handleChange}
					value={ingredientForm.values.ingredientProtein}
				/>
				<TextField
					id='ingredientSodium'
					variant='standard'
					label='Sód'
					name='ingredientSodium'
					type='number'
					onBlur={ingredientForm.handleBlur}
					onChange={ingredientForm.handleChange}
					value={ingredientForm.values.ingredientSodium}
				/>
				<TextField
					id='ingredientPotasium'
					variant='standard'
					label='Potas'
					name='ingredientPotasium'
					type='number'
					onBlur={ingredientForm.handleBlur}
					onChange={ingredientForm.handleChange}
					value={ingredientForm.values.ingredientPotasium}
				/>
				<TextField
					id='ingredientKcal'
					variant='standard'
					label='Kalorie wyrażone w Kcal'
					name='ingredientKcal'
					type='number'
					onBlur={ingredientForm.handleBlur}
					onChange={ingredientForm.handleChange}
					value={ingredientForm.values.ingredientKcal}
				/>
			</div>
			<Button className='form-button' variant='outlined' type='submit'>
				Dodaj
			</Button>
		</form>
	)
}

export default IngredientForm
