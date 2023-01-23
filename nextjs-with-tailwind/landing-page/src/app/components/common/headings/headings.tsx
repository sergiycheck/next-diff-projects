export const H1Heading = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <h1
      className={`text-3xl sm:text-5xl font-bold ${className ? className : ''}`}
    >
      {children}
    </h1>
  );
};

export const H3Heading = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <h4
      className={`text-2xl sm:text-3xl font-bold ${className ? className : ''}`}
    >
      {children}
    </h4>
  );
};

export const H4Heading = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <h4
      className={`text-xl sm:text-2xl font-bold ${className ? className : ''}`}
    >
      {children}
    </h4>
  );
};
