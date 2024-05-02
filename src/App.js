import './App.css';
import './css/home.css';
import './css/about.css';
import { BrowserRouter as Router, Route ,Switch } from 'react-router-dom';
import Navbar from './header-footer/navbar.js';
import Homepage from './pages/Home.js'
import Aboutpage from './pages/About.js';
import Footer from './header-footer/footer.js';
import BacktoTop from './Home-componets/back-to-top.js';
import OurChefs from './pages/Chefs.js';
import Menu from './pages/Menu.js';
import OurContact from './pages/Contact.js';
import SignUp from './pages/Sign-Up.js';
import SignIn from './pages/Sign-In.js';
import Food from './pages/Food.js';

function App() {

  return (
   <>
   
   <Router >
  
   <Navbar />
   <Switch>
            <Route path='/home'><Homepage /></Route>
            <Route path='/About Us'><Aboutpage /> </Route>
            <Route path='/Our Chef'><OurChefs /> </Route>
            <Route path='/Menu'><Menu /> </Route>
            <Route path='/Food'><Food /> </Route>
            <Route path='/Contact'><OurContact /> </Route>
            <Route path='/SignUp'><SignUp /></Route>
            <Route path='/logIn'><SignIn /></Route>
            
    </Switch>
    
   <Footer/>
   <BacktoTop />
   </Router>
   </>
  );
}

export default App;


