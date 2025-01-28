'use client'
import React, {useState} from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, from, message } = formData;

    // periksa apakah semua field sudah di isi
    if (!name || !from || !message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields",
        confirmButtonText: "Ok",
        confirmButtonColor: "#ff9130",
        background: "#212121",
        color: "#f8fafc",
      });
      return;
    }

    // format pesan kirim ke WA
    const WAnumber = "6281275669055";
    const text = `Nama: ${name}. Alamat: ${from}. Pesan: ${message}`;
    const url = `https://wa.me/${WAnumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    // bersihkan form
    setFormData({
      name: "",
      from: "",
      message: "",
    });
  };
  return (
    <div className="contact flex justify-center items-center vh-100">
      <div className="container">
        <div className="row flex justify-center items-center">
          <div className="col-md-6">
            <h2 className="judul text-center text-[30px] font-semibold mb-[1rem]">
              Contact Us
            </h2>
            <div className="form">
              <form onSubmit={handleSubmit}>
                <div className="input-group mb-[1rem]">
                  <input
                    type="text"
                    placeholder="Nama"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-[1rem]">
                  <input 
                    type="address"
                    placeholder="Alamat"
                    className="form-control"
                    name="from"
                    value={formData.from}
                    onChange={handleChange}
                  />
                </div>
                <div className="input-group mb-[1rem]">
                  <textarea 
                    type="text"
                    placeholder="Tinggalkan Pesan di sini"
                    className="form-control h-[200px]"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="input-group mb-[1rem] flex justify-center items-center">
                  <button className="btn col-md-3" type="submit">submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
