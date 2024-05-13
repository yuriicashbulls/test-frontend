import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {Integration, IntegrationCallback} from "./page/integration/integration";

function App() {


    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<Integration/>}/>
                <Route path='/integrations' element={<IntegrationCallback/>}/>
            </Routes>
        </div>
    );
}

export default App;
