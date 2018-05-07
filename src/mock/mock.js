import axios from 'axios'
import AxiosMockAdater from 'axios-mock-adapter'
import city from './datas/city'
import provinceCity from './datas/provinceCity'
import carClass from './datas/carClass'

let mock=new AxiosMockAdater(axios)

const jdlit=()=>{
    mock.onGet('/api/city').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,city])
        })
    })
    mock.onGet('/api/provinceCity').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,provinceCity])
        })
    })
    mock.onGet('/api/carClass').reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,carClass])
        })
    })
}
export default jdlit