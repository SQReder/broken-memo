import React, { memo, useState } from "react";
import "./App.css";

interface Props<T> {
  value: T;
  setValue: (value: T) => void;
}

function GenericComponent<T>({ value }: Props<T>) {
  return <div>{value}</div>;
}

const MemoizedGenericComponent = memo(GenericComponent);

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <GenericComponent value={value} setValue={setValue} />
      <MemoizedGenericComponent value={value} setValue={setValue} />
    </>
  );
};

export default App;
