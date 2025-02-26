import type React from "react";
import styles from "./style.module.css";

const CommonWrapper: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.settingConfigWrapper}>
      <label className={styles.settingConfigTitle}>{title}</label>
      {children}
    </div>
  );
};

export default CommonWrapper;
