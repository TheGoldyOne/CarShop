import React, { Component } from 'react';
import './CarCards.scss';
import CarData from './CarData';
import {
  FaRegCheckCircle,
  FaRegQuestionCircle,
  FaCrown,
  FaRegCalendarAlt,
  FaPhoneAlt,
  FaTachometerAlt,
  FaCity,
} from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

interface CardInterface {
  name: string;
  description: string;
  image: string;
  city: string;
  age: number;
  verified: boolean;
  vip: boolean;
  mileage: string;
  phone: string;
  countryOfOrigin: string;
  special: boolean;
}

interface CardState {
  show: boolean;
}

// const handleDragStart = (e: any) => e.preventDefault();

class Card extends Component<CardInterface, CardState> {
  constructor(props: CardInterface) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleInfo = () => {
    //TODO: REMOVE THIS
    console.log('toggle show');
    this.setState({
      show: !this.state.show,
    });
  };


  countryOfOriginDict: any  = {
    "Polska": "🇵🇱",
    "Niemcy": "🇩🇪",
    "USA": "🇺🇸",
    "Francja": "🇫🇷",
    "Szwajcaria": "🇨🇭",
    "Włochy": "🇮🇹",
    "Wielka Brytania": "🇬🇧",
    "Austria": "🇦🇹",
    "Szwecja": "🇸🇪",
  }



  render() {
    let verified: any = [];
    verified.push(
      this.props.verified ? (
        <FaRegCheckCircle data-tip="Numer VIN zweryfikowany" />
      ) : (
        <FaRegQuestionCircle data-tip="Numer VIN niezweryfikowany" />
      )
    );

    let special: any = [];
    special.push(
      this.props.special ? (
        <div className="special">Oferta Specjalna!</div>
      ) : (
        <div></div>
      )
    );

    return (
      <div className={`card ${this.props.vip ? 'vip' : ''}`} >
        <div className="countryOfOrigin" data-tip={`Kraj pochodzenia: ${this.props.countryOfOrigin}`}>
          {this.countryOfOriginDict[this.props.countryOfOrigin]}
        </div>
        {special}
        <FaRegCalendarAlt className="moreInfoIcon" onClick={this.toggleInfo} data-tip="Więcej Informacji" />

        <div className={`more-info ${this.state.show ? 'active' : 'disabled'}`}>
          <div className="moreDetails">
            <div className="item" data-tip="Telefon"><FaPhoneAlt/>&nbsp;{this.props.phone}</div>
            <div className="item" data-tip="Przebieg"><FaTachometerAlt/>&nbsp;{this.props.mileage} km.</div>
            <div className="item" data-tip="Miasto"><FaCity/>&nbsp;{this.props.city}</div>
          </div>
        </div>

        <div
          className="imgBox"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255,0,0,0) 60%, #161A26 95%),url("${this.props.image}")`,
          }}
        ></div>
        <FaCrown
          className="vipIcon"
          data-tip="Ogłoszenie Premium"
          style={{ display: `${this.props.vip ? 'block' : 'none'}` }}
        />
        <div className="cardTitle">
          {this.props.name}
          <div className="details">{this.props.city}, {this.props.age}r. - {this.props.mileage} km</div>
        </div>
        <div className="verified">{verified}</div>
      </div>
    );
  }
}

function random(arr: Array<any>) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const randomPhoneNumber = () => {
  return `${Math.floor(Math.random() * 9)}${Math.floor(
    Math.random() * 9
  )}${Math.floor(Math.random() * 9)}-${Math.floor(
    Math.random() * 9
  )}${Math.floor(Math.random() * 9)}${Math.floor(
    Math.random() * 9
  )}-${Math.floor(Math.random() * 9)}${Math.floor(
    Math.random() * 9
  )}${Math.floor(Math.random() * 9)}`;
};

const data: any = [];

for (var i = 0; i < 100; i++) {
  const d: any = CarData[0];

  data.push(
    <Card
      name={random(d['name'])}
      description={random(d['name'])}
      image={random(d['img'])}
      city={random(d['city'])}
      age={random(d['age'])}
      verified={random(d['verified'])}
      vip={random(d['vip'])}
      mileage={random(d['mileage'])}
      phone={randomPhoneNumber()}
      countryOfOrigin={random(d['countryOfOrigin'])}
      special={i ? false : true}
    />
  );
}

export default class CarCards extends Component {
  render() {
    return (
      <div className="CarCards">
        <ReactTooltip effect="solid" />
        <div className="cards">{data}</div>
      </div>
    );
  }
}
