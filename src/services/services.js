import {useHttp} from '../hooks/http.hook'

const useServices = () => {


    const {loading, error, request, clearError} = useHttp();

    const _apiBase = 'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'

    const getFreeJobs = async () => {
        const res = await request(_apiBase);
        return res.map(_transformData)
    }

    const getJob = async (id) => {
       const res = await request(_apiBase);
       const response = _transformJobData(res,id)
       return response.map(_transformData)
    }

    const _transformJobData =(jobs,id) => {
       let transformedJob= jobs.filter(item => item.id === id);
       return transformedJob
    }
    const _transformData = (job) => {
        const description = job.description.split('Responsopilities')[0];
        const responsopilities = job.description.split('Responsopilities:')[1].split('Compensation & Benefits:')[0];
        const benefits =job.description.split('Responsopilities:')[1].split('Compensation & Benefits:')[0].split('. ');
        const titleShort = job.title.substr(0,40)



        return {
            address:job.address,
            benefits: job.benefits,
            created: job.createdAt,
            description: description,
            responsopilities: responsopilities,
            compensation: benefits ,
            email: job.email,
            employmentType: job.employment_type,
            id: job.id,
            location: job.location,
            name: job.name,
            phone: job.phone,
            pictures: job.pictures,
            salary: job.salary,
            title: job.title,
            titleShort,
            thumbnail: job.pictures[2],
        }
    }

    return {loading, error, clearError, getFreeJobs, getJob}
}

export default useServices