import { Link } from "@remix-run/react";
import { Plus } from "lucide-react";

type ActionTrailingProps = {};

export const ActionTrailing: React.FC<ActionTrailingProps> = (props) => {
  return (
    <div className="flex flex-row items-center gap-1 ">
      <Link
        to={"/home/add"}
        className="rounded-full hover:bg-tertiaryBG  active:bg-tertiaryBG duration-300"
      >
        <Plus className="w-6 h-6 text-secondaryTxt" />
      </Link>
    </div>
  );
};
