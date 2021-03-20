import "./styles.css";
import React from "react";

type WithFirst = {
  first: number;
};

type AddType1 = {
  children: React.ReactNode;
} & WithFirst;

type AddType2 = {
  second: number;
} & WithFirst;

function Add({ first, children }: AddType1): React.ReactElement;
function Add({ first, second }: AddType2): React.ReactElement;
function Add({ first, second, children }: any): React.ReactElement {
  return <h1>{first + (children || second)}</h1>;
}

export default function App() {
  return (
    <div className="App">
      <h1>1+2=</h1>
      first overload:
      <Add first={1}>{2}</Add>
      second overload:
      <Add first={1} second={2} />
    </div>
  );
}
