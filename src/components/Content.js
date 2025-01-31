import UiButton from './UiButton';
import check from '../assets/check.svg';
import community from '../assets/community.svg';
import highlight from '../assets/highlight.png';
import amb from '../assets/amb-l1.svg';
import ambassador from '../assets/ambassador.svg';
import bridge from '../assets/bridge.svg';
import binance from '../assets/binance.svg';
import swap from '../assets/swap.png';
import firepot from '../assets/firepot.svg';
import roadmap from '../assets/roadmap.svg';
import logoSymbol from '../assets/logo-symbol.svg';
import Contact from './Contact';
import {usePrismicPageData} from "../hooks/usePrismicPageData";
import {PrismicText} from "@prismicio/react";

const Content = () => {
  const data = usePrismicPageData('homepage');

  return data && (
    <div className="content">
      <div id="about" className="about-us">
        <img src={logoSymbol} className={"about-us__logo-symbol"} alt={'logo-symbol'}/>
        <h1 className="about-us__subtitle">
          <PrismicText field={data.main_heading} />
        </h1>
        <p className="about-us__text">
          <PrismicText field={data.main_lead_text} />
        </p>
        {data.links.map(item => (
            <UiButton withBorder className="about-us__btn">
              <a href={item.link.url}>
                {item.link_name}
              </a>
            </UiButton>
        ))}
      </div>
      <section className="content__semi-wrapper binance-wrapper">
        <div className="binance">
          <p className="binance__cex">CEX</p>
          <img src={binance} alt="binance" />
          <h3><PrismicText field={data.binance_heading} /></h3>
          <p className="binance__text">
            <PrismicText field={data.binance_lead_text} />
          </p>
          <UiButton withBorder className="binance__btn binance__btn-first">
            <a href={data.binance_button_link.url} target={data.binance_button_link.target}>
              {data.binance_button_text}
            </a>
          </UiButton>
          <UiButton className="binance__btn binance__btn-second">
            <a href={data.binance_ref_link.url} target={data.binance_ref_link.target}>
              {data.binance_ref_text} →
            </a>
          </UiButton>
        </div>
        <div className="bridge">
          <img src={bridge} alt="bridge"/>
          <h3>
            <PrismicText field={data.bridge_heading} />
          </h3>
          <p>
            <PrismicText field={data.bridge_lead_text} />
          </p>
          <UiButton withBorder className="bridge__btn">
            <a href={data.bridge_button_link.url} >
              {data.bridge_button_text}
            </a>
          </UiButton>
        </div>
      </section>
      <section id="community" className="community community--swap">
        <img className="community__img" src={swap} alt="community"/>
        <div className="community__content community__content--swap">
          <span className="firepot-dex">DEX</span>
          <img src={firepot} alt="firepot" className="firepot-logo"/>
          <h3 className="swap-title">
            <PrismicText field={data.firepot_heading} />
          </h3>
          <p>
            <PrismicText field={data.firepot_lead_text} />
          </p>
          <UiButton withBorder className="swap-btn">
            <a href={data.firepot_button_link.url}>
              {data.firepot_button_text}
            </a>
          </UiButton>
        </div>
      </section>
      <section id="staking" className="earn">
        <h3>
          <PrismicText field={data.stake_heading} />
        </h3>
        <p style={{ marginTop: 15 }}>
          <PrismicText field={data.stake_lead_text} />
        </p>
        <div className="earn__list">
          {data.stake_checkmark_list.map(item =>
          <span className="earn__list-item">
            <img src={check} alt="check"/>
            <span>{item.checkmark_text}</span>
          </span>
          )}
        </div>
        <UiButton withBorder className="about-us__btn">
          <a href={data.stake_button_link.url}>
            {data.stake_button_text}
          </a>
        </UiButton>
        <UiButton>
          <a href={data.stake_manual_link.url} target={data.stake_manual_link.target}>
            {data.stake_manual_text} →
          </a>
        </UiButton>
      </section>
      <section id="earn" className="validator">
        <div className="validator-left">
          <div>
            <p className="validator-left__big">{data.validator_holders_amount}</p>
            <p className="validator-left__small">Total AMB Holders</p>
          </div>
          <div>
            <p className="validator-left__big">{data.validators_amount}</p>
            <p className="validator-left__small">
              Validators
            </p>
          </div>
        </div>
        <div className="validator-right">
          <h3>
            <PrismicText field={data.validator_heading} />
          </h3>
          <p>
            <PrismicText field={data.validator_lead_text} />
          </p>
          <UiButton withBorder className="validator-right__btn">
            <a href={data.validator_button_link.url} target={data.validator_button_link.target}>
              {data.validator_button_text}
            </a>
          </UiButton>
        </div>
      </section>
      <section id="bridge" className="content__semi-wrapper ambrosus">
        <div className="timeline">
          <img className="timeline__img" src={roadmap} alt="roadmap"/>
          <h3 className="timeline__title-main">
            <PrismicText field={data.roadmap_heading} />
          </h3>
          <p className="timeline__text">
            <PrismicText field={data.roadmap_lead_text} />
          </p>
          <UiButton withBorder>
            <a href={data.roadmap_button_link.url} target={data.roadmap_button_link.target}>
              {data.roadmap_button_text}
            </a>
          </UiButton>
        </div>
        <div className="ambassador">
          <img src={ambassador} alt="new"/>
          <h3>
            <PrismicText field={data.ambassador_heading} />
          </h3>
          <p>
            <PrismicText field={data.ambassador_lead_text} />
          </p>
          <UiButton className="ambassador__btn">
            <a href={data.ambassador_button_link.url} target={data.ambassador_button_link.target}>
              {data.ambassador_button_text} →
            </a>
          </UiButton>
        </div>
      </section>
      <section id="network" className="ambrosus">
        <img className="ambrosus__highlight" src={highlight} alt="highlight"/>
        <div className="ambrosus-content">
          <img className="ambrosus-content__img" src={amb} alt="ambrosus"/>
          <div>
            <h3>
              <PrismicText field={data.ambrosus_heading} />
            </h3>
            <p>
              <PrismicText field={data.ambrosus_lead_text} />
            </p>
            <UiButton withBorder className="ambrosus-content__btn">
              <a href={data.ambrosus_button_link.url} target={data.ambrosus_button_link.target}>
                {data.ambrosus_button_text}
              </a>
            </UiButton>
          </div>
        </div>
      </section>
      <div className="community-mobile">
        <h3>
          <PrismicText field={data.community_heading} />
        </h3>
        <p>
          <PrismicText field={data.community_lead_text} />
        </p>
      </div>
      <section id="community" className="community">
        <img className="community__img" src={community} alt="community"/>
        <div className="community__content community__content_low">
          <h3>
            <PrismicText field={data.community_heading} />
          </h3>
          <p>
            <PrismicText field={data.community_lead_text} />
          </p>
          {data.community_links.map(item => (
            <a href={item.link.url} target={item.link.target} className="community__link">
              {item.name} →
            </a>
          ))}
        </div>
      </section>
      <Contact heading={data.contact_heading} leadText={data.contact_lead_text} />
    </div>
  );
};

export default Content;
