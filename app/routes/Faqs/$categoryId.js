import { Link, useParams } from "@remix-run/react";
import { useOutletContext } from "@remix-run/react";
import FaqDropdown from "~/Components/FaqDropdown/FaqDropdown";

export default function category() {
  const { categoryId } = useParams();
  const [questionIndex, setQuestionIndex] = React.useState(-1);
  const [testFAQs] = useOutletContext();
  return (
    <>
      <div className="mainSection__questions">
        {testFAQs[parseInt(categoryId) - 1].questions.map((question, index) => (
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
    </>
  );
}
