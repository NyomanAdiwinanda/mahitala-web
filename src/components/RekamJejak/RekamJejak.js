import React from "react";
import map from "./map-indo.png";
import "./RekamJejak.css";

class RekamJejak extends React.Component {
  render() {
    return (
      <div className="rekamjejak-component">
        <div className="peta-rekamjejak">
          <img alt="Peta Indonesia" src={map} />
        </div>
        <div className="detail-rekamjejak">
          <div className="judul-rekamjejak">
            <h3>Rekam Jejak</h3>
            <p>Wandering Season 1974 - 2019</p>
          </div>
          <div className="ing-rekamjejak">
            <div className="list1">
              <p>Panjat Tebing</p>
              <p>Penelurusan Gua</p>
              <p>Olahraga Arus Deras</p>
            </div>
            <div className="list2">
              <p>Penyelaman Laut</p>
              <p>Pendakian Gunung</p>
              <p>Pengamatan Masyarakat Tradisional</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RekamJejak;
