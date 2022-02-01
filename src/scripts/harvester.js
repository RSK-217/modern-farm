
export const harvestPlants = (array) => {
    const seeds = []
    for (const plant of array) {
        if (plant.output === 2) {
            seeds.push(plant)
            seeds.push(plant)
        } else if (plant.output === 3) {
            seeds.push(plant)
            seeds.push(plant)
            seeds.push(plant)
        } else if (plant.output === 4) {
            seeds.push(plant)
            seeds.push(plant)
            seeds.push(plant)
            seeds.push(plant)
        }  else if (plant.type === "Corn") {
            seeds.push(plant)
            seeds.push(plant)
            seeds.push(plant)
        } else if (plant.output === 6) {
            seeds.push(plant)
            seeds.push(plant)
            seeds.push(plant)
            seeds.push(plant)
            seeds.push(plant)
            seeds.push(plant)
        } 
}
return seeds
}
