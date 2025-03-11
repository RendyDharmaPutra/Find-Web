import { CircleAlert, RefreshCw } from "lucide-react";

type PersonNotFoundProps = {
  message: string;
  description: string;
};

export const PersonNotFound: React.FC<PersonNotFoundProps> = (props) => {
  return (
    <section className="flex center w-full h-full ">
      <div className="px-6 py-4 flex flex-col center w-full min-h-[240px] gap-4 ">
        <section className="flex flex-col items-center w-full gap-[10px] ">
          <div className="w-12 h-12 center ">
            <CircleAlert className="w-full h-full text-danger" />
          </div>
          <section className="flex flex-col center w-full gap-1 ">
            <h6 className="font-semibold text-base text-center text-primaryTxt">
              {props.message}
            </h6>
            <p className="font-normal text-sm text-center text-tertiaryTxt">
              {props.description}
            </p>
          </section>
        </section>
        <section className="flex center w-full ">
          <button
            type="button"
            className="group px-3 py-2 flex flex-row center gap-2 rounded-full border border-darkSecondaryBG/60  hover:bg-tertiaryBG active:bg-secondaryBG font-normal text-sm text-secondaryTxt duration-300"
          >
            <RefreshCw className="w-[18px] h-[18px] " />
            Muat Ulang
          </button>
        </section>
      </div>
    </section>
  );
};
