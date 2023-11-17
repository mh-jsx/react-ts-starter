import Util from 'util/util';

import Test from 'components/Test';

import ReactSvg from 'assets/react.svg?react';

import './App.css';

function App() {
  const a = (x: any) => x;

  return (
    <>
      Hello
      <ReactSvg />
      <Test asd='' />
    </>
  );
}

export default App;
