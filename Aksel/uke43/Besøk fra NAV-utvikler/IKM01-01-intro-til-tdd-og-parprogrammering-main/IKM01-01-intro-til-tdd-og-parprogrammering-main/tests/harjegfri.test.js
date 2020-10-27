/**
 * I Node bruker man require for å hente inn moduler fra andre steder
 * Man oppgir navnet på modulen dersom man har installert den slik vi gjør med ava
 * Man oppgir banen til modulen dersom der er en lokal fil
 * ".." betyr opp et nivå i katalogstrukturen, dersom du skal hente en fil i samme katalog du står så bruker du "./"
 * { navn } brukes her for å sette flere variabler samtidig, det kalles destructuring assignement (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
 */

const test = require('ava')
const { harjegfri } = require('../lib/harjegfri')

test('Denne datoen har du ikke fri', t => {
  var valgtDato = new Date('October 20, 2020')
  t.is(harjegfri(valgtDato), false, 'Denne datoen er ikke en fridag')
})

test('Denne datoen er en helg', t => {
  var valgtDato = new Date('October 24, 2020')
  t.is(harjegfri(valgtDato), true, 'Denne datoen er en fridag')
})

test('Denne datoen er en helligdag eller fridag', t => {
  var valgtDato = new Date('December 24, 2020')
  t.is(harjegfri(valgtDato), true, 'Denne datoen er en fridag')
})


