import React from "react";

interface Props {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}: React.PropsWithChildren<Props>) => {
  return (
    <div
      className={`mx-auto w-full md:max-w-7xl ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

export default Container;
