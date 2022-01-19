export enum IQuestionTypes {
  SINGLE = "Single",
  MULTIPLE = "Multiple",
  TEXT = "Text",
  MATCHING = "Matching",
  SEQUENCE = "Sequence",
}

export interface IQuestion {
  id: number;
  type: number;
  name: string;
  description?: string;
  image?: string;
  explanation?: string;
  created_at: string;
  updated_at: string;
}

export function getQuestionTypeByNumberType(type: number): IQuestionTypes {
  switch (type) {
    case 0:
      return IQuestionTypes.SINGLE;
    case 1:
      return IQuestionTypes.MULTIPLE;
    case 2:
      return IQuestionTypes.TEXT;
    case 3:
      return IQuestionTypes.MATCHING;
    case 4:
      return IQuestionTypes.SEQUENCE;
  }
  return IQuestionTypes.SINGLE;
}

export function getNumberTypeByQuestionType(type: IQuestionTypes): number {
  switch (type) {
    case IQuestionTypes.SINGLE:
      return 0;
    case IQuestionTypes.MULTIPLE:
      return 1;
    case IQuestionTypes.TEXT:
      return 2;
    case IQuestionTypes.MATCHING:
      return 3;
    case IQuestionTypes.SEQUENCE:
      return 4;
  }
  return 0;
}

/*
{
  "id": 1,
  "name": "First question",
  "description": null,
  "image": null,
  "explanation": null,
  "created_at": "2021-06-07T21:50:35.170166Z",
  "updated_at": "2021-06-07T21:50:35.170166Z",
  "type": 0,
  "test": 2
}
 */
