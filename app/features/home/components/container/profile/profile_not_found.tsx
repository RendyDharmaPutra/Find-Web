import { CircleAlert, RefreshCw } from "lucide-react";

type ProfileNotFoundProps = {
  message: string;
  description: string;
};

export const ProfileNotFound: React.FC<ProfileNotFoundProps> = (props) => {
  return (
    <div className="p-4 flex flex-col center gap-4 w-full ">
      <section className="flex flex-row gap-[10px] w-full ">
        <div className="flex center w-9 h-9 ">
          <CircleAlert className="w-full h-full text-danger" />
        </div>
        <section className="flex flex-col gap-1 w-full ">
          <h6 className="font-semibold text-base text-primaryTxt">
            {props.message}
          </h6>
          <p className="font-normal text-sm text-tertiaryTxt">
            {props.description}
          </p>
        </section>
      </section>
      <section className="flex center w-full h-9 ">
        <button
          type="button"
          className="group px-2 py-1 flex flex-row center gap-1.5 w-full h-full rounded-full border border-darkSecondaryBG/60  hover:bg-tertiaryBG active:bg-secondaryBG font-medium text-sm text-secondaryTxt duration-300"
        >
          <RefreshCw className="w-[18px] h-[18px] " />
          Muat Ulang
        </button>
      </section>
    </div>
  );
};
