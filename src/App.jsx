import './App.css';
import Home from './Home';
import {store} from "./context"
import {Provider} from "react-redux"


function App() {
  return (
    <Provider store={store}>

      <div className='flex w-full'>
        <Home />
      </div>
    </Provider>
  );
}

export default App;
