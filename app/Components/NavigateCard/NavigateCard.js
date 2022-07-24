import { PhoneCall, EnvelopeSimpleOpen } from 'phosphor-react'


export default function NavigateCard() {
  return (
    <div className="NavCardContainer">
      <div className="NavCardContainer__picture">
        <img src="https://picsum.photos/180"></img>
      </div>
      <div className="NavCardContainer__content">
        <h2>Dining Hall 1</h2>
        <p className="NavCardContainer__content__desc">
        Lorem epsime lorem epsime epsime lorem epsime epsime lorem epsimeLorem epsime lorem epsime
        </p>
        <div className="NavCardContainer__content__ctas">
          <button className='location-button'>Location</button>
          <button className='menu-button'>Menu</button>
        </div>
      </div>
      <div className='NavCardContainer__contact'>
        <PhoneCall size={30} weight="fill"></PhoneCall>
        <EnvelopeSimpleOpen size={30} weight="fill"></EnvelopeSimpleOpen>

      </div>
    </div>
  )
}
