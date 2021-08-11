import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";

import store from './store';

import TodoList from './TodoList';
import Counter from './Counter';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <TodoList />
          <Counter />
        </header>
      </div>
    </Provider>
  );
}

export default App;
