// Code your solution in this file!
function distanceFromHqInBlocks(blockNo){

  if (blockNo > 42){
      return blockNo - 42;
  }
  else{
      return 42 - blockNo;
  }
}


function distanceFromHqInFeet (blockNo) {
// calls the distanceFromHqInBlocks function to return the calculation
    return distanceFromHqInBlocks (blockNo) *264 ;


}

function distanceTravelledInFeet (start, destination){
    if ((destination-start) > 0){
        return (destination-start) *264;
    }
    else{
        return ((destination-start) * -1) *264;
    }

}

function calculatesFarePrice(start, destination) {
    if ((destination-start) > 0){
        let distance = (destination-start) * 264 ;
        if ( (distance) < 401) {
            return 0;
        }
        else if ((distance) < 2001) {
            return ((distance)-400)* 0.02;
        }
        else if ((distance) < 2500) {
            return 25 ;
        }
        else {
            return 'cannot travel that far';
        }
    }
    else{
       let distance = ((destination-start) * -1)*264;
        if ( (distance) < 401) {
            return 0;
        }
        else if ((distance) < 2001) {
            return ((distance)-400)* 0.02;
        }
        else if ((distance) < 2500) {
            return  25 ;
        }
        else {
            return 'cannot travel that far';
        }
    }
    
}