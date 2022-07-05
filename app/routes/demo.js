import styleSheet from "~/styles/routes/demo.css";
import StillGotQuestions from "~/Components/StillGotQuestions/StillGotQuestions";

export function links() {
  return [{ rel: "stylesheet", href: styleSheet }];
}

export default function DemoPage() {
  return (
    <div className="DemoPage">
      This is a demo page template.
      <StillGotQuestions />
    </div>
  );
}
