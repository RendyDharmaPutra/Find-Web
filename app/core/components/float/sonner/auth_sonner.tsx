import { AuthActionType } from "~/features/auth/type/action/auth_action_type";
import { SonnerWrapper } from "./sonner_wrapper";
import { CircleAlert, CircleCheck, Info } from "lucide-react";

type AuthSonnerProps<T extends AuthActionType> = {
  response: T | undefined;
};

export const AuthSonner = <T extends AuthActionType>(
  props: AuthSonnerProps<T>
) => {
  const response = props.response;
  const error = props.response?.error;

  return (
    <SonnerWrapper condition={response}>
      <section className="absolute top-8 right-8 p-4 flex flex-row items-center gap-3 min-w-[360px] max-w-[480px] min-h-[56px] rounded-medium bg-primaryBG">
        <div className="w-7 h-7 rounded-full ">
          {response?.status === "Success" ? (
            <CircleCheck className="w-full h-full text-success" />
          ) : (
            <CircleAlert className="w-full h-full text-danger" />
          )}
        </div>
        <div className="flex flex-col justify-center gap-[3px] w-full h-full ">
          <h6 className="font-semibold text-base text-primaryTxt w-full">
            {response?.message}
          </h6>
          {error && (
            <p className="text-sm text-tertiaryTxt w-full">{error?.message}</p>
          )}
        </div>
      </section>
    </SonnerWrapper>
  );
};
