import mapIcon from "../../Assets/Img/mapIconNew.svg";
import phoneIcon from "../../Assets/Img/phoneIcon.svg";
import mailIcon from "../../Assets/Img/mailIcon.svg";

function SafetyCard({
    service = 'Campus Health Services',
    name = 'Dr. Sarah Thompson',
    designation = 'Seniour counsellor',
    links = { navigateTo: 'something', contact: 'Navigate', mail: 'mail'}
}) {
  return (
    <div className="SafetyCardWrapper">
        <div className="SafetyCardWrapper__content">
            <h4 className="SafetyCardWrapper__content--service">{service}</h4>
            <p className="SafetyCardWrapper__content--name">{name}</p>
            <p className="SafetyCardWrapper__content--desc">{designation}</p>
            <div className="SafetyCardWrapper__links">
                <a href="" className="SafetyCardWrapper__links--navigate SafetyCardWrapper__links--link"><img src={mapIcon} className="SafetyCardWrapper__links--icon" />Navigate</a>
                <a href="" className="SafetyCardWrapper__links--contact SafetyCardWrapper__links--link"><img src={phoneIcon} className="SafetyCardWrapper__links--icon" />Contact</a>
                <a href="" className="SafetyCardWrapper__links--mail SafetyCardWrapper__links--link"><img src={mailIcon} className="SafetyCardWrapper__links--icon" />Mail</a>
            </div>
            {/* <a href={link.to} className="FeatureCardWrapper__content--link">{link.text}</a> */}
        </div>
    </div> 
  );
}

export default SafetyCard;
