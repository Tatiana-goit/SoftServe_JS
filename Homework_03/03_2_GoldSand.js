// Золотий пісок

// Співробітники заводу із виробництва золотого піску з повітря вирішили поправити своє фінансове становище. Вони пробралися на склад заводу, де зберігався золотий пісок трьох видів. Один кілограм золотого піску першого виду вони змогли б продати за A1 гривень, другого – за A2 гривень, а третього виду – за A3 гривень. Так вийшло, що у співробітників виявилося із собою лише три ємності: перша була розрахована на B1 кілограм вантажу, друга на B2 кілограм, а третя на B3 кілограм. Їм треба було повністю заповнити всі ємності таким чином, щоб отримати якомога більше грошей за весь пісок. При заповненні ємностей не можна змішувати пісок різних видів, тобто в одну ємність поміщати більше одного виду піску і заповнювати ємності піском так, щоб один вид піску знаходився більш ніж в одній ємності.

// Потрібно написати програму, яка визначає, яку суму заповзятливі співробітники зможуть продати весь пісок у разі найкращого собі заповнення ємностей піском.

// Вхідні дані 6 натуральних чисел A1, A2, A3, B1, B2, B3. Усі числа не перевищують 100.

// Вихідні дані Єдине ціле число – суму у гривнях, яку зможуть співробітники заробити у разі найкращого для себе заповнення ємностей піском.

function findBestIncome(a1, a2, a3, b1, b2, b3) {
  let bestResult = 0
  const arrayOfMoney = [a1, a2, a3].sort((a, b) => a - b)
  const arrayOfWeight = [b1, b2, b3].sort((a, b) => a - b)
  for (let i = 0; i < 3; i++) {
    bestResult += arrayOfMoney[i] * arrayOfWeight[i]
  }
  return bestResult
}

console.log('Максимальный заработок =',findBestIncome(10, 20, 30, 2, 5, 10),'грн')