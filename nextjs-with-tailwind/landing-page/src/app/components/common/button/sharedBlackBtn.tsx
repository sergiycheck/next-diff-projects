type SharedBlackButtonProps = {
  className?: string;
  text: string;
};
export const SharedBlackButton = ({
  text,
  className,
}: SharedBlackButtonProps) => (
  <div
    className={`p-3 bg-zinc-900 text-white rounded-lg text-center shadow-2xl ${
      className ? className : ''
    }`}
  >
    {text}
  </div>
);
