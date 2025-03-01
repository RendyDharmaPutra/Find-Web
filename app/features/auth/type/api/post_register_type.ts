type PostRegisterType = {
  status: "Success" | "Failed";
  message: string;
};

export type SuccessPostRegisterType = PostRegisterType & {
  status: "Success";
  data?: {
    token: string;
  };
};

export type FailedPostRegisterType = PostRegisterType & {
  status: "Failed";
  error: string;
};
