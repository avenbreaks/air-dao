import React, { useEffect, useState } from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as Twitter } from '../assets/twitter.svg';
import { ReactComponent as Telegram } from '../assets/telegram.svg';
import { ReactComponent as Reddit } from '../assets/reddit.svg';
import { ReactComponent as Circles } from '../assets/circles.svg';
import menu from '../assets/menu.svg';
import close from '../assets/close.svg';
import question from '../assets/circle-question-mark.svg';
import { ReactComponent as Metamask } from '../assets/metamask.svg';
import { ReactComponent as Copy } from '../assets/copy.svg';
import { ReactComponent as Logout } from '../assets/logout.svg';
import { ReactComponent as House } from '../assets/house.svg';
import { ReactComponent as Docs } from '../assets/docs.svg';
import { ReactComponent as Message } from '../assets/message-plus.svg';
import { ReactComponent as Book } from '../assets/book.svg';
import { ReactComponent as Smile } from '../assets/smile.svg';
import useAuthorization from "../hooks/useAuthorization";
import {useWeb3React} from "@web3-react/core";

// eslint-disable-next-line react/prop-types
const AddressBlock = ({ address = '' }) => {
  const copyToClipboard = () => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(address);
    }
    return null;
  };
  const { logout } = useAuthorization();

  return (
      <div className="address-block">
        <div className="address-block__metamask-icon">
          <Metamask />
        </div>
        <span>{`${address.slice(0, 4)}...${address.slice(
            address.length - 4,
            address.length,
        )}`}</span>
        <button onClick={logout} type="button" style={{ marginLeft: 'auto' }}>
          <Logout />
        </button>
        <button
            onClick={copyToClipboard}
            type="button"
            className="address-block__copy"
        >
          <Copy />
        </button>
      </div>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 1050);
  const { loginMetamask } = useAuthorization();
  const { account: address } = useWeb3React();

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 1050);
    };
    window.addEventListener('resize', handleResize, true);
  }, []);

  const handleOpen = () => setIsOpen((state) => !state);

  return (
      <div className={`side-menu${isOpen ? ' side-menu_expanded' : ''}`}>
        <div className="side-menu__mobile-wrapper">
          <div className="side-menu__logo">
            <a href="https://airdao.io/">
              <Logo />
            </a>
          </div>
          <button
              type="button"
              onClick={handleOpen}
              className="side-menu__hamburger"
          >
            <img src={isOpen ? close : menu} alt="menu" />
          </button>
        </div>
        {isOpen && (
            <>
              <div className="side-menu__content">
                {address ? (
                    <AddressBlock address={address} />
                ) : (
                    <button
                        type="button"
                        className="side-menu__connect-wallet"
                        onClick={loginMetamask}
                    >
                      Connect wallet
                    </button>
                )}
                <ul className="side-menu__list">
                  <li>
                    <a href="/firepot/swap">
                      FirepotSwap
                      <img src={question} alt="question"/>
                    </a>
                  </li>
                  <li>
                    <a className="side-menu__list-link" href="/staking">
                      Stake
                      <img src={question} alt="question"/>
                    </a>
                  </li>
                  <li>
                    <a className="side-menu__list-link" href="/bridge">
                      Bridge
                      <img src={question} alt="question"/>
                    </a>
                  </li>
                  <li>
                    <a className="side-menu__list-link" href="/explorer">
                      Network Explorer
                      <img src={question} alt="question"/>
                    </a>
                  </li>
                  <li className="side-menu__list-vote">
                    <span>DAO Tools</span>
                    <span>Coming Soon</span>
                  </li>
                  <li className="side-menu__list-vote">
                    <span>Stablecoin</span>
                    <span>Coming Soon</span>
                  </li>
                </ul>
                <ul className="side-menu__list side-menu__list_small">
                  <li>
                    <House />
                    <a href="/">AIRDAO Main</a>
                  </li>
                  <li>
                    <Docs />
                    <a href="https://github.com/ambrosus/" target="_blank">Docs</a>
                  </li>
                  <li>
                    <Message />
                    <a href="mailto:support@airdao.io ">Feedback</a>
                  </li>
                  <li>
                    <Book />
                    <a href="https://drive.google.com/drive/folders/1oaihzknRMGLKlmTe-7HU5Vx6I_-sQay1?usp=sharing" target="_blank">Brand materials</a>
                  </li>
                  <li>
                    <Smile />
                    <a href="mailto:support@airdao.io ">Team</a>
                  </li>
                </ul>
                <ul className="side-menu__list side-menu__list_socials">
                  <li>
                    <a href="https://twitter.com/airdao_io" target="_blank">
                      <Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <Telegram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.reddit.com/r/AirDAO/" target="_blank">
                      <Reddit />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <Circles />
                    </a>
                  </li>
                </ul>
              </div>
            </>
        )}
      </div>
  );
};

export default Header;
