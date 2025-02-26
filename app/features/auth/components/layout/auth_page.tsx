import { AuthSonner } from "~/core/components/float/sonner/auth_sonner";
import { AuthContent } from "../container/auth_content";
import { AuthActionType } from "../../type/action/auth_action_type";

type AuthPageProps<T extends AuthActionType> = {
  title: string;
  route: "login" | "register";
  question: string;
  text: string;
  response: T | undefined;
  children: React.ReactNode;
};

export const AuthPage = <T extends AuthActionType>(props: AuthPageProps<T>) => {
  const response = props.response;

  return (
    <div className="relative flex justify-center items-center w-full h-screen bg-tertiaryBG">
      <AuthSonner response={response} />
      <AuthContent
        title={props.title}
        route={props.route}
        question={props.question}
        text={props.text}
      >
        {props.children}
      </AuthContent>
    </div>
  );
};
