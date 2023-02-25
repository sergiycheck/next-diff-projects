import React, { PropsWithChildren } from "react";

const Text = React.forwardRef<
  null,
  React.HTMLAttributes<HTMLParagraphElement> & PropsWithChildren
>((props, ref) => {
  return (
    <p {...props} ref={ref}>
      {props.children}
    </p>
  );
});
Text.displayName = "Text";

export default Text;
