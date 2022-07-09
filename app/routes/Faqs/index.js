import Header from "~/Components/Header/Header";
import styleSheet from "~/styles/routes/Faqs/Faqs.css";
import FaqDropdown from "~/Components/FaqDropdown/FaqDropdown";
import React from "react";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function Index() {
	
	// current response structure for questions
	// Can be modified if the need arises, jsx will have to be modified as well
	const testFAQs = [
		{
			id: 1,
			name: "Category 1",
			questions: [
				{
					id: 1,
					question: "How big is the Campus?",
					answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros."
				},
				{
					id: 2,
					question: "How many Academic blocks?",
					answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros."
				},
				{
					id: 3,
					question: "How many professors reside within?",
					answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in vestibulum odio, nec tristique eros."
				},
			]
		},
		{
			id: 2,
			name: "Category 2",
			questions: [
				{
					id: 1,
					question: "Question 1",
					answer: "Answer 1"
				},
				{
					id: 2,
					question: "Question 2",
					answer: "Answer 2"
				}
			]
		}
	]
	
	const [faqIndex, setFaqIndex] = React.useState(0);
	const [questionIndex, setQuestionIndex] = React.useState(-1);
	
  return (
    <div className="FaqsPage">
      <Header />
			<div className="FaqsPage__mainContainer">
				<section className="mainSection">
					<div className="mainSection__top">
						<div className="mainSection__title">
							<h1>FAQ</h1>
						</div>
						<div className="mainSection__desc">
							<p>
								Nibh turpis porta integer diam. Quis id adipiscing aliquam ut pretium suspendisse eget.
							</p>
						</div>
					</div>
					<div className="mainSection__bottom">
						<div className="mainSection__categories">
							{testFAQs.map((category, index) => (
								<button
									className={
										"mainSection__categoryName "
											+ (index === faqIndex
											? "mainSection__categoryName--active"
											: "")}
									key={category.id}
									onClick={() => {
										setFaqIndex(index);
										setQuestionIndex(-1);
									}}>
									<p>{category.name}</p>
								</button>
							))}
						</div>
						<div className="mainSection__questions">
							{testFAQs[faqIndex].questions.map((question, index) => (
								<FaqDropdown
									key={question.id}
									question={question.question}
									answer={question.answer}
									isExpanded={index === questionIndex}
									onClick={() => {
										if (questionIndex === index) {
											setQuestionIndex(-1);
										} else {
											setQuestionIndex(index);
										}
									}}
								/>
							))}
						</div>
					</div>
				</section>
				</div>
    </div>
  );
}
