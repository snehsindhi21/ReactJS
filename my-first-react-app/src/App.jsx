import React, { use } from "react";
import Fragment1 from "./ReactFragments/Fragment1";
import Fragment2 from "./ReactFragments/Fragment2";
import FunComp1 from "./Components/FunComp1";
import FunComp2 from "./Components/FunComp2";
import Parent from "./Props/Parent";
import Component1 from "./Props/Component1";
import CommonCompo from "./Props/CommonCompo";
import Home from "./Props/Home";
import About from "./Props/About";
import WithState from "./State/WithState";
import WithoutState from "./State/WithoutState";
import CounterWithClass from "./State/CounterWithClass";
import ProductList from "./TaskStatePropsList/ProductList";
import EventWithParameter from "./EventHandling/EventWithParameter";
import InlineEvent from "./EventHandling/InlineEvent";
import ExternalEventHandling from "./EventHandling/ExternalEventHandling";
import ChangeEvent from "./EventHandling/ChangeEvent";
import SubmitEvent from "./EventHandling/SubmitEvent";
import IfElseRendering from "./ConditionalRendering/IfElseRendering";
import TernaryOperator from "./ConditionalRendering/TernaryOperator";
import ShortCircuit from "./ConditionalRendering/ShortCircuit";
import ControlledFormHandling from "./FormHandling/ControlledFormHandling";
import SingleStateObject from "./FormHandling/SingleStateObject";
import RadioInput from "./FormHandling/RadioInput";
import CheckBox from "./FormHandling/CheckBox";
import SelectDropdown from "./FormHandling/SelectDropdown";
import FileUpload from "./FormHandling/FileUpload";
import FormTask from "./FormHandling/FormTask";
import UnControlledFormHandling from "./FormHandling/UnControlledFormHandling";
import LoginUncontrolled from "./FormHandling/LoginUncontrolled";
import InlineStyling from "./StylingReact/InlineStyling";
import InternalStyle from "./StylingReact/InternalStyle";
// import Component2 from "./StylingReact/Component2";
import ToggleAndNotify from "./PasswordTask/ToggleAndNotify";
import TodoApp from "./TodoListTask/TodoApp";
import ParentComponent from "./ContextAPI/ParentComponent";
import ChildComponent from "./ContextAPI/ChildComponent";
import GrandChildComponent from "./ContextAPI/GrandChildComponent";
import CounterProvider from "./ContextAPI/ContextAPIandState/CounterProvider";
import Counter from "./ContextAPI/ContextAPIandState/Counter";
import ThemeProvider from "./ContextAPI/ThemeProvider";
import HomePage from "./ContextAPI/HomePage";
import UseEffect1 from "./UseEffectHook/UseEffect1";
import UseEffect2 from "./UseEffectHook/UseEffect2";
import TaskUsersList from "./TaskUsersList/TaskUsersList";
import Task1 from "./APIFetch+SearchFilter/Task1";


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

     {/* <CommonCompo /> */}

     {/* <Home /> */}
     {/* <About /> */}

     {/* <WithState />
     <WithoutState /> */}
     {/* <CounterWithClass /> */}
     {/* <ProductList /> */}
     {/* <InlineEvent /> */}
     {/* <ExternalEventHandling */}
      {/* <EventWithParameter /> */}
      {/* <ChangeEvent/> */}
      {/* <SubmitEvent/> */}
      {/* <IfElseRendering /> */}
      {/* <TernaryOperator /> */}
      {/* <ShortCircuit /> */}
      {/* <ControlledFormHandling/> */}
      {/* <SingleStateObject/> */}
      {/* <RadioInput/> */}
      {/* <CheckBox /> */}
      {/* <SelectDropdown/> */}
      {/* <FileUpload/> */}
      {/* <FormTask/> */}
      {/* <UnControlledFormHandling/> */}
      {/* <LoginUncontrolled/> */}
      {/* <InlineStyling/> */}
      {/* <InternalStyle/> */}
      {/* <Component2/> */}
      {/* <ToggleAndNotify/> */}
      {/* <TodoApp/> */}
      {/* <ParentComponent>
        <ChildComponent/>
        <GrandChildComponent/>
      </ParentComponent> */}
      {/* <CounterProvider>
        <Counter/>
      </CounterProvider> */}
      {/* <ThemeProvider>
        <HomePage/>
      </ThemeProvider> */}
      {/* <UseEffect1/> */}
      {/* <UseEffect2/> */}
      {/* <TaskUsersList/> */}
      <Task1/>
    </>
  );
};

export default App;