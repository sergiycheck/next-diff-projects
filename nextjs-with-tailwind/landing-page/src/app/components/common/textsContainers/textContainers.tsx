export const PEl = ({
  children,
  className,
}: {
  children: JSX.Element;
  className?: string;
}) => {
  return (
    <p className={`break-words ${className ? className : ''}`}>{children}</p>
  );
};

export const Text = ({ children }: { children: string }) => {
  return <>{children}</>;
};
