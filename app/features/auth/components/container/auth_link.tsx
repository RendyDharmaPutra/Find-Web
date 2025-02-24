import { Link } from "@remix-run/react";

type AuthLinkProps = {
  route: "login" | "register";
  question: string;
  text: string;
};

export const AuthLink: React.FC<AuthLinkProps> = (props) => {
  return (
    <div className="flex justify-center items-center w-full ">
      <h6 className="font-medium text-sm">
        {props.question}?{" "}
        <Link
          to={`/auth/${props.route}`}
          className="text-primary hover:text-secondary duration-300"
        >
          {props.text}
        </Link>
      </h6>
    </div>
  );
};
