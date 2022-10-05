import React from 'react'

const Ingredient = ({data}) => {
	return (<div className='ingredient' >
		<div className="ingredientName">
			{data.ingredientName}
		</div>
		

	</div>)
}

export default Ingredient
