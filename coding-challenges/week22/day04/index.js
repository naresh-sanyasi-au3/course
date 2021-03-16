const fruit = (A, count = {}, answer = 0) => {

    for (let i = 0, j = 0; j < A.length; ++j, answer = Math.max(answer, j - i))

      for (count[A[j]] = count[A[j]] ? count[A[j]] + 1 : 1; Object.keys(count).length > 2; ++i)

        if (--count[A[i]] == 0)

          delete count[A[i]]
          
    return answer
  }
  
  console.log(fruit(['A', 'B', 'C', 'A', 'C']))
  console.log(fruit(['A', 'B', 'C', 'B', 'B', 'C']))
  