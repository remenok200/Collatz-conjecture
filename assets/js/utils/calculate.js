function calculate(e) {
  e.preventDefault();

  let numberFromForm = Number(number.value);
  try {
    if (typeof numberFromForm !== "number") {
      form.reset();
      throw new TypeError("Input number must be a number!");
    }
    if (!Number.isInteger(numberFromForm)) {
      form.reset();
      throw new RangeError("Input number must be a integer!");
    }

    let counter = 0;
    while (numberFromForm !== 1) {
      if (numberFromForm % 2 === 0) {
        numberFromForm /= 2;
        counter++;
        console.log(numberFromForm, counter);
      } else {
        numberFromForm = (numberFromForm * 3) + 1;
        counter++;
        console.log(numberFromForm, counter);
      }
    }
  } catch (e) {
    throw new Error(e);
  }
}
