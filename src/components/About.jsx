import React from "react";

const About = () => {
  return (
    <div className="about mt-[7rem]">
      <div className="container">
        <div className="row flex justify-center items-center">
          <div className="col-md-8">
            <h1 className="font-semibold text-[30px] mb-[1rem]">
              Tentang Aplikasi
            </h1>
            <p className="text-gray-800 text-[16px] text-justify">
              Aplikasi ini dirancang untuk mempermudah pengguna membaca dan
              memahami Al-Quran secara digital. Dengan fitur lengkap seperti
              pencarian surah, informasi terjemahan, dan audio, aplikasi ini
              bertujuan untuk mendekatkan umat Islam pada kitab suci mereka.
            </p>
          </div>
        </div>

        <div className="row flex justify-center items-center mt-[1rem]">
          <div className="col-md-8">
            <h1 className="font-semibold text-[30px] mb-[1rem]">
              Fitur Aplikasi
            </h1>
            <ul className="list-disc pl-[3rem]">
              <li className="text-gray-800 text-[16px] text-justify">
                Baca Al-Quran: Nikmati pengalaman membaca Al-Quran dengan
                tampilan teks Arab, Latin, dan terjemahan.
              </li>
              <li className="text-gray-800 text-[16px] text-justify">
                Audio Tilawah: Dengarkan lantunan ayat suci Al-Quran dari
                berbagai qari terkenal.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
