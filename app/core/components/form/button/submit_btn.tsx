import { useNavigation } from "@remix-run/react";

type SubmitBtnProps = {
  label: string;
  width: string;
};

export const SubmitBtn: React.FC<SubmitBtnProps> = (props) => {
  const { state } = useNavigation();
  const pending = state === "submitting";

  return (
    <button
      aria-disabled={pending}
      disabled={pending}
      type="submit"
      className={`px-3 py-4 flex justify-center items-center w-${
        props.width
      } rounded-medium outline-none  ${
        pending ? "bg-tertiaryBG" : "bg-primary"
      }  hover:bg-secondary active:bg-primary duration-300`}
    >
      <p className="font-semibold text-base text-primaryBG">
        {pending ? "Menyimpan" : props.label}
      </p>
    </button>
  );
};
