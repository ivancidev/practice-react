import Counter from "./components/Counter";
import { ListTasks } from "./pages/List/ListTasks";
import Register from "./pages/Register/Register";
import UserList from "./pages/List/UserList";
import ShowCard from "./pages/ShowCard/ShowCard";
import Calculator from "./pages/CalculatorMemo/Calculator";
import Callback from "./components/Callback/Callback";
import CounterReducer from "./components/Reducers/CounterReducer";
import TodoList from "./components/Reducers/TodoList";

function App() {
  return (
    <>
      {/* <ListTasks /> */}
      {/* <UserList /> */}
      {/* <Counter /> */}
      {/* <Register /> */}
      <ShowCard />
      {/* <Calculator /> */}
      {/* <Callback /> */}
      {/* Contador con useReducer */}
      {/* <CounterReducer /> */}
      {/* <TodoList /> */}
    </>
  );
}

export default App;
