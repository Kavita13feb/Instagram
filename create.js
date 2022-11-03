import {navbar} from './components/navbar.js'
document.getElementById("navbar").innerHTML=navbar()

let create_btn=document.getElementById("create_btn")
create_btn.onclick=()=>{
    createPost();
}
create_btn.disabled=true
let img =document.getElementById("image")
img.onchange=()=>{
    handleImage()
}


let delete_btn=document.getElementById("delete_btn")
delete_btn.onclick=()=>{
    deletePost();
}


let update_btn=document.getElementById("update_btn")
update_btn.onclick=()=>{
    updatePost();
}

let image_url;

const  handleImage= async()=>{

    let actual_img=img.files[0]
console.log(actual_img)
    let form = new FormData()
    form.append('image',actual_img)
    let api="8f72c0e20de0159255ad11b1ab47a7c5"

let res = await fetch(`https://api.imgbb.com/1/upload?&key=${api}`,{
method :'POST',
body:form

});
let data =await res.json()
console.log(data)
image_url=data.data.display_url

create_btn.disabled=false

} 
// handleImage()




const createPost= async()=>{
    console.log("hello")

    let id =document.getElementById("id").value
    let caption =document.getElementById("caption").value

    let send_this_data ={
        id,
        caption,
        image_url,
        
    }
  console.log(send_this_data)
    

  let res = await fetch(`http://localhost:3000/posts`,{
    method :'POST',
    body:JSON.stringify(send_this_data),
    headers:{
        'Content-Type':'application/json'
    }
    
    });
    let data =await res.json()
    console.log(data)
    
    } 
    
    const deletePost =async()=>{
        // console.log("hi")
     
      let delete_id= document.getElementById("delete_id").value
      console.log(delete_id)
       let res = await fetch(`http://localhost:3000/posts/${delete_id}`,{
        method :'DELETE',
       
        headers:{
            'Content-Type':'application/json'
        }
        
        });
        let data =await res.json()
        console.log(data)


    }
    const updatePost =async()=>{
        // console.log("hi")
     
      let update_id= document.getElementById("update_id").value
      let new_caption= document.getElementById("new_caption").value

      let send_this_data={
        caption:new_caption
      }
      console.log(update_id)
       let res = await fetch(`http://localhost:3000/posts/${update_id}`,{
        method :'PATCH',
       body:JSON.stringify(send_this_data),
        headers:{
            'Content-Type':'application/json'
        }
        
        });
        let data =await res.json()
        console.log(data)


    }
    
    

// createPost()//http://localhost:3000/posts
