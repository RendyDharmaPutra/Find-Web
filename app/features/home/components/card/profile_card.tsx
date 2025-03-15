import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import { ProfileType } from "../../type/profile_type";

type ProfileCardProps = {
  profile: ProfileType;
};

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
  return (
    <Link
      to={"/home/profile"}
      className="px-4 py-3 flex flex-row justify-between w-full h-[72px]  bg-primaryBG hover:bg-secondaryBG active:bg-tertiaryBG duration-300"
    >
      <section className="flex flex-col gap-0.5 w-full h-full ">
        <p className="font-medium text-base text-primaryTxt">
          {props.profile.fullname}
        </p>
        <p className="font-normal text-sm text-secondaryTxt">
          {props.profile.username}
        </p>
      </section>
      <div className="flex justify-center items-center w-[50px] h-full ">
        <ChevronRight className="w-6 h-6 text-secondaryTxt" />
      </div>
    </Link>
  );
};
