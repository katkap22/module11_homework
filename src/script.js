export function countDown(n) {
    let resultArr = [];
  if (n > 0 && n !== Infinity) {
    for (let i = n; i > 0; i--) {debugger;
        if(i % 1 !== 0) {
            i = Math.round(n);
        }
        console.log(i);
        resultArr.push(i);
    }
    return resultArr;
  } else {
    let error = "Введенные данные не корректны, введите целое чиcло больше 0";
    return error;
  }
}

console.log(countDown(Infinity));
