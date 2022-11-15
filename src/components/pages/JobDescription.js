import { useState, useEffect } from 'react';
import { Link,useParams } from 'react-router-dom';

import { Fancybox, Carousel } from "@fancyapps/ui";

import ErrorBoundary from '../ErrorBoundary';
import useServices from '../../services/services'
import SimpleMap from '../Map'
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spiner/Spinner';

import bookMark from '../assets/Bookmark.svg'
import share from '../assets/Share.svg'


const JobDescription = () => {
    const [jobsList, setJobsList] = useState({})
    let {jobId} = useParams();

    const {loading, error,  getJob} = useServices()


    useEffect(() => {
        request()
    },[])

    
    const request = () => {
        getJob(jobId)
            .then(onJobsListLoaded)
    }

    const onJobsListLoaded = (jobs) => {
        setJobsList(jobs[0])
        
    }

   
    const renderItems = (arr) => {
        const {address, benefits, description, responsopilities, compensation, email,employmentType,location ,phone,pictures,salary,thumbnail, title} = arr;

   
        return (
             
            <main className=' container  px-4 mx-auto  flex justify-around  flex-col large:flex-row mt-7 '>
                <div className='w-343  small:w-full large:w-descriptionMobile'>
                    <div className='flex justify-between flex-col mid:flex-row border-b-2 border-main-500/50 h-11  '>
                        <h1 className='font-bold color-main text-2xl text-main ' >Job Details</h1>
                        <div className='flex justify-start items-center mid:justify-between	my-6'>
                            <div className='flex mr-6 '>
                                <img src={bookMark} alt="bookmark" className='w-8 h-8 mr-2' />
                                <span className='text-main'>Save to my list</span>
                            </div>
                            <div className='flex'>
                                <img src={share} alt="share" className='w-8 h-8 mr-2' />
                                <span className='text-main'>Share</span>
                            </div>
                        </div>
                    </div>

                   <div className='flex justify-between mid:items-center flex-col sm:flex-row mt-20 mid:mt-8 ' >
                        <div>
                            <button className='py-5 px-8 bg-main rounded-lg text-white mb-8 hidden sm:block' >APPLY NOW</button>

                            <h3 className='w-343 small:w-500 font-bold text-2xl	 text-main mb-2'> {title}     
                            </h3>
                            <span className='text-second absolute mt-6 sm:static '> Posted 2 days ago</span>
                        </div>
                        <div className='flex flex-col-reverse justify-start items-end sm:items-start sm:flex-col' >
                            <span className='font-bold text-xl	text-main'>€ {salary}</span>
                            <span className='text-main '>Brutto, per year</span>
                        </div>
                        
                   </div>

                   <div className=' w-343 xl:w-decription sm:w-descriptionMobile'>
                        <p>{description}</p>
                        <h4 className='mt-8 '> Responsopilities</h4>
                        <p className='mb-8'>{responsopilities}</p>

                        <h4>Compensation & Benefits:</h4>
                        <ul className='text-main list-disc ml-5 mb-8 '>
                        <li className='list-none'>Our physicians enjoy a wide range of benefits, including:</li>
                            {compensation  ? compensation.map((item,i) => (
                                <li key={i}>{item}</li>
                            )) : null}
                        </ul>
                        <button className='py-5 px-8 bg-main rounded-lg text-white mb-20' >APPLY NOW</button>
                   </div>

                    <div>
                        <h2 className='font-bold text-xl text-main border-b-2 boder-main-500/50'>Additional info</h2>
                        <div className='mt-5'>
                            <p className=' text-main mb-3.5'>Employment type</p>
                            <div className='flex '>
                            {
                                employmentType ? employmentType.map((item, i)=> {
                                    return (<div key={i} className='w-56 h-14 mr-2 bg-button rounded-md border  border-buttonBorder  flex justify-center items-center text-main font-bold'>{item}</div>)
                                }) : null
                            }
                            </div>
                            <p className=' text-main mt-3.5'>Benefits</p>
                            <div className='flex mt-2 '>
                            {
                                benefits ? benefits.map((item, i)=> {
                                    return (<div key={i} className='w-56 h-14 mr-2 bg-buttonYellow rounded-md border  border-buttonBorderYellow  flex justify-center items-center text-yellow font-bold'>{item}</div>)
                                }) : null
                            }                

                            </div>
                        </div>

                        <div >
                            <h2 className='font-bold text-xl text-main border-b-2 boder-main-500/50 mt-20'>Attached images</h2>
                            <div className='flex mt-6 '>
                                {
                                   pictures ? pictures.map((item,i) => (
                                        <img data-fancybox="gallery" key={i} src={item} alt="picture"  className='mr-2 w-52 h-28 rounded-md cursor-pointer '/>
                                    )) : null
                                }
                            </div>
                        </div>

                        <Link to='/'>
                            <button className='bg-main px-12 py-2 rounded-md my-10 text-white' > return to job board</button>
                        </Link>
                    </div>
                </div>

                <div className='ml-2 py-2 xxl:ml-0 w-343 mid:w-full large:w-map '>
                    <h3 className='block mid:hidden font-bold text-xl text-main border-b-2 boder-main-500/50 mb-4 leading-9'>Contacts</h3>
                    <div className='py-6 px-8 bg-main  large:map rounded-t-md'>
                      <div className='ml-8 ' >
                            <p className='text-white mb-2 font-bold text-xl'>Department name. <br/>University Hospital Giessen.</p>
                            <p className='text-white'>{address} <br/> Gürtel 18-20 </p>
                            <p className='text-white'>{phone},</p>
                            <p className='text-white'> {email}</p>
                      </div>
                    </div>
                    <div >
                       <ErrorBoundary>
                            <SimpleMap location={location} />
                       </ErrorBoundary>
                    </div>
                </div>
            </main>
     
        
        )
       
    }

    const items = renderItems(jobsList)
 
    const content = !(loading || error) ? items : null
    const spiner = loading ? <Spinner/> : null
    const errorMessage = error ? <ErrorMessage/> : null;
    return (
        <>
            {spiner}
            {errorMessage}
            {content}
        </>
        )
}

export default JobDescription