// src/App.js

import React, { useState, useEffect } from "react";
import "./App.css";
import {
  FaLinkedin,
  FaWhatsapp,
  FaFileDownload,
  FaAddressBook,
  FaBriefcase,
  FaTelegram,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import logo from "./assets/yosef-business.jpg"; // Логотип
import resume from "./assets/Resume.pdf"; // Резюме
import vCard from "./assets/YosefMamedov.vcf"; // Файл VCard для сохранения контакта
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Эффект для появления визитки
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Функция для переключения темы
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 900,
        },
      },
      color: {
        value: darkMode ? "#ffffff" : "#4b6cb7",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.2,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: darkMode ? "#ffffff" : "#4b6cb7",
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.3,
          },
        },
        push: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="particles-container"
      />
      <div className="animated-gradient"></div>
      {/* Визитка */}
      <div className={`business-card ${isVisible ? "visible" : ""}`}>
        {/* Переключатель темы */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </button>

        {/* Логотип */}
        <div className="logo-container">
          <img src={logo} alt="Logo Yosef" className="logo" />
        </div>

        {/* Имя и должность */}
        <h1 className="name">Yosef Mamedov</h1>
        <h2 className="title">Web Developer</h2>

        {/* Описание под логотипом */}
        <p className="description">
          Experienced web developer specializing in creating high-quality
          websites and mobile applications. I am passionate about delivering
          visually appealing and user-friendly solutions for businesses of all
          sizes. Let's work together to bring your ideas to life!
        </p>

        {/* Контактные ссылки */}
        <div className="contact-links">
          {/* 1. WhatsApp */}
          <a
            href="https://wa.me/972528057734"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link neon-button"
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </a>

          {/* 2. Telegram */}
          <a
            href="https://t.me/beckerman979"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link neon-button"
          >
            <FaTelegram className="icon" /> Telegram
          </a>

          {/* 3. LinkedIn */}
          <a
            href="https://www.linkedin.com/in/iusifmamedov/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link neon-button"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>

          {/* 4. Portfolio */}
          <a
            href="https://www.yosef-portfolio.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link neon-button"
          >
            <FaBriefcase className="icon" /> Portfolio
          </a>

          {/* 5. Resume */}
          <a
            href={resume}
            download="Resume-YosefMamedov"
            className="contact-link neon-button"
          >
            <FaFileDownload className="icon" /> Resume
          </a>

          {/* 6. Сохранить контакт (VCard) */}
          <a
            href={vCard}
            download="YosefMamedov"
            className="contact-link neon-button"
          >
            <FaAddressBook className="icon" /> Save Contact
          </a>
        </div>

        {/* Футер */}
        <p className="footer">Created by Yosef Mamedov</p>
      </div>
    </div>
  );
}

export default App;
