type AuthValidationType = {
  Username?: string[] | undefined;
  Password?: string[] | undefined;
};
export type RegisterValidationType = AuthValidationType & {
  Fullname?: string[] | undefined;
};
export type LoginValidationType = AuthValidationType;
