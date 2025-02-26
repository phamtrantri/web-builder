import type { ITemplateDetails, ITemplateListItem } from "@typing/template";
import { EConfigName } from "@constants/index";

export const templateList: ITemplateListItem[] = [
  {
    id: "1",
    img: "https://placehold.co/280x168/png",
    name: "Template 1",
  },
  {
    id: "2",
    img: "https://placehold.co/280x168/png",
    name: "Template 2",
  },
];

export const templateDetails: Record<string, ITemplateDetails> = {
  "1": {
    id: "1",
    name: "Template 1",
    content: `
      <div id="div-1" style="display: flex; flex: 1; flex-direction: column; justify-content: center; align-items: center; padding: 0 24px">
        <img id="img-1" alt="Placeholder" />
        <h1 id="h1-1" style="margin-top: 16px"></h1>
        <p id="p1" style="margin-top: 16px"></p>
        <p id="p2" style="margin-top: 16px"></p>
      </div>
      
    `,
    params: {
      "div-1": {
        [EConfigName.BACKGROUND_COLOR]: "#ffffff",
      },
      "img-1": {
        [EConfigName.IMG_SRC]: "https://placehold.co/280x168/png",
      },
      "h1-1": {
        [EConfigName.COLOR]: "#000000",
        [EConfigName.FONT_SIZE]: "32",
        [EConfigName.FONT_WEIGHT]: "bold",
        [EConfigName.CONTENT]: "Heading 1",
      },
      p1: {
        [EConfigName.COLOR]: "#000000",
        [EConfigName.FONT_SIZE]: "16",
        [EConfigName.FONT_WEIGHT]: "400",
        [EConfigName.CONTENT]:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      p2: {
        [EConfigName.COLOR]: "#008000",
        [EConfigName.FONT_SIZE]: "18",
        [EConfigName.FONT_WEIGHT]: "300",
        [EConfigName.CONTENT]:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    },
  },
  "2": {
    id: "2",
    name: "Template 2",
    content: `
      <div id="div-1" style="display: flex; flex: 1; flex-direction: row; justify-content: center; align-items: center; padding: 0 24px">
        <img id="img-1" alt="Placeholder" />
        <div style="margin-left: 16px">
          <h1 id="h1-1" style="margin-top: 16px"></h1>
          <p id="p1" style="margin-top: 16px"></p>
          <p id="p2" style="margin-top: 16px"></p>
        </div>
      </div>
    `,
    params: {
      "div-1": {
        [EConfigName.BACKGROUND_COLOR]: "#ffffff",
      },
      "img-1": {
        [EConfigName.IMG_SRC]: "https://placehold.co/320x320/png",
      },
      "h1-1": {
        [EConfigName.COLOR]: "#000000",
        [EConfigName.FONT_SIZE]: "32",
        [EConfigName.FONT_WEIGHT]: "bold",
        [EConfigName.CONTENT]: "Heading 1",
      },
      p1: {
        [EConfigName.COLOR]: "#000000",
        [EConfigName.FONT_SIZE]: "16",
        [EConfigName.FONT_WEIGHT]: "400",
        [EConfigName.CONTENT]:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
      p2: {
        [EConfigName.COLOR]: "#008000",
        [EConfigName.FONT_SIZE]: "18",
        [EConfigName.FONT_WEIGHT]: "300",
        [EConfigName.CONTENT]:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      },
    },
  },
};
