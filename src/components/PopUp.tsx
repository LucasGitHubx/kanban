import { useState } from "react";

interface Props {
  message: string;
  status: string;
}

export default function PopUp({ message, status }: Props) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      {message == "error" ? (
        <div className={active ? "popup active error" : "popup"}></div>
      ) : (
        <div className={active ? "popup active successful" : "popup"}></div>
      )}
    </>
  );
}
