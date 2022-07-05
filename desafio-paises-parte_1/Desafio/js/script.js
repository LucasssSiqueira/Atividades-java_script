const url = 'https://restcountries.com/v2/all'
var countries = document.querySelector('#tabCountries')
var mostrarF = document.querySelector('#tabFavorites')
var populacao = document.querySelector('#totalPopulationList')
var population = document.querySelector('#totalPopulationFavorites')
var fav = []
var ArrayCountries = []

fetch(url).then(promise => promise.json()).then(resul => {
    resul.forEach(a => {
      ArrayCountries.push(a)
    })
    tela()
  })

function tela() {
  var p
  var soma = 0
  ArrayCountries.forEach((element, i) => {
    if (element != '') {
      soma += parseInt(element.population)
      p += `<tr><td><img src="${element.flag}" width="50px"></td><td>${
        element.numericCode
      }</td><td>${element.name}</td><td>${
        element.region
      }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favorito('${i}')"> +</button></td> </tr>
      `
    }
    countries.innerHTML = p
    populacao.innerHTML = soma.toLocaleString()
  })
}
function mostrarTelaf() {
  var paisf
  var soma = 0
  fav.forEach((element, i) => {
    if (element != '') {
      soma += parseInt(element.population)
      paisf += `
      <tr><td><img src="${element.flag}" width="50px"></td> <td>${
        element.numericCode
      }</td><td>${element.name}</td>
      <td>${
        element.region
      }</td><td>${element.population.toLocaleString()}</td> <td><button onclick="tela_favoritos('${i}')"> -</button></td> </tr>
      `
    }
  })
  mostrarF.innerHTML = paisf
  population.innerHTML = soma.toLocaleString()
}

function tela_favorito(country) {
  fav[country] = ArrayCountries[country]
  ArrayCountries[country] = ''
  mostrarTelaf()
  tela()
}
function tela_favoritos(country) {
  ArrayCountries[country] = fav[country]
  fav[country] = ''
  mostrarTelaf()
  tela()
}


