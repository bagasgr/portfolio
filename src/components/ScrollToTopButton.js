import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Menambahkan event listener untuk scroll
    const handleScroll = () => {
      // Menampilkan tombol jika scroll lebih dari 100px dari atas
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen dibersihkan
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} style={scrollToTopButtonStyle}>
          ↑
        </button>
      )}
    </>
  );
}

const scrollToTopButtonStyle = {
  position: "fixed",
  bottom: "30px",
  right: "30px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "50%",
  padding: "10px 15px",
  fontSize: "20px",
  cursor: "pointer",
  zIndex: 1000,
};

export default ScrollToTopButton;
