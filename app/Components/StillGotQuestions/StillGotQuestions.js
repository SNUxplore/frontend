import React from "react";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";

function StillGotQuestions() {
  return (
    <div className="QuesBackdrop">
      <div className="SGQcontainer">
        <div className="SGQleft BigText">
          <p className="SGQtext">
            <span className="StillHave">Still have</span>{" "}
            <span className="spanQuestions">Questions?</span>
          </p>
        </div>
        <div className="SGQright">
          <p className="SGQtext SmallText">
            Dignissim morbi scelerisque a mauris nec tellus orci, fringilla. Leo
            lorem arcu donec lectus netus eros. Massa sit magna lacus lorem eu
            metus sem.
          </p>
          <ButtonLink href="/#faq" content="Checkout the FAQ" fill2 />
        </div>
      </div>
    </div>
  );
}

export default StillGotQuestions;
