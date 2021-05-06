import {useState} from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import { Footer } from './component/Footer';
import { Header } from './component/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Skill } from './pages/Skill';
import { Contact } from './pages/Contact';

const App = () => {
  const [header, setHeader] = useState('home');

  return (
    <BrowserRouter>
      <div>
        <Header header={header} setHeader={setHeader}/>
      </div>
      <Switch>
            <Route exact path="/"  component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Skill" component={Skill} />
            <Route exact path="/Contact" component={Contact} />
        </Switch>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
