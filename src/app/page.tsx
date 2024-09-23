import Image from "next/image";
import Return from "./components/Return";
import Props from "./components/Props";
import State from "./components/State";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      {/* <Return /> */}
      <Props name='sakib' id='12'/>
      <State/>
      <Form/>
    </div>
  );
}
