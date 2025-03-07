// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {

   return moviesArray.map(function (movie) {
      return movie.director;
    })
    
}

// Iteration 1 Bonus: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

    const dramaDirector = moviesArray.filter(function (movie) {
     return movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    })
    return dramaDirector.length;

  }

// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {

    if (moviesArray.length === 0){
        return 0;
    }
    
    let sum = moviesArray.reduce((sum, movie) => {

        if (!movie.score) {
            return sum + 0;
        } 
        
        else {
            return sum + movie.score 
        }

    },0) 

    let average = sum/moviesArray.length;

    return Number(average.toFixed(2))

}

// function scoresAverage(moviesArray) {
//     let average = 0
//     const averageScores = moviesArray.reduce(function (sum, movie) {
//         // console.log(sum)
//         // console.log(movie.score)
//         return sum + movie.score;
//       },0)
//     average = averageScores/moviesArray.length;
//     return average.toFixed(2)
//     }

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    let sum = 0;
    let dramaMovies = []

      let result = moviesArray.filter((movie)=> movie.genre.includes('Drama'))
      result.forEach(function(movie){
         sum += movie.score;
          dramaMovies.push(movie)
    })

    if (dramaMovies.length === 0) {
        return 0
    } 
    
    else {

        return Number((sum / dramaMovies.length).toFixed(2))
    }

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {

    return [...moviesArray].sort((a, b) => {
        
        if (a.year === b.year){
            return a.title.localCompare(b.title)
        }
        return a.year - b.year
    
    }).slice(0,20)

}   

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(moviesArray) {

    return [...moviesArray].sort((a, b) => {

        if (a.title > b.title) {
            return 1;
        } 
        
        else if (a.title < b.title) {
            return -1;
        } 
        
        else {
            return 0;
        }

    })
    .map((moviesArrav) => moviesArray.title).slice(0, 20);

}
orderAlphabetically(moviesArray);

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
