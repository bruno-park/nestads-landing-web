import { PropsWithChildren } from "react";

interface Props {
  id?: string;
  className?: string;
}

const Section = ({ children, id, className }: PropsWithChildren<Props>) => {
  return (
    <section className={`w-screen md:w-full ${className}`} id={id}>
      {children}
    </section>
  );
};

export default Section;
