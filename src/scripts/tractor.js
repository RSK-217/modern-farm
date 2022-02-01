


import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato} from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

export const plantSeeds = (array) => {

    for (const p of array) {
    
       for (const n of p) {
          
        
            if ( n === "Asparagus") {
                addPlant(createAsparagus())   
            };
            if ( n === "Potato") {
                addPlant(createPotato()) 
            };
            if (n === "Corn") {
               createCorn().forEach(addPlant)
            };
            if (n === "Soybean") {
                addPlant(createSoybean()) 
            };
            if (n === "Sunflower") {
                addPlant(createSunflower()) 
            };
            if (n === "Wheat") {
                addPlant(createWheat())
            };

       }
   }
}