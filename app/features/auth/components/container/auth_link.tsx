import { Link } from "@remix-run/react";

type AuthLinkProps = {
  question: string;
  text: string;
};

export const AuthLink: React.FC<AuthLinkProps> = (props) => {
  return (
    <div className="flex justify-center items-center w-full ">
      <h6 className="font-medium text-sm">
        {props.question}?{" "}
        <Link
          to={`auth_route`}
          className="text-primary hover:text-secondary duration-300"
        >
          {props.text}
        </Link>
      </h6>
    </div>
  );
};
