import { Link } from 'react-router-dom';
import location from './assets/Location.svg'
import  findDate  from './findDate';

const Job = ({item}) => { 

   

    const isBooKMark = (e) => {
        (e.target.classList.contains("fill-yellow-500") === true) ? e.target.classList.remove("fill-yellow-500") : e.target.classList.add("fill-yellow-500");
    }

    return (
        <div className=' flex w-343 small:w-396 small:container mx-auto bg-bgMobile mid:bg-white mb-2 h-52 mid:w-md  mid:h-40 py-4 px-4  rounded-md shadow-3xl '>
            <div className='flex absolute w-36 ml-44 small:ml-56 mid:ml-96'>
                <span className='text-second text-sm mid:text-base inline mid:hidden'>Posted {findDate(item.created)} ago</span>
            </div>
            <div className=' flex mr-0 large:mr-12 h-28 w-sm mt-4 mid:mt-0'>
                <div>
                    <img src={item.thumbnail} alt="logo"  className='mr-6 mt-3.5 mid:mr-0 w-16 h-16 mid:w-20 mid:h-20 rounded-full '/>
                </div>
                <div className='ml-2 mt-3.5 mid:mt-0 mid:ml-6 w-5/6 '>
                    <Link to={`/job/${item.id}`} className='hidden mid:inline font-bold text-lg small:text-sm mid:text-xl  text-main w-sm '>
                        {item.title}
                    </Link>
                    <Link to={`/job/${item.id}`} title={item.title} className='inline mid:hidden text-lg text-main w-sm '>
                       {item.titleShort}...
                    </Link>
                    <p className='mt-2 text-second  mid:text-base '>
                        Department name • {item.jobName}
                    </p>
                    <div className='mt-2 mid:mt-0  large:mt-2 flex  '>
                        <img src={location} alt="location" className='cursor-pointers' / >
                        <p className='text-second ml-2  mid:text-base '>{item.address} </p>
                    </div>
                </div> 
            </div>
            <div className='flex flex-col justify-between'>
                <svg  onClick={(e)=> isBooKMark(e)}  className='w-8 h-8 ml-32 cursor-pointer hidden mid:block ' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 8.00016C8 6.5274 9.19391 5.3335 10.6667 5.3335H21.3333C22.8061 5.3335 24 6.5274 24 8.00016V23.9936C24 25.1595 22.609 25.7639 21.7567 24.9682L16.9099 20.4428C16.3976 19.9645 15.6024 19.9645 15.0901 20.4428L10.2433 24.9682C9.39104 25.7639 8 25.1595 8 23.9936V8.00016Z" stroke="#70778B" strokeWidth="2"/>
                </svg>

                <span className='text-second  text-sm mid:text-base hidden mid:inline'>Posted {findDate(item.created)} ago</span>
            </div>
            
        </div>     
    )
};

export default Job