// const msg = [
//     {green:  'Votre performance énergétique est supérieur à la moyenne de votre secteur (note de 5/10 pour la moyenne). Bravo ! <br/><br/> Testez-nous pour aller encore plus loin et prendre un temps d’avance sur l’optimisation énergétique de vos bâtiments.'},
//     {yellow:  'Votre performance énergétique est inférieure à la moyenne de votre secteur (note de 5/10 pour la moyenne). <br/><br/> Contactez-nous pour identifier les potentiels gisements d’économies d’énergie de vos bâtiments.'},
//     {red:  'Votre performance énergétique est très inférieure à la moyenne de votre secteur (note de 5/10 pour la moyenne). <br/><br/> Nous pouvons vous aider à identifier rapidement les gisements d’économie d’énergie prioritaires, à commencer par ceux qui ne nécessitent pas de travaux.'}       
// ]

// //surface total
// var n = [ 
//     { min: 0, max: 50 },
//     { min: 50, max: 100 },
//     { min: 100, max: 125 },
//     { min: 125, max: 150 },
//     { min: 150, max: 175 },
//     { min: 175, max: 200 },
//     { min: 200, max: 225 },
//     { min: 225, max: 250 },
//     { min: 250, max: 275 },
//     { min: 275, max: 300 },
//     { min: 300, max: 400 },
//     { min: 400, max: 500 },
//     { min: 500, max: 600 },
//     { min: 600, max: 700 },
//     { min: 700, max: 800 },
//     { min: 800, max: 900 },
//     { min: 900, max: 1e3 },
//     { min: 1e3, max: 2e3 },
// ],

// // Type de bâtiment
// i = [ 
//     { type: "bureaux", values: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0] },
//     { type: "mixte", values: [10, 9, 7, 6, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
//     { type: "enseignement", values: [10, 9, 7, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
//     { type: "commerce", values: [10, 8, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
//     { type: "grandes-surfaces", values: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 7, 5, 4, 3, 2, 1, 0] },
//     { type: "logistique", values: [10, 9, 7, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
//     { type: "sante", values: [10, 10, 9, 9, 8, 8, 7, 7, 6, 6, 5, 4, 3, 2, 1, 0, 0, 0] },
//     { type: "residentiel", values: [10, 9, 8, 7, 5, 4, 3, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0] },
//     { type: "restauration", values: [10, 10, 10, 10, 10, 10, 10, 9, 9, 9, 8, 8, 7, 7, 6, 6, 5, 4, 3, 2] },
//     { type: "site-industriel", values: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 9, 7, 5, 4, 3, 2, 1, 0] },
// ];


// function calc() {
//     const square = document.querySelector(".square")
//     let t = document.getElementById("simul-select").value;
//     let s =  document.getElementById("surface").value;
//     let f =  document.getElementById("facture").value;
//     t = t.toLowerCase();
//     s = parseInt(s)
//     f = parseInt(f)

//     const sum =  Math.round(((f / 90) * 1e3) / s)

//     let val , score;
//     for (let j = 0; j < n.length; j++) {
//         let current = n[j];
//         sum >= current.min && sum <= current.max && (val = j);

//         i.filter(obj => {
//             if (obj.type == t){
//                 score = obj.values[val]
//                 return score
//             }           
//         })
//     }

//     const classType = score >= 6 ? "green" : score <= 4 ? "red" : "yellow";

//     let m;
//     const entry = msg.find(e => e[classType]);        
//     entry ? m = entry[classType] : null
   
//     document.querySelector(".square p").innerHTML = score + '<span> /10 </span>'
//     document.querySelector(".eval-text p").innerHTML = m
    
//     if (classType == "green") {
//         square.classList.add('square-green');
//     } else if (classType == "yellow") {
//         square.classList.add('square-yellow');
//     } else {
//         square.classList.add('square-red');
//     }
    
// }
