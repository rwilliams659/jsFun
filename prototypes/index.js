const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { nationalParks } = require('./datasets/nationalParks');
const { books } = require('./datasets/books');
const { weather } = require('./datasets/weather');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');
/* eslint-disable */



// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties
      .filter(kitten => kitten.color === 'orange')
      .map(kitten => kitten.name); 
    return result;

    // Annotation:
    //We only want a sub-set of the data, so use filter & test if kitty.color === 'orange' & return the kitty objects that meet that condition
    //That will give us array of 2 objects
    //For each kitty object, we can then use map to access name property (string); we can then return that string & we'll get a new array with just the strings
  },

  sortByAge() {
    // Sort the kitties by their age
    const result = kitties.sort((kitten1, kitten2) => kitten2.age - kitten1.age)
    return result;

    //Annotation:
    //We want an array of the same length as current array, so map is good option
    //We can use sort method, which tests 2 items against each other
    //if compare function returns > 0, item2 moved ahead of item1
    //subtract 1st kitten's age from 2nd kitten's age to see which is larger; larger will be moved ahead in index 
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    const result = kitties.map(kitten => {
      kitten.age += 2;
      return kitten; 
    })
    return result;

    //Annotation:
    //Map is good option since we want an array of same length as current array
    //For each kitten, we need to increment kitten.age by 2 
    //Then return kitten 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g.
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((memberList, club) => {
      club.members.forEach(member => {
        if (memberList[member]) {
          memberList[member].push(club.club)
        } else {
          memberList[member] = [club.club]; 
        };
      })
      return memberList; 
    }, {})
    return result;

    //Annotation:
    //Reduce is good option, as we want to return an object from an array 
    //Within reduce, for each club, we need to iterate through the members' array & add each as a key to our return object as long as it does not yet exist as a key -->  use forEach 
    //Re the value for each key: If that key did not yet exist in the object, the value becomes an array with the current club.club string in it
    //If that key DOES exist in the object, the current club.club string gets pushed into the current array 
    //return object at end 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map(mod => ({mod: mod.mod, studentsPerInstructor: mod.students/mod.instructors})); 
    return result;

    // Annotation:
    // map is good option, as want a return array of same length as current array
    //for each element in array, take current object & map to new object
    //that new object will have same mod property: recreate with mod: mod.mod
    //that new object will also have new property of studentsPerInstructor as key & value of (mod.students/mod.instructors)
    //return object within callback function 
    //at end also return object  
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map(cake => ({flavor: cake.cakeFlavor, inStock: cake.inStock}))
    return result;

    // Annotation:
    // map seems like a good option, as we want to return an array of objects that is the same length of the original array, with different info displayed
    //map each cake object in array to new object with key flavor, value cake.cakeFlavor & key inStock, value cake.inStock
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0)
    return result;

    // Annotation:
    // filter is best option as we want to return an array of objects that meet a particular condition
    //filter cake array to contain objects such that cake.inStock > 0
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((totalCakesInStock, cake) => totalCakesInStock + cake.inStock, 0)
    return result;

    // Annotation:
    // Since we want to return a single value, reduce is a good option
    //initial value of reduce should be 0
    //then, for each cake, add cake.inStock to accumulator & return that value
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((toppingsList, cake) => {
      cake.toppings.forEach(topping => {
        if (!toppingsList.includes(topping)) {
          toppingsList.push(topping); 
        }; 
      });
      return toppingsList; 
    }, [])
    return result;

    // Annotation:
    // reduce is good option since we want to return a new array not of objects, but of strings, and each string won't correspond to a particular object
    //initial value for reduce can be empty array
    //for each cake, within reduce, iterate over each topping in cake.toppings with forEach: if topping string is not included in array, push it to array 
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // {
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2,
    //    ...etc
    // }

    const result = cakes.reduce((groceryList, cake) => {
      cake.toppings.forEach(topping => {
        if (groceryList[topping] === undefined) {
          groceryList[topping] = 1; 
        } else {
          groceryList[topping] += 1;
        };
      })
      return groceryList; 
    }, {})
    return result;

    // Annotation:
    // We want to return an object from an array, so reduce is a good option, as we can initialize it with an empty object
    // within reduce, need to access the toppings array of each cake
    //so do cake.toppings.forEach to iterate through each topping
    //if topping does not exist within object as a key, add it as key with value of 1 
    //if topping DOES exist within object as a key, increment its value by 1  
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(classroom => classroom.program === 'FE'); 
    return result;

    // Annotation: 
    // filter is best option here, as want an array back that only contains the objects with property program of 'FE'
    //filter condition: classroom.program === 'FE'
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // {
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((programCapacities, classroom) => {
      if (classroom.program === 'FE') {
        programCapacities.feCapacity += classroom.capacity;
      } else {
        programCapacities.beCapacity += classroom.capacity;
      };
      return programCapacities
    }, {feCapacity: 0, beCapacity: 0})
    return result;

    // Annotation:
    // reduce is good option, as only want a single object returned 
    //initialize with object with feCapacity: 0 & beCapacity: 0
    //then for each classroom, if program === 'FE', increment feCapacity by classroom.capacity; if program === 'BE', increment beCapacity by that value
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((classroom1, classroom2) => classroom1.capacity - classroom2.capacity)
    return result;

    // Annotation:
    // Use sort to return an array of objects of same length, but ordered
    //Sort condition: if a - b is negative, a sorted ahead of b 
    // condition to test: b.capacity - a.capacity 
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: books from './datasets/books

const bookPrompts = {
  removeViolence() {
    // return an array of all book titles that are not horror or true crime. Eg:

    //  ['1984', 'The Great Gatsby', 'Lord of the Flies', 'Harry Potter and the Sorcerer\'s Stone',
    //   'The Hitchhiker\'s Guide to the Galaxy', 'Flowers for Algernon', 'Slaughterhouse-Five',
    //   'The Handmaid\'s Tale', 'The Metamorphosis', 'Brave New World', 'Life of Pi',
    //   'The Curious Incident of the Dog in the Night - Time', 'The Bell Jar',
    //   'Catch-22', 'Treasure Island']


    const result = books.reduce((nonviolentBookList, book) => {
      if (book.genre !== 'Horror' && book.genre !== 'True Crime') {
        nonviolentBookList.push(book.title)
      };
      return nonviolentBookList; 
    }, [])
    return result;

    // Annotation:
    // start with array of objects, want array of strings back
    //since returned array will be different length than original array, map is not good option
    //can use reduce, initializing with empty array
    //for each book, test if book.genre !== 'Horror' && book.genre !== 'True Crime'
    //if those conditions are true, push book.title string into array 
  },
  getNewBooks() {
    // return an array of objects containing all books that were
    // published in the 90's and 00's. Include the title and the year Eg:

    // [{ title: 'Harry Potter and the Sorcerer\'s Stone', year: 1997 },
    //  { title: 'Life of Pi', year: 2001 },
    //  { title: 'The Curious Incident of the Dog in the Night-Time', year: 2003 }]

    const result = books
    .filter(book => book.published > 1989 && book.published < 2010)
    .map(book => ({title: book.title, year: book.published}))
    return result;

    // Annotation:
    // First, filter books to only include those published between 1990 & 2009
    //filter test condition: book.published > 1989 && book.published < 2010
    //then need to map each remaining object to a different object with key title, value book.title & key year, value book.published 
  }

};


// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// DATASET: weather from './datasets/weather

const weatherPrompts = {
  getAverageTemps() {
    // return an array of all the average temperatures. Eg:
    // [ 40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5 ]

    const result = weather.map(forecast => (forecast.temperature.high + forecast.temperature.low)/2)
    return result;

    // Annotation:
    //take in an array of 10 objects, get back array of 10 strings, so map seems like a good option since return array is same length
    //for each forecast item, get average temperature by (forecast.temperature.high + forecast.temperature.low)/2 & return that value 
  },

  findSunnySpots() {
    // Return an array of sentences of the locations that are sunny
    // and mostly sunny. Include the location and weather type. Eg:
    // [ 'Atlanta, Georgia is sunny.',
    // 'New Orleans, Louisiana is sunny.',
    // 'Raleigh, North Carolina is mostly sunny.' ]

    const result = weather
    .filter(forecast => forecast.type === 'sunny' || forecast.type === 'mostly sunny')
    .map(forecast => `${forecast.location} is ${forecast.type}.`);
    return result;

    // Annotation:
    // Since only want to access forecasts with a type of sunny or mostly sunny, use filter to get new array with just those forecast objects
    //then map each of those objects to a sentence
    //sentence for each will use interpolation: `${forecast.location} is ${forecast.type}.`
  },

  findHighestHumidity() {
    // Return the location with the highest humidity. Eg:
    // {
    //   location: 'Portland, Oregon',
    //   type: 'cloudy',
    //   humidity: 84,
    //   temperature: { high: 49, low: 38 }
    // }

    const result = weather.reduce((mostHumidForecast, forecast) => {
      if (forecast.humidity > mostHumidForecast.humidity) {
        mostHumidForecast = forecast; 
      };
      return mostHumidForecast; 
    })
    return result;

    // Annotation:
    // reduce might work since want to get single element back from array of 10 elements
    //don't want to use initial value
    //instead, acc will be assigned to first object, and curr element will be 2nd object on first pass
    //then can compare forecast.humidity for each of the elements, and reassign the accumulator to the object with higher humidity
  }
};

// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------


// DATASET: nationalParks from ./datasets/nationalParks

const nationalParksPrompts = {
  getParkVisitList() {
    /// Return an object containing the names of which parks I need to visit
    // and the ones I have already visited eg:
    // {
    //   parksToVisit: ["Yellowstone", "Glacier", "Everglades"],
    //   parksVisited: ["Rocky Mountain", "Acadia", "Zion"]
    //}

    const result = nationalParks.reduce((parksLists, park) => {
      if (park.visited === true) {
        parksLists.parksVisited.push(park.name);
      } else {
        parksLists.parksToVisit.push(park.name)
      };
      return parksLists; 
    }, {parksToVisit: [], parksVisited: []})
    return result;

    // Annotation:
    // Return value: 2 arrays placed in object
    //use reduce: initialize object {parksToVisit: [], parksVisited: []}
    //iterate over nationalParks with reduce defined above
    //for each park, check the park.visited property
    //if visited === true, push park.name into parksVisited array: parksVisited.push
    //if visited === false, push park.name into parksToVisit array: parksToVisit.push()
    //during each iteration, return object
    //at end return final object 
  },

  getParkInEachState() {
    // Return an array of objects where the key is the state and the value is its National Park
    // eg: [ { Colorado: 'Rocky Mountain' },
    // { Wyoming: 'Yellowstone' },
    // { Montana: 'Glacier' },
    // { Maine: 'Acadia' },
    // { Utah: 'Zion' },
    // { Florida: 'Everglades' } ]


    const result = nationalParks.map(park => ({[park.location]: park.name}));
    return result;

    // Annotation:
    // output: array of objects 
    //map is good option because want same data structure of same length
    //use map to iterate over nationalParks
    //for each park, map object to new object {}
    //in that object, key value pair is park.location: park.name
  },

  getParkActivities() {
    // Return an array of all the activities I can do
    // in a National Park. Make sure to exclude duplicates. eg:
    // [ 'hiking',
    //   'shoeshoing',
    //   'camping',
    //   'fishing',
    //   'boating',
    //   'watching wildlife',
    //   'cross-country skiing',
    //   'swimming',
    //   'bird watching',
    //   'canyoneering',
    //   'backpacking',
    //   'rock climbing' ]

    const result = nationalParks.reduce((activitiesList, park) => {
      park.activities.forEach(activity => {
        if (!activitiesList.includes(activity)) {
          activitiesList.push(activity); 
        };
      });
      return activitiesList; 
    }, []); 
    return result;

    // Annotation:
    // output: array 
    //iterate through nationalParks: use reduce, initialized at []
    //for each park, access activities array
    //iterate through that array & push into to NEW array if it isn't already there

  }
};



// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((beerCount, brewery) => beerCount + brewery.beers.length, 0);
    return result;

    // Annotation:
    // output: total beer count
    //input: array of brewery objects
    //reduce is good choice - 
    //initialize total beer count at 0, then add to total beers.length 
    //return total beer count

    //could use map to create array to return brewery.beers.length for each brewery
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(brewery =>
      ({name: brewery.name, beerCount: brewery.beers.length}))
    return result;

    // Annotation:
    // output: array of objects with name & beerCount properties 
    //use map since input type & length is same as output
    //map each brewery to an object with key-value pair name: brewery.name & beerCount: brewery.beers.length
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = 
    breweries.reduce((highestABVBeer, brewery) => {
      brewery.beers.forEach(beer => {
        if (beer.abv > highestABVBeer.abv) {
          highestABVBeer = beer; 
        };
      });
      return highestABVBeer; 
    }, { name: 'B.B. Rodriguez', type: 'Coffee Double Brown', abv: 8, ibu: 30, });
    return result;

    // Annotation:
    //ultimately we want one object as return value, so reduce is good option
    //set up reduce with an initial value of the first beer object
    //For reduce, iterate through each brewery 
    //within reduce, iterate through each brewery.beers array with for each
    //within foreach, test if the current beer's abv is higher than the stored beer's abv
    //if so, replace the stored beer with the current beer
    //return that beer 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g.
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(instructor => {
      let studentCount = cohorts.find(cohort => cohort.module === instructor.module).studentCount;
      return ({name: instructor.name, studentCount: studentCount})
    });
    return result;

    // Annotation:
    // instructors: map to iterate over each object 
    //for each instructor, create object with 2 properties:
    //cohorts & instructors linked by module property
    //for studentCount value, iterate over cohorts with find
    //find cohort where module === instructor.module 
    //within object found, get studentCount property
    //put that value into key studentCount value 
    //key name, value instructor.name
    //key studentCount will need to come from cohorts 
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // {
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((studentsPerTeacher, cohort) => {
      let instructorCount = instructors.reduce((instructorCount, instructor) => {
        if (cohort.module === instructor.module) {
          instructorCount ++
        };
        return instructorCount; 
      }, 0);
      let studentTeacherRatio = cohort.studentCount / instructorCount; 
      studentsPerTeacher[`cohort${cohort.cohort}`] = studentTeacherRatio;
      return studentsPerTeacher; 
    }, {})
    return result;

    // Annotation:
    // use reduce because we want a single object back
    // need to calculate students per teacher:
    // access studentCount property for each module
    // also get # of instructors for each module 

    // use reduce on cohorts
    // initialize with empty object
    // for each cohort, we'll add property
    // property key is `cohort${cohort.cohort}` or [] notation?
    // property value: 
    // iterate over instructors to find how many have module property that matches cohort.module: reduce initialized at 0
    // for Each instructor, if modules match, increment acc by 1 
    //then we have # of instructors, so calculate students per teacher by cohort.studentCount/acc 
    //return FIRST acc 
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }

    const result = instructors.reduce((instructorModules, instructor) => {
      let targetModules = cohorts.reduce((modules, cohort) => {
        cohort.curriculum.forEach(subject => {
          if (instructor.teaches.includes(subject)) {
            if (!modules.includes(cohort.module)) {
              modules.push(cohort.module);
            }
          }
        })
        return modules; 
      }, []);
      instructorModules[instructor.name] = targetModules; 
      return instructorModules;
    }, {});
    return result;

    // Annotation:
    // Output: single object; call reduce on instructors
    //initialize with {}
    //for each instructor, iterate over cohorts array
    //iterate over cohorts with reduce, intialized with []
    //for each cohort, access curriculum array
    //for each subject in curriculum, test if the instructor.teaches array includes it
    //if it does, make sure it's not already in the array, and if not, push it in
    //in inner reduce, make sure to return accumulator
    //once inner reduce has returned a value, assign it to a variable targetModules
    //for outer reduce, add a property with key of instructor.name & value targetModules
    //return accumulator

  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // {
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = instructors.reduce((instructorSubjects, instructor) => {
      instructor.teaches.forEach(subject => {
        if (!instructorSubjects[subject]) {
          instructorSubjects[subject] = [instructor.name]
        } else {
          instructorSubjects[subject].push(instructor.name)
        }
      });
      return instructorSubjects; 
    }, {})
    return result;

    // Annotation:
    // want single object back, so reduce is good option
    // use reduce with instructors
    // initialize with empty object
    // for each instructor, access instructor.teaches
    // for each subject in array, if it is not a key name in our object:
    // add it as key name, with value of array with current instructor.name
    // if subject is already a key name, add the current instructor.name to that key's array value 
    // return acc for each iteration
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]


    const bossValues = Object.values(bosses);
    const result = bossValues.reduce((bossLoyalty, boss) => {
      let sum = sidekicks.reduce((totalLoyalty, sidekick) => {
        if (sidekick.boss === boss.name) {
          totalLoyalty += sidekick.loyaltyToBoss
        };
        return totalLoyalty; 
      }, 0);
      bossLoyalty.push({bossName: boss.name, sidekickLoyalty: sum});
      return bossLoyalty; 
    }, []);
    return result;

    // Annotation:
    //output: array of objects
    //need access to each boss object's name property
    //and each sidekick's loyaltyToBoss property  

    //first, get array of Object.values(bosses) = bossValues
    //use reduce initialized with [] on bossValues
    
    //to get that sum from above, iterate over sidekicks with reduce initialized at 0 
    //for each sidekick, if sidekick.boss property matches the boss.name, increment acc by .loyaltyToBoss amount
    //save sum

    //for each boss, create an object
    //within that object, 1st property: bossName: boss.name
    //2nd property: sidekickLoyalty: sum
   
    //in outside reduce function, return acc 
 
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = stars.reduce((matchingStars, star) => {
      Object.keys(constellations).forEach(constellation => {
        let matchingStar = constellation.stars.find(constellationStar => star === constellationStar);
      });
      matchingStars.push(matchingStar)
    }, [])
    return result;

    // Annotation:
    // Loop through stars array of objects
    //For each star, loop through constellations object of objects
    //For each constellation, access consellation.stars array and for each constellationStar, test if the original star matches that star
    //If star matches constellationSTar, add it to a results array 
    //Start with reduce so can initialize an empty array to add matching stars into 
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.

    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra",
    //    "Canis Minor",
    //    "The Plow",
    //    "Orion",
    //    "The Little Dipper" ]


    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object.
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      {
        'Steven Spielberg':
          {
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37
          },
        'Joe Johnston':
          {
            'Jurassic Park III': 44
          },
        'Colin Trevorrow':
          {
            'Jurassic World': 56
           },
        'J. A. Bayona':
          {
            'Jurassic World: Fallen Kingdom': 59
          }
      }
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      },
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  nationalParksPrompts,
  weatherPrompts,
  bookPrompts,
  dinosaurPrompts
};
