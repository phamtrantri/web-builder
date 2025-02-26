import React from "react";
import styles from "./style.module.css";
import profileImage from "@assets/images/profile.png";
import BasicButton from "../BasicButton";
import { Link } from "react-router";

interface IProps {
  onExport?: () => void;
}

const Header: React.FC<IProps> = ({ onExport }) => {
  return (
    <header className={styles.wrapper}>
      <Link to="/">
        <img src={profileImage} alt="Profile" className={styles.profileImage} />
      </Link>
      <BasicButton
        text="Export"
        onClick={() => onExport?.()}
        className={styles.exportBtn}
      />
    </header>
  );
};

export default Header;
