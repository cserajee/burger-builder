
import './App.css';
import Layout from './Components/Layout/Layout';
import BurgerContainer from './Containers/BurgerContainer';

function App() {
  return (
    <div className="App"> 
    <Layout>
      <BurgerContainer />
    </Layout>
    </div>
  );
}

export default App;
