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

    form.append(createElement("button", { classNames: ["reset"] }, "Clear."));
    main.append(
      createElement(
        "table",
        { classNames: ["main-table"] },
        createElement(
          "caption",
          { classNames: ["main-table-caption"] },
          "Calculations"
        ),
        createElement(
          "tbody",
          { classNames: ["main-table-contents"] },
          createElement(
            "tr",
            {},
            createElement("td", {}, "Iteration number"),
            createElement("td", {}, "Contents of the calculation"),
            createElement("td", {}, "Result"),
            createElement("td", {}, "Picture")
          )
        )
      )
    );
    const table = document.querySelector(".main-table");

    let counter = 0;
    while (numberFromForm !== 1) {
      if (numberFromForm % 2 === 0) {
        const temp = numberFromForm;

        numberFromForm /= 2;
        counter++;

        table.append(
          createElement(
            "tr",
            {},
            createElement("th", {}, counter),
            createElement("th", {}, `${temp} / 2 =`),
            createElement("th", {}, `${numberFromForm}`),
            createElement(
              "th",
              {},
              createElement("img", {
                attributes: {
                  src: "./assets/icons/even.svg",
                  alt: "even result",
                },
              })
            )
          )
        );
        console.log(numberFromForm, counter);
      } else {
        const temp = numberFromForm;

        numberFromForm = numberFromForm * 3 + 1;
        counter++;

        table.append(
          createElement(
            "tr",
            {},
            createElement("th", {}, counter),
            createElement("th", {}, `${temp} * 3 + 1 =`),
            createElement("th", {}, `${numberFromForm}`),
            createElement(
              "th",
              {},
              createElement("img", {
                attributes: {
                  src: "./assets/icons/odd.svg",
                  alt: "odd result",
                },
              })
            )
          )
        );
        console.log(numberFromForm, counter);
      }
    }
  } catch (e) {
    throw new Error(e);
  }
}
