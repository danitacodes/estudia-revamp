import './App.css';
import "bootswatch/dist/lux/bootstrap.min.css"; // Added this :boom:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './screens/Home/Home';
import StudyPage from './screens/Study/StudyPage';
import StudyList from './screens/Study/StudyList';
import Signin from './screens/Signin/SigninScreen';
import Signup from './screens/Signup/Signup'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/studypage' element={<StudyPage />} />
          <Route path='/studylist' element={<StudyList />} />
        </Routes>
      </main>
      <Footer />
      </div>
    </BrowserRouter>
      
  );
}

export default App;
