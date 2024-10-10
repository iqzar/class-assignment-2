import Image from "next/image";
import image from './public/image1.jpg';
import image1 from './public/image2.png';
import image2 from './public/image3.png';
import image3 from './public/image4.png';
import imagec1 from './public/c1.png';
import imagec2 from './public/c2.png';
import imagec3 from './public/c3.png';
import imagec4 from './public/c4.png';
import imagec5 from './public/c5.png';
import imagec6 from './public/c6.png';
import imagec7 from './public/c.png';
import imagec8 from './public/c8.png';
import imageb from './public/imagec.png';
import hijab from './public/hijab.png';
import abaya from './public/abaya.png';
import dress from './public/dress.png';

function Home(){

  return(
    <div>

      {/*Hero Section*/}

    <div className="bg-c1 flex flex-col md:flex-row items-center justify-between gap-y-12 md:gap-x-28 px-4 md:px-32 pt-20 pb-20">
      
      <div className="text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif text-c2 mb-4 leading-tight">
          Discover and <br /> Find Your Own <br /> Fashion!
        </h1>
        <p className="text-md font-custom w text-c2 leading-loose mb-4">
          Explore our curated collection of modest 
          clothing and accessories tailored to your 
          unique taste.
        </p>
        <button className="bg-c2 hover:bg-c1 hover:text-c2 pt-2.5 pl-6 pr-6 pb-2.5 text-xs font-bold font-custom text-white mt-8 shadow">
          EXPLORE NOW
        </button>
      </div>
  
      <div className="flex justify-center">
        <Image src={image} alt="image" width={380} height={500} className="max-w-full h-auto" />
      </div>
    </div>
 {/*Best selling section*/}

    <div className="px-4 md:px-0">
  <h2 className="mt-12 text-center text-c2 font-bold font-custom1 text-3xl">Best Selling</h2>
  <p className="text-center font-custom text-md text-c2 font-semibold mt-5 mb-10">
    Get in the trend with our curated selection of best-selling styles
  </p>

  <div className="flex flex-wrap justify-center mt-8 space-x-9">
    <div className="flex flex-col items-center">
      <Image src={image1} alt="Georget Hijab" height={150} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Georget Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$35 | 5.0</p>
    </div>

    <div className="flex flex-col items-center">
      <Image className="shadow-black" src={image3} alt="Silk Hijab" height={130} width={228} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Silk Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$45 | 5.0</p>
    </div>

    <div className="flex flex-col items-center">
      <Image src={image2} alt="Chiffon Hijab" height={130} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Chiffon Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$25 | 5.0</p>
    </div>
  </div>

  <div className="flex justify-center mt-10">
    <button className="text-sm font-semibold font-custom text-c2 hover:bg-c2 hover:text-white bg-white pt-1 pb-1 pl-6 pr-6 border border-c2 shadow">
      see all ..
    </button>
  </div>
</div>

  
  {/*Our Product sectiion*/}

  <div className="px-4 md:px-0">
  <h2 className="mt-24 text-center text-c2 font-bold font-custom1 text-3xl">Our Products</h2>
  
  <ul className="flex flex-wrap justify-center mt-6 font-custom font-semibold text-sm sm:space-x-1 space-x-8 text-c2">
    <li>SALE</li>
    <li>HOT</li>
    <li>NEW ARRIVALS</li>
    <li>ACCESSORIES</li>
  </ul>
  
  <div className="flex flex-wrap justify-center mt-10 space-x-12">
    <div className="flex flex-col items-center">
      <Image src={imagec1} alt="Georget Hijab" height={150} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Georget Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$35 | 5.0</p>
    </div>

    <div className="flex flex-col items-center">
      <Image className="shadow-black" src={imagec2} alt="Silk Hijab" height={130} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Lawn Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$25 | 4.5</p>
    </div>

    <div className="flex flex-col items-center">
      <Image src={imagec3} alt="Chiffon Hijab" height={130} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Monocrome Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$45 | 4.5</p>
    </div>

    <div className="flex flex-col items-center">
      <Image src={imagec4} alt="Chiffon Hijab" height={130} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Printed Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$35 | 4.0</p>
    </div>
  </div>

  <div className="flex flex-wrap justify-center mt-10 space-x-12">
    <div className="flex flex-col items-center">
      <Image src={imagec5} alt="Georget Hijab" height={150} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Georget Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$35 | 5.0</p>
    </div>

    <div className="flex flex-col items-center">
      <Image className="shadow-black" src={imagec6} alt="Silk Hijab" height={130} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Boho Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$30 | 5.0</p>
    </div>

    <div className="flex flex-col items-center">
      <Image src={imagec7} alt="Chiffon Hijab" height={130} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Two tone Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$45 | 5.0</p>
    </div>

    <div className="flex flex-col items-center">
      <Image src={imagec8} alt="Chiffon Hijab" height={130} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Two tone Hijab</p>
      <p className="text-sm font-custom text-center mt-2 tracking-widest">$25 | 5.0</p>
    </div>
  </div>
</div>


        {/*Banner*/}

  <div className="bg-c1 mx-4 md:mx-40 w-auto mt-24 flex flex-col md:flex-row md:space-x-16 ">
  <Image className="ml-0 md:ml-20" src={imageb} alt="" width={380} height={200} />

  <div className="flex flex-col justify-center text-center md:text-left">
    <h2 className="text-3xl text-c2 font-custom1 mt-6 md:mt-20">Exclusive Offer</h2>
    <p className="text-md font-custom text-c2 mt-6 font-semibold">
      Unlock the ultimate style upgrade with our exclusive<br />offer. Enjoy savings of up to 40% off on our Latest New <br />Arrivals
    </p>

    <div className="flex justify-center space-x-4 mt-8 md:justify-start">
      <div className="bg-white justify-center pl-4 pr-4 pt-2 pb-2">
        <h3 className="text-sm text-c2 font-custom font-semibold">06</h3>
        <p className="text-[8px] text-c2 font-custom font-semibold">Days</p>
      </div>
      <div className="bg-white justify-center pl-4 pr-4 pt-2 pb-2">
        <h3 className="text-sm text-c2 font-custom font-semibold">18</h3>
        <p className="text-[8px] text-c2 font-custom font-semibold">Hours</p>
      </div>
      <div className="bg-white justify-center pl-4 pr-4 pt-2 pb-2">
        <h3 className="text-sm text-c2 font-custom font-semibold">48</h3>
        <p className="text-[8px] text-c2 font-custom font-semibold">Min</p>
      </div>
    </div>

    <button className="bg-c2 hover:bg-c1 hover:text-c2 pt-2.5 pl-2 pr-2 pb-2.5 mb-8 text-xs font-bold font-custom text-white mt-8 shadow">
      BUY NOW
    </button>
  </div>
  </div>

{/*Desinger section*/}

<div className="px-4 md:px-0 mt-28"> {/* Add margin-top to create space above this section */}
  <h2 className="text-center text-c2 font-bold font-custom1 text-3xl">Modest Wear For You</h2>
  <p className="text-center font-custom text-md text-c2 font-semibold mt-5 mb-10">
    Immerse yourself in the world of modest fashion with our meticulously crafted designer clothes!
  </p>

  <div className="flex flex-wrap justify-center mt-8">
    <div className="flex flex-col items-center mx-4 mb-6"> {/* Add margin-bottom for spacing between rows */}
      <Image src={dress} alt="Dresses" height={150} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Dresses</p>
      <p className="text-xs font-custom text-center mt-2 w-44">Embrace elegance and comfort with our beautifully designed modest dresses.</p>
    </div>

    <div className="flex flex-col items-center mx-4 mb-6">
      <Image className="shadow-black" src={abaya} alt="Abayas" height={130} width={228} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Abayas</p>
      <p className="text-xs font-custom text-center mt-2 w-48">Experience timeless beauty with our stylish abayas, blending comfort and sophistication.</p>
    </div>

    <div className="flex flex-col items-center mx-4 mb-6">
      <Image src={hijab} alt="Hijabs and Accessories" height={130} width={210} />
      <p className="mt-5 text-center text-black font-custom font-sm font-semibold">Hijabs And Accessories</p>
      <p className="text-xs font-custom text-center mt-2 w-44">Complete your look with our chic hijabs and carefully curated accessories.</p>
    </div>
  </div>
</div>
    </div>
    
  )
}

export default Home;

