import './App.css';
import FormInput from './components/FormInput'
import List from './components/List';
import Footer from './components/Footer';
import {DataProvider} from './components/DataProvider'


function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <DataProvider>   {/* Bắt buộc */}      
        <FormInput />
        <List />
        <Footer />
      </DataProvider> {/* Bắt buộc */}         
    </div>
  );
}

export default App;
