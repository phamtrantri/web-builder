import { EConfigName, ETagName } from "@constants/index";

export const getSettingConfigsByTag = (tagName: ETagName) => {
  const map: Record<ETagName, EConfigName[]> = {
    [ETagName.DIV]: [EConfigName.BACKGROUND_COLOR],
    [ETagName.P]: [
      EConfigName.COLOR,
      EConfigName.FONT_SIZE,
      EConfigName.FONT_WEIGHT,
      EConfigName.CONTENT,
    ],
    [ETagName.IMG]: [EConfigName.IMG_SRC],
    [ETagName.H1]: [
      EConfigName.COLOR,
      EConfigName.FONT_SIZE,
      EConfigName.FONT_WEIGHT,
      EConfigName.CONTENT,
    ],
  };

  return map[tagName] || [];
};
