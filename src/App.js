import CvBody from "./components/CvBody";
import CvHeader from "./components/CvHeader";
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="main__container">
      <CvHeader/>
      <CvBody/>
      <Footer/>
    </div>
  );
}

export default App;
