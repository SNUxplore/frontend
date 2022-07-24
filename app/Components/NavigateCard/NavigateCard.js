import React from 'react'
import logo from "../../Assets/Img/xploreLogo.svg"
import { PhoneCall, Envelope } from 'phosphor-react'


export default function NavigateCard() {
  return (
    <div className="NavCardContainer">
      <div className="NavCardContainer__picture">
        <img src="https://picsum.photos/220"></img>
      </div>
      <div className="NavCardContainer__content">
        <h2>Dining Hall 1</h2>
        <p className="NavCardContainer__content__desc">
        Lorem epsime lorem epsime epsime lorem epsime epsime lorem epsimeLorem epsime lorem epsime
        </p>
        <div className="NavCardContainer__content__ctas">
          <button>Location</button>
          <button>Menu</button>
        </div>
      </div>
      <div className='NavCardContainer__contact'>
        <PhoneCall size={32} weight="bold"></PhoneCall>
        <Envelope size={32} weight="bold"></Envelope>

      </div>
    </div>
  )
}
