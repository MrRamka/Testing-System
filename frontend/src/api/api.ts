import { AxiosResponse } from "axios";
import { ResponseResult } from "./types";

function helpResponseDataTransformer<TData>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responseData: any,
  status?: number
): ResponseResult<TData> {
  let data: ResponseResult<TData>;
  if (status === 200) {
    data = {
      data: responseData.data,
      message: responseData.message,
      success: true,
      code: status ?? 200,
    };
  } else {
    data = {
      data: responseData.data,
      message: responseData.message,
      success: false,
      code: status,
    };
  }
  return data;
}

export async function makeRequest<TData>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  requester: () => Promise<AxiosResponse<any>>
): Promise<ResponseResult<TData>> {
  const result = await requester();

  return helpResponseDataTransformer<TData>(result.data, result.status);
}
