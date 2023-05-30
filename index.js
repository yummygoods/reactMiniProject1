import React from "react";
import ReactDOM from "react-dom";
import Info from "./components/Info";
import Text from "./components/Text";

import Footer from "./components/Footer"

function App(){
    return (

        <main>
        <Info />
        <Text />
        <Footer />
        </main>
    );
}

ReactDOM.render(<App/>, document.getElementById("root"));