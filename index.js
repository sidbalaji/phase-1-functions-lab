// Code your solution in this file!
  function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - 42)
  }

function distanceFromHqInFeet(someValue){
    
    let distInBlocks = distanceFromHqInBlocks(someValue)
    // based off of indexTest.js it looks like they want 1 block to equal 264 feet
    return (distInBlocks*264)
    }

function distanceTravelledInFeet(blockStart, blockEnd){
    let distInBlocks = Math.abs(blockEnd - blockStart)
    return (distInBlocks*264)
    }

function calculatesFarePrice(start, destination){
    let blocksTraveled = Math.abs(destination - start)
    let feetTraveled = blocksTraveled*264
    //first see if the ride is free
    console.log(blocksTraveled)
    console.log(feetTraveled)
    if (feetTraveled >= 2500){
        return 'cannot travel that far'
        }
    else if (feetTraveled >= 2000){
        return 25
        }   
    
    else if (feetTraveled> 400 && feetTraveled <2000) {
        let chargedMiles = feetTraveled - 400
        return (chargedMiles*.02)
    }
    else {
        return 0
    }
    
}
