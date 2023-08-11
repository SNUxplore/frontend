import ButtonLink from "~/Components/ButtonLink/ButtonLink";
import InquiryFeedbackAvatar from "../../Assets/Img/inquiryFeedbackAvatar.svg";
import AvatarMobile from "../../Assets/Img/avatarmobile.png";

function InquiryFeedbackSection() {
    return (
        <section className="inquiryFeedbackSection">
            <div class="inquiryFeedbackSection__left">
                <ButtonLink
                content="Get in touch 🥰"
                className="inquiryFeedbackSection__buttons--getInTouchWithEmojiButton"
                />
                <h1 className="inquiryFeedbackSection__left--heading">Have an inquiry or<br/>some feedback for us?</h1>
                <div class="inquiryFeedbackSection__buttons">
                <ButtonLink
                href="https://forms.gle/1yQoc2vJcQ8M6EgA7"
                content="Feedback"
                className="inquiryFeedbackSection__buttons--button inquiryFeedbackSection__buttons--getInTouchButton"
                />
                <ButtonLink
                    content="Instagram"
                    className="inquiryFeedbackSection__buttons--button inquiryFeedbackSection__buttons--instagramButton"
                />
                </div>
            </div>
            <div class="inquiryFeedbackSection__right">
                <img src={InquiryFeedbackAvatar} className="inquiryFeedbackSection__right--img" />
            </div>
            <div class="inquiryFeedbackSection__bottom">
                <img src={AvatarMobile} className="inquiryFeedbackSection__bottom--img" />
            </div> 
        </section>
    );
}

export default InquiryFeedbackSection;