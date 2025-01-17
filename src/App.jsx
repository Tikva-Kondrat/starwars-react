import 'bootstrap/dist/css/bootstrap.css'
import Header from "./components/Header.jsx";
import MainSection from "./components/MainSection.jsx";
import Footer from "./components/Footer.jsx"
import './App.css'

function App() {

    return (
        <div className="container-fluid">
        <Header/>
        <MainSection/>
        <Footer/>
        </div>
    )
}

export default App
