import { CardTestItem } from "../pages";
import { TestSelectStatuses } from "../components/TestStatusSelect";

export const mockMainPageData: CardTestItem[] = [
  {
    id: 1,
    title: "Test Title #1",
    status: TestSelectStatuses.Active,
  },
  {
    id: 2,
    title: "Test Title #2",
    status: TestSelectStatuses.Inactive,
  },
  {
    id: 3,
    title: "Test Title #3",
    status: TestSelectStatuses.Active,
  },
  {
    id: 4,
    title: "Test Title #4",
    status: TestSelectStatuses.Inactive,
  },
  {
    id: 5,
    title: "Test Title #5",
    status: TestSelectStatuses.Active,
  },
  {
    id: 6,
    title: "Test Title #6",
    status: TestSelectStatuses.Inactive,
  },
];

export const emptyCardItem: CardTestItem = {
  id: 0,
  title: "",
  status: TestSelectStatuses.Active,
};
