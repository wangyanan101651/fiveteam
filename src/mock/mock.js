import axios from 'axios'
import AxiosMockAdapter from 'axios-mock-adapter'
import city from './datas/city.js'
import provincecity from './datas/provinceCity.js'
import carClass from './datas/carClass.js'
//console.log(city,'====ppppp')
let mock=new AxiosMockAdapter(axios)

let jdList=()=>{
    mock.onGet('/api/city').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,city])
        })  
    })
 
    mock.onGet('/api/provinceCity').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,provincecity])
        })
    })

     mock.onGet('/api/carClass').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,carClass])
        })
    })

       mock.onGet('/api/lists').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,carClass])
        })
    })
}
export default jdList