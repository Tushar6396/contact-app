import './App.css';
import Header from './Components/Header'
import AddContact from "./Components/AddContact";
import ContactList from './Components/ContactList';

function App() {
  return (
    <div className='app'>
       <Header />
       <AddContact />
       <ContactList /> 
    </div>
  );
}

export default App;
