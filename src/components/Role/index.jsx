import React from "react";
import { useStore } from "store";
import Eyes from "./Eyes";
import Face from "./Face";

const Role = () => {
  const { face, eyes } = useStore();

  return (
    <Face type={face}>
      <Eyes type={eyes} />
    </Face>
  );
};

export default Role;
