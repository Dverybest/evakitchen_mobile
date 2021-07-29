const numberFormatter = (number: Number) => {
  let newNumber = String(number);
  let newArray: Array<String> = [];
  if (newNumber.includes('.')) {
    const mainNumber = newNumber.split('.')[0];
    let decimal = newNumber.split('.')[1];
    const reversedNumber = mainNumber.split('').reverse();
    reversedNumber.forEach((element, index) => {
      if (index % 3 === 0 && index !== 0) {
        newArray.push(',');
      }
      newArray.push(element);
    });
    return newArray.reverse().join('') + '.' + decimal;
  } else {
    const reversedNumber = newNumber.split('').reverse();
    reversedNumber.forEach((element, index) => {
      if (index % 3 === 0 && index !== 0) {
        newArray.push(',');
      }
      newArray.push(element);
    });
    return newArray.reverse().join('');
  }
};

export default numberFormatter;
