import { PropsWithChildren } from "react";

interface Props {
  id?: string;
  className?: string;
}

const Section = ({ children, id, className }: PropsWithChildren<Props>) => {
  return (
    <section className={`h-[670px] px-[140px] ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
