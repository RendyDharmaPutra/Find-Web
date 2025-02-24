import {
  FailedPostRegisterType,
  SuccessPostRegisterType,
} from "./post_register_type";

export const isFailedPostRegister = (
  response: SuccessPostRegisterType | FailedPostRegisterType
): response is FailedPostRegisterType => {
  return (response as FailedPostRegisterType).error !== undefined;
};
