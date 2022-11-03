//8f72c0e20de0159255ad11b1ab47a7c5
// https://api.imgbb.com/1/upload
let container =document.getElementById("posts")

import {navbar} from './components/navbar.js'
document.getElementById("navbar").innerHTML=navbar()

import { append } from './scripts/append.js'

const getData =async ()=>{
  let res = await fetch(`http://localhost:3000/posts`)
  let data =await res.json()
  console.log(data)
  append(data,container)
  
};
getData ()