import { getSettingConfigsByTag } from "@utils/settingsRenderer";
import { EConfigName, ETagName } from "@constants/index";
import styles from "./style.module.css";
import type { ITemplateDetailsParams } from "@typing/template";
import React from "react";
import { getUIByConfigName } from "./uiMap";

interface IProps {
  params: ITemplateDetailsParams;
  activeElement?: HTMLElement;
  setTemplateParams: (params: ITemplateDetailsParams) => void;
}

const Settings: React.FC<IProps> = ({
  activeElement,
  params,
  setTemplateParams,
}) => {
  const settingConfigs = getSettingConfigsByTag(
    (activeElement?.tagName || "") as ETagName
  );

  const onChange = (value: string, configName: EConfigName) => {
    if (!activeElement) {
      return;
    }
    setTemplateParams({
      ...params,
      [activeElement.id]: {
        ...params[activeElement.id],
        [configName]: value,
      },
    });
  };

  const activeElementParams = params[activeElement?.id || ""];

  return (
    <aside className={styles.wrapper}>
      <div className={styles.header}>
        <span>Page settings</span>
      </div>
      <div>
        {settingConfigs.map((elem) => (
          <React.Fragment key={elem}>
            {getUIByConfigName(elem, onChange, activeElementParams)}
          </React.Fragment>
        ))}
      </div>
    </aside>
  );
};

export default Settings;
