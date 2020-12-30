import React from "react"
import './header-section.scss'

export const HeaderSection = ({ title, description }) => {
	
	return (
		<div className="header-section">
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	)
}