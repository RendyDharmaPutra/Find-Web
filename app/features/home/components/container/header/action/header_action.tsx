import { Link } from "@remix-run/react";
import { ActionTrailing } from "./action_trailing";

type HeaderActionProps = {};

export const HeaderAction: React.FC<HeaderActionProps> = (props) => {
  return (
    <div className="flex flex-row justify-between w-full ">
      <Link to={"/home"} className="font-bold text-2xl text-primary">
        Daftar Orang
      </Link>
      <ActionTrailing />
    </div>
  );
};
