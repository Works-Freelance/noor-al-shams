import React from 'react'
import './Product.css/'
import arbrePot from '../../assets/img/Products/ArbrePot.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const products = [
    {
        img:"https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
        location:"Indoor",
        name:"Peace Lily",
        Price:"72AED",
    },
    {
        img:"https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
        location:"Outdoor",
        name:"Peace Lily",
        Price:"72AED",

    },
    {
        img:"https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png",
        location:"Indoor",
        name:"Peace Lily",
        Price:"72AED",
    },
    {
        img:"https://user-images.githubusercontent.com/2805249/64069998-305de300-cc9a-11e9-8ae7-5a0fe00299f2.png",
        location:"Outdoor",
        name:"Peace Lily",
        Price:"72AED",

    },
]

const Products = () => {
    return (
        <div className=" ">
       <Navbar/>
       <div className=" pt-20">
        <h1 className="mt-5 mx-12 font-bold text-3xl">Products in Stock</h1>
       <div className="p-1 flex flex-wrap items-center justify-center py-5">

{
    products.map((product)=>(
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
    <svg
      className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
      viewBox="0 0 375 283"
      fill="none"
      style={{ opacity: "0.1" }}
    >
      <rect
        x="159.52"
        y={175}
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
      <div
        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
        style={{
          background: "radial-gradient(black, transparent 60%)",
          transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
          opacity: "0.2"
        }}
      ></div>
      <img
        className="relative w-40"
        src={product.img}
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1">{product.location}</span>
      <div className="flex justify-between">
        <span className="block font-semibold text-xl">{product.name}</span>
        <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
          {product.Price}
        </span>
      </div>
    </div>
  </div>
    ))
}

  
</div>

       </div>
       <div className=" py-0">
        <h1 className="mt-5 mx-12 font-bold text-3xl">Hot Selling Pots </h1>
       <div className="p-1 flex flex-wrap items-center justify-center py-5">

{
    products.map((product)=>(
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
    <svg
      className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
      viewBox="0 0 375 283"
      fill="none"
      style={{ opacity: "0.1" }}
    >
      <rect
        x="159.52"
        y={175}
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
      <div
        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
        style={{
          background: "radial-gradient(black, transparent 60%)",
          transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
          opacity: "0.2"
        }}
      ></div>
      <img
        className="relative w-40"
        src={product.img}
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1">{product.location}</span>
      <div className="flex justify-between">
        <span className="block font-semibold text-xl">{product.name}</span>
        <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
          {product.Price}
        </span>
      </div>
    </div>
  </div>
    ))
}

  
</div>

       </div>
       <div className=" py-0">
        <h1 className="mt-5 mx-12 font-bold text-3xl">Deals of the Day </h1>
       <div className="p-1 flex flex-wrap items-center justify-center py-5">

{
    products.map((product)=>(
        <div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg group">
    <svg
      className="absolute bottom-0 left-0 mb-8 scale-150 group-hover:scale-[1.65] transition-transform"
      viewBox="0 0 375 283"
      fill="none"
      style={{ opacity: "0.1" }}
    >
      <rect
        x="159.52"
        y={175}
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform">
      <div
        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
        style={{
          background: "radial-gradient(black, transparent 60%)",
          transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
          opacity: "0.2"
        }}
      ></div>
      <img
        className="relative w-40"
        src={product.img}
        alt=""
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1">{product.location}</span>
      <div className="flex justify-between">
        <span className="block font-semibold text-xl">{product.name}</span>
        <span className="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
          {product.Price}
        </span>
      </div>
    </div>
  </div>
    ))
}

  
</div>

       </div>
       <Footer/>
        </div>
    )
}

export default Products