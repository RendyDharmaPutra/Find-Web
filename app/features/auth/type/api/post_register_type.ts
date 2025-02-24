type PostRegisterType = {
  status: "Success" | "Failed";
  message: string;
};

export type SuccessPostRegisterType = PostRegisterType & {
  status: "Success";
};

export type FailedPostRegisterType = PostRegisterType & {
  status: "Failed";
  error: string;
};
