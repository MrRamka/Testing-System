import { IQuestion } from "../components/Question/types";

export const questions: IQuestion[] = [
  {
    id: 1,
    name: "IQuestion 1",
    type: 0,
    created_at: "2020-04-14T12:58:08.242Z",
    updated_at: "2012-01-26T13:51:50.417Z",
  },
  {
    id: 2,
    name: "IQuestion 2",
    type: 0,
    created_at: "2020-04-14T12:58:08.242Z",
    updated_at: "2012-01-26T13:51:50.417Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue accumsan interdum. Aliquam a justo sodales, egestas eros sit amet, eleifend justo. Aliquam ultricies quis erat ut aliquet. Nam eget nisl ex. Donec elementum, felis quis commodo blandit, mauris justo posuere quam, eget commodo urna metus sit amet tortor. Vestibulum ut congue enim, varius tristique lorem. Praesent rutrum sodales lacus id luctus. Vestibulum mauris ex, suscipit sed sem a, eleifend placerat libero. ",
  },
  {
    id: 3,
    name: "IQuestion 3",
    type: 0,
    created_at: "2020-04-14T12:58:08.242Z",
    updated_at: "2012-01-26T13:51:50.417Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue accumsan interdum. Aliquam a justo sodales, egestas eros sit amet, eleifend justo. Aliquam ultricies quis erat ut aliquet. Nam eget nisl ex. Donec elementum, felis quis commodo blandit, mauris justo posuere quam, eget commodo urna metus sit amet tortor. Vestibulum ut congue enim, varius tristique lorem. Praesent rutrum sodales lacus id luctus. Vestibulum mauris ex, suscipit sed sem a, eleifend placerat libero. ",
  },
  {
    id: 4,
    updated_at: "2012-01-26T13:51:50.417Z",
    name: "IQuestion 4",
    type: 0,
    created_at: "2020-04-14T12:58:08.242Z",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue accumsan interdum. Aliquam a justo sodales, egestas eros sit amet, eleifend justo. Aliquam ultricies quis erat ut aliquet. Nam eget nisl ex. Donec elementum, felis quis commodo blandit, mauris justo posuere quam, eget commodo urna metus sit amet tortor. Vestibulum ut congue enim, varius tristique lorem. Praesent rutrum sodales lacus id luctus. Vestibulum mauris ex, suscipit sed sem a, eleifend placerat libero. ",
  },
];

export const emptyQuestions: IQuestion = {
  id: 0,
  name: "",
  type: 0,
  created_at: "",
  updated_at: "",
};
