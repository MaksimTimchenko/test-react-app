

export default function findDate (date)  {
    let currentDate = Date.parse(new Date());
    let res = (currentDate - Date.parse(date))/86400000;
    
    if (res > 360) {
        res = `${Math.floor(res / 360)} years`
    } else if (res < 1) {
        res = `${Math.floor(res * 24)} hours`
    } else {
        res =  `${Math.floor(res)} days`;
    }
    

    return res
}

