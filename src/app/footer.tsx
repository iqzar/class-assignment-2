import Image from "next/image";
import logo from './public/logo-white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer(){
    return(
        <div className="bg-c2 h-auto w-full mt-28">
        <div className="flex flex-col lg:flex-row lg:space-x-56 pt-6 px-8 lg:px-32 pb-24 font-custom text-white">
          <div className="mb-8 lg:mb-0">
            <Image src={logo} alt="logo" width={80} height={50} />
            <h3 className="font-md">Social Media</h3>
            <ul className="flex space-x-4 mt-3">
              <li className="w-3 h-3">
                <FontAwesomeIcon icon={faFacebookF} size="xs" />
              </li>
              <li className="w-5 h-5">
                <FontAwesomeIcon icon={faTwitter} size="xs" />
              </li>
              <li className="w-4 h-4">
                <FontAwesomeIcon icon={faInstagram} size="xs" />
              </li>
            </ul>
          </div>
      
          <div className="flex flex-col lg:flex-row lg:space-x-32 pt-12 font-custom text-white leading-loose">
            <ul className="text-md mb-6 lg:mb-0">
              <li className="font-semibold">SHOP</li>
              <li className="text-sm leading-loose">Products</li>
              <li className="text-sm leading-loose">Reviews</li>
              <li className="text-sm leading-loose">Prices</li>
              <li className="text-sm leading-loose">Releases</li>
            </ul>
            <ul className="text-md mb-6 lg:mb-0">
              <li className="font-semibold">COMPANY</li>
              <li className="text-sm leading-loose">About Us</li>
              <li className="text-sm leading-loose">Contact</li>
              <li className="text-sm leading-loose">News</li>
              <li className="text-sm leading-loose">Support</li>
            </ul>
            <div className="text-md">
              <p className="font-semibold">STAY UP TO DATE</p>
              <div className="flex items-center border border-c1 mt-3 w-full max-w-xs h-8 pl-3">
                <input
                  className="bg-c2 font-custom text-xs w-full h-full pl-2"
                  placeholder="Enter your email"
                />
                <button className="bg-c1 text-c2 text-sm pt-1.5 pb-1.5 pl-2 pr-2" type="button">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      
        {/* Footer bottom section */}
        <div className="flex lg:flex-row flex-col justify-center space-x-5 mt-8">
          <div className="border-b border-c1 w-full lg:w-2/3 mb-8"></div>
          <ul className="flex space-x-6 font-custom text-white font-xs mb-6">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      
      
    )
}