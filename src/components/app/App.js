import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {JobsBoard, JobDescription, Page404} from '../pages'


import ErrorBoundary from '../ErrorBoundary'


const App = () => {
  return (
    <Router>
      <> 
        <Routes>
          <Route  path="/" element={ <JobsBoard/>}/>\
          <Route  path="test-react-app" element={<JobsBoard/>}/>\
          <Route  path="/job/:jobId" element={<JobDescription/> }/>
          <Route  path="*" element={<Page404/>}/>
        </Routes>   
      </>
    </Router>
    
  )
} 

export default App