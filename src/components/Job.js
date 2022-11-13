import { Link } from 'react-router-dom';
import location from './assets/Location.svg'


const Job = ({item}) => { 

    const findDate = (date) => {
        let currentDate = Date.parse(new Date());
        let days = (currentDate - Date.parse(date))/86400000;
        return Math.floor(days)
    }

    const isBooKMark = (e) => {
        e.target.classList.add('fill-yellow-500')
    }

    return (
        <div className=' flex  w-jobMobile small:container mx-16 small:mx-auto bg-bgMobile mid:bg-white mb-2   h-52 mid:w-md  mid:h-40 py-2 px-4  rounded-md shadow-3xl '>
            <div className='flex absolute w-36 ml-56 small:ml-80 mid:ml-96'><span className='text-second text-sm mid:text-base inline mid:hidden'>Posted {findDate(item.created)} days ago</span></div>
            <div className=' flex h-28 w-sm mt-5 mid:mt-0'>
                
                <div className='' >
                    <img src={item.thumbnail} alt="logo"  className=' mr-6 mid:mr-0 w-16 h-16 mid:w-20 mid:h-20 rounded-full '/>
                </div>
                <div className='ml-2 mid:ml-6 w-4/5'>
                    <Link to={`/job/${item.id}`} className=' hidden mid:inline font-bold text-lg small:text-sm mid:text-xl  text-main w-sm '>
                        {item.title}
                    </Link>
                    <Link to={`/job/${item.id}`} className=' inline  mid:hidden font-bold text-lg   text-main w-sm '>
                       {item.titleShort}...
                    </Link>
                    <p className='mt-2 text-second text-sm mid:text-base '>
                        Department name •  {item.address} Stadt Wien - AKH
                    </p>
                    <div className='mt-5 mid:mt-2 flex  '>
                        <img src={location} alt="" className='cursor-pointers' / >
                            <p className='text-second ml-2 mt text-sm mid:text-base '>Vienna, Austria</p>
                    </div>
                </div> 
            </div>
            <div className='flex flex-col justify-between  ' >
                <svg  onClick={(e)=> isBooKMark(e)}  className='w-8 h-8 ml-24 cursor-pointer hidden mid:block ' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8 8.00016C8 6.5274 9.19391 5.3335 10.6667 5.3335H21.3333C22.8061 5.3335 24 6.5274 24 8.00016V23.9936C24 25.1595 22.609 25.7639 21.7567 24.9682L16.9099 20.4428C16.3976 19.9645 15.6024 19.9645 15.0901 20.4428L10.2433 24.9682C9.39104 25.7639 8 25.1595 8 23.9936V8.00016Z" stroke="#70778B" strokeWidth="2"/>
                </svg>

                <span className='text-second  text-sm mid:text-base hidden mid:inline'>Posted {findDate(item.created)} days ago</span>
            </div>
        </div>     
    )
};

export default Job