import React from "react";
import "./Collections.css";
import Image from "../../components/image/image";
const Collections = () => {
  return (
    <div className="collections">
      {/* collection  */}
      <div className="collection">
        <Image path="/pins/pin1.jpeg" alt="Orange juice" />
        <div className="collectionInfo">
          <h1>Orange juice</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>

      <div className="collection">
        <Image path="/pins/pin2.jpeg" alt="Creamy soup" />
        <div className="collectionInfo">
          <h1>Creamy soup</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>

      <div className="collection">
        <Image path="/pins/pin3.jpeg" alt="Tea & flowers" />
        <div className="collectionInfo">
          <h1>Tea & flowers</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin4.jpeg" alt="Cheesecake" />
        <div className="collectionInfo">
          <h1>Cheesecake</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>

      <div className="collection">
        <Image path="/pins/pin5.jpeg" alt="Blossom branch" />
        <div className="collectionInfo">
          <h1>Blossom branch</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin6.jpeg" alt="Street vendors" />
        <div className="collectionInfo">
          <h1>Street vendors</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin7.jpeg" alt="Wheat field" />
        <div className="collectionInfo">
          <h1>Wheat field</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin8.jpeg" alt="Frosty trees" />
        <div className="collectionInfo">
          <h1>Frosty trees</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin9.jpeg" alt="Sailboat" />
        <div className="collectionInfo">
          <h1>Sailboat</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin10.jpeg" alt="Historic building" />
        <div className="collectionInfo">
          <h1>Historic building</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
      <div className="collection">
        <Image path="/pins/pin11.jpeg" alt="City evening" />
        <div className="collectionInfo">
          <h1>City evening</h1>
          <span>12 Pins . 1w</span>
        </div>
      </div>
    </div>
  );
};
import "./Collections.css";
export default Collections;
