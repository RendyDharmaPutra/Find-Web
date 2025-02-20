import { AuthContent } from "../container/auth_content";

type AuthPageProps = {
  title: string;
  question: string;
  text: string;
  children: React.ReactNode;
};

export const AuthPage: React.FC<AuthPageProps> = (props) => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-tertiaryBG">
      <AuthContent
        title={props.title}
        question={props.question}
        text={props.text}
      >
        {props.children}
      </AuthContent>
    </div>
  );
};
