import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import { store } from './store';
import Board from './components/Board/Board';
import LogContainer from './components/Log/Log.container';
import BiddersContainer from './components/Bidder/Bidders.container';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="row container mx-auto">
          <div className="col-md-2 border"></div>
          <div className="col-md-8 border"><Board></Board></div>
          <div className="col-md-2 border"><LogContainer></LogContainer></div>
        </div>
        <div className="row container mx-auto border">
          <div className="col-md-10">
           <BiddersContainer></BiddersContainer>
          </div>          
        </div>
      </div>
    </Provider>
  );
}

export default App;
