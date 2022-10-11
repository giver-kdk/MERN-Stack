// Including CSS in ReactJS
import './App.css';
// No need to write ".js" extension in ReactJS
// Use "./" for relative path
import Header from "./components/header"
import MainContent from "./components/body"
import Footer from "./components/footer"

function Page() 
{
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
function App() {
  return (
    <div className="App">
      <Page/>
    </div>
  );
}

export default App;
