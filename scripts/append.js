


const append =(data,container)=>{

    container.innerHTML=null;
    data.forEach ((el) => {
        let div =document.createElement("div")
        let caption =document.createElement('p')
        let image =document.createElement('img')
        caption.innerText=el.caption;
         image.src =el.image_url
         div.append(caption,image)
         container.append(div)
         
         
    })

}
export {append}