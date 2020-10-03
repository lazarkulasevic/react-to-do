import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Form from "./components/Form";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" />
                <h1>To-do List</h1>
            </header>
            <section className="App-section">
                <Form />
            </section>
            <footer className="App-footer">
                <p class="App-developer">
                    Created with <span>&hearts;</span> by{" "}
                    <a href="https://github.com/lazarkulasevic">
                        Lazar Kulasevic
                    </a>
                    .
                </p>
            </footer>
        </div>
    );
}

export default App;
