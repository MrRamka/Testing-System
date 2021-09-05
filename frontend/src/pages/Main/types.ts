import { TestSelectStatuses } from "../../components/TestStatusSelect";

export interface CardTestItem {
  id: number;
  title: string;
  status: TestSelectStatuses;
}
