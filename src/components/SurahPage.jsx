"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SurahPage = ({ id }) => {
  const [surahData, setSurahData] = useState(null); // State untuk data surat
  const [loading, setLoading] = useState(true); // State untuk loading

  // Fetch data dari API
  useEffect(() => {
    const fetchSurahData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/surah/${id}`
        );
        const data = await response.json();
        if (data.status) {
          setSurahData(data);
        } else {
          console.error("Data tidak ditemukan");
        }
      } catch (error) {
        console.error("Terjadi kesalahan saat memuat data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSurahData();
  }, [id]);

  // Jika masih loading
  if (loading) {
    return (
      <div className="loading flex justify-center items-center vh-100">
        <div className="loader"></div>
      </div>
    );
  }

  // Jika data tidak ditemukan
  if (!surahData) {
    return (
      <p className="text-red-600 fs-2 flex justify-center items-center vh-100">
        Data tidak ditemukan.
      </p>
    );
  }

  // Render data
  return (
    <div className="container mx-auto p-4 mt-[5rem]">
      <div className="trigernextprevious flex justify-center items-center mb-[1rem]">
        {/* Tombol Previous */}
        {parseInt(id) > 1 && (
          <Link
            href={`/surah/${parseInt(id) - 1}`}
            className="navNext flex justify-center items-center me-auto"
          >
            <FaLongArrowAltLeft className="text-[30px]" />
            <span className="font-semibold">Prev</span>
          </Link>
        )}

        {/* Tombol Next */}
        {parseInt(id) < 114 && (
          <Link
            href={`/surah/${parseInt(id) + 1}`}
            className="navNext flex justify-center items-center ms-auto"
          >
            <span className="font-semibold">Next</span>
            <FaLongArrowAltRight className="text-[30px]" />
          </Link>
        )}
      </div>

      <h1 className="text-2xl font-bold text-center mb-2">
        {surahData.nama_latin} ({surahData.nama})
      </h1>
      <p className="text-center italic text-gray-600">
        {surahData.arti} - Turun di {surahData.tempat_turun} -{" "}
        {surahData.jumlah_ayat} Ayat
      </p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Deskripsi:</h2>
        <p
          className="mb-4 text-justify"
          dangerouslySetInnerHTML={{ __html: surahData.deskripsi }}
        ></p>
      </div>
      <div className="audio flex justify-end mt-4 mb-3">
        <audio controls>
          <source src={surahData.audio} type="audio/mpeg" />
          Browsermu tidak mendukung audio tag.
        </audio>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Ayat:</h2>
        {surahData.ayat.map((ayat) => (
          <div key={ayat.nomor} className="mb-4 border-b pb-2">
            <div className="nomr-surh flex justify-center items-center">
              <span>
                {ayat.surah} : {ayat.nomor}
              </span>
            </div>
            <p className="text-right text-[20px] md:text-[23px] font-semibold text-gray-800">
              {ayat.ar}
            </p>

            <p
              className="text-sm italic text-gray-600"
              dangerouslySetInnerHTML={{ __html: ayat.tr }}
            ></p>
            <p>{ayat.idn}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurahPage;
