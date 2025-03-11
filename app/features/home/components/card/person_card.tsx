import { Link } from "@remix-run/react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { PersonType } from "../../type/person_type";

type PersonCardProps = {
  person: PersonType;
};

export const PersonCard: React.FC<PersonCardProps> = (props) => {
  const person = props.person;

  const [hover, setHover] = useState(false);

  return (
    <Link
      to={`/home/${person.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-row justify-between items-center w-full h-fit max-h-22 border-b border-darkPrimaryBG/8 bg-primaryBG hover:bg-secondaryBG active:bg-tertiaryBG duration-300"
    >
      <section className="px-4 py-5 flex flex-col gap-1 w-full ">
        <p className="font-semibold text-base text-primaryTxt ">
          {person.fullname}
        </p>
        <p className="font-normal text-xs text-tertiaryTxt">
          {person.job} | {person.address}
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
