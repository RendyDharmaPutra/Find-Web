import { motion } from "framer-motion";
import { useNavigation } from "@remix-run/react";
import { LoadingCircle } from "../../boundary/loading)_circle";

type SubmitBtnProps = {
  label: string;
  width: string;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = (props) => {
  const { state } = useNavigation();
  const pending = state === "submitting";

  return (
    <motion.button
      aria-disabled={pending}
      disabled={pending}
      type="submit"
      className={`px-3 py-4 flex justify-center items-center w-${
        props.width
      } rounded-medium outline-none  ${
        pending ? "bg-tertiaryBG" : "bg-primary"
      }  hover:bg-secondary active:bg-primary duration-300`}
      whileTap={{
        scale: 1.1,
      }}
    >
      {pending ? (
        <LoadingCircle />
      ) : (
        <p className="font-semibold text-base text-primaryBG">{props.label}</p>
      )}
    </motion.button>
  );
};
