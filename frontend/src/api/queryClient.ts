import { QueryClient, QueryFunctionContext } from "react-query";
import { AxiosResponse } from "axios";
import {
  ErrorResponseResult,
  ResponseResult,
  SuccessResponseResult,
} from "./types";
import { makeRequest } from "./api";
import { apiClient } from "./apiClient";

async function queryFn({
  queryKey,
}: QueryFunctionContext): Promise<
  | SuccessResponseResult<AxiosResponse<ResponseResult<unknown>>>
  | ErrorResponseResult<AxiosResponse<ResponseResult<unknown>>>
> {
  const url = queryKey[0];
  if (typeof url !== "string") {
    throw new Error("URL should be stting");
  }
  return makeRequest<AxiosResponse<ResponseResult<unknown>>>(() =>
    apiClient.get(url)
  );
}

function select(result: unknown): unknown {
  return (result as AxiosResponse)?.data;
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn,
      select,
      refetchOnWindowFocus: false,
    },
  },
});
