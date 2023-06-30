import './App.css';
// import Hero from './Hero/Hero';
// import About from './About/About';
// import Courses from './Courses/Courses';
// import Pricing from './Pricing/Pricing';
// // import CoursesDetails from './CoursesDetails/CoursesDetails';
// import BlogSection from './Blog/BlogSection';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Route, Routes } from 'react-router-dom';
import Register from './Register/Register';
import Login from './Login/Login';
import HomeLayout from './HomeLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/' element={<HomeLayout/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
