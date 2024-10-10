import Image from "next/image";
import logo from './public/logo.png';


export default function Header() {
  return (
    <div className="bg-c1">
  <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-32 py-4">
    
    {/* Logo */}
    <div className="flex items-center">
      <Image src={logo} alt="logo" width={50} height={50} />
    </div>

    {/* Navigation */}
    <div className="flex space-x-8 text-sm  font-semibold font-custom text-c2">
      <p className="hover:text-lg">HOME</p>
      <p className="hover:text-lg">SHOP</p>
      <p className="hover:text-lg">FEATURES</p>
      <p className="hover:text-lg">CONTACT</p>
    </div>

    {/* Login Button */}
    <button className="text-sm text-c2 bg-c1 hover:bg-c2 hover:text-c1 pl-4 pr-4 border border-c2 shadow">
      LOGIN
    </button>
  </div>
</div>

  
  )}

  