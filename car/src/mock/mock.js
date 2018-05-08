import axios from "axios"
import AxiosMockAdapter from "axios-mock-adapter"
import data from "./data/city.js"
import updata from "./data/provinceCity.js"
import cardata from './data/carClass.js'
//console.log(updata)
const mock =new AxiosMockAdapter(axios)
const Cityes = ()=>{
    mock.onGet("/api/getdata").reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,data])
        })
    })
    mock.onGet("/api/getupdata").reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,updata])
        })
    })
    mock.onGet("/api/getCardata").reply((config)=>{
        return new Promise((resolve,reject)=>{
            resolve([200,cardata])
        })
	})
}
export default Cityes

