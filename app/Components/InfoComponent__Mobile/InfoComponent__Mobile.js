import Feature1Img from "../../Assets/Img/Feature-1.svg";
import arrowLeft from "../../Assets/Img/arrowLeft.svg";
import arrowRight from "../../Assets/Img/arrowRight.svg";

export default function InfoComponent__Mobile() {
  return (
    <div className="MobileContainer">
      <h1 className="MobileContainer__title">
        Navigate <span>Campus</span>
      </h1>
      <p className="MobileContainer__desc">
        We get it, navigating the university can be challenging! But have no
        worries, We can connect you to resourses that will unlock all that Shiv
        Nadar University has to offer.
      </p>
      <div className="MobileContainer__ImageContainer">
        <img src={Feature1Img}></img>
      </div>
      <div className="MobileContainer__scrollerContainer">
        <img src={arrowLeft} />
        <div className="MobileContainer__scrollerContainer__indicators"></div>
        <img src={arrowRight} />
      </div>
    </div>
  );
}
