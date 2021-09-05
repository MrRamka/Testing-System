export enum IQuestionTypes {
  SINGLE = "Single",
  MULTIPLE = "Multiple",
  TEXT = "Text",
  MATCHING = "Matching",
  SEQUENCE = "Sequence",
}

export interface IQuestion {
  id: number;
  type: IQuestionTypes;
  name: string;
  description?: string;
  image?: string;
  explanation?: string;
  created_at: string;
  updated_at?: string;
}
