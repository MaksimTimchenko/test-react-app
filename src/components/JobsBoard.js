import {useState, useEffect} from 'react'


import useServices from '../services/services'
import ErrorMessage from './errorMessage/ErrorMessage'
import Spinner from './spiner/Spinner'
import Job from './Job'


import PaginatedItems from './Pagination'

const JobsBoard = () => {
    const [jobsList, setJobsList] = useState([]);


    const {loading, error, getFreeJobs} = useServices()

    useEffect(()=> {
        onRequest(true)
    },[])

    const onRequest = (offset, initial) => {
        getFreeJobs()
            .then(onJobsListLoaded)
    }

    const onJobsListLoaded = (newJobsList) => {
        setJobsList(jobsList => [...jobsList, ...newJobsList]);
    }

   

    function renderItems () {
         return (
            <div>
                <PaginatedItems itemsPerPage={3} items={jobsList} View={View} loading={loading} error={error} />
            </div>
         )
    }

    const content = renderItems();

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner =  loading  ? <Spinner/> : null;
    const items = !(loading || error) ? content : null
    
    return (

            <div className='py-10'>
                {spinner}
                {errorMessage}
                {items} 
            </div>
    )

   

    function View({currentItems}) {
        return (
          <>
            {
              currentItems.map((item) => (
                 <Job key={item.id} item={item} findDate={item.created}/> 
              ))}
          </>
        );
      }
}

export default JobsBoard