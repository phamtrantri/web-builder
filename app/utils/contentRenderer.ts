import React from "react";
import ReactDOMServer from "react-dom/server";
import { EConfigName } from "@constants/index";
import type { ITemplateDetailsParams } from "@typing/template";

export const htmlToReact = (
  wrapper: React.RefObject<HTMLDivElement | null>,
  html: string
): React.ReactElement | null => {
  if (!wrapper.current) {
    return null;
  }
  wrapper.current.innerHTML = html;

  const convert = (node: Node): React.ReactNode => {
    if (node.nodeType === Node.TEXT_NODE) {
      return node.textContent;
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element;
      const tagName = element.tagName.toLowerCase();
      const props: { [key: string]: string } = {};

      Array.from(element.attributes).forEach((attr) => {
        props[attr.name] = attr.value;
      });

      const children = Array.from(element.childNodes).map(convert);
      return React.createElement(tagName, props, ...children);
    }

    return null;
  };

  return convert(wrapper.current) as React.ReactElement;
};

export const reactToHtml = (component: React.ReactElement): string => {
  return ReactDOMServer.renderToStaticMarkup(component);
};

export const parseContent = (
  content: string,
  params: ITemplateDetailsParams,
  activeElement?: HTMLElement
): string => {
  let parsedContent = content;

  const parser = new DOMParser();
  const doc = parser.parseFromString(parsedContent, "text/html");

  Object.entries(params).forEach(([elementId, elementParams]) => {
    const element = doc.getElementById(elementId);
    if (!element) {
      return;
    }

    if (element?.id === activeElement?.id) {
      element.classList.add("selectedActive");
    } else {
      element.classList.remove("selectedActive");
    }

    Object.entries(elementParams).forEach(([configName, value]) => {
      switch (configName) {
        case EConfigName.IMG_SRC:
          if (element.tagName === "IMG") {
            element.setAttribute("src", value);
          }
          break;
        case EConfigName.COLOR:
          element.style.setProperty(configName.toLowerCase(), value);
          break;
        case EConfigName.FONT_SIZE:
          element.style.setProperty(configName.toLowerCase(), `${value}px`);
          break;
        case EConfigName.FONT_WEIGHT:
          element.style.setProperty(configName.toLowerCase(), value);
          break;
        case EConfigName.CONTENT:
          element.textContent = value;
          break;
        case EConfigName.BACKGROUND_COLOR:
          element.style.backgroundColor = value;
          break;
        default:
      }
    });
  });

  parsedContent = doc.body.innerHTML;
  return parsedContent;
};
