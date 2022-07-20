import React from "react";
import ButtonLink from "~/Components/ButtonLink/ButtonLink";

function StillGotQuestions() {
  return (
    <div className="FaqRedirect">
      <div className="FaqRedirect__left">
        <h1 className="FaqRedirect__title--white">Still have</h1>
        <h1 className="FaqRedirect__title--primaryTextColor">Questions?</h1>
      </div>
      <div className="FaqRedirect__right">
        <div className="FaqRedirect__right--container">
          <p className="FaqRedirect--desc">
            Dignissim morbi scelerisque a mauris nec tellus orci, fringilla. Leo
            lorem arcu donec lectus netus eros. Massa sit magna lacus lorem eu
            metus sem.
          </p>
          <ButtonLink className="FaqRedirect--button" href="/faq" content="Checkout the FAQ" fill2/>
        </div>
      </div>
    </div>
  );
}

export default StillGotQuestions;
