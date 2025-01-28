import Image from "next/image";
import React from "react";
import logo from "/public/img/logo2.png";
import Link from "next/link";

const Titile = () => {
  const data = [
    {
      id: 1,
      judul: "QUR'AN ONLINE",
      deskripsi:
        "Baca Al-Qur'an secara online dengan mudah dan nyaman di quransaya.site",
      img: logo,
    },
  ];

  return (
    <>
    <div className="title flex justify-center items-center vh-100">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="flex flex-col justify-center items-center">
              <div className="logo">
                <Image
                  src={data[0].img}
                  alt="logo"
                  width={250}
                  height={250}
                  className="rounded-full img"
                />
              </div>
              <div className="judul text-center mt-[1rem]">
                <h1 className="font-bold text-gray-800 text-[40px] mb-1">{data[0].judul}</h1>
                <p className="text-[20px] text-gray-700">{data[0].deskripsi}</p>
              </div>
              <div className="button">
                <Link href="#surah" className="btn-surah btn mt-2">baca sekarang👇</Link>
              </div>
            </div>
          </div>
        </div>
   
      </div>
    </div>
    <div className="garis">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className=" border-b-2 border-gray-600"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Titile;
