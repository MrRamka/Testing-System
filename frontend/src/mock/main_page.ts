import { CardTestItem } from "../pages";

export const mockMainPageData: CardTestItem[] = [
  {
    id: 1,
    name: "Test Title #1",
    description:
      "Lorem ipsum dolor sit amet. Integer congue accumsan interdum. ",
    questionCount: 30,
  },
  {
    id: 2,
    name: "Test Title #2",
    questionCount: 20,
  },
  {
    id: 3,
    name: "Test Title #3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue accumsan interdum.",
    questionCount: 5,
  },
  {
    id: 4,
    name: "Test Title #4",
  },
  {
    id: 5,
    name: "Test Title #5",
  },
  {
    id: 6,
    name: "Test Title #6",
  },
];

export const emptyCardItem: CardTestItem = {
  id: 0,
  name: "",
};
