/**
 * Verdens kuleste funksjon. Forteller meg om jeg har fri eller ikke
 * svarer ja alle dager jeg har fri og nei dagene jeg ikke har fri
 */

const vacations = [
  {"start":new Date('October 5, 2020'), "end":new Date('October 9, 2020')},
  {"start":new Date('December 21, 2020'), "end":new Date('January 1, 2021')},
  {"start":new Date('February 22, 2021'), "end":new Date('February 26, 2021')},
  {"start":new Date('March 29, 2021'), "end":new Date('April 15, 2021')},
  {"start":new Date('May 13, 2021'), "end":new Date('May 17, 2021')},
  {"start":new Date('May 24, 2021'), "end":new Date('May 24, 2021')},
]

function harjegfri (valgtDato) {
  var isVacation = false
  if (Object.prototype.toString.call(valgtDato) === "[object Date]") {
    if (valgtDato < new Date("August 18, 2020") || valgtDato > new Date("June 18, 2021") || valgtDato.getDay() === 0 || valgtDato.getDay() === 6) {
      return true
    } else {
      vacations.forEach((vacation) => {
        if (valgtDato >= vacation.start && valgtDato <= vacation.end) {
          isVacation = true
        }
      })
      return isVacation
    }
  } else {
    return "Error: No valid date provided"
  }
}





 /* if (dag>0 || dag<6) {
    console.log("Du har ikke fri")
    return "nei"
    }
    else {
      console.log("DU HAR FRI!")
      return "ja"
    }*/


/**
 * I Node kan du eksportere funksjoner slik at du kan gjenbruke de andre steder
 * Formatet er module.exports.<navnet på det du eksporterer> = <det du eksporterer>
 * Fordelen med å kunne eksportere og gjenbruke moduler er at du kan dele koden din i veldig små deler
 * Dette gjør det lett å ha oversikt og mye lettere å teste
 */
module.exports.harjegfri = harjegfri
