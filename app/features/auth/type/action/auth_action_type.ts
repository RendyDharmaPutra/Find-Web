export type AuthActionType<T = any> = {
  status: "Success" | "Failed";
  message: string;
  error?: {
    validation?: T;
    message: string;
  };
};
