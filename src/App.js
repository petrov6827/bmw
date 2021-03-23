import logo from './images/logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Greetings from "./components/Greetings";

const SimpleForm = () => {

        return (
            <div>
                <input type="text" name="firstName" />
                <Greetings firstName="John" />
            </div>
        );

}

function App() {
  return (
    <div className="App">
        <Header />
        <SimpleForm />
        <Body />
        <Footer />
    </div>
  );
}


export default App;
