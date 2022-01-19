import { CardTestItem } from "../pages";

export const mockMainPageData: CardTestItem[] = [
  {
    id: 1,
    name: "Test Title #1",
    description:
      "Lorem ipsum dolor sit amet. Integer congue accumsan interdum. ",
    questionCount: 30,
    created_at: "2012-01-26T13:51:50.417Z",
    updated_at: "2012-01-26T13:51:50.417Z",
  },
  {
    id: 2,
    name: "Test Title #2",
    questionCount: 20,
    created_at: "2012-01-26T13:51:50.417Z",
    updated_at: "2012-01-26T13:51:50.417Z",
  },
  {
    id: 3,
    name: "Test Title #3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer congue accumsan interdum.",
    questionCount: 5,
    created_at: "2012-01-26T13:51:50.417Z",
    updated_at: "2012-01-26T13:51:50.417Z",
  },
  {
    id: 4,
    name: "Test Title #4",
    created_at: "2012-01-26T13:51:50.417Z",
    updated_at: "2012-01-26T13:51:50.417Z",
  },
  {
    id: 5,
    name: "Test Title #5",
    created_at: "2012-01-26T13:51:50.417Z",
    updated_at: "2012-01-26T13:51:50.417Z",
  },
  {
    id: 6,
    name: "Test Title #6",
    created_at: "2012-01-26T13:51:50.417Z",
    updated_at: "2012-01-26T13:51:50.417Z",
  },
];

export const emptyCardItem: CardTestItem = {
  id: 0,
  name: "",
  created_at: "",
  updated_at: "",
};
