import React from "react";

const Banner = () => {
  const bannerStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    display: "block",
    clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 100%)",
  };

  const textStyle = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
  };
  const descriptionStyle = {
    position: "absolute",
    top: "calc(40% + 30px)", // Menempatkan deskripsi di bawah teks utama
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "#fff",
    fontSize: "16px",
    textAlign: "center",
    maxWidth: "600px", // Menentukan lebar maksimum deskripsi
    lineHeight: "1.5",
    marginTop: "20px",
  };
  return (
    <div style={bannerStyle}>
      <img
        src="src/assets/logo/banner.jpg"
        alt="Banner Image"
        style={imageStyle}
      />
      <div style={textStyle}>SUITMEDIA</div>
      <div style={descriptionStyle}>
        Suitmedia is a full-service digital agency that helps brands in digital
        transformation through strategy, product development, and creative
        communication.
      </div>
    </div>
  );
};

export default Banner;
