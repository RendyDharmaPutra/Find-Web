import { AuthHeadline } from "./auth_headline";
import { AuthLink } from "./auth_link";

type AuthContentProps = {
  title: string;
  question: string;
  text: string;
  children: React.ReactNode;
};

export const AuthContent: React.FC<AuthContentProps> = (props) => {
  return (
    <div className="flex flex-col items-center p-8 gap-6 w-[400px] rounded-large bg-primaryBG">
      <AuthHeadline title={props.title} />
      {props.children}
      <AuthLink question={props.question} text={props.text} />
    </div>
  );
};
