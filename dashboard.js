const ctx = document.getElementById("chart")

const chart = new Chart(ctx,{
type:"bar",
data:{
labels:["Twitter","Instagram","Facebook"],
datasets:[{
label:"Followers",
data:[1200,2000,800],
backgroundColor:["blue","pink","green"]
}]
}
})

async function schedulePost(){

const platform = document.getElementById("platform").value
const content = document.getElementById("content").value
const date = document.getElementById("date").value

await fetch("http://localhost:5000/schedule",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
platform,
content,
date
})

})

alert("Post Scheduled")

}