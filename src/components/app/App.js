import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ErrorBoundary from '../ErrorBoundary'
import JobsBoard from "../JobsBoard"
import JobDescription from "../JobDescription";
import Page404 from "../404";


const App = () => {
  return (
    <Router>
      <div> 
        <Routes>
          <Route  path="/" element={<ErrorBoundary> <JobsBoard/></ErrorBoundary>  }/>\
          <Route  path="test-react-app" element={<ErrorBoundary> <JobsBoard/></ErrorBoundary>  }/>\
          <Route  path="/job/:jobId" element={<ErrorBoundary> <JobDescription/></ErrorBoundary> }/>
          <Route  path="*" element={<Page404/>}/>
        </Routes>   
      </div>
    </Router>
    
  )
} 

export default App