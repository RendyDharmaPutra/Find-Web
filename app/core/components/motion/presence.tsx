import { AnimatePresence } from "framer-motion";

type AnimatePresenceProps = {
  children: React.ReactNode;
};

export const Presence: React.FC<AnimatePresenceProps> = (props) => {
  return <AnimatePresence mode="wait">{props.children}</AnimatePresence>;
};
