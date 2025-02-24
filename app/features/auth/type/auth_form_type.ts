type AuthFormType = {
  Username: string;
  Password: string;
};

export type LoginFormType = AuthFormType;

export type RegisterFormType = AuthFormType & {
  Fullname: string;
};
