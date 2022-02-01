console.log("Welcome to the main module")

import { createPlan } from './plan.js'

const yearlyPlan = createPlan()

console.log(yearlyPlan)


import { plantSeeds } from "./tractor.js" 
import { usePlants } from "./field.js"
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'


const plantingPlan = [
    ["Potato", "Soybean", "Soybean", "Corn", "Sunflower", "Asparagus"],
    ["Wheat", "Corn", "Wheat", "Sunflower", "Asparagus", "Potato"],
    ["Asparagus", "Wheat", "Soybean", "Corn", "Wheat", "Sunflower"],
    ["Asparagus", "Soybean", "Potato", "Wheat", "Soybean", "Corn"]
]


plantSeeds(plantingPlan)
console.log(usePlants())



const rick = harvestPlants(usePlants())
console.log(rick)

catalog(rick)
