import img from './error.gif';

const ErrorMessage = () => {
    return (
        <>
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
        <h2 className='text-center font-bold'>Something gone wrong</h2>
        </>
        
    )
}

export default ErrorMessage;