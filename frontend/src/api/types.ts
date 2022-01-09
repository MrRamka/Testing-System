export type SuccessResponseResult<TData> = {
  code?: number;
  success: true;
  message?: string;
  data: TData;
};

export type ErrorResponseResult<TData> = {
  code?: number;
  success: false;
  message?: string;
  data: TData;
};

export type ResponseResult<TData> =
  | SuccessResponseResult<TData>
  | ErrorResponseResult<TData>;
