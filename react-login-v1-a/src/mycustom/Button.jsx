import React from 'react'

function Button({children, onClick,b_color}) {
	const btn_style = {
		backgroundColor = {b_color},
		color = "white",
		border = "none",
	}
	return (
		<button style={btn_style} onClick={onClick}>{children}</button>
	)
}

export default Button
