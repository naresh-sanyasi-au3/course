const highLow = (str) => {

    numbers = str.split(" ")

    return Math.max(...numbers) + " " + Math.min(...numbers)
  }

  console.log(highLow("1 2 3 4 5"))
  console.log(highLow("1 2 -3 4 5"))
  console.log(highLow("1 9 3 4 -5"))