import React, { use } from "react";
import Fragment1 from "./ReactFragments/Fragment1";
import Fragment2 from "./ReactFragments/Fragment2";
import FunComp1 from "./Components/FunComp1";
import FunComp2 from "./Components/FunComp2";
import Parent from "./Props/Parent";
import Component1 from "./Props/Component1";
import CommonComp from "./Props/CommonComp";
import Home from "./Props/Home";
import About from "./Props/About";
import WithState from "./State/WithState";
import WithoutState from "./State/WithoutState";

const App = () => {
  let username = "Don";

  return (
    <>
      {/* <h1>Hello React</h1>
      <p>This is subheading</p>
      <img src="https://picsum.photos/300/200" alt="" />
      <br />
      <hr /> */}
      {/* <h1>{username === "" ? "John" : " Guest"}</h1> */}
     {/* <button onClick={}></button> */}
     {/* <Fragment1/>
     <Fragment2/> */}

     {/* <FunComp1/>
     <FunComp2/> */}

     {/* <Parent /> */}

     {/* <Component1 /> */}

     {/* <CommonComp /> */}

     {/* <Home /> */}
     {/* <About /> */}

     <WithState />
     <WithoutState />

    </>
  );
};

export default App;