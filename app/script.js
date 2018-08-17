const $$ = selector => document.querySelectorAll(selector)
const $ = selector => document.querySelector(selector)

$$('.carte').forEach( (carte) => {
  carte.addEventListener('click', () => {
    const zoneExterieureModale = creerBaliseDiv("zoneExterieureModale")
    const modale = creerBaliseDiv("modale")
    creerNoeudTexte("texte", modale)
    $("body").appendChild(zoneExterieureModale)
    zoneExterieureModale.appendChild(modale)
    $('.zoneExterieureModale').addEventListener('click', () => {
      $('body').removeChild($('.zoneExterieureModale'))
    })
  })
})

const creerBaliseDiv = (nomClasse) => {
  const modale = document.createElement('div')
  modale.className = nomClasse
  return modale
}

const creerNoeudTexte = (texteAffiche, noeudParent) => {
  const texte = document.createTextNode(texteAffiche)
  noeudParent.appendChild(texte)
}

