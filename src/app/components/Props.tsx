import React, { PropsWithChildren } from "react";
// type componentsProps = { name: string; id: string; children?: React.ReactNode };
type componentsProps =PropsWithChildren <{ name: string; id: string; }>;
const Props = ({ name, id, children }: componentsProps) => {
  return (
    <div>
      <h2 className="text-3xl">Practicing Props</h2>
    </div>
  );
};

export default Props;
