import React from "react";
import { useStore } from "store";
import Eyes from "./Eyes";
import Face from "./Face";
import Hair from "./Hair";
import Mouth from "./Mouth";

const Role = () => {
  const { face, hair, eyes, mouth } = useStore();

  return (
    <Face type={face}>
      <Hair type={hair} />
      <Eyes type={eyes} />
      <Mouth type={mouth} />
    </Face>
  );
};

export default Role;
