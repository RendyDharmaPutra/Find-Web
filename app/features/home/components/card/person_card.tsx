import { Link } from "@remix-run/react";
import { ChevronDown } from "lucide-react";

type PersonCardProps = {};

export const PersonCard: React.FC<PersonCardProps> = (props) => {
  return (
    <Link
      to={"/home/2"}
      className="flex flex-row justify-between items-center w-full h-fit max-h-22 bg-primaryBG hover:bg-secondaryBG duration-300"
    >
      <section className="px-4 py-5 flex flex-col gap-1 w-full ">
        <p className="font-semibold text-lg text-primaryTxt ">Nama Orang</p>
        <p className="font-normal text-sm text-tertiaryTxt">
          Pekerjaan | Alamat
        </p>
      </section>
      <div className="flex justify-center items-center w-[50px] h-full ">
        <ChevronDown className="w-6 h-6 text-secondaryTxt" />
      </div>
    </Link>
  );
};
