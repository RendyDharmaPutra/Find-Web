export type ApiResponseType<T> = {
  status: "Success" | "Failed";
  message: string;
  data?: T;
  error?: string;
};
