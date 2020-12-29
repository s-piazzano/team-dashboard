import React from "react"
import "./section-head.scss";

export const SectionHead = ({ id, sectionRefs, positionInMenu, title, bodyContent, headAction, buttonValue }) => {

	return (
		<section
			key={id}
			id={id}
			className="section-head"
			ref={ref => sectionRefs.current[positionInMenu] = ref}
		>
			<div className="head-title">
				<h2>{title}</h2>
			</div>
			<div className="head-content">
				<p>{bodyContent}
				</p>
			</div>
			<div className="head-button">
				<button onClick={headAction}>
					<svg>
						<rect></rect>
					</svg>
          {buttonValue}
				</button>
			</div>
		</section>
	)
}