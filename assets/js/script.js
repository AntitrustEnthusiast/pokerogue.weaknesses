function processPokemon(species) {
  // construct type image elements
  const type1Path = `assets/images/types/${Type[
    species.type1
  ].toLowerCase()}.webp`;
  var typeImgs = `<img class='sprite type-sprite' src='${type1Path}' height='40'/>`;
  if (species.type2) {
    const type2Path = `assets/images/types/${Type[
      species.type2
    ].toLowerCase()}.webp`;
    typeImgs += `<img class='sprite type-sprite' src='${type2Path}' height='40'/>`;
  }

  // construct sprite elements
  const spritePath = `assets/images/pokemon/icons/${
    species.generation
  }/${species.getSpriteAtlasPath(false)}.webp`;
  const sprite = `<img class='sprite' src='${spritePath}' width='80' height='80'/>`;
  var name = species.name;
  if (species.formName) name += ` (${species.formName})`;
  var s = `<div class='pokemon'><div class='title'>${sprite}<span class='name text'>${name}</span><div class='type-sprites'>${typeImgs}</div></div>`;

  // construct weaknesses
  s += "<div class='flexbox weakness type text'>";
  for (const x in species.damageTaken)
    if (species.damageTaken[x] > 1) {
      const elem = Type[x];
      s += `<div class='flexchild ${elem}'><div>${elem}</div><div>${species.damageTaken[x]} x</div></div>`;
    }
  s += "</div>";

  // construct resistances
  s += "<div class='flexbox resistance type text'>";
  for (const x in species.damageTaken)
    if (species.damageTaken[x] < 1) {
      const elem = Type[x];
      s += `<div class='flexchild ${elem}'><div>${elem}</div><div>${species.damageTaken[x]} x</div></div>`;
    }
  s += "</div>";

  $("#result").append(s);
}

let debug = false;

$("document").ready(function () {
  function displayPokemon() {
    // input box search value
    var t = $("#name").val().toLowerCase();

    // empty page
    $("#result").empty();

    // don't search for tiny strings
    if (debug) t = 'ferroseedot'
    if (t.length <= 2) return;

    // search
    const result = [];
    allSpecies.forEach((species) => {
      const similarity = stringSimilarity(t, species.name);
      if (similarity < 0.45) return;
      if (species.forms.length > 0) {
        species.forms.forEach((form) => result.push([similarity, form]));
      } else {
        result.push([similarity, species]);
      }
    });
    result.sort((a, b) => b[0] - a[0]).forEach((pok) => processPokemon(pok[1]));
  }

  $("#name").on("input", displayPokemon);
  if (debug) displayPokemon()
});
