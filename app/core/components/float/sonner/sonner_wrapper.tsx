import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AuthActionType } from "~/features/auth/type/action/auth_action_type";

type SonnerWrapperProps<T extends AuthActionType> = {
  condition: T | undefined;
  children: React.ReactNode;
};

export const SonnerWrapper = <T extends AuthActionType>(
  props: SonnerWrapperProps<T>
) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.condition) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [props.condition]);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
          {props.children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
