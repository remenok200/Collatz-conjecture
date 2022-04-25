function calculate(e) {
  e.preventDefault();

  xValues.length = 0;
  yValues.length = 0;

  let numberFromForm = Number(number.value);
  try {
    if (typeof numberFromForm !== "number" || Number.isNaN(numberFromForm)) {
      form.reset();
      throw new TypeError("Input number must be a number!");
    }
    if (!Number.isInteger(numberFromForm) || numberFromForm == "") {
      form.reset();
      throw new RangeError("Input number must be a integer!");
    }

    number.style.textAlign = "center";
    number.style.fontWeight = "bold";
    inputError.remove();
    goBtn.remove();
    number.disabled = true;
    form.append(createElement("button", { classNames: ["reset"] }, "Clear."));
    main.append(
      createElement(
        "div",
        { classNames: ["main-table-wrapper"] },
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
      )
    );

    const table = document.querySelector(".main-table");

    let counter = 0;
    let maximum = numberFromForm;
    let average = 0;
    let summ = 0;
    while (numberFromForm !== 1) {
      if (numberFromForm % 2 === 0) {
        const temp = numberFromForm;

        numberFromForm /= 2;
        yValues.push(numberFromForm);
        counter++;
        xValues.push(counter);

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

        summ += numberFromForm;
        if (numberFromForm > maximum) {
          maximum = numberFromForm;
        }
      } else {
        const temp = numberFromForm;

        numberFromForm = numberFromForm * 3 + 1;
        yValues.push(numberFromForm);
        counter++;
        xValues.push(counter);

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

        summ += numberFromForm;
        if (numberFromForm > maximum) {
          maximum = numberFromForm;
        }
      }
    }
    average = summ / counter;
    table.append(
      createElement(
        "th",
        {
          classNames: ["main-table-footer-item"],
          attributes: { colspan: "2" },
        },
        `Maximal value: ${maximum}`
      ),
      createElement(
        "th",
        {
          classNames: ["main-table-footer-item"],
          attributes: { colspan: "2" },
        },
        `Average: ${average}`
      )
    );

    createChart(xValues, yValues);
  } catch (e) {
    inputError.style.visibility = "visible";
    throw new Error(e);
  }
}
