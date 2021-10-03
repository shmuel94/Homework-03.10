// const ContactUs = `{
//     "name": "shmuel",
//     "message": "hello there",
//     "email": "shmuelmoche@gmail.com"
// }`
// console.log(ContactUs);

// const vehicle = `{
//     "cars":[
//         {"name": "tesla", "price" : 35000, "year": 2020},
//         {"name": "mazda", "price" : 28000, "year": 2020}
//     ],
//     "ships":[
//         {"name": "the red dragon", "year": 2021, "dockingPlace": "L.A", "img": "https://cdn.pixabay.com/photo/2018/05/25/23/48/luxury-yacht-3430348__340.jpg"},
//         {"name": "the blue lagon", "year": 2021, "dockingPlace": "L.A", "img": "https://cdn.pixabay.com/photo/2015/11/12/19/19/yacht-1040850__340.jpg"}
//     ]
// }`
// const vehicles = JSON.parse(vehicle);
// let div = document.getElementById("product");
// for(const y of vehicles.ships){
//     div.innerHTML+= `<h1>${y.name}</h1> <br> <h2>year: ${y.year} NIS</h2><br> <h3>docking place:${y.dockingPlace}</h3><br> <img src ="${y.img}"/><br>`
// }

// let fullName = document.getElementById("fn");
// let email = document.getElementById("el");
// let message = document.getElementById("ms");
// let button = document.getElementById("btn");
// let form = {};
// button.onclick = ()=>{
//     form = {
//         name: fullName.value,
//         Email: email.value,
//         Message: message.value
//     }
//     console.log(JSON.stringify(form));
// }

// function returnJson(obj) {
//     obj = {
//         name:fullName.value,
//         Email: email.value,
//         Message: message.value
//     };
//     console.log(JSON.stringify(obj));
// }
// button.onclick = ()=>{
//     returnJson(form)
// }

// function returnObject(obj) {
//     obj =` {
//         "name": "${fullName.value}",
//         "Email": "${email.value}",
//         "Message": "${message.value}"
//     }`
//     console.log(JSON.parse(obj));
// }
// button.onclick = ()=>{
//     returnObject(form)
// }

// let fullName2 = document.getElementById("fl");
// let email2 = document.getElementById("em");
// let age = document.getElementById("ag");
// let button2 = document.getElementById("btn2");

// function returnJsonMult(obj) {
//     obj = {
//         name:fullName2.value,
//         Email: email2.value,
//         Age: age.value * 3
//     };
//     console.log(JSON.stringify(obj));
// }
// button2.onclick = ()=>{
//     returnJsonMult(form)
// }