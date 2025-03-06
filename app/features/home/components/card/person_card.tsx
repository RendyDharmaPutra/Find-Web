import { Link } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type PersonCardProps = {};

export const PersonCard: React.FC<PersonCardProps> = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      to={"/home/2"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-row justify-between items-center w-full h-fit max-h-22 bg-primaryBG hover:bg-secondaryBG duration-300"
    >
      <section className="px-4 py-5 flex flex-col gap-1 w-full ">
        <p className="font-semibold text-lg text-primaryTxt ">Nama Orang</p>
        <p className="font-normal text-sm text-tertiaryTxt">
          Pekerjaan | Alamat
        </p>
      </section>
      {hover && (
        <AnimatePresence mode="wait">
          <motion.div
            className="flex justify-center items-center w-[50px] h-full "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-6 h-6 text-secondaryTxt" />
          </motion.div>
        </AnimatePresence>
      )}
    </Link>
  );
};
