


export const catalog = (array) => {
    let html = ""
    for (const food of array) {
        
    html +=  `<section class="plant">${food.type}</section>`
// //     //     if (food.type === "Asparagus") {
// //     //         document.getElementById("container").innerHTML += "Asparagus ";
            
// //     //     } else if (food.type === "Corn") {
// //     //         document.getElementById("container").innerHTML += "Corn ";   
            
// //     //     } else if (food.type === "Potato") {
// //     //         document.getElementById("container").innerHTML += "Potato ";
            
// //     //     } else if (food.type === "Soybean") {
// //     //         document.getElementById("container").innerHTML += "Soybean ";
            
// //     //     } else if (food.type === "Sunflower") {
// //     //         document.getElementById("container").innerHTML += "Sunflower ";
            
// //     //     } else if (food.type === "Wheat") {
// //     //         document.getElementById("container").innerHTML += "Wheat ";
            
// //     // }
    }
   document.getElementById("container").innerHTML = html
}

// export const catalog = array => {
//     let html = "";
//     const plants = array.map(m => {
//         return `<section class="plant">${m.type}</section>`
//     })
//     html+= plants.join("")
//     document.getElementById("container").innerHTML = html
// }
