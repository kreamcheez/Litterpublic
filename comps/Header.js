import { useEffect, useState } from "react";
import logo from '../public/assets/logo.svg'
import { Link } from 'react-scroll';

const navigation = [
  { name: "Home", href: "home" },
  { name: "Roadmap", href: "roadmap" },
  { name: "FAQ", href: "faq" },
];

export default function Header() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) return alert("Please install metamask");

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if ( accounts != '') {
      setCurrentAccount(accounts[0]);
    }

    console.log(accounts);
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) return alert("Please install metamask");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const shortenAddress = (address) => {
    let returnAddress = '';
    returnAddress = address.slice(0, 6) + '...' + address.slice(-4)
    return returnAddress;
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  console.log(logo)

  return (
    <header className="">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-24 w-auto"
                src={logo.src}
                alt=""
              />
            </a>
          </div>
          <div className="ml-10 space-x-4 flex items-center">
          <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="inline-block bg-white color-darkpurp py-2 px-4 border border-transparent rounded-md text-base font-medium hover:bg-darkpurp hover:text-white font-mono min-w-160 text-center hover:cursor-pointer"
                  smooth={true}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            {currentAccount === "" ? (
              <button
                className="inline-block bg-darkpurp py-2 px-4 border border-transparent rounded-md text-base font-medium hover:bg-lightpurp text-white min-w-160 font-minecraft"
                onClick={connectWallet}
              >
                Connect Wallet
              </button>
            ) : (
              <span className="inline-block bg-darkpurp py-2 px-4 border border-transparent rounded-md text-base font-medium hover:bg-lightpurp text-white min-w-160 font-minecraft">
                { shortenAddress(currentAccount) }
              </span>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
