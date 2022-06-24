({
    getwords : function(count) {
        if(count>100) return;
      
        //build array
        
        let wordsArray = [
            "Blue whale",
            "Lion",
            "Giant Panda",
            "Cow", 
            "Dog",
            "Tiger",
            "Cat",
            "Wolverine",
            "Elephant",
            "Giraffe",
            "Horse",
            "Wolf",
            "Fox",
            "Bear",
            "Kangaroo", 
            "Blue whale",
            "Shark",
            "Fish",
            "Penguin",
            "Dolphin",
            "Octopus",
            "Seal",
          "Sealion",
            "Crab",
            "Piranha",
            "Sea horse",
            "Goldfish",
            "Walrus",
            "Prawns",
            "Catfish",
            "Eagle", 
            "Pigeon",
            "Peacock",
            "Crow",
            "Sparrow",
            "Parrot",
            "Owl",
            "Swan",
            "Bat", 
            "Ostrich",
            "Woodpecker",
            "Crane",
            "Kingfisher",
            "Duck",
            "Hummingbird",
            "Swan",
            "Penguin",
            "Turkey",
            "Rooster",
            "Vulture",
            "Ant",
            "Bat",
            "Bear",
            "Bee",
            "Beetle",
            "Blue whale",
            "Buffalo",
            "Butterfly",
            "Camel",
            "Cat",
            "Caterpillar",
            "Catfish",
            "Centipede",
            "Chameleon",
            "Chicken",
            "Cockroach",
            "Cow",
            "Crab",
            "Crane",
            "Cricket",
            "Fish",
            "Fox",
            "Giant panda",
            "Giraffe",
            "Goat",
            "Goldfish",
            "Gorilla",
            "Grasshopper",
            "Hamster",
            "Hippopotamus",
            "Honeybee",
            "Horse",
            "Hummingbird",
            "Hyena",
            "Jaguar",
            "Kangaroo",
            "Kingfisher",
            "Ladybug",
            "Lion",
            "Lizard",
            "Monkey",
            "Mosquito",
            "Mouse",
            "Octopus",
            "Ostrich",
            "Owl",
            "Panda",
            "Parrot",
            "Peacock",
            "Penguin",
            "Pig"
          ];
          //randomize the word array
            wordsArray= this.randomizeArray(wordsArray);

        //return requested words
          return wordsArray.slice(0 , count);
        
        },


        randomizeArray : function(arr){
         const randomArr = arr;
         //Randomize array
         for(let i=randomArr.length-1;i>0; i--){
             const j = Math.floor(Math.random() * i );
             const temp = randomArr[i];
             randomArr[i]= randomArr[j];
             randomArr[j] = temp ;
         }
         return randomArr;


        },
        
        getwinword : function(arr){
         const randomindex = Math.floor(Math.random() * arr.length);
         return arr[randomindex];

        }
});
