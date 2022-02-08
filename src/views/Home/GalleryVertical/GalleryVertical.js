import React from "react";
import Oliver from "../../../assets/zdj/oliver.jpg";
import Sven from "../../../assets/zdj/s_wienmann.jpg";
import Maciej from "../../../assets/zdj/m_wierzbowski.jpg";
import "./GalleryVertical.scss";

const GalleryVertical = () => {
  return (
    <div className="grid-column-3">
      <figure>
        <img src={Oliver} alt="Oliver" className="img img-1"></img>
        <figcaption>
          Oliver Weimann <br />
          Członek Rady Zarządu
          <br />
          WETOG GmbH
        </figcaption>
      </figure>

      <figure>
        <img src={Sven} alt="Sven" className="img img-2"></img>
        <figcaption>
          Sven Göth <br />
          Członek Rady Zarządu <br />
          Futuriser GmbH
        </figcaption>
      </figure>

      <figure>
        <img src={Maciej} alt="Maciej" className="img img-3"></img>
        <figcaption>
          Maciej Wierzbowski <br />
          Członek Rady Zarządu
          <br />
          Securino
        </figcaption>
      </figure>
    </div>
  );
};

export default GalleryVertical;
