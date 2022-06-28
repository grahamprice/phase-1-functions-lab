// Code your solution in this file!
function distanceFromHQInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else {
        return 42 - blockNumber;
    }
}
    function distanceFromHQInFeet (blockNumber) {
        return distanceFromHQInBlocks(blockNumber) * 264;
        }        
    
    
   function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
        return (destination -start) * 264;    
    } else {
        return (start-destination);
    }
   }