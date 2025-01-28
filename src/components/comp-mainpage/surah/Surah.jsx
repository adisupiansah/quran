"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";

const Surah = () => {
  const [dataSurah, setDataSurah] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Inisialisasi router

  const fetchSurahData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/surah`);
      const data = await response.json();

      setDataSurah(data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    fetchSurahData();
  }, []);

  // jika masih loading
  // if (loading) {
  //   return (
  //     <div className="loading flex justify-center items-center mt-[3rem]">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  return (
    <div className="surah">
      <div className="container">
        <div className="row" id="surah">
          {dataSurah.map((surah, index) => (
            <div className="col-md-4" key={index}>
              <Link href={`/surah/${surah.nomor}`}>
                <div className="card">
                  <div className="card-body flex items-center gap-5">
                    <div className="nomr flex justify-center items-center">
                      <h3>{surah.nomor}</h3>
                    </div>
                    <div className="nama-surah">
                      <h2>{surah.nama_latin}</h2>
                      <span className="title-surah">{surah.arti}</span>
                    </div>
                    <div className="jumlah-ayat ms-auto">
                      <h3>{surah.jumlah_ayat} Ayat</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Surah;
