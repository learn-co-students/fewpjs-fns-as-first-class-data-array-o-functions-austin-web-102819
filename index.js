let wakeDog= function(dogName="Byron", dogBreed="poodle") {
    let output= `Wake ${dogName} the ${dogBreed}`;
   console.log(output);
   return output
  }

  let leashDog= function(dogName="Byron", dogBreed="poodle") {
    let output= `Leash ${dogName} the ${dogBreed}`;
   console.log(output);
   return output
  }

  let walkToPark= function(dogName="Byron", dogBreed="poodle") {
    let output= `Walk to the park with ${dogName} the ${dogBreed}`;
   console.log(output);
   return output
  }


  let throwFrisbee= function(dogName="Byron", dogBreed="poodle") {
    let output= `Throw the frisbee for ${dogName} the ${dogBreed}`;
   console.log(output);
   return output
  }

  let walkHome= function(dogName="Byron", dogBreed="poodle") {
    let output= `Walk home with ${dogName} the ${dogBreed}`;
   console.log(output);
   return output
  }

  let unleashDog= function(dogName="Byron", dogBreed="poodle") {
    let output= `Unleash ${dogName} the ${dogBreed}`;
   console.log(output);
   return output
  }

  let routine= [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]
  
  function exerciseDog(dogName, dogBreed){
      let messages = [];
      for (let i=0; i < routine.length; i++){
        messages.push(routine[i](dogName, dogBreed));
      }
      return messages;
  }