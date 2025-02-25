import { AuthActionType } from "~/features/auth/type/action/auth_action_type";

type SonnerProps<T extends AuthActionType> = {
  response: T | undefined;
};

export const Sonner = <T extends AuthActionType>(props: SonnerProps<T>) => {
  const response = props.response;
  const error = props.response?.error;

  return (
    <div className="absolute top-8 right-8 px-4 py-1 flex flex-col justify-center items-center gap-1 min-w-[480px] min-h-[56px] rounded-medium bg-primaryBG">
      <h6 className="font-medium text-lg text-secondaryTxt">
        {response?.message}
      </h6>
      {error && <p className="text-sm text-tertiaryTxt">{error?.message}</p>}
    </div>
  );
};
