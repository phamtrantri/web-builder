import type { EConfigName } from "@constants/index";

export interface ITemplateListItem {
  id: string;
  img: string;
  name: string;
}

export type ITemplateDetailsParams = Record<
  string,
  Partial<Record<EConfigName, string>>
>;

export interface ITemplateDetails {
  id: string;
  name: string;
  content: string;
  params: ITemplateDetailsParams;
}
