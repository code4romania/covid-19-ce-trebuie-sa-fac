import React from "react";
import { Hero, Instruments } from "@code4ro/taskforce-fe-components";
import UsefulApps from "../../data/useful-apps";
import Card from "./../Card";
import "./styles.scss";
import conduitaImge1 from "../../images/conduita/1.png";
import conduitaImge2 from "../../images/conduita/2.png";
import conduitaImge3 from "../../images/conduita/3.png";
import conduitaImge4 from "../../images/conduita/4.png";
import conduitaImge5 from "../../images/conduita/5.png";
import conduitaImge6 from "../../images/conduita/6.png";
import conduitaImge7 from "../../images/conduita/7.png";
import conduitaImge8 from "../../images/conduita/8.png";
import conduitaImge9 from "../../images/conduita/9.png";
import conduitaImge10 from "../../images/conduita/10.png";
import conduitaImge11 from "../../images/conduita/11.png";
import conduitaImge12 from "../../images/conduita/12.png";
import conduitaImge13 from "../../images/conduita/13.png";
import conduitaImge14 from "../../images/conduita/14.png";
import conduitaImge15 from "../../images/conduita/15.png";
import conduitaImge16 from "../../images/conduita/16.png";
import conduitaImge17 from "../../images/conduita/17.png";
import conduitaImge18 from "../../images/conduita/18.png";
import conduitaImge19 from "../../images/conduita/19.png";
import conduitaImge20 from "../../images/conduita/20.png";
import {
  renderInstrumentItem,
  remapInstrumentsData,
} from "../../utils/instruments.utils";

const Conduita = () => {
  const instrumentsData = remapInstrumentsData(UsefulApps);

  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          <section>
            <Hero title="Port masca corect" useFallbackIcon={true} />
          </section>
          <section className="content">
            <h3 className="has-text-info">Ai grijă să:</h3>
            <div className="columns  is-desktop has-text-centered-mobile">
              <div className="column">
                <Card image={conduitaImge1}>
                  Îți speli/dezinfectezi mâinile înainte să atingi masca.
                </Card>
                <Card image={conduitaImge2}>
                  Verifici ca masca să nu fie ruptă sau găurită.
                </Card>
                <Card image={conduitaImge3}>
                  Pui partea colorată a măștii în exterior.
                </Card>
                <Card image={conduitaImge4}>
                  Identifici latura cu fir metalic a măștii și să o pliezi pe
                  forma nasului.
                </Card>
                <Card image={conduitaImge5}>
                  Fixezi masca cu ajutorul firelor elastice trecute prin spatele
                  urechilor.
                </Card>
              </div>
              <div className="column">
                <Card image={conduitaImge6}>
                  Poziționezi masca astfel încât să acopere atât nasul, cât și
                  gura.
                </Card>
                <Card image={conduitaImge7}>
                  Îndepărtezi masca întotdeauna trăgând de elasticul din spatele
                  urechilor.
                </Card>
                <Card image={conduitaImge8}>
                  Ții masca folosită la distanță de tine și de suprafețe.
                </Card>
                <Card image={conduitaImge9}>
                  Arunci întotdeauna masca la un coș de gunoi, preferabil cu
                  capac.
                </Card>
                <Card image={conduitaImge10}>
                  Speli mâinile sau să le dezinfectezi după ce ai aruncat masca.
                </Card>
              </div>
            </div>

            <h3 className="has-text-info">
              Ai grijă să porți corect masca de protecție!
            </h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/EHePCW5fyJs"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <h3 className="has-text-danger">Ai grijă să NU:</h3>
            <div className="columns  is-desktop has-text-centered-mobile">
              <div className="column">
                <Card image={conduitaImge11}>
                  Folosești o mască ruptă sau umedă.
                </Card>
                <Card image={conduitaImge12}>
                  Acoperi cu masca doar gura sau doar nasul.
                </Card>
                <Card image={conduitaImge13}>
                  Rămână spațiu între mască și față.
                </Card>
                <Card image={conduitaImge14}>
                  Atingi masca cu mâinile în timpul folosirii.
                </Card>
                <Card image={conduitaImge15}>
                  Porți o masca nepotrivită, care nu stă fixă pe față.
                </Card>
              </div>
              <div className="column">
                <Card image={conduitaImge16}>
                  Atingi partea din față a măștii.
                </Card>
                <Card image={conduitaImge17}>
                  Înlături masca atunci când stai de vorbă cu cineva.
                </Card>
                <Card image={conduitaImge18}>Porți masca sub bărbie.</Card>
                <Card image={conduitaImge19}>
                  Lași masca folosită de tine la îndemâna altcuiva.
                </Card>
                <Card image={conduitaImge20}>
                  Refolosești măștile de unică folosință.
                </Card>
              </div>
            </div>

            <h3 className="has-text-danger">
              Ce nu trebuie să faci atunci când porți mască!
            </h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-dsQiqAUTMU"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <h3 className="has-text-info">
              Masca de protecție îți poate salva viața!
            </h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/A8D81ON0psc"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </section>
        </div>
        <aside className="column is-4">
          <Hero title={"Instrumente utile"} useFallbackIcon={true} />

          <Instruments layout="list">
            {instrumentsData.info.map((usefulApp) =>
              renderInstrumentItem(usefulApp)
            )}
            {instrumentsData.news.map((usefulApp) =>
              renderInstrumentItem(usefulApp)
            )}
            {instrumentsData.offer_help.map((usefulApp) =>
              renderInstrumentItem(usefulApp)
            )}
            {instrumentsData.data.map((usefulApp) =>
              renderInstrumentItem(usefulApp)
            )}
            {instrumentsData.diaspora.map((usefulApp) =>
              renderInstrumentItem(usefulApp)
            )}
          </Instruments>
        </aside>
      </div>
    </div>
  );
};

export default Conduita;
