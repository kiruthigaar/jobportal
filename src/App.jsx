import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import JobList from './components/JobList';
import ApplyForm from './components/ApplyForm';
import {Provider} from 'react-redux'
import { store } from './components/store';
import ViewDetails from './components/ViewDetails';
import Appmarkedcomponent from './components/Appmarkedcomponent';
import ExampleFormik from './components/ExampleFormik';
function App() {
 

  return (
    <>
    <Provider store = {store}>
      <Routes>
        <Route path="/" element = {<JobList />}></Route>
        <Route path="/applyForm/:id" element = {<ApplyForm />}></Route>
        <Route path="/viewdetails/" element = {<ViewDetails />}></Route>
        <Route path="/markedcomponent/" element = {<Appmarkedcomponent />}></Route>
        {/* <Route path="/exampleformik/" element = {<ExampleFormik />}></Route> */}
      </Routes>
    </Provider>
    </>
  )
}

export default App
