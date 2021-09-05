import { IQuestion, IQuestionTypes } from "../components/Question/types";

export const questions: IQuestion[] = [
  {
    id: 1,
    name: "IQuestion 1",
    type: IQuestionTypes.TEXT,
    created_at: "2020-04-14T12:58:08.242Z",
  },
  {
    id: 2,
    name: "IQuestion 2",
    type: IQuestionTypes.SINGLE,
    created_at: "2020-04-14T12:58:08.242Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue accumsan interdum. Aliquam a justo sodales, egestas eros sit amet, eleifend justo. Aliquam ultricies quis erat ut aliquet. Nam eget nisl ex. Donec elementum, felis quis commodo blandit, mauris justo posuere quam, eget commodo urna metus sit amet tortor. Vestibulum ut congue enim, varius tristique lorem. Praesent rutrum sodales lacus id luctus. Vestibulum mauris ex, suscipit sed sem a, eleifend placerat libero. ",
  },
  {
    id: 3,
    name: "IQuestion 3",
    type: IQuestionTypes.MULTIPLE,
    created_at: "2020-04-14T12:58:08.242Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue accumsan interdum. Aliquam a justo sodales, egestas eros sit amet, eleifend justo. Aliquam ultricies quis erat ut aliquet. Nam eget nisl ex. Donec elementum, felis quis commodo blandit, mauris justo posuere quam, eget commodo urna metus sit amet tortor. Vestibulum ut congue enim, varius tristique lorem. Praesent rutrum sodales lacus id luctus. Vestibulum mauris ex, suscipit sed sem a, eleifend placerat libero. ",
  },
  {
    id: 4,
    name: "IQuestion 4",
    type: IQuestionTypes.MATCHING,
    created_at: "2020-04-14T12:58:08.242Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue accumsan interdum. Aliquam a justo sodales, egestas eros sit amet, eleifend justo. Aliquam ultricies quis erat ut aliquet. Nam eget nisl ex. Donec elementum, felis quis commodo blandit, mauris justo posuere quam, eget commodo urna metus sit amet tortor. Vestibulum ut congue enim, varius tristique lorem. Praesent rutrum sodales lacus id luctus. Vestibulum mauris ex, suscipit sed sem a, eleifend placerat libero. ",
  },
];

export const emptyQuestions: IQuestion = {
  id: 0,
  name: "",
  type: IQuestionTypes.TEXT,
  created_at: "",
};