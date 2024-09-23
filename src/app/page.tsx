import Image from "next/image";
import Return from "./components/Return";
import Props from "./components/Props";
import State from "./components/State";

export default function Home() {
  return (
    <div>
      {/* <Return /> */}
      <Props name='sakib' id='12'/>
      <State/>
    </div>
  );
}
