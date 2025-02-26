import { AuthActionType } from "~/features/auth/type/action/auth_action_type";
import { SonnerWrapper } from "./sonner_wrapper";

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
      <div className="absolute top-8 right-8 px-4 py-1 flex flex-col justify-center items-center gap-1 min-w-[480px] min-h-[56px] rounded-medium bg-primaryBG">
        <h6 className="font-medium text-lg text-secondaryTxt">
          {response?.message}
        </h6>
        {error && <p className="text-sm text-tertiaryTxt">{error?.message}</p>}
      </div>
    </SonnerWrapper>
  );
};
