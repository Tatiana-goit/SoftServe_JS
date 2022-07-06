// 3. ДНК

// Дезоксирибонуклеїнова кислота (ДНК) — це хімічна речовина, що міститься в ядрі клітин і несе «інструкції» для розвитку та функціонування живих організмів.
// У рядках ДНК символи «А» і «Т» доповнюють один одного, як «С» і «G». У вас є функція з однією стороною ДНК - вам потрібно отримати іншу комплементарну сторону. Нитку ДНК ніколи не буває порожнім або ДНК взагалі немає.

// Приклад:
// DNA_strand("ATTGC") # повертає "TAACG"
// DNA_strand("GTAT") # повертає "CATA"

function changeDNK(str) {
  if (str.length !== 0) {
    const arrayDNK = str.split('')
    let newArrayDNK = []

    for (let i = 0; i < arrayDNK.length; i++) {
      switch (arrayDNK[i]) {
        case 'A':
          newArrayDNK.push('T')
          break
        case 'T':
          newArrayDNK.push('A')
          break
        case 'C':
          newArrayDNK.push('G')
          break
        case 'G':
          newArrayDNK.push('C')
          break
        default:
          console.log('Что-то не так со стрoкой')
          break
      }
    }
    return newArrayDNK.join('')
  } else return 'Ваша страка пуста'
}

console.log(changeDNK('ATTGC'))
console.log(changeDNK('GTAT'))
console.log(changeDNK(''))
