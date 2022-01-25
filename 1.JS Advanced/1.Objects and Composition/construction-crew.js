function solve(input){
    if(input.dizziness){
        input.levelOfHydrated += worker.weight * 0.1 * worker.experience;
        input.dizziness = false;
    }

    return input;
}

const worker ={
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true 
}
  
console.log(solve(worker));