import React, { useState } from "react";
import { useCallback } from "react";
import { changeLanguage } from "../../utils/instruments.utils";
import "./styles.scss";

const LANGUAGES = ["en", "ro", "uk", "ru"];

export const LanguageMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("ro");

  const dropdownClasses = isActive ? "is-active" : "";

  const onToggleMenu = useCallback(() => setIsActive(!isActive), [isActive]);

  const onLanguageChangeHandler = useCallback((event) => {
    const newLanguage = event.target.innerText.toLowerCase();
    changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  }, []);

  return (
    <div
      className={`dropdown is-right ${dropdownClasses}`}
      onClick={onToggleMenu}
    >
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span className="is-uppercase">{currentLanguage}</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {LANGUAGES.map((lang) => (
            <div
              key={lang}
              className={`dropdown-item is-uppercase ${
                lang === currentLanguage ? "is-active" : ""
              }`}
              onClick={onLanguageChangeHandler}
            >
              {lang}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
