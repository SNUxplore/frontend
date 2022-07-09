import React from "react";
import "./FaqDropdown.css";

function FaqDropdown({ question, answer, isExpanded, onClick }) {
	return (
		<div className="dropDown__questionBox">
			<button
				className="dropDown__question"
				onClick={onClick}
			>
				<p>{question}</p>
				<div
					className={`
					dropDown__questionExpanded
					${isExpanded ? "dropDown__questionExpanded--active" : ""}
					`}>
					<p>+</p>
				</div>
			</button>
			<div
				className={
					"dropDown__answer "
					+ (isExpanded ? "dropDown__answer--active" : "")}>
				<p>{answer}</p>
			</div>
			<div className="dropDown__borderLine"></div>
		</div>
	);
}

export default FaqDropdown;