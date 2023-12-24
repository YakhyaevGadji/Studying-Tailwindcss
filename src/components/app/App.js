import Form from "../form/Form";
import Header from "./../header/Header";

function App() {
    return (
        <div className="min-h-screen bg-[url('./../public/wave.svg')] bg-no-repeat bg-bottom bg-fixed">
            <Header/>
            <Form/>
        </div>
    );
}

export default App;