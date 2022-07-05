const url = 'https://api.imgflip.com/get_memes';
var arrayDosMemes=[];
const tableM = document.querySelector(".lista")
async function pop(){


   await fetch(url).then(promise => promise.json()).then(result =>{
        var result = result.data.memes;
         result.forEach(element => {
             arrayDosMemes.push(element)
         });
        
     })
     
     
     Array.from(arrayDosMemes)
     render()
}

function render(){
    arrayDosMemes.forEach((element,index)=>{
    tableM.innerHTML+=`<tr><td><img src ="${element.url}"></td><td>${element.name}</td><td>Uma descrição${index}</td></tr>`
    })
}

pop()


