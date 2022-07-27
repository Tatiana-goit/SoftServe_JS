// Ідентифікація Борна
// Напишіть функцію, яка перевірятиме правильність введення даних:
// Серія та номер паспорта
// Номер телефону
// Ідентифікаційний код
// Вхідні дані:
// Рядок - цифробуквенний рядок, що відповідає за серію та номер паспорта
// Рядок - цифросимвольний рядок, що відповідає за номер телефону
// Рядок - рядок цифр, що відповідає за ідентифікаційний код
// Вихідні дані: Рядок, що описує, чи підходять введені дані під опис.

function identification (passportID, phone, identificationCode) {
    let statusPassportID = "NOT OK";
    let statusPhone = "NOT OK";
    let statusIdentificationCode = "NOT OK";

    if (/[A-Z]{2}[0-9]{6}/.test(passportID)) {
        statusPassportID = "OK"
    } 

    if ((/\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}/g).test(phone)) {
        statusPhone = "OK"
    } 

    if (/\d{10}/.test(identificationCode)) {
        statusIdentificationCode = "OK"
    } 

    return ` passportID - ${statusPassportID} \n phone - ${statusPhone} \n identification code - ${statusIdentificationCode}`
}

const passportID = "FJ502038";
const phone = "+38(097)163-80-80";
const identificationCode = "3697456988"
console.log(identification(passportID, phone, identificationCode));