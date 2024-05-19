const variantData = {};

let Type;
(function (Type) {
  Type[(Type["UNKNOWN"] = -1)] = "UNKNOWN";
  Type[(Type["NORMAL"] = 0)] = "NORMAL";
  Type[(Type["FIGHTING"] = 1)] = "FIGHTING";
  Type[(Type["FLYING"] = 2)] = "FLYING";
  Type[(Type["POISON"] = 3)] = "POISON";
  Type[(Type["GROUND"] = 4)] = "GROUND";
  Type[(Type["ROCK"] = 5)] = "ROCK";
  Type[(Type["BUG"] = 6)] = "BUG";
  Type[(Type["GHOST"] = 7)] = "GHOST";
  Type[(Type["STEEL"] = 8)] = "STEEL";
  Type[(Type["FIRE"] = 9)] = "FIRE";
  Type[(Type["WATER"] = 10)] = "WATER";
  Type[(Type["GRASS"] = 11)] = "GRASS";
  Type[(Type["ELECTRIC"] = 12)] = "ELECTRIC";
  Type[(Type["PSYCHIC"] = 13)] = "PSYCHIC";
  Type[(Type["ICE"] = 14)] = "ICE";
  Type[(Type["DRAGON"] = 15)] = "DRAGON";
  Type[(Type["DARK"] = 16)] = "DARK";
  Type[(Type["FAIRY"] = 17)] = "FAIRY";
  Type[(Type["STELLAR"] = 18)] = "STELLAR";
})(Type || (Type = {}));

// store for iteration
Type.keys = Object.entries(Type)
  .filter(([_, value]) => {
    return Number.isInteger(value);
  })
  .map(([key, _]) => {
    return key;
  });

Type.values = Type.keys.map((k) => Type[k]);

function getTypeDamageMultiplier(attackType, defType) {
  if (attackType === Type.UNKNOWN || defType === Type.UNKNOWN) return 1;

  switch (defType) {
    case Type.NORMAL:
      switch (attackType) {
        case Type.FIGHTING:
          return 2;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.POISON:
        case Type.GROUND:
        case Type.ROCK:
        case Type.BUG:
        case Type.STEEL:
        case Type.FIRE:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
        case Type.PSYCHIC:
        case Type.ICE:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.GHOST:
        default:
          return 0;
      }
    case Type.FIGHTING:
      switch (attackType) {
        case Type.FLYING:
        case Type.PSYCHIC:
        case Type.FAIRY:
          return 2;
        case Type.NORMAL:
        case Type.FIGHTING:
        case Type.POISON:
        case Type.GROUND:
        case Type.GHOST:
        case Type.STEEL:
        case Type.FIRE:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
        case Type.ICE:
        case Type.DRAGON:
          return 1;
        case Type.ROCK:
        case Type.BUG:
        case Type.DARK:
          return 0.5;
        default:
          return 0;
      }
    case Type.FLYING:
      switch (attackType) {
        case Type.ROCK:
        case Type.ELECTRIC:
        case Type.ICE:
          return 2;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.POISON:
        case Type.GHOST:
        case Type.STEEL:
        case Type.FIRE:
        case Type.WATER:
        case Type.PSYCHIC:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.FIGHTING:
        case Type.BUG:
        case Type.GRASS:
          return 0.5;
        case Type.GROUND:
        default:
          return 0;
      }
    case Type.POISON:
      switch (attackType) {
        case Type.GROUND:
        case Type.PSYCHIC:
          return 2;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.ROCK:
        case Type.GHOST:
        case Type.STEEL:
        case Type.FIRE:
        case Type.WATER:
        case Type.ELECTRIC:
        case Type.ICE:
        case Type.DRAGON:
        case Type.DARK:
          return 1;
        case Type.FIGHTING:
        case Type.POISON:
        case Type.BUG:
        case Type.GRASS:
        case Type.FAIRY:
          return 0.5;
        default:
          return 0;
      }
    case Type.GROUND:
      switch (attackType) {
        case Type.WATER:
        case Type.GRASS:
        case Type.ICE:
          return 2;
        case Type.NORMAL:
        case Type.FIGHTING:
        case Type.FLYING:
        case Type.GROUND:
        case Type.BUG:
        case Type.GHOST:
        case Type.STEEL:
        case Type.FIRE:
        case Type.PSYCHIC:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.POISON:
        case Type.ROCK:
          return 0.5;
        case Type.ELECTRIC:
        default:
          return 0;
      }
    case Type.ROCK:
      switch (attackType) {
        case Type.FIGHTING:
        case Type.GROUND:
        case Type.STEEL:
        case Type.WATER:
        case Type.GRASS:
          return 2;
        case Type.ROCK:
        case Type.BUG:
        case Type.GHOST:
        case Type.ELECTRIC:
        case Type.PSYCHIC:
        case Type.ICE:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.POISON:
        case Type.FIRE:
          return 0.5;
        default:
          return 0;
      }
    case Type.BUG:
      switch (attackType) {
        case Type.FLYING:
        case Type.ROCK:
        case Type.FIRE:
          return 2;
        case Type.NORMAL:
        case Type.POISON:
        case Type.BUG:
        case Type.GHOST:
        case Type.STEEL:
        case Type.WATER:
        case Type.ELECTRIC:
        case Type.PSYCHIC:
        case Type.ICE:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.FIGHTING:
        case Type.GROUND:
        case Type.GRASS:
          return 0.5;
        default:
          return 0;
      }
    case Type.GHOST:
      switch (attackType) {
        case Type.GHOST:
        case Type.DARK:
          return 2;
        case Type.FLYING:
        case Type.GROUND:
        case Type.ROCK:
        case Type.STEEL:
        case Type.FIRE:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
        case Type.PSYCHIC:
        case Type.ICE:
        case Type.DRAGON:
        case Type.FAIRY:
          return 1;
        case Type.POISON:
        case Type.BUG:
          return 0.5;
        case Type.NORMAL:
        case Type.FIGHTING:
        default:
          return 0;
      }
    case Type.STEEL:
      switch (attackType) {
        case Type.FIGHTING:
        case Type.GROUND:
        case Type.FIRE:
          return 2;
        case Type.GHOST:
        case Type.WATER:
        case Type.ELECTRIC:
        case Type.DARK:
          return 1;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.ROCK:
        case Type.BUG:
        case Type.STEEL:
        case Type.GRASS:
        case Type.PSYCHIC:
        case Type.ICE:
        case Type.DRAGON:
        case Type.FAIRY:
          return 0.5;
        case Type.POISON:
        default:
          return 0;
      }
    case Type.FIRE:
      switch (attackType) {
        case Type.GROUND:
        case Type.ROCK:
        case Type.WATER:
          return 2;
        case Type.NORMAL:
        case Type.FIGHTING:
        case Type.FLYING:
        case Type.POISON:
        case Type.GHOST:
        case Type.ELECTRIC:
        case Type.PSYCHIC:
        case Type.DRAGON:
        case Type.DARK:
          return 1;
        case Type.BUG:
        case Type.STEEL:
        case Type.FIRE:
        case Type.GRASS:
        case Type.ICE:
        case Type.FAIRY:
          return 0.5;
        default:
          return 0;
      }
    case Type.WATER:
      switch (attackType) {
        case Type.GRASS:
        case Type.ELECTRIC:
          return 2;
        case Type.NORMAL:
        case Type.FIGHTING:
        case Type.FLYING:
        case Type.POISON:
        case Type.GROUND:
        case Type.ROCK:
        case Type.BUG:
        case Type.GHOST:
        case Type.PSYCHIC:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.STEEL:
        case Type.FIRE:
        case Type.WATER:
        case Type.ICE:
          return 0.5;
        default:
          return 0;
      }
    case Type.GRASS:
      switch (attackType) {
        case Type.FLYING:
        case Type.POISON:
        case Type.BUG:
        case Type.FIRE:
        case Type.ICE:
          return 2;
        case Type.NORMAL:
        case Type.FIGHTING:
        case Type.ROCK:
        case Type.GHOST:
        case Type.STEEL:
        case Type.PSYCHIC:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.GROUND:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
          return 0.5;
        default:
          return 0;
      }
    case Type.ELECTRIC:
      switch (attackType) {
        case Type.GROUND:
          return 2;
        case Type.NORMAL:
        case Type.FIGHTING:
        case Type.POISON:
        case Type.ROCK:
        case Type.BUG:
        case Type.GHOST:
        case Type.FIRE:
        case Type.WATER:
        case Type.GRASS:
        case Type.PSYCHIC:
        case Type.ICE:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.FLYING:
        case Type.STEEL:
        case Type.ELECTRIC:
          return 0.5;
        default:
          return 0;
      }
    case Type.PSYCHIC:
      switch (attackType) {
        case Type.BUG:
        case Type.GHOST:
        case Type.DARK:
          return 2;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.POISON:
        case Type.GROUND:
        case Type.ROCK:
        case Type.STEEL:
        case Type.FIRE:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
        case Type.ICE:
        case Type.DRAGON:
        case Type.FAIRY:
          return 1;
        case Type.FIGHTING:
        case Type.PSYCHIC:
          return 0.5;
        default:
          return 0;
      }
    case Type.ICE:
      switch (attackType) {
        case Type.FIGHTING:
        case Type.ROCK:
        case Type.STEEL:
        case Type.FIRE:
          return 2;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.POISON:
        case Type.GROUND:
        case Type.BUG:
        case Type.GHOST:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
        case Type.PSYCHIC:
        case Type.DRAGON:
        case Type.DARK:
        case Type.FAIRY:
          return 1;
        case Type.ICE:
          return 0.5;
        default:
          return 0;
      }
    case Type.DRAGON:
      switch (attackType) {
        case Type.ICE:
        case Type.DRAGON:
        case Type.FAIRY:
          return 2;
        case Type.NORMAL:
        case Type.FIGHTING:
        case Type.FLYING:
        case Type.POISON:
        case Type.GROUND:
        case Type.ROCK:
        case Type.BUG:
        case Type.GHOST:
        case Type.STEEL:
        case Type.PSYCHIC:
        case Type.DARK:
          return 1;
        case Type.FIRE:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
          return 0.5;
        default:
          return 0;
      }
    case Type.DARK:
      switch (attackType) {
        case Type.FIGHTING:
        case Type.BUG:
        case Type.FAIRY:
          return 2;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.POISON:
        case Type.GROUND:
        case Type.ROCK:
        case Type.STEEL:
        case Type.FIRE:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
        case Type.ICE:
        case Type.DRAGON:
          return 1;
        case Type.GHOST:
        case Type.DARK:
          return 0.5;
        case Type.PSYCHIC:
        default:
          return 0;
      }
    case Type.FAIRY:
      switch (attackType) {
        case Type.POISON:
        case Type.STEEL:
          return 2;
        case Type.NORMAL:
        case Type.FLYING:
        case Type.GROUND:
        case Type.ROCK:
        case Type.GHOST:
        case Type.FIRE:
        case Type.WATER:
        case Type.GRASS:
        case Type.ELECTRIC:
        case Type.PSYCHIC:
        case Type.ICE:
        case Type.FAIRY:
          return 1;
        case Type.FIGHTING:
        case Type.BUG:
        case Type.DARK:
          return 0.5;
        case Type.DRAGON:
        default:
          return 0;
      }
    case Type.STELLAR:
      return 1;
  }
}

let Region;
(function (Region) {
  Region[(Region["NORMAL"] = 0)] = "NORMAL";
  Region[(Region["ALOLA"] = 1)] = "ALOLA";
  Region[(Region["GALAR"] = 2)] = "GALAR";
  Region[(Region["HISUI"] = 3)] = "HISUI";
  Region[(Region["PALDEA"] = 4)] = "PALDEA";
})(Region || (Region = {}));

class PokemonSpeciesForm {
  constructor(type1, type2, catchRate, genderDiffs) {
    this.type1 = type1;
    this.type2 = type2;
    this.catchRate = catchRate;
    this.genderDiffs = genderDiffs;
    const entries = Type.values.map((v) => {
      return [v, this.getAttackTypeEffectiveness(v)];
    });
    this.damageTaken = Object.fromEntries(entries);
    // Delete all the neutral damage types, they're uninteresting
    for (const x in this.damageTaken) if (this.damageTaken[x] == 1) delete this.damageTaken[x];
  }

  getAttackTypeEffectiveness(moveType) {
    if (moveType === Type.STELLAR) return 1;
    const types = [this.type1];
    if (this.type2) {
      types.push(this.type2);
    }

    let multiplier = types
      .map((defType) => {
        return getTypeDamageMultiplier(moveType, defType);
      })
      .reduce((acc, cur) => acc * cur, 1);
    return multiplier;
  }

  isOfType(type) {
    return this.type1 === type || (this.type2 !== null && this.type2 === type);
  }

  getSpriteAtlasPath(female, formIndex, shiny, variant) {
    const spriteId = this.getSpriteId(female, formIndex, shiny, variant).replace(/\_{2}/g, "/");
    return `${/_[1-3]$/.test(spriteId) ? "variant/" : ""}${spriteId}`;
  }

  getSpriteId(female, formIndex, shiny, variant, back) {
    if (formIndex === undefined || this instanceof PokemonForm) formIndex = this.formIndex;

    const formSpriteKey = this.getFormSpriteKey(formIndex);
    const showGenderDiffs = this.genderDiffs && female && ![SpeciesFormKey.MEGA, SpeciesFormKey.GIGANTAMAX].find((k) => formSpriteKey === k);

    const baseSpriteKey = `${showGenderDiffs ? "female__" : ""}${this.speciesId}${formSpriteKey ? `-${formSpriteKey}` : ""}`;

    let variantSet;
    let config = variantData;
    `${back ? "back__" : ""}${baseSpriteKey}`.split("__").map((p) => (config ? (config = config[p]) : null));
    variantSet = config;

    return `${back ? "back__" : ""}${shiny && (!variantSet || (!variant && !variantSet[variant || 0])) ? "shiny__" : ""}${baseSpriteKey}${shiny && variantSet && variantSet[variant || 0] === 2 ? `_${variant + 1}` : ""}`;
  }

  getSpriteKey(female, formIndex, shiny, variant) {
    return `pkmn__${this.getSpriteId(female, formIndex, shiny, variant)}`;
  }

  getIconAtlasKey(formIndex, shiny, variant) {
    const isVariant = shiny && variantData[this.speciesId] && variantData[this.speciesId][variant];
    return `pokemon_icons_${this.generation}${isVariant ? "v" : ""}`;
  }

  getIconId(female, formIndex, shiny, variant) {
    if (formIndex === undefined) formIndex = this.formIndex;

    let ret = this.speciesId.toString();

    const isVariant = shiny && variantData[this.speciesId] && variantData[this.speciesId][variant];

    if (shiny && !isVariant) ret += "s";

    switch (this.speciesId) {
      case Species.HIPPOPOTAS:
      case Species.HIPPOWDON:
      case Species.UNFEZANT:
      case Species.FRILLISH:
      case Species.JELLICENT:
        ret += female ? "-f" : "";
        break;
    }

    let formSpriteKey = this.getFormSpriteKey(formIndex);
    if (formSpriteKey) {
      switch (this.speciesId) {
        case Species.DUDUNSPARCE:
          break;
        case Species.ZACIAN:
        case Species.ZAMAZENTA:
          if (formSpriteKey.startsWith("behemoth")) formSpriteKey = "crowned";
        default:
          ret += `-${formSpriteKey}`;
          break;
      }
    }

    if (isVariant) ret += `_${variant + 1}`;

    return ret;
  }
}

class PokemonSpecies extends PokemonSpeciesForm {
  constructor(id, generation, subLegendary, legendary, mythical, type1, type2, catchRate, malePercent, genderDiffs, canChangeForm, ...forms) {
    super(type1, type2, catchRate, genderDiffs);
    this.speciesId = id;
    this.formIndex = 0;
    this.generation = generation;
    this.subLegendary = subLegendary;
    this.legendary = legendary;
    this.mythical = mythical;
    this.malePercent = malePercent;
    this.genderDiffs = genderDiffs;
    this.canChangeForm = !!canChangeForm;
    this.forms = forms;

    this.localize();

    forms.forEach((form, f) => {
      form.speciesId = id;
      form.formIndex = f;
      form.generation = generation;
      form.name = this.getName(f);
    });
  }

  getName(formIndex) {
    if (formIndex !== undefined && this.forms.length) {
      const form = this.forms[formIndex];
      switch (form.formKey) {
        case SpeciesFormKey.MEGA:
        case SpeciesFormKey.PRIMAL:
        case SpeciesFormKey.ETERNAMAX:
          return `${form.formName} ${this.name}`;
        case SpeciesFormKey.MEGA_X:
          return `Mega ${this.name} X`;
        case SpeciesFormKey.MEGA_Y:
          return `Mega ${this.name} Y`;
        default:
          if (form.formKey.indexOf(SpeciesFormKey.GIGANTAMAX) > -1) return `G-Max ${this.name}`;
      }
    }
    return this.name;
  }

  localize() {
    // this.name = i18next.t(`pokemon:${Species[this.speciesId].toLowerCase()}`);
    this.name = speciesNames[Species[this.speciesId].toLowerCase()];
  }

  getFormSpriteKey(formIndex) {
    if (this.forms.length && formIndex >= this.forms.length) {
      console.warn(`Attempted accessing form with index ${formIndex} of species ${this.getName()} with only ${this.forms.length || 0} forms`);
      formIndex = Math.min(formIndex, this.forms.length - 1);
    }
    return this.forms?.length ? this.forms[formIndex || 0].getFormSpriteKey() : "";
  }
}

class PokemonForm extends PokemonSpeciesForm {
  constructor(formName, formKey, type1, type2, catchRate, genderDiffs, formSpriteKey) {
    super(type1, type2, catchRate, !!genderDiffs);
    this.formName = formName;
    this.formKey = formKey;
    this.formSpriteKey = formSpriteKey !== undefined ? formSpriteKey : null;
  }

  getFormSpriteKey(_formIndex) {
    return this.formSpriteKey !== null ? this.formSpriteKey : this.formKey;
  }
}

let SpeciesFormKey;
(function (SpeciesFormKey) {
  SpeciesFormKey["MEGA"] = "mega";
  SpeciesFormKey["MEGA_X"] = "mega-x";
  SpeciesFormKey["MEGA_Y"] = "mega-y";
  SpeciesFormKey["PRIMAL"] = "primal";
  SpeciesFormKey["ORIGIN"] = "origin";
  SpeciesFormKey["INCARNATE"] = "incarnate";
  SpeciesFormKey["THERIAN"] = "therian";
  SpeciesFormKey["GIGANTAMAX"] = "gigantamax";
  SpeciesFormKey["GIGANTAMAX_SINGLE"] = "gigantamax-single";
  SpeciesFormKey["GIGANTAMAX_RAPID"] = "gigantamax-rapid";
  SpeciesFormKey["ETERNAMAX"] = "eternamax";
})(SpeciesFormKey || (SpeciesFormKey = {}));

const allSpecies = [];

allSpecies.push(
  new PokemonSpecies(Species.BULBASAUR, 1, false, false, false, Type.GRASS, Type.POISON, 45, 87.5, false),
  new PokemonSpecies(Species.IVYSAUR, 1, false, false, false, Type.GRASS, Type.POISON, 45, 87.5, false),
  new PokemonSpecies(Species.VENUSAUR, 1, false, false, false, Type.GRASS, Type.POISON, 45, 87.5, true, true,
		 new PokemonForm("Normal", "", Type.GRASS, Type.POISON, 45, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.GRASS, Type.POISON, 45, true),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.GRASS, Type.POISON, 45, true)),
  new PokemonSpecies(Species.CHARMANDER, 1, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.CHARMELEON, 1, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.CHARIZARD, 1, false, false, false, Type.FIRE, Type.FLYING, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.FIRE, Type.FLYING, 45),
		 new PokemonForm("Mega X", SpeciesFormKey.MEGA_X, Type.FIRE, Type.DRAGON, 45),
		 new PokemonForm("Mega Y", SpeciesFormKey.MEGA_Y, Type.FIRE, Type.FLYING, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.FIRE, Type.FLYING, 45)),
  new PokemonSpecies(Species.SQUIRTLE, 1, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.WARTORTLE, 1, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.BLASTOISE, 1, false, false, false, Type.WATER, null, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.WATER, null, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.WATER, null, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.WATER, null, 45)),
  new PokemonSpecies(Species.CATERPIE, 1, false, false, false, Type.BUG, null, 255, 50, false),
  new PokemonSpecies(Species.METAPOD, 1, false, false, false, Type.BUG, null, 120, 50, false),
  new PokemonSpecies(Species.BUTTERFREE, 1, false, false, false, Type.BUG, Type.FLYING, 45, 50, true, true,
		 new PokemonForm("Normal", "", Type.BUG, Type.FLYING, 45, true),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.BUG, Type.FLYING, 45, true)),
  new PokemonSpecies(Species.WEEDLE, 1, false, false, false, Type.BUG, Type.POISON, 255, 50, false),
  new PokemonSpecies(Species.KAKUNA, 1, false, false, false, Type.BUG, Type.POISON, 120, 50, false),
  new PokemonSpecies(Species.BEEDRILL, 1, false, false, false, Type.BUG, Type.POISON, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.BUG, Type.POISON, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.BUG, Type.POISON, 45)),
  new PokemonSpecies(Species.PIDGEY, 1, false, false, false, Type.NORMAL, Type.FLYING, 255, 50, false),
  new PokemonSpecies(Species.PIDGEOTTO, 1, false, false, false, Type.NORMAL, Type.FLYING, 120, 50, false),
  new PokemonSpecies(Species.PIDGEOT, 1, false, false, false, Type.NORMAL, Type.FLYING, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.NORMAL, Type.FLYING, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.NORMAL, Type.FLYING, 45)),
  new PokemonSpecies(Species.RATTATA, 1, false, false, false, Type.NORMAL, null, 255, 50, true),
  new PokemonSpecies(Species.RATICATE, 1, false, false, false, Type.NORMAL, null, 127, 50, true),
  new PokemonSpecies(Species.SPEAROW, 1, false, false, false, Type.NORMAL, Type.FLYING, 255, 50, false),
  new PokemonSpecies(Species.FEAROW, 1, false, false, false, Type.NORMAL, Type.FLYING, 90, 50, false),
  new PokemonSpecies(Species.EKANS, 1, false, false, false, Type.POISON, null, 255, 50, false),
  new PokemonSpecies(Species.ARBOK, 1, false, false, false, Type.POISON, null, 90, 50, false),
  new PokemonSpecies(Species.PIKACHU, 1, false, false, false, Type.ELECTRIC, null, 190, 50, true, true,
		 new PokemonForm("Normal", "", Type.ELECTRIC, null, 190, true),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.ELECTRIC, null, 190, true)),
  new PokemonSpecies(Species.RAICHU, 1, false, false, false, Type.ELECTRIC, null, 75, 50, true),
  new PokemonSpecies(Species.SANDSHREW, 1, false, false, false, Type.GROUND, null, 255, 50, false),
  new PokemonSpecies(Species.SANDSLASH, 1, false, false, false, Type.GROUND, null, 90, 50, false),
  new PokemonSpecies(Species.NIDORAN_F, 1, false, false, false, Type.POISON, null, 235, 0, false),
  new PokemonSpecies(Species.NIDORINA, 1, false, false, false, Type.POISON, null, 120, 0, false),
  new PokemonSpecies(Species.NIDOQUEEN, 1, false, false, false, Type.POISON, Type.GROUND, 45, 0, false),
  new PokemonSpecies(Species.NIDORAN_M, 1, false, false, false, Type.POISON, null, 235, 100, false),
  new PokemonSpecies(Species.NIDORINO, 1, false, false, false, Type.POISON, null, 120, 100, false),
  new PokemonSpecies(Species.NIDOKING, 1, false, false, false, Type.POISON, Type.GROUND, 45, 100, false),
  new PokemonSpecies(Species.CLEFAIRY, 1, false, false, false, Type.FAIRY, null, 150, 25, false),
  new PokemonSpecies(Species.CLEFABLE, 1, false, false, false, Type.FAIRY, null, 25, 25, false),
  new PokemonSpecies(Species.VULPIX, 1, false, false, false, Type.FIRE, null, 190, 25, false),
  new PokemonSpecies(Species.NINETALES, 1, false, false, false, Type.FIRE, null, 75, 25, false),
  new PokemonSpecies(Species.JIGGLYPUFF, 1, false, false, false, Type.NORMAL, Type.FAIRY, 170, 25, false),
  new PokemonSpecies(Species.WIGGLYTUFF, 1, false, false, false, Type.NORMAL, Type.FAIRY, 50, 25, false),
  new PokemonSpecies(Species.ZUBAT, 1, false, false, false, Type.POISON, Type.FLYING, 255, 50, true),
  new PokemonSpecies(Species.GOLBAT, 1, false, false, false, Type.POISON, Type.FLYING, 90, 50, true),
  new PokemonSpecies(Species.ODDISH, 1, false, false, false, Type.GRASS, Type.POISON, 255, 50, false),
  new PokemonSpecies(Species.GLOOM, 1, false, false, false, Type.GRASS, Type.POISON, 120, 50, true),
  new PokemonSpecies(Species.VILEPLUME, 1, false, false, false, Type.GRASS, Type.POISON, 45, 50, true),
  new PokemonSpecies(Species.PARAS, 1, false, false, false, Type.BUG, Type.GRASS, 190, 50, false),
  new PokemonSpecies(Species.PARASECT, 1, false, false, false, Type.BUG, Type.GRASS, 75, 50, false),
  new PokemonSpecies(Species.VENONAT, 1, false, false, false, Type.BUG, Type.POISON, 190, 50, false),
  new PokemonSpecies(Species.VENOMOTH, 1, false, false, false, Type.BUG, Type.POISON, 75, 50, false),
  new PokemonSpecies(Species.DIGLETT, 1, false, false, false, Type.GROUND, null, 255, 50, false),
  new PokemonSpecies(Species.DUGTRIO, 1, false, false, false, Type.GROUND, null, 50, 50, false),
  new PokemonSpecies(Species.MEOWTH, 1, false, false, false, Type.NORMAL, null, 255, 50, false, true,
		 new PokemonForm("Normal", "", Type.NORMAL, null, 255),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.NORMAL, null, 255)),
  new PokemonSpecies(Species.PERSIAN, 1, false, false, false, Type.NORMAL, null, 90, 50, false),
  new PokemonSpecies(Species.PSYDUCK, 1, false, false, false, Type.WATER, null, 190, 50, false),
  new PokemonSpecies(Species.GOLDUCK, 1, false, false, false, Type.WATER, null, 75, 50, false),
  new PokemonSpecies(Species.MANKEY, 1, false, false, false, Type.FIGHTING, null, 190, 50, false),
  new PokemonSpecies(Species.PRIMEAPE, 1, false, false, false, Type.FIGHTING, null, 75, 50, false),
  new PokemonSpecies(Species.GROWLITHE, 1, false, false, false, Type.FIRE, null, 190, 75, false),
  new PokemonSpecies(Species.ARCANINE, 1, false, false, false, Type.FIRE, null, 75, 75, false),
  new PokemonSpecies(Species.POLIWAG, 1, false, false, false, Type.WATER, null, 255, 50, false),
  new PokemonSpecies(Species.POLIWHIRL, 1, false, false, false, Type.WATER, null, 120, 50, false),
  new PokemonSpecies(Species.POLIWRATH, 1, false, false, false, Type.WATER, Type.FIGHTING, 45, 50, false),
  new PokemonSpecies(Species.ABRA, 1, false, false, false, Type.PSYCHIC, null, 200, 75, false),
  new PokemonSpecies(Species.KADABRA, 1, false, false, false, Type.PSYCHIC, null, 100, 75, true),
  new PokemonSpecies(Species.ALAKAZAM, 1, false, false, false, Type.PSYCHIC, null, 50, 75, true, true,
		 new PokemonForm("Normal", "", Type.PSYCHIC, null, 50, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.PSYCHIC, null, 50, true)),
  new PokemonSpecies(Species.MACHOP, 1, false, false, false, Type.FIGHTING, null, 180, 75, false),
  new PokemonSpecies(Species.MACHOKE, 1, false, false, false, Type.FIGHTING, null, 90, 75, false),
  new PokemonSpecies(Species.MACHAMP, 1, false, false, false, Type.FIGHTING, null, 45, 75, false, true,
		 new PokemonForm("Normal", "", Type.FIGHTING, null, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.FIGHTING, null, 45)),
  new PokemonSpecies(Species.BELLSPROUT, 1, false, false, false, Type.GRASS, Type.POISON, 255, 50, false),
  new PokemonSpecies(Species.WEEPINBELL, 1, false, false, false, Type.GRASS, Type.POISON, 120, 50, false),
  new PokemonSpecies(Species.VICTREEBEL, 1, false, false, false, Type.GRASS, Type.POISON, 45, 50, false),
  new PokemonSpecies(Species.TENTACOOL, 1, false, false, false, Type.WATER, Type.POISON, 190, 50, false),
  new PokemonSpecies(Species.TENTACRUEL, 1, false, false, false, Type.WATER, Type.POISON, 60, 50, false),
  new PokemonSpecies(Species.GEODUDE, 1, false, false, false, Type.ROCK, Type.GROUND, 255, 50, false),
  new PokemonSpecies(Species.GRAVELER, 1, false, false, false, Type.ROCK, Type.GROUND, 120, 50, false),
  new PokemonSpecies(Species.GOLEM, 1, false, false, false, Type.ROCK, Type.GROUND, 45, 50, false),
  new PokemonSpecies(Species.PONYTA, 1, false, false, false, Type.FIRE, null, 190, 50, false),
  new PokemonSpecies(Species.RAPIDASH, 1, false, false, false, Type.FIRE, null, 60, 50, false),
  new PokemonSpecies(Species.SLOWPOKE, 1, false, false, false, Type.WATER, Type.PSYCHIC, 190, 50, false),
  new PokemonSpecies(Species.SLOWBRO, 1, false, false, false, Type.WATER, Type.PSYCHIC, 75, 50, false, true,
		 new PokemonForm("Normal", "", Type.WATER, Type.PSYCHIC, 75),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.WATER, Type.PSYCHIC, 75)),
  new PokemonSpecies(Species.MAGNEMITE, 1, false, false, false, Type.ELECTRIC, Type.STEEL, 190, null, false),
  new PokemonSpecies(Species.MAGNETON, 1, false, false, false, Type.ELECTRIC, Type.STEEL, 60, null, false),
  new PokemonSpecies(Species.FARFETCHD, 1, false, false, false, Type.NORMAL, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.DODUO, 1, false, false, false, Type.NORMAL, Type.FLYING, 190, 50, true),
  new PokemonSpecies(Species.DODRIO, 1, false, false, false, Type.NORMAL, Type.FLYING, 45, 50, true),
  new PokemonSpecies(Species.SEEL, 1, false, false, false, Type.WATER, null, 190, 50, false),
  new PokemonSpecies(Species.DEWGONG, 1, false, false, false, Type.WATER, Type.ICE, 75, 50, false),
  new PokemonSpecies(Species.GRIMER, 1, false, false, false, Type.POISON, null, 190, 50, false),
  new PokemonSpecies(Species.MUK, 1, false, false, false, Type.POISON, null, 75, 50, false),
  new PokemonSpecies(Species.SHELLDER, 1, false, false, false, Type.WATER, null, 190, 50, false),
  new PokemonSpecies(Species.CLOYSTER, 1, false, false, false, Type.WATER, Type.ICE, 60, 50, false),
  new PokemonSpecies(Species.GASTLY, 1, false, false, false, Type.GHOST, Type.POISON, 190, 50, false),
  new PokemonSpecies(Species.HAUNTER, 1, false, false, false, Type.GHOST, Type.POISON, 90, 50, false),
  new PokemonSpecies(Species.GENGAR, 1, false, false, false, Type.GHOST, Type.POISON, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.GHOST, Type.POISON, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.GHOST, Type.POISON, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.GHOST, Type.POISON, 45)),
  new PokemonSpecies(Species.ONIX, 1, false, false, false, Type.ROCK, Type.GROUND, 45, 50, false),
  new PokemonSpecies(Species.DROWZEE, 1, false, false, false, Type.PSYCHIC, null, 190, 50, false),
  new PokemonSpecies(Species.HYPNO, 1, false, false, false, Type.PSYCHIC, null, 75, 50, true),
  new PokemonSpecies(Species.KRABBY, 1, false, false, false, Type.WATER, null, 225, 50, false),
  new PokemonSpecies(Species.KINGLER, 1, false, false, false, Type.WATER, null, 60, 50, false, true,
		 new PokemonForm("Normal", "", Type.WATER, null, 60),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.WATER, null, 60)),
  new PokemonSpecies(Species.VOLTORB, 1, false, false, false, Type.ELECTRIC, null, 190, null, false),
  new PokemonSpecies(Species.ELECTRODE, 1, false, false, false, Type.ELECTRIC, null, 60, null, false),
  new PokemonSpecies(Species.EXEGGCUTE, 1, false, false, false, Type.GRASS, Type.PSYCHIC, 90, 50, false),
  new PokemonSpecies(Species.EXEGGUTOR, 1, false, false, false, Type.GRASS, Type.PSYCHIC, 45, 50, false),
  new PokemonSpecies(Species.CUBONE, 1, false, false, false, Type.GROUND, null, 190, 50, false),
  new PokemonSpecies(Species.MAROWAK, 1, false, false, false, Type.GROUND, null, 75, 50, false),
  new PokemonSpecies(Species.HITMONLEE, 1, false, false, false, Type.FIGHTING, null, 45, 100, false),
  new PokemonSpecies(Species.HITMONCHAN, 1, false, false, false, Type.FIGHTING, null, 45, 100, false),
  new PokemonSpecies(Species.LICKITUNG, 1, false, false, false, Type.NORMAL, null, 45, 50, false),
  new PokemonSpecies(Species.KOFFING, 1, false, false, false, Type.POISON, null, 190, 50, false),
  new PokemonSpecies(Species.WEEZING, 1, false, false, false, Type.POISON, null, 60, 50, false),
  new PokemonSpecies(Species.RHYHORN, 1, false, false, false, Type.GROUND, Type.ROCK, 120, 50, true),
  new PokemonSpecies(Species.RHYDON, 1, false, false, false, Type.GROUND, Type.ROCK, 60, 50, true),
  new PokemonSpecies(Species.CHANSEY, 1, false, false, false, Type.NORMAL, null, 30, 0, false),
  new PokemonSpecies(Species.TANGELA, 1, false, false, false, Type.GRASS, null, 45, 50, false),
  new PokemonSpecies(Species.KANGASKHAN, 1, false, false, false, Type.NORMAL, null, 45, 0, false, true,
		 new PokemonForm("Normal", "", Type.NORMAL, null, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.NORMAL, null, 45)),
  new PokemonSpecies(Species.HORSEA, 1, false, false, false, Type.WATER, null, 225, 50, false),
  new PokemonSpecies(Species.SEADRA, 1, false, false, false, Type.WATER, null, 75, 50, false),
  new PokemonSpecies(Species.GOLDEEN, 1, false, false, false, Type.WATER, null, 225, 50, true),
  new PokemonSpecies(Species.SEAKING, 1, false, false, false, Type.WATER, null, 60, 50, true),
  new PokemonSpecies(Species.STARYU, 1, false, false, false, Type.WATER, null, 225, null, false),
  new PokemonSpecies(Species.STARMIE, 1, false, false, false, Type.WATER, Type.PSYCHIC, 60, null, false),
  new PokemonSpecies(Species.MR_MIME, 1, false, false, false, Type.PSYCHIC, Type.FAIRY, 45, 50, false),
  new PokemonSpecies(Species.SCYTHER, 1, false, false, false, Type.BUG, Type.FLYING, 45, 50, true),
  new PokemonSpecies(Species.JYNX, 1, false, false, false, Type.ICE, Type.PSYCHIC, 45, 0, false),
  new PokemonSpecies(Species.ELECTABUZZ, 1, false, false, false, Type.ELECTRIC, null, 45, 75, false),
  new PokemonSpecies(Species.MAGMAR, 1, false, false, false, Type.FIRE, null, 45, 75, false),
  new PokemonSpecies(Species.PINSIR, 1, false, false, false, Type.BUG, null, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.BUG, null, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.BUG, Type.FLYING, 45)),
  new PokemonSpecies(Species.TAUROS, 1, false, false, false, Type.NORMAL, null, 45, 100, false),
  new PokemonSpecies(Species.MAGIKARP, 1, false, false, false, Type.WATER, null, 255, 50, true),
  new PokemonSpecies(Species.GYARADOS, 1, false, false, false, Type.WATER, Type.FLYING, 45, 50, true, true,
		 new PokemonForm("Normal", "", Type.WATER, Type.FLYING, 45, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.WATER, Type.DARK, 45, true)),
  new PokemonSpecies(Species.LAPRAS, 1, false, false, false, Type.WATER, Type.ICE, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.WATER, Type.ICE, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.WATER, Type.ICE, 45)),
  new PokemonSpecies(Species.DITTO, 1, false, false, false, Type.NORMAL, null, 35, null, false),
  new PokemonSpecies(Species.EEVEE, 1, false, false, false, Type.NORMAL, null, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.NORMAL, null, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.NORMAL, null, 45)),
  new PokemonSpecies(Species.VAPOREON, 1, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.JOLTEON, 1, false, false, false, Type.ELECTRIC, null, 45, 87.5, false),
  new PokemonSpecies(Species.FLAREON, 1, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.PORYGON, 1, false, false, false, Type.NORMAL, null, 45, null, false),
  new PokemonSpecies(Species.OMANYTE, 1, false, false, false, Type.ROCK, Type.WATER, 45, 87.5, false),
  new PokemonSpecies(Species.OMASTAR, 1, false, false, false, Type.ROCK, Type.WATER, 45, 87.5, false),
  new PokemonSpecies(Species.KABUTO, 1, false, false, false, Type.ROCK, Type.WATER, 45, 87.5, false),
  new PokemonSpecies(Species.KABUTOPS, 1, false, false, false, Type.ROCK, Type.WATER, 45, 87.5, false),
  new PokemonSpecies(Species.AERODACTYL, 1, false, false, false, Type.ROCK, Type.FLYING, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.ROCK, Type.FLYING, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.ROCK, Type.FLYING, 45)),
  new PokemonSpecies(Species.SNORLAX, 1, false, false, false, Type.NORMAL, null, 25, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.NORMAL, null, 25),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.NORMAL, null, 25)),
  new PokemonSpecies(Species.ARTICUNO, 1, true, false, false, Type.ICE, Type.FLYING, 3, null, false),
  new PokemonSpecies(Species.ZAPDOS, 1, true, false, false, Type.ELECTRIC, Type.FLYING, 3, null, false),
  new PokemonSpecies(Species.MOLTRES, 1, true, false, false, Type.FIRE, Type.FLYING, 3, null, false),
  new PokemonSpecies(Species.DRATINI, 1, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.DRAGONAIR, 1, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.DRAGONITE, 1, false, false, false, Type.DRAGON, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.MEWTWO, 1, false, true, false, Type.PSYCHIC, null, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.PSYCHIC, null, 3),
		 new PokemonForm("Mega X", SpeciesFormKey.MEGA_X, Type.PSYCHIC, Type.FIGHTING, 3),
		 new PokemonForm("Mega Y", SpeciesFormKey.MEGA_Y, Type.PSYCHIC, null, 3)),
  new PokemonSpecies(Species.MEW, 1, false, false, true, Type.PSYCHIC, null, 45, null, false),
  new PokemonSpecies(Species.CHIKORITA, 2, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.BAYLEEF, 2, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.MEGANIUM, 2, false, false, false, Type.GRASS, null, 45, 87.5, true),
  new PokemonSpecies(Species.CYNDAQUIL, 2, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.QUILAVA, 2, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.TYPHLOSION, 2, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.TOTODILE, 2, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.CROCONAW, 2, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.FERALIGATR, 2, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.SENTRET, 2, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.FURRET, 2, false, false, false, Type.NORMAL, null, 90, 50, false),
  new PokemonSpecies(Species.HOOTHOOT, 2, false, false, false, Type.NORMAL, Type.FLYING, 255, 50, false),
  new PokemonSpecies(Species.NOCTOWL, 2, false, false, false, Type.NORMAL, Type.FLYING, 90, 50, false),
  new PokemonSpecies(Species.LEDYBA, 2, false, false, false, Type.BUG, Type.FLYING, 255, 50, true),
  new PokemonSpecies(Species.LEDIAN, 2, false, false, false, Type.BUG, Type.FLYING, 90, 50, true),
  new PokemonSpecies(Species.SPINARAK, 2, false, false, false, Type.BUG, Type.POISON, 255, 50, false),
  new PokemonSpecies(Species.ARIADOS, 2, false, false, false, Type.BUG, Type.POISON, 90, 50, false),
  new PokemonSpecies(Species.CROBAT, 2, false, false, false, Type.POISON, Type.FLYING, 90, 50, false),
  new PokemonSpecies(Species.CHINCHOU, 2, false, false, false, Type.WATER, Type.ELECTRIC, 190, 50, false),
  new PokemonSpecies(Species.LANTURN, 2, false, false, false, Type.WATER, Type.ELECTRIC, 75, 50, false),
  new PokemonSpecies(Species.PICHU, 2, false, false, false, Type.ELECTRIC, null, 190, 50, false, false,
		 new PokemonForm("Normal", "", Type.ELECTRIC, null, 190),
		 new PokemonForm("Spiky-Eared", "spiky", Type.ELECTRIC, null, 190)),
  new PokemonSpecies(Species.CLEFFA, 2, false, false, false, Type.FAIRY, null, 150, 25, false),
  new PokemonSpecies(Species.IGGLYBUFF, 2, false, false, false, Type.NORMAL, Type.FAIRY, 170, 25, false),
  new PokemonSpecies(Species.TOGEPI, 2, false, false, false, Type.FAIRY, null, 190, 87.5, false),
  new PokemonSpecies(Species.TOGETIC, 2, false, false, false, Type.FAIRY, Type.FLYING, 75, 87.5, false),
  new PokemonSpecies(Species.NATU, 2, false, false, false, Type.PSYCHIC, Type.FLYING, 190, 50, false),
  new PokemonSpecies(Species.XATU, 2, false, false, false, Type.PSYCHIC, Type.FLYING, 75, 50, true),
  new PokemonSpecies(Species.MAREEP, 2, false, false, false, Type.ELECTRIC, null, 235, 50, false),
  new PokemonSpecies(Species.FLAAFFY, 2, false, false, false, Type.ELECTRIC, null, 120, 50, false),
  new PokemonSpecies(Species.AMPHAROS, 2, false, false, false, Type.ELECTRIC, null, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.ELECTRIC, null, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.ELECTRIC, Type.DRAGON, 45)),
  new PokemonSpecies(Species.BELLOSSOM, 2, false, false, false, Type.GRASS, null, 45, 50, false),
  new PokemonSpecies(Species.MARILL, 2, false, false, false, Type.WATER, Type.FAIRY, 190, 50, false),
  new PokemonSpecies(Species.AZUMARILL, 2, false, false, false, Type.WATER, Type.FAIRY, 75, 50, false),
  new PokemonSpecies(Species.SUDOWOODO, 2, false, false, false, Type.ROCK, null, 65, 50, true),
  new PokemonSpecies(Species.POLITOED, 2, false, false, false, Type.WATER, null, 45, 50, true),
  new PokemonSpecies(Species.HOPPIP, 2, false, false, false, Type.GRASS, Type.FLYING, 255, 50, false),
  new PokemonSpecies(Species.SKIPLOOM, 2, false, false, false, Type.GRASS, Type.FLYING, 120, 50, false),
  new PokemonSpecies(Species.JUMPLUFF, 2, false, false, false, Type.GRASS, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.AIPOM, 2, false, false, false, Type.NORMAL, null, 45, 50, true),
  new PokemonSpecies(Species.SUNKERN, 2, false, false, false, Type.GRASS, null, 235, 50, false),
  new PokemonSpecies(Species.SUNFLORA, 2, false, false, false, Type.GRASS, null, 120, 50, false),
  new PokemonSpecies(Species.YANMA, 2, false, false, false, Type.BUG, Type.FLYING, 75, 50, false),
  new PokemonSpecies(Species.WOOPER, 2, false, false, false, Type.WATER, Type.GROUND, 255, 50, true),
  new PokemonSpecies(Species.QUAGSIRE, 2, false, false, false, Type.WATER, Type.GROUND, 90, 50, true),
  new PokemonSpecies(Species.ESPEON, 2, false, false, false, Type.PSYCHIC, null, 45, 87.5, false),
  new PokemonSpecies(Species.UMBREON, 2, false, false, false, Type.DARK, null, 45, 87.5, false),
  new PokemonSpecies(Species.MURKROW, 2, false, false, false, Type.DARK, Type.FLYING, 30, 50, true),
  new PokemonSpecies(Species.SLOWKING, 2, false, false, false, Type.WATER, Type.PSYCHIC, 70, 50, false),
  new PokemonSpecies(Species.MISDREAVUS, 2, false, false, false, Type.GHOST, null, 45, 50, false),
  new PokemonSpecies(Species.UNOWN, 2, false, false, false, Type.PSYCHIC, null, 225, null, false, false,
		 new PokemonForm("A", "a", Type.PSYCHIC, null, 225),
		 new PokemonForm("B", "b", Type.PSYCHIC, null, 225),
		 new PokemonForm("C", "c", Type.PSYCHIC, null, 225),
		 new PokemonForm("D", "d", Type.PSYCHIC, null, 225),
		 new PokemonForm("E", "e", Type.PSYCHIC, null, 225),
		 new PokemonForm("F", "f", Type.PSYCHIC, null, 225),
		 new PokemonForm("G", "g", Type.PSYCHIC, null, 225),
		 new PokemonForm("H", "h", Type.PSYCHIC, null, 225),
		 new PokemonForm("I", "i", Type.PSYCHIC, null, 225),
		 new PokemonForm("J", "j", Type.PSYCHIC, null, 225),
		 new PokemonForm("K", "k", Type.PSYCHIC, null, 225),
		 new PokemonForm("L", "l", Type.PSYCHIC, null, 225),
		 new PokemonForm("M", "m", Type.PSYCHIC, null, 225),
		 new PokemonForm("N", "n", Type.PSYCHIC, null, 225),
		 new PokemonForm("O", "o", Type.PSYCHIC, null, 225),
		 new PokemonForm("P", "p", Type.PSYCHIC, null, 225),
		 new PokemonForm("Q", "q", Type.PSYCHIC, null, 225),
		 new PokemonForm("R", "r", Type.PSYCHIC, null, 225),
		 new PokemonForm("S", "s", Type.PSYCHIC, null, 225),
		 new PokemonForm("T", "t", Type.PSYCHIC, null, 225),
		 new PokemonForm("U", "u", Type.PSYCHIC, null, 225),
		 new PokemonForm("V", "v", Type.PSYCHIC, null, 225),
		 new PokemonForm("W", "w", Type.PSYCHIC, null, 225),
		 new PokemonForm("X", "x", Type.PSYCHIC, null, 225),
		 new PokemonForm("Y", "y", Type.PSYCHIC, null, 225),
		 new PokemonForm("Z", "z", Type.PSYCHIC, null, 225),
		 new PokemonForm("!", "exclamation", Type.PSYCHIC, null, 225),
		 new PokemonForm("?", "question", Type.PSYCHIC, null, 225)),
  new PokemonSpecies(Species.WOBBUFFET, 2, false, false, false, Type.PSYCHIC, null, 45, 50, true),
  new PokemonSpecies(Species.GIRAFARIG, 2, false, false, false, Type.NORMAL, Type.PSYCHIC, 60, 50, true),
  new PokemonSpecies(Species.PINECO, 2, false, false, false, Type.BUG, null, 190, 50, false),
  new PokemonSpecies(Species.FORRETRESS, 2, false, false, false, Type.BUG, Type.STEEL, 75, 50, false),
  new PokemonSpecies(Species.DUNSPARCE, 2, false, false, false, Type.NORMAL, null, 190, 50, false),
  new PokemonSpecies(Species.GLIGAR, 2, false, false, false, Type.GROUND, Type.FLYING, 60, 50, true),
  new PokemonSpecies(Species.STEELIX, 2, false, false, false, Type.STEEL, Type.GROUND, 25, 50, true, true,
		 new PokemonForm("Normal", "", Type.STEEL, Type.GROUND, 25, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.STEEL, Type.GROUND, 25, true)),
  new PokemonSpecies(Species.SNUBBULL, 2, false, false, false, Type.FAIRY, null, 190, 25, false),
  new PokemonSpecies(Species.GRANBULL, 2, false, false, false, Type.FAIRY, null, 75, 25, false),
  new PokemonSpecies(Species.QWILFISH, 2, false, false, false, Type.WATER, Type.POISON, 45, 50, false),
  new PokemonSpecies(Species.SCIZOR, 2, false, false, false, Type.BUG, Type.STEEL, 25, 50, true, true,
		 new PokemonForm("Normal", "", Type.BUG, Type.STEEL, 25, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.BUG, Type.STEEL, 25, true)),
  new PokemonSpecies(Species.SHUCKLE, 2, false, false, false, Type.BUG, Type.ROCK, 190, 50, false),
  new PokemonSpecies(Species.HERACROSS, 2, false, false, false, Type.BUG, Type.FIGHTING, 45, 50, true, true,
		 new PokemonForm("Normal", "", Type.BUG, Type.FIGHTING, 45, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.BUG, Type.FIGHTING, 45, true)),
  new PokemonSpecies(Species.SNEASEL, 2, false, false, false, Type.DARK, Type.ICE, 60, 50, true),
  new PokemonSpecies(Species.TEDDIURSA, 2, false, false, false, Type.NORMAL, null, 120, 50, false),
  new PokemonSpecies(Species.URSARING, 2, false, false, false, Type.NORMAL, null, 60, 50, true),
  new PokemonSpecies(Species.SLUGMA, 2, false, false, false, Type.FIRE, null, 190, 50, false),
  new PokemonSpecies(Species.MAGCARGO, 2, false, false, false, Type.FIRE, Type.ROCK, 75, 50, false),
  new PokemonSpecies(Species.SWINUB, 2, false, false, false, Type.ICE, Type.GROUND, 225, 50, false),
  new PokemonSpecies(Species.PILOSWINE, 2, false, false, false, Type.ICE, Type.GROUND, 75, 50, true),
  new PokemonSpecies(Species.CORSOLA, 2, false, false, false, Type.WATER, Type.ROCK, 60, 25, false),
  new PokemonSpecies(Species.REMORAID, 2, false, false, false, Type.WATER, null, 190, 50, false),
  new PokemonSpecies(Species.OCTILLERY, 2, false, false, false, Type.WATER, null, 75, 50, true),
  new PokemonSpecies(Species.DELIBIRD, 2, false, false, false, Type.ICE, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.MANTINE, 2, false, false, false, Type.WATER, Type.FLYING, 25, 50, false),
  new PokemonSpecies(Species.SKARMORY, 2, false, false, false, Type.STEEL, Type.FLYING, 25, 50, false),
  new PokemonSpecies(Species.HOUNDOUR, 2, false, false, false, Type.DARK, Type.FIRE, 120, 50, false),
  new PokemonSpecies(Species.HOUNDOOM, 2, false, false, false, Type.DARK, Type.FIRE, 45, 50, true, true,
		 new PokemonForm("Normal", "", Type.DARK, Type.FIRE, 45, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DARK, Type.FIRE, 45, true)),
  new PokemonSpecies(Species.KINGDRA, 2, false, false, false, Type.WATER, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.PHANPY, 2, false, false, false, Type.GROUND, null, 120, 50, false),
  new PokemonSpecies(Species.DONPHAN, 2, false, false, false, Type.GROUND, null, 60, 50, true),
  new PokemonSpecies(Species.PORYGON2, 2, false, false, false, Type.NORMAL, null, 45, null, false),
  new PokemonSpecies(Species.STANTLER, 2, false, false, false, Type.NORMAL, null, 45, 50, false),
  new PokemonSpecies(Species.SMEARGLE, 2, false, false, false, Type.NORMAL, null, 45, 50, false),
  new PokemonSpecies(Species.TYROGUE, 2, false, false, false, Type.FIGHTING, null, 75, 100, false),
  new PokemonSpecies(Species.HITMONTOP, 2, false, false, false, Type.FIGHTING, null, 45, 100, false),
  new PokemonSpecies(Species.SMOOCHUM, 2, false, false, false, Type.ICE, Type.PSYCHIC, 45, 0, false),
  new PokemonSpecies(Species.ELEKID, 2, false, false, false, Type.ELECTRIC, null, 45, 75, false),
  new PokemonSpecies(Species.MAGBY, 2, false, false, false, Type.FIRE, null, 45, 75, false),
  new PokemonSpecies(Species.MILTANK, 2, false, false, false, Type.NORMAL, null, 45, 0, false),
  new PokemonSpecies(Species.BLISSEY, 2, false, false, false, Type.NORMAL, null, 30, 0, false),
  new PokemonSpecies(Species.RAIKOU, 2, true, false, false, Type.ELECTRIC, null, 3, null, false),
  new PokemonSpecies(Species.ENTEI, 2, true, false, false, Type.FIRE, null, 3, null, false),
  new PokemonSpecies(Species.SUICUNE, 2, true, false, false, Type.WATER, null, 3, null, false),
  new PokemonSpecies(Species.LARVITAR, 2, false, false, false, Type.ROCK, Type.GROUND, 45, 50, false),
  new PokemonSpecies(Species.PUPITAR, 2, false, false, false, Type.ROCK, Type.GROUND, 45, 50, false),
  new PokemonSpecies(Species.TYRANITAR, 2, false, false, false, Type.ROCK, Type.DARK, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.ROCK, Type.DARK, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.ROCK, Type.DARK, 45)),
  new PokemonSpecies(Species.LUGIA, 2, false, true, false, Type.PSYCHIC, Type.FLYING, 3, null, false),
  new PokemonSpecies(Species.HO_OH, 2, false, true, false, Type.FIRE, Type.FLYING, 3, null, false),
  new PokemonSpecies(Species.CELEBI, 2, false, false, true, Type.PSYCHIC, Type.GRASS, 45, null, false),
  new PokemonSpecies(Species.TREECKO, 3, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.GROVYLE, 3, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.SCEPTILE, 3, false, false, false, Type.GRASS, null, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.GRASS, null, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.GRASS, Type.DRAGON, 45)),
  new PokemonSpecies(Species.TORCHIC, 3, false, false, false, Type.FIRE, null, 45, 87.5, true),
  new PokemonSpecies(Species.COMBUSKEN, 3, false, false, false, Type.FIRE, Type.FIGHTING, 45, 87.5, true),
  new PokemonSpecies(Species.BLAZIKEN, 3, false, false, false, Type.FIRE, Type.FIGHTING, 45, 87.5, true, true,
		 new PokemonForm("Normal", "", Type.FIRE, Type.FIGHTING, 45, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.FIRE, Type.FIGHTING, 45, true)),
  new PokemonSpecies(Species.MUDKIP, 3, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.MARSHTOMP, 3, false, false, false, Type.WATER, Type.GROUND, 45, 87.5, false),
  new PokemonSpecies(Species.SWAMPERT, 3, false, false, false, Type.WATER, Type.GROUND, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.WATER, Type.GROUND, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.WATER, Type.GROUND, 45)),
  new PokemonSpecies(Species.POOCHYENA, 3, false, false, false, Type.DARK, null, 255, 50, false),
  new PokemonSpecies(Species.MIGHTYENA, 3, false, false, false, Type.DARK, null, 127, 50, false),
  new PokemonSpecies(Species.ZIGZAGOON, 3, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.LINOONE, 3, false, false, false, Type.NORMAL, null, 90, 50, false),
  new PokemonSpecies(Species.WURMPLE, 3, false, false, false, Type.BUG, null, 255, 50, false),
  new PokemonSpecies(Species.SILCOON, 3, false, false, false, Type.BUG, null, 120, 50, false),
  new PokemonSpecies(Species.BEAUTIFLY, 3, false, false, false, Type.BUG, Type.FLYING, 45, 50, true),
  new PokemonSpecies(Species.CASCOON, 3, false, false, false, Type.BUG, null, 120, 50, false),
  new PokemonSpecies(Species.DUSTOX, 3, false, false, false, Type.BUG, Type.POISON, 45, 50, true),
  new PokemonSpecies(Species.LOTAD, 3, false, false, false, Type.WATER, Type.GRASS, 255, 50, false),
  new PokemonSpecies(Species.LOMBRE, 3, false, false, false, Type.WATER, Type.GRASS, 120, 50, false),
  new PokemonSpecies(Species.LUDICOLO, 3, false, false, false, Type.WATER, Type.GRASS, 45, 50, true),
  new PokemonSpecies(Species.SEEDOT, 3, false, false, false, Type.GRASS, null, 255, 50, false),
  new PokemonSpecies(Species.NUZLEAF, 3, false, false, false, Type.GRASS, Type.DARK, 120, 50, true),
  new PokemonSpecies(Species.SHIFTRY, 3, false, false, false, Type.GRASS, Type.DARK, 45, 50, true),
  new PokemonSpecies(Species.TAILLOW, 3, false, false, false, Type.NORMAL, Type.FLYING, 200, 50, false),
  new PokemonSpecies(Species.SWELLOW, 3, false, false, false, Type.NORMAL, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.WINGULL, 3, false, false, false, Type.WATER, Type.FLYING, 190, 50, false),
  new PokemonSpecies(Species.PELIPPER, 3, false, false, false, Type.WATER, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.RALTS, 3, false, false, false, Type.PSYCHIC, Type.FAIRY, 235, 50, false),
  new PokemonSpecies(Species.KIRLIA, 3, false, false, false, Type.PSYCHIC, Type.FAIRY, 120, 50, false),
  new PokemonSpecies(Species.GARDEVOIR, 3, false, false, false, Type.PSYCHIC, Type.FAIRY, 45, 0, false, true,
		 new PokemonForm("Normal", "", Type.PSYCHIC, Type.FAIRY, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.PSYCHIC, Type.FAIRY, 45)),
  new PokemonSpecies(Species.SURSKIT, 3, false, false, false, Type.BUG, Type.WATER, 200, 50, false),
  new PokemonSpecies(Species.MASQUERAIN, 3, false, false, false, Type.BUG, Type.FLYING, 75, 50, false),
  new PokemonSpecies(Species.SHROOMISH, 3, false, false, false, Type.GRASS, null, 255, 50, false),
  new PokemonSpecies(Species.BRELOOM, 3, false, false, false, Type.GRASS, Type.FIGHTING, 90, 50, false),
  new PokemonSpecies(Species.SLAKOTH, 3, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.VIGOROTH, 3, false, false, false, Type.NORMAL, null, 120, 50, false),
  new PokemonSpecies(Species.SLAKING, 3, false, false, false, Type.NORMAL, null, 45, 50, false),
  new PokemonSpecies(Species.NINCADA, 3, false, false, false, Type.BUG, Type.GROUND, 255, 50, false),
  new PokemonSpecies(Species.NINJASK, 3, false, false, false, Type.BUG, Type.FLYING, 120, 50, false),
  new PokemonSpecies(Species.SHEDINJA, 3, false, false, false, Type.BUG, Type.GHOST, 45, null, false),
  new PokemonSpecies(Species.WHISMUR, 3, false, false, false, Type.NORMAL, null, 190, 50, false),
  new PokemonSpecies(Species.LOUDRED, 3, false, false, false, Type.NORMAL, null, 120, 50, false),
  new PokemonSpecies(Species.EXPLOUD, 3, false, false, false, Type.NORMAL, null, 45, 50, false),
  new PokemonSpecies(Species.MAKUHITA, 3, false, false, false, Type.FIGHTING, null, 180, 75, false),
  new PokemonSpecies(Species.HARIYAMA, 3, false, false, false, Type.FIGHTING, null, 200, 75, false),
  new PokemonSpecies(Species.AZURILL, 3, false, false, false, Type.NORMAL, Type.FAIRY, 150, 25, false),
  new PokemonSpecies(Species.NOSEPASS, 3, false, false, false, Type.ROCK, null, 255, 50, false),
  new PokemonSpecies(Species.SKITTY, 3, false, false, false, Type.NORMAL, null, 255, 25, false),
  new PokemonSpecies(Species.DELCATTY, 3, false, false, false, Type.NORMAL, null, 60, 25, false),
  new PokemonSpecies(Species.SABLEYE, 3, false, false, false, Type.DARK, Type.GHOST, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.DARK, Type.GHOST, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DARK, Type.GHOST, 45)),
  new PokemonSpecies(Species.MAWILE, 3, false, false, false, Type.STEEL, Type.FAIRY, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.STEEL, Type.FAIRY, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.STEEL, Type.FAIRY, 45)),
  new PokemonSpecies(Species.ARON, 3, false, false, false, Type.STEEL, Type.ROCK, 180, 50, false),
  new PokemonSpecies(Species.LAIRON, 3, false, false, false, Type.STEEL, Type.ROCK, 90, 50, false),
  new PokemonSpecies(Species.AGGRON, 3, false, false, false, Type.STEEL, Type.ROCK, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.STEEL, Type.ROCK, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.STEEL, null, 45)),
  new PokemonSpecies(Species.MEDITITE, 3, false, false, false, Type.FIGHTING, Type.PSYCHIC, 180, 50, true),
  new PokemonSpecies(Species.MEDICHAM, 3, false, false, false, Type.FIGHTING, Type.PSYCHIC, 90, 50, true, true,
		 new PokemonForm("Normal", "", Type.FIGHTING, Type.PSYCHIC, 90, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.FIGHTING, Type.PSYCHIC, 90, true)),
  new PokemonSpecies(Species.ELECTRIKE, 3, false, false, false, Type.ELECTRIC, null, 120, 50, false),
  new PokemonSpecies(Species.MANECTRIC, 3, false, false, false, Type.ELECTRIC, null, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.ELECTRIC, null, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.ELECTRIC, null, 45)),
  new PokemonSpecies(Species.PLUSLE, 3, false, false, false, Type.ELECTRIC, null, 200, 50, false),
  new PokemonSpecies(Species.MINUN, 3, false, false, false, Type.ELECTRIC, null, 200, 50, false),
  new PokemonSpecies(Species.VOLBEAT, 3, false, false, false, Type.BUG, null, 150, 100, false),
  new PokemonSpecies(Species.ILLUMISE, 3, false, false, false, Type.BUG, null, 150, 0, false),
  new PokemonSpecies(Species.ROSELIA, 3, false, false, false, Type.GRASS, Type.POISON, 150, 50, true),
  new PokemonSpecies(Species.GULPIN, 3, false, false, false, Type.POISON, null, 225, 50, true),
  new PokemonSpecies(Species.SWALOT, 3, false, false, false, Type.POISON, null, 75, 50, true),
  new PokemonSpecies(Species.CARVANHA, 3, false, false, false, Type.WATER, Type.DARK, 225, 50, false),
  new PokemonSpecies(Species.SHARPEDO, 3, false, false, false, Type.WATER, Type.DARK, 60, 50, false, true,
		 new PokemonForm("Normal", "", Type.WATER, Type.DARK, 60),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.WATER, Type.DARK, 60)),
  new PokemonSpecies(Species.WAILMER, 3, false, false, false, Type.WATER, null, 125, 50, false),
  new PokemonSpecies(Species.WAILORD, 3, false, false, false, Type.WATER, null, 60, 50, false),
  new PokemonSpecies(Species.NUMEL, 3, false, false, false, Type.FIRE, Type.GROUND, 255, 50, true),
  new PokemonSpecies(Species.CAMERUPT, 3, false, false, false, Type.FIRE, Type.GROUND, 150, 50, true, true,
		 new PokemonForm("Normal", "", Type.FIRE, Type.GROUND, 150, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.FIRE, Type.GROUND, 150)),
  new PokemonSpecies(Species.TORKOAL, 3, false, false, false, Type.FIRE, null, 90, 50, false),
  new PokemonSpecies(Species.SPOINK, 3, false, false, false, Type.PSYCHIC, null, 255, 50, false),
  new PokemonSpecies(Species.GRUMPIG, 3, false, false, false, Type.PSYCHIC, null, 60, 50, false),
  new PokemonSpecies(Species.SPINDA, 3, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.TRAPINCH, 3, false, false, false, Type.GROUND, null, 255, 50, false),
  new PokemonSpecies(Species.VIBRAVA, 3, false, false, false, Type.GROUND, Type.DRAGON, 120, 50, false),
  new PokemonSpecies(Species.FLYGON, 3, false, false, false, Type.GROUND, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.CACNEA, 3, false, false, false, Type.GRASS, null, 190, 50, false),
  new PokemonSpecies(Species.CACTURNE, 3, false, false, false, Type.GRASS, Type.DARK, 60, 50, true),
  new PokemonSpecies(Species.SWABLU, 3, false, false, false, Type.NORMAL, Type.FLYING, 255, 50, false),
  new PokemonSpecies(Species.ALTARIA, 3, false, false, false, Type.DRAGON, Type.FLYING, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.DRAGON, Type.FLYING, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DRAGON, Type.FAIRY, 45)),
  new PokemonSpecies(Species.ZANGOOSE, 3, false, false, false, Type.NORMAL, null, 90, 50, false),
  new PokemonSpecies(Species.SEVIPER, 3, false, false, false, Type.POISON, null, 90, 50, false),
  new PokemonSpecies(Species.LUNATONE, 3, false, false, false, Type.ROCK, Type.PSYCHIC, 45, null, false),
  new PokemonSpecies(Species.SOLROCK, 3, false, false, false, Type.ROCK, Type.PSYCHIC, 45, null, false),
  new PokemonSpecies(Species.BARBOACH, 3, false, false, false, Type.WATER, Type.GROUND, 190, 50, false),
  new PokemonSpecies(Species.WHISCASH, 3, false, false, false, Type.WATER, Type.GROUND, 75, 50, false),
  new PokemonSpecies(Species.CORPHISH, 3, false, false, false, Type.WATER, null, 205, 50, false),
  new PokemonSpecies(Species.CRAWDAUNT, 3, false, false, false, Type.WATER, Type.DARK, 155, 50, false),
  new PokemonSpecies(Species.BALTOY, 3, false, false, false, Type.GROUND, Type.PSYCHIC, 255, null, false),
  new PokemonSpecies(Species.CLAYDOL, 3, false, false, false, Type.GROUND, Type.PSYCHIC, 90, null, false),
  new PokemonSpecies(Species.LILEEP, 3, false, false, false, Type.ROCK, Type.GRASS, 45, 87.5, false),
  new PokemonSpecies(Species.CRADILY, 3, false, false, false, Type.ROCK, Type.GRASS, 45, 87.5, false),
  new PokemonSpecies(Species.ANORITH, 3, false, false, false, Type.ROCK, Type.BUG, 45, 87.5, false),
  new PokemonSpecies(Species.ARMALDO, 3, false, false, false, Type.ROCK, Type.BUG, 45, 87.5, false),
  new PokemonSpecies(Species.FEEBAS, 3, false, false, false, Type.WATER, null, 255, 50, false),
  new PokemonSpecies(Species.MILOTIC, 3, false, false, false, Type.WATER, null, 60, 50, true),
  new PokemonSpecies(Species.CASTFORM, 3, false, false, false, Type.NORMAL, null, 45, 50, false, true,
		 new PokemonForm("Normal Form", "", Type.NORMAL, null, 45),
		 new PokemonForm("Sunny Form", "sunny", Type.FIRE, null, 45),
		 new PokemonForm("Rainy Form", "rainy", Type.WATER, null, 45),
		 new PokemonForm("Snowy Form", "snowy", Type.ICE, null, 45)),
  new PokemonSpecies(Species.KECLEON, 3, false, false, false, Type.NORMAL, null, 200, 50, false),
  new PokemonSpecies(Species.SHUPPET, 3, false, false, false, Type.GHOST, null, 225, 50, false),
  new PokemonSpecies(Species.BANETTE, 3, false, false, false, Type.GHOST, null, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.GHOST, null, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.GHOST, null, 45)),
  new PokemonSpecies(Species.DUSKULL, 3, false, false, false, Type.GHOST, null, 190, 50, false),
  new PokemonSpecies(Species.DUSCLOPS, 3, false, false, false, Type.GHOST, null, 90, 50, false),
  new PokemonSpecies(Species.TROPIUS, 3, false, false, false, Type.GRASS, Type.FLYING, 200, 50, false),
  new PokemonSpecies(Species.CHIMECHO, 3, false, false, false, Type.PSYCHIC, null, 45, 50, false),
  new PokemonSpecies(Species.ABSOL, 3, false, false, false, Type.DARK, null, 30, 50, false, true,
		 new PokemonForm("Normal", "", Type.DARK, null, 30),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DARK, null, 30)),
  new PokemonSpecies(Species.WYNAUT, 3, false, false, false, Type.PSYCHIC, null, 125, 50, false),
  new PokemonSpecies(Species.SNORUNT, 3, false, false, false, Type.ICE, null, 190, 50, false),
  new PokemonSpecies(Species.GLALIE, 3, false, false, false, Type.ICE, null, 75, 50, false, true,
		 new PokemonForm("Normal", "", Type.ICE, null, 75),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.ICE, null, 75)),
  new PokemonSpecies(Species.SPHEAL, 3, false, false, false, Type.ICE, Type.WATER, 255, 50, false),
  new PokemonSpecies(Species.SEALEO, 3, false, false, false, Type.ICE, Type.WATER, 120, 50, false),
  new PokemonSpecies(Species.WALREIN, 3, false, false, false, Type.ICE, Type.WATER, 45, 50, false),
  new PokemonSpecies(Species.CLAMPERL, 3, false, false, false, Type.WATER, null, 255, 50, false),
  new PokemonSpecies(Species.HUNTAIL, 3, false, false, false, Type.WATER, null, 60, 50, false),
  new PokemonSpecies(Species.GOREBYSS, 3, false, false, false, Type.WATER, null, 60, 50, false),
  new PokemonSpecies(Species.RELICANTH, 3, false, false, false, Type.WATER, Type.ROCK, 25, 87.5, true),
  new PokemonSpecies(Species.LUVDISC, 3, false, false, false, Type.WATER, null, 225, 25, false),
  new PokemonSpecies(Species.BAGON, 3, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.SHELGON, 3, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.SALAMENCE, 3, false, false, false, Type.DRAGON, Type.FLYING, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.DRAGON, Type.FLYING, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DRAGON, Type.FLYING, 45)),
  new PokemonSpecies(Species.BELDUM, 3, false, false, false, Type.STEEL, Type.PSYCHIC, 3, null, false),
  new PokemonSpecies(Species.METANG, 3, false, false, false, Type.STEEL, Type.PSYCHIC, 3, null, false),
  new PokemonSpecies(Species.METAGROSS, 3, false, false, false, Type.STEEL, Type.PSYCHIC, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.STEEL, Type.PSYCHIC, 3),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.STEEL, Type.PSYCHIC, 3)),
  new PokemonSpecies(Species.REGIROCK, 3, true, false, false, Type.ROCK, null, 3, null, false),
  new PokemonSpecies(Species.REGICE, 3, true, false, false, Type.ICE, null, 3, null, false),
  new PokemonSpecies(Species.REGISTEEL, 3, true, false, false, Type.STEEL, null, 3, null, false),
  new PokemonSpecies(Species.LATIAS, 3, true, false, false, Type.DRAGON, Type.PSYCHIC, 3, 0, false, true,
		 new PokemonForm("Normal", "", Type.DRAGON, Type.PSYCHIC, 3),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DRAGON, Type.PSYCHIC, 3)),
  new PokemonSpecies(Species.LATIOS, 3, true, false, false, Type.DRAGON, Type.PSYCHIC, 3, 100, false, true,
		 new PokemonForm("Normal", "", Type.DRAGON, Type.PSYCHIC, 3),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DRAGON, Type.PSYCHIC, 3)),
  new PokemonSpecies(Species.KYOGRE, 3, false, true, false, Type.WATER, null, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.WATER, null, 3),
		 new PokemonForm("Primal", "primal", Type.WATER, null, 3)),
  new PokemonSpecies(Species.GROUDON, 3, false, true, false, Type.GROUND, null, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.GROUND, null, 3),
		 new PokemonForm("Primal", "primal", Type.GROUND, Type.FIRE, 3)),
  new PokemonSpecies(Species.RAYQUAZA, 3, false, true, false, Type.DRAGON, Type.FLYING, 45, null, false, true,
		 new PokemonForm("Normal", "", Type.DRAGON, Type.FLYING, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DRAGON, Type.FLYING, 45)),
  new PokemonSpecies(Species.JIRACHI, 3, false, false, true, Type.STEEL, Type.PSYCHIC, 3, null, false),
  new PokemonSpecies(Species.DEOXYS, 3, false, false, true, Type.PSYCHIC, null, 3, null, false, true,
		 new PokemonForm("Normal Forme", "normal", Type.PSYCHIC, null, 3, false, ""),
		 new PokemonForm("Attack Forme", "attack", Type.PSYCHIC, null, 3),
		 new PokemonForm("Defense Forme", "defense", Type.PSYCHIC, null, 3),
		 new PokemonForm("Speed Forme", "speed", Type.PSYCHIC, null, 3)),
  new PokemonSpecies(Species.TURTWIG, 4, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.GROTLE, 4, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.TORTERRA, 4, false, false, false, Type.GRASS, Type.GROUND, 45, 87.5, false),
  new PokemonSpecies(Species.CHIMCHAR, 4, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.MONFERNO, 4, false, false, false, Type.FIRE, Type.FIGHTING, 45, 87.5, false),
  new PokemonSpecies(Species.INFERNAPE, 4, false, false, false, Type.FIRE, Type.FIGHTING, 45, 87.5, false),
  new PokemonSpecies(Species.PIPLUP, 4, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.PRINPLUP, 4, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.EMPOLEON, 4, false, false, false, Type.WATER, Type.STEEL, 45, 87.5, false),
  new PokemonSpecies(Species.STARLY, 4, false, false, false, Type.NORMAL, Type.FLYING, 255, 50, true),
  new PokemonSpecies(Species.STARAVIA, 4, false, false, false, Type.NORMAL, Type.FLYING, 120, 50, true),
  new PokemonSpecies(Species.STARAPTOR, 4, false, false, false, Type.NORMAL, Type.FLYING, 45, 50, true),
  new PokemonSpecies(Species.BIDOOF, 4, false, false, false, Type.NORMAL, null, 255, 50, true),
  new PokemonSpecies(Species.BIBAREL, 4, false, false, false, Type.NORMAL, Type.WATER, 127, 50, true),
  new PokemonSpecies(Species.KRICKETOT, 4, false, false, false, Type.BUG, null, 255, 50, true),
  new PokemonSpecies(Species.KRICKETUNE, 4, false, false, false, Type.BUG, null, 45, 50, true),
  new PokemonSpecies(Species.SHINX, 4, false, false, false, Type.ELECTRIC, null, 235, 50, true),
  new PokemonSpecies(Species.LUXIO, 4, false, false, false, Type.ELECTRIC, null, 120, 50, true),
  new PokemonSpecies(Species.LUXRAY, 4, false, false, false, Type.ELECTRIC, null, 45, 50, true),
  new PokemonSpecies(Species.BUDEW, 4, false, false, false, Type.GRASS, Type.POISON, 255, 50, false),
  new PokemonSpecies(Species.ROSERADE, 4, false, false, false, Type.GRASS, Type.POISON, 75, 50, true),
  new PokemonSpecies(Species.CRANIDOS, 4, false, false, false, Type.ROCK, null, 45, 87.5, false),
  new PokemonSpecies(Species.RAMPARDOS, 4, false, false, false, Type.ROCK, null, 45, 87.5, false),
  new PokemonSpecies(Species.SHIELDON, 4, false, false, false, Type.ROCK, Type.STEEL, 45, 87.5, false),
  new PokemonSpecies(Species.BASTIODON, 4, false, false, false, Type.ROCK, Type.STEEL, 45, 87.5, false),
  new PokemonSpecies(Species.BURMY, 4, false, false, false, Type.BUG, null, 120, 50, false, true,
		 new PokemonForm("Plant Cloak", "plant", Type.BUG, null, 120),
		 new PokemonForm("Sandy Cloak", "sandy", Type.BUG, null, 120),
		 new PokemonForm("Trash Cloak", "trash", Type.BUG, null, 120)),
  new PokemonSpecies(Species.WORMADAM, 4, false, false, false, Type.BUG, Type.GRASS, 45, 0, false, false,
		 new PokemonForm("Plant Cloak", "plant", Type.BUG, Type.GRASS, 45),
		 new PokemonForm("Sandy Cloak", "sandy", Type.BUG, Type.GROUND, 45),
		 new PokemonForm("Trash Cloak", "trash", Type.BUG, Type.STEEL, 45)),
  new PokemonSpecies(Species.MOTHIM, 4, false, false, false, Type.BUG, Type.FLYING, 45, 100, false),
  new PokemonSpecies(Species.COMBEE, 4, false, false, false, Type.BUG, Type.FLYING, 120, 87.5, true),
  new PokemonSpecies(Species.VESPIQUEN, 4, false, false, false, Type.BUG, Type.FLYING, 45, 0, false),
  new PokemonSpecies(Species.PACHIRISU, 4, false, false, false, Type.ELECTRIC, null, 200, 50, true),
  new PokemonSpecies(Species.BUIZEL, 4, false, false, false, Type.WATER, null, 190, 50, true),
  new PokemonSpecies(Species.FLOATZEL, 4, false, false, false, Type.WATER, null, 75, 50, true),
  new PokemonSpecies(Species.CHERUBI, 4, false, false, false, Type.GRASS, null, 190, 50, false),
  new PokemonSpecies(Species.CHERRIM, 4, false, false, false, Type.GRASS, null, 75, 50, false, true,
		 new PokemonForm("Overcast Form", "overcast", Type.GRASS, null, 75),
		 new PokemonForm("Sunshine Form", "sunshine", Type.GRASS, null, 75)),
  new PokemonSpecies(Species.SHELLOS, 4, false, false, false, Type.WATER, null, 190, 50, false, false,
		 new PokemonForm("East Sea", "east", Type.WATER, null, 190),
		 new PokemonForm("West Sea", "west", Type.WATER, null, 190)),
  new PokemonSpecies(Species.GASTRODON, 4, false, false, false, Type.WATER, Type.GROUND, 75, 50, false, false,
		 new PokemonForm("East Sea", "east", Type.WATER, Type.GROUND, 75),
		 new PokemonForm("West Sea", "west", Type.WATER, Type.GROUND, 75)),
  new PokemonSpecies(Species.AMBIPOM, 4, false, false, false, Type.NORMAL, null, 45, 50, true),
  new PokemonSpecies(Species.DRIFLOON, 4, false, false, false, Type.GHOST, Type.FLYING, 125, 50, false),
  new PokemonSpecies(Species.DRIFBLIM, 4, false, false, false, Type.GHOST, Type.FLYING, 60, 50, false),
  new PokemonSpecies(Species.BUNEARY, 4, false, false, false, Type.NORMAL, null, 190, 50, false),
  new PokemonSpecies(Species.LOPUNNY, 4, false, false, false, Type.NORMAL, null, 60, 50, false, true,
		 new PokemonForm("Normal", "", Type.NORMAL, null, 60),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.NORMAL, Type.FIGHTING, 60)),
  new PokemonSpecies(Species.MISMAGIUS, 4, false, false, false, Type.GHOST, null, 45, 50, false),
  new PokemonSpecies(Species.HONCHKROW, 4, false, false, false, Type.DARK, Type.FLYING, 30, 50, false),
  new PokemonSpecies(Species.GLAMEOW, 4, false, false, false, Type.NORMAL, null, 190, 25, false),
  new PokemonSpecies(Species.PURUGLY, 4, false, false, false, Type.NORMAL, null, 75, 25, false),
  new PokemonSpecies(Species.CHINGLING, 4, false, false, false, Type.PSYCHIC, null, 120, 50, false),
  new PokemonSpecies(Species.STUNKY, 4, false, false, false, Type.POISON, Type.DARK, 225, 50, false),
  new PokemonSpecies(Species.SKUNTANK, 4, false, false, false, Type.POISON, Type.DARK, 60, 50, false),
  new PokemonSpecies(Species.BRONZOR, 4, false, false, false, Type.STEEL, Type.PSYCHIC, 255, null, false),
  new PokemonSpecies(Species.BRONZONG, 4, false, false, false, Type.STEEL, Type.PSYCHIC, 90, null, false),
  new PokemonSpecies(Species.BONSLY, 4, false, false, false, Type.ROCK, null, 255, 50, false),
  new PokemonSpecies(Species.MIME_JR, 4, false, false, false, Type.PSYCHIC, Type.FAIRY, 145, 50, false),
  new PokemonSpecies(Species.HAPPINY, 4, false, false, false, Type.NORMAL, null, 130, 0, false),
  new PokemonSpecies(Species.CHATOT, 4, false, false, false, Type.NORMAL, Type.FLYING, 30, 50, false),
  new PokemonSpecies(Species.SPIRITOMB, 4, false, false, false, Type.GHOST, Type.DARK, 100, 50, false),
  new PokemonSpecies(Species.GIBLE, 4, false, false, false, Type.DRAGON, Type.GROUND, 45, 50, true),
  new PokemonSpecies(Species.GABITE, 4, false, false, false, Type.DRAGON, Type.GROUND, 45, 50, true),
  new PokemonSpecies(Species.GARCHOMP, 4, false, false, false, Type.DRAGON, Type.GROUND, 45, 50, true, true,
		 new PokemonForm("Normal", "", Type.DRAGON, Type.GROUND, 45, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.DRAGON, Type.GROUND, 45, true)),
  new PokemonSpecies(Species.MUNCHLAX, 4, false, false, false, Type.NORMAL, null, 50, 87.5, false),
  new PokemonSpecies(Species.RIOLU, 4, false, false, false, Type.FIGHTING, null, 75, 87.5, false),
  new PokemonSpecies(Species.LUCARIO, 4, false, false, false, Type.FIGHTING, Type.STEEL, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.FIGHTING, Type.STEEL, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.FIGHTING, Type.STEEL, 45)),
  new PokemonSpecies(Species.HIPPOPOTAS, 4, false, false, false, Type.GROUND, null, 140, 50, true),
  new PokemonSpecies(Species.HIPPOWDON, 4, false, false, false, Type.GROUND, null, 60, 50, true),
  new PokemonSpecies(Species.SKORUPI, 4, false, false, false, Type.POISON, Type.BUG, 120, 50, false),
  new PokemonSpecies(Species.DRAPION, 4, false, false, false, Type.POISON, Type.DARK, 45, 50, false),
  new PokemonSpecies(Species.CROAGUNK, 4, false, false, false, Type.POISON, Type.FIGHTING, 140, 50, true),
  new PokemonSpecies(Species.TOXICROAK, 4, false, false, false, Type.POISON, Type.FIGHTING, 75, 50, true),
  new PokemonSpecies(Species.CARNIVINE, 4, false, false, false, Type.GRASS, null, 200, 50, false),
  new PokemonSpecies(Species.FINNEON, 4, false, false, false, Type.WATER, null, 190, 50, true),
  new PokemonSpecies(Species.LUMINEON, 4, false, false, false, Type.WATER, null, 75, 50, true),
  new PokemonSpecies(Species.MANTYKE, 4, false, false, false, Type.WATER, Type.FLYING, 25, 50, false),
  new PokemonSpecies(Species.SNOVER, 4, false, false, false, Type.GRASS, Type.ICE, 120, 50, true),
  new PokemonSpecies(Species.ABOMASNOW, 4, false, false, false, Type.GRASS, Type.ICE, 60, 50, true, true,
		 new PokemonForm("Normal", "", Type.GRASS, Type.ICE, 60, true),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.GRASS, Type.ICE, 60, true)),
  new PokemonSpecies(Species.WEAVILE, 4, false, false, false, Type.DARK, Type.ICE, 45, 50, true),
  new PokemonSpecies(Species.MAGNEZONE, 4, false, false, false, Type.ELECTRIC, Type.STEEL, 30, null, false),
  new PokemonSpecies(Species.LICKILICKY, 4, false, false, false, Type.NORMAL, null, 30, 50, false),
  new PokemonSpecies(Species.RHYPERIOR, 4, false, false, false, Type.GROUND, Type.ROCK, 30, 50, true),
  new PokemonSpecies(Species.TANGROWTH, 4, false, false, false, Type.GRASS, null, 30, 50, true),
  new PokemonSpecies(Species.ELECTIVIRE, 4, false, false, false, Type.ELECTRIC, null, 30, 75, false),
  new PokemonSpecies(Species.MAGMORTAR, 4, false, false, false, Type.FIRE, null, 30, 75, false),
  new PokemonSpecies(Species.TOGEKISS, 4, false, false, false, Type.FAIRY, Type.FLYING, 30, 87.5, false),
  new PokemonSpecies(Species.YANMEGA, 4, false, false, false, Type.BUG, Type.FLYING, 30, 50, false),
  new PokemonSpecies(Species.LEAFEON, 4, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.GLACEON, 4, false, false, false, Type.ICE, null, 45, 87.5, false),
  new PokemonSpecies(Species.GLISCOR, 4, false, false, false, Type.GROUND, Type.FLYING, 30, 50, false),
  new PokemonSpecies(Species.MAMOSWINE, 4, false, false, false, Type.ICE, Type.GROUND, 50, 50, true),
  new PokemonSpecies(Species.PORYGON_Z, 4, false, false, false, Type.NORMAL, null, 30, null, false),
  new PokemonSpecies(Species.GALLADE, 4, false, false, false, Type.PSYCHIC, Type.FIGHTING, 45, 100, false, true,
		 new PokemonForm("Normal", "", Type.PSYCHIC, Type.FIGHTING, 45),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.PSYCHIC, Type.FIGHTING, 45)),
  new PokemonSpecies(Species.PROBOPASS, 4, false, false, false, Type.ROCK, Type.STEEL, 60, 50, false),
  new PokemonSpecies(Species.DUSKNOIR, 4, false, false, false, Type.GHOST, null, 45, 50, false),
  new PokemonSpecies(Species.FROSLASS, 4, false, false, false, Type.ICE, Type.GHOST, 75, 0, false),
  new PokemonSpecies(Species.ROTOM, 4, false, false, false, Type.ELECTRIC, Type.GHOST, 45, null, false, false,
		 new PokemonForm("Normal", "", Type.ELECTRIC, Type.GHOST, 45),
		 new PokemonForm("Heat", "heat", Type.ELECTRIC, Type.FIRE, 45),
		 new PokemonForm("Wash", "wash", Type.ELECTRIC, Type.WATER, 45),
		 new PokemonForm("Frost", "frost", Type.ELECTRIC, Type.ICE, 45),
		 new PokemonForm("Fan", "fan", Type.ELECTRIC, Type.FLYING, 45),
		 new PokemonForm("Mow", "mow", Type.ELECTRIC, Type.GRASS, 45)),
  new PokemonSpecies(Species.UXIE, 4, true, false, false, Type.PSYCHIC, null, 3, null, false),
  new PokemonSpecies(Species.MESPRIT, 4, true, false, false, Type.PSYCHIC, null, 3, null, false),
  new PokemonSpecies(Species.AZELF, 4, true, false, false, Type.PSYCHIC, null, 3, null, false),
  new PokemonSpecies(Species.DIALGA, 4, false, true, false, Type.STEEL, Type.DRAGON, 3, null, false, false,
		 new PokemonForm("Normal", "", Type.STEEL, Type.DRAGON, 3),
		 new PokemonForm("Origin Forme", "origin", Type.STEEL, Type.DRAGON, 3)),
  new PokemonSpecies(Species.PALKIA, 4, false, true, false, Type.WATER, Type.DRAGON, 3, null, false, false,
		 new PokemonForm("Normal", "", Type.WATER, Type.DRAGON, 3),
		 new PokemonForm("Origin Forme", "origin", Type.WATER, Type.DRAGON, 3)),
  new PokemonSpecies(Species.HEATRAN, 4, true, false, false, Type.FIRE, Type.STEEL, 3, 50, false),
  new PokemonSpecies(Species.REGIGIGAS, 4, false, true, false, Type.NORMAL, null, 3, null, false),
  new PokemonSpecies(Species.GIRATINA, 4, false, true, false, Type.GHOST, Type.DRAGON, 3, null, false, true,
		 new PokemonForm("Altered Forme", "altered", Type.GHOST, Type.DRAGON, 3),
		 new PokemonForm("Origin Forme", "origin", Type.GHOST, Type.DRAGON, 3)),
  new PokemonSpecies(Species.CRESSELIA, 4, true, false, false, Type.PSYCHIC, null, 3, 0, false),
  new PokemonSpecies(Species.PHIONE, 4, false, false, true, Type.WATER, null, 30, null, false),
  new PokemonSpecies(Species.MANAPHY, 4, false, false, true, Type.WATER, null, 3, null, false),
  new PokemonSpecies(Species.DARKRAI, 4, false, false, true, Type.DARK, null, 3, null, false),
  new PokemonSpecies(Species.SHAYMIN, 4, false, false, true, Type.GRASS, null, 45, null, false, true,
		 new PokemonForm("Land Forme", "land", Type.GRASS, null, 45),
		 new PokemonForm("Sky Forme", "sky", Type.GRASS, Type.FLYING, 45)),
  new PokemonSpecies(Species.ARCEUS, 4, false, false, true, Type.NORMAL, null, 3, null, false, true,
		 new PokemonForm("Normal", "normal", Type.NORMAL, null, 3),
		 new PokemonForm("Fighting", "fighting", Type.FIGHTING, null, 3),
		 new PokemonForm("Flying", "flying", Type.FLYING, null, 3),
		 new PokemonForm("Poison", "poison", Type.POISON, null, 3),
		 new PokemonForm("Ground", "ground", Type.GROUND, null, 3),
		 new PokemonForm("Rock", "rock", Type.ROCK, null, 3),
		 new PokemonForm("Bug", "bug", Type.BUG, null, 3),
		 new PokemonForm("Ghost", "ghost", Type.GHOST, null, 3),
		 new PokemonForm("Steel", "steel", Type.STEEL, null, 3),
		 new PokemonForm("Fire", "fire", Type.FIRE, null, 3),
		 new PokemonForm("Water", "water", Type.WATER, null, 3),
		 new PokemonForm("Grass", "grass", Type.GRASS, null, 3),
		 new PokemonForm("Electric", "electric", Type.ELECTRIC, null, 3),
		 new PokemonForm("Psychic", "psychic", Type.PSYCHIC, null, 3),
		 new PokemonForm("Ice", "ice", Type.ICE, null, 3),
		 new PokemonForm("Dragon", "dragon", Type.DRAGON, null, 3),
		 new PokemonForm("Dark", "dark", Type.DARK, null, 3),
		 new PokemonForm("Fairy", "fairy", Type.FAIRY, null, 3),
		 new PokemonForm("???", "unknown", Type.UNKNOWN, null, 3)),
  new PokemonSpecies(Species.VICTINI, 4, false, false, true, Type.PSYCHIC, Type.FIRE, 3, null, false),
  new PokemonSpecies(Species.SNIVY, 5, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.SERVINE, 5, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.SERPERIOR, 5, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.TEPIG, 5, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.PIGNITE, 5, false, false, false, Type.FIRE, Type.FIGHTING, 45, 87.5, false),
  new PokemonSpecies(Species.EMBOAR, 5, false, false, false, Type.FIRE, Type.FIGHTING, 45, 87.5, false),
  new PokemonSpecies(Species.OSHAWOTT, 5, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.DEWOTT, 5, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.SAMUROTT, 5, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.PATRAT, 5, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.WATCHOG, 5, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.LILLIPUP, 5, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.HERDIER, 5, false, false, false, Type.NORMAL, null, 120, 50, false),
  new PokemonSpecies(Species.STOUTLAND, 5, false, false, false, Type.NORMAL, null, 45, 50, false),
  new PokemonSpecies(Species.PURRLOIN, 5, false, false, false, Type.DARK, null, 255, 50, false),
  new PokemonSpecies(Species.LIEPARD, 5, false, false, false, Type.DARK, null, 90, 50, false),
  new PokemonSpecies(Species.PANSAGE, 5, false, false, false, Type.GRASS, null, 190, 87.5, false),
  new PokemonSpecies(Species.SIMISAGE, 5, false, false, false, Type.GRASS, null, 75, 87.5, false),
  new PokemonSpecies(Species.PANSEAR, 5, false, false, false, Type.FIRE, null, 190, 87.5, false),
  new PokemonSpecies(Species.SIMISEAR, 5, false, false, false, Type.FIRE, null, 75, 87.5, false),
  new PokemonSpecies(Species.PANPOUR, 5, false, false, false, Type.WATER, null, 190, 87.5, false),
  new PokemonSpecies(Species.SIMIPOUR, 5, false, false, false, Type.WATER, null, 75, 87.5, false),
  new PokemonSpecies(Species.MUNNA, 5, false, false, false, Type.PSYCHIC, null, 190, 50, false),
  new PokemonSpecies(Species.MUSHARNA, 5, false, false, false, Type.PSYCHIC, null, 75, 50, false),
  new PokemonSpecies(Species.PIDOVE, 5, false, false, false, Type.NORMAL, Type.FLYING, 255, 50, false),
  new PokemonSpecies(Species.TRANQUILL, 5, false, false, false, Type.NORMAL, Type.FLYING, 120, 50, false),
  new PokemonSpecies(Species.UNFEZANT, 5, false, false, false, Type.NORMAL, Type.FLYING, 45, 50, true),
  new PokemonSpecies(Species.BLITZLE, 5, false, false, false, Type.ELECTRIC, null, 190, 50, false),
  new PokemonSpecies(Species.ZEBSTRIKA, 5, false, false, false, Type.ELECTRIC, null, 75, 50, false),
  new PokemonSpecies(Species.ROGGENROLA, 5, false, false, false, Type.ROCK, null, 255, 50, false),
  new PokemonSpecies(Species.BOLDORE, 5, false, false, false, Type.ROCK, null, 120, 50, false),
  new PokemonSpecies(Species.GIGALITH, 5, false, false, false, Type.ROCK, null, 45, 50, false),
  new PokemonSpecies(Species.WOOBAT, 5, false, false, false, Type.PSYCHIC, Type.FLYING, 190, 50, false),
  new PokemonSpecies(Species.SWOOBAT, 5, false, false, false, Type.PSYCHIC, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.DRILBUR, 5, false, false, false, Type.GROUND, null, 120, 50, false),
  new PokemonSpecies(Species.EXCADRILL, 5, false, false, false, Type.GROUND, Type.STEEL, 60, 50, false),
  new PokemonSpecies(Species.AUDINO, 5, false, false, false, Type.NORMAL, null, 255, 50, false, true,
		 new PokemonForm("Normal", "", Type.NORMAL, null, 255),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.NORMAL, Type.FAIRY, 255)),
  new PokemonSpecies(Species.TIMBURR, 5, false, false, false, Type.FIGHTING, null, 180, 75, false),
  new PokemonSpecies(Species.GURDURR, 5, false, false, false, Type.FIGHTING, null, 90, 75, false),
  new PokemonSpecies(Species.CONKELDURR, 5, false, false, false, Type.FIGHTING, null, 45, 75, false),
  new PokemonSpecies(Species.TYMPOLE, 5, false, false, false, Type.WATER, null, 255, 50, false),
  new PokemonSpecies(Species.PALPITOAD, 5, false, false, false, Type.WATER, Type.GROUND, 120, 50, false),
  new PokemonSpecies(Species.SEISMITOAD, 5, false, false, false, Type.WATER, Type.GROUND, 45, 50, false),
  new PokemonSpecies(Species.THROH, 5, false, false, false, Type.FIGHTING, null, 45, 100, false),
  new PokemonSpecies(Species.SAWK, 5, false, false, false, Type.FIGHTING, null, 45, 100, false),
  new PokemonSpecies(Species.SEWADDLE, 5, false, false, false, Type.BUG, Type.GRASS, 255, 50, false),
  new PokemonSpecies(Species.SWADLOON, 5, false, false, false, Type.BUG, Type.GRASS, 120, 50, false),
  new PokemonSpecies(Species.LEAVANNY, 5, false, false, false, Type.BUG, Type.GRASS, 45, 50, false),
  new PokemonSpecies(Species.VENIPEDE, 5, false, false, false, Type.BUG, Type.POISON, 255, 50, false),
  new PokemonSpecies(Species.WHIRLIPEDE, 5, false, false, false, Type.BUG, Type.POISON, 120, 50, false),
  new PokemonSpecies(Species.SCOLIPEDE, 5, false, false, false, Type.BUG, Type.POISON, 45, 50, false),
  new PokemonSpecies(Species.COTTONEE, 5, false, false, false, Type.GRASS, Type.FAIRY, 190, 50, false),
  new PokemonSpecies(Species.WHIMSICOTT, 5, false, false, false, Type.GRASS, Type.FAIRY, 75, 50, false),
  new PokemonSpecies(Species.PETILIL, 5, false, false, false, Type.GRASS, null, 190, 0, false),
  new PokemonSpecies(Species.LILLIGANT, 5, false, false, false, Type.GRASS, null, 75, 0, false),
  new PokemonSpecies(Species.BASCULIN, 5, false, false, false, Type.WATER, null, 25, 50, false, false,
		 new PokemonForm("Red-Striped Form", "red-striped", Type.WATER, null, 25),
		 new PokemonForm("Blue-Striped Form", "blue-striped", Type.WATER, null, 25),
		 new PokemonForm("White-Striped Form", "white-striped", Type.WATER, null, 25)),
  new PokemonSpecies(Species.SANDILE, 5, false, false, false, Type.GROUND, Type.DARK, 180, 50, false),
  new PokemonSpecies(Species.KROKOROK, 5, false, false, false, Type.GROUND, Type.DARK, 90, 50, false),
  new PokemonSpecies(Species.KROOKODILE, 5, false, false, false, Type.GROUND, Type.DARK, 45, 50, false),
  new PokemonSpecies(Species.DARUMAKA, 5, false, false, false, Type.FIRE, null, 120, 50, false),
  new PokemonSpecies(Species.DARMANITAN, 5, false, false, false, Type.FIRE, null, 60, 50, false, true,
		 new PokemonForm("Standard Mode", "", Type.FIRE, null, 60),
		 new PokemonForm("Zen Mode", "zen", Type.FIRE, Type.PSYCHIC, 60)),
  new PokemonSpecies(Species.MARACTUS, 5, false, false, false, Type.GRASS, null, 255, 50, false),
  new PokemonSpecies(Species.DWEBBLE, 5, false, false, false, Type.BUG, Type.ROCK, 190, 50, false),
  new PokemonSpecies(Species.CRUSTLE, 5, false, false, false, Type.BUG, Type.ROCK, 75, 50, false),
  new PokemonSpecies(Species.SCRAGGY, 5, false, false, false, Type.DARK, Type.FIGHTING, 180, 50, false),
  new PokemonSpecies(Species.SCRAFTY, 5, false, false, false, Type.DARK, Type.FIGHTING, 90, 50, false),
  new PokemonSpecies(Species.SIGILYPH, 5, false, false, false, Type.PSYCHIC, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.YAMASK, 5, false, false, false, Type.GHOST, null, 190, 50, false),
  new PokemonSpecies(Species.COFAGRIGUS, 5, false, false, false, Type.GHOST, null, 90, 50, false),
  new PokemonSpecies(Species.TIRTOUGA, 5, false, false, false, Type.WATER, Type.ROCK, 45, 87.5, false),
  new PokemonSpecies(Species.CARRACOSTA, 5, false, false, false, Type.WATER, Type.ROCK, 45, 87.5, false),
  new PokemonSpecies(Species.ARCHEN, 5, false, false, false, Type.ROCK, Type.FLYING, 45, 87.5, false),
  new PokemonSpecies(Species.ARCHEOPS, 5, false, false, false, Type.ROCK, Type.FLYING, 45, 87.5, false),
  new PokemonSpecies(Species.TRUBBISH, 5, false, false, false, Type.POISON, null, 190, 50, false),
  new PokemonSpecies(Species.GARBODOR, 5, false, false, false, Type.POISON, null, 60, 50, false, true,
		 new PokemonForm("Normal", "", Type.POISON, null, 60),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.POISON, null, 60)),
  new PokemonSpecies(Species.ZORUA, 5, false, false, false, Type.DARK, null, 75, 87.5, false),
  new PokemonSpecies(Species.ZOROARK, 5, false, false, false, Type.DARK, null, 45, 87.5, false),
  new PokemonSpecies(Species.MINCCINO, 5, false, false, false, Type.NORMAL, null, 255, 25, false),
  new PokemonSpecies(Species.CINCCINO, 5, false, false, false, Type.NORMAL, null, 60, 25, false),
  new PokemonSpecies(Species.GOTHITA, 5, false, false, false, Type.PSYCHIC, null, 200, 25, false),
  new PokemonSpecies(Species.GOTHORITA, 5, false, false, false, Type.PSYCHIC, null, 100, 25, false),
  new PokemonSpecies(Species.GOTHITELLE, 5, false, false, false, Type.PSYCHIC, null, 50, 25, false),
  new PokemonSpecies(Species.SOLOSIS, 5, false, false, false, Type.PSYCHIC, null, 200, 50, false),
  new PokemonSpecies(Species.DUOSION, 5, false, false, false, Type.PSYCHIC, null, 100, 50, false),
  new PokemonSpecies(Species.REUNICLUS, 5, false, false, false, Type.PSYCHIC, null, 50, 50, false),
  new PokemonSpecies(Species.DUCKLETT, 5, false, false, false, Type.WATER, Type.FLYING, 190, 50, false),
  new PokemonSpecies(Species.SWANNA, 5, false, false, false, Type.WATER, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.VANILLITE, 5, false, false, false, Type.ICE, null, 255, 50, false),
  new PokemonSpecies(Species.VANILLISH, 5, false, false, false, Type.ICE, null, 120, 50, false),
  new PokemonSpecies(Species.VANILLUXE, 5, false, false, false, Type.ICE, null, 45, 50, false),
  new PokemonSpecies(Species.DEERLING, 5, false, false, false, Type.NORMAL, Type.GRASS, 190, 50, false, true,
		 new PokemonForm("Spring Form", "spring", Type.NORMAL, Type.GRASS, 190),
		 new PokemonForm("Summer Form", "summer", Type.NORMAL, Type.GRASS, 190),
		 new PokemonForm("Autumn Form", "autumn", Type.NORMAL, Type.GRASS, 190),
		 new PokemonForm("Winter Form", "winter", Type.NORMAL, Type.GRASS, 190)),
  new PokemonSpecies(Species.SAWSBUCK, 5, false, false, false, Type.NORMAL, Type.GRASS, 75, 50, false, true,
		 new PokemonForm("Spring Form", "spring", Type.NORMAL, Type.GRASS, 75),
		 new PokemonForm("Summer Form", "summer", Type.NORMAL, Type.GRASS, 75),
		 new PokemonForm("Autumn Form", "autumn", Type.NORMAL, Type.GRASS, 75),
		 new PokemonForm("Winter Form", "winter", Type.NORMAL, Type.GRASS, 75)),
  new PokemonSpecies(Species.EMOLGA, 5, false, false, false, Type.ELECTRIC, Type.FLYING, 200, 50, false),
  new PokemonSpecies(Species.KARRABLAST, 5, false, false, false, Type.BUG, null, 200, 50, false),
  new PokemonSpecies(Species.ESCAVALIER, 5, false, false, false, Type.BUG, Type.STEEL, 75, 50, false),
  new PokemonSpecies(Species.FOONGUS, 5, false, false, false, Type.GRASS, Type.POISON, 190, 50, false),
  new PokemonSpecies(Species.AMOONGUSS, 5, false, false, false, Type.GRASS, Type.POISON, 75, 50, false),
  new PokemonSpecies(Species.FRILLISH, 5, false, false, false, Type.WATER, Type.GHOST, 190, 50, true),
  new PokemonSpecies(Species.JELLICENT, 5, false, false, false, Type.WATER, Type.GHOST, 60, 50, true),
  new PokemonSpecies(Species.ALOMOMOLA, 5, false, false, false, Type.WATER, null, 75, 50, false),
  new PokemonSpecies(Species.JOLTIK, 5, false, false, false, Type.BUG, Type.ELECTRIC, 190, 50, false),
  new PokemonSpecies(Species.GALVANTULA, 5, false, false, false, Type.BUG, Type.ELECTRIC, 75, 50, false),
  new PokemonSpecies(Species.FERROSEED, 5, false, false, false, Type.GRASS, Type.STEEL, 255, 50, false),
  new PokemonSpecies(Species.FERROTHORN, 5, false, false, false, Type.GRASS, Type.STEEL, 90, 50, false),
  new PokemonSpecies(Species.KLINK, 5, false, false, false, Type.STEEL, null, 130, null, false),
  new PokemonSpecies(Species.KLANG, 5, false, false, false, Type.STEEL, null, 60, null, false),
  new PokemonSpecies(Species.KLINKLANG, 5, false, false, false, Type.STEEL, null, 30, null, false),
  new PokemonSpecies(Species.TYNAMO, 5, false, false, false, Type.ELECTRIC, null, 190, 50, false),
  new PokemonSpecies(Species.EELEKTRIK, 5, false, false, false, Type.ELECTRIC, null, 60, 50, false),
  new PokemonSpecies(Species.EELEKTROSS, 5, false, false, false, Type.ELECTRIC, null, 30, 50, false),
  new PokemonSpecies(Species.ELGYEM, 5, false, false, false, Type.PSYCHIC, null, 255, 50, false),
  new PokemonSpecies(Species.BEHEEYEM, 5, false, false, false, Type.PSYCHIC, null, 90, 50, false),
  new PokemonSpecies(Species.LITWICK, 5, false, false, false, Type.GHOST, Type.FIRE, 190, 50, false),
  new PokemonSpecies(Species.LAMPENT, 5, false, false, false, Type.GHOST, Type.FIRE, 90, 50, false),
  new PokemonSpecies(Species.CHANDELURE, 5, false, false, false, Type.GHOST, Type.FIRE, 45, 50, false),
  new PokemonSpecies(Species.AXEW, 5, false, false, false, Type.DRAGON, null, 75, 50, false),
  new PokemonSpecies(Species.FRAXURE, 5, false, false, false, Type.DRAGON, null, 60, 50, false),
  new PokemonSpecies(Species.HAXORUS, 5, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.CUBCHOO, 5, false, false, false, Type.ICE, null, 120, 50, false),
  new PokemonSpecies(Species.BEARTIC, 5, false, false, false, Type.ICE, null, 60, 50, false),
  new PokemonSpecies(Species.CRYOGONAL, 5, false, false, false, Type.ICE, null, 25, null, false),
  new PokemonSpecies(Species.SHELMET, 5, false, false, false, Type.BUG, null, 200, 50, false),
  new PokemonSpecies(Species.ACCELGOR, 5, false, false, false, Type.BUG, null, 75, 50, false),
  new PokemonSpecies(Species.STUNFISK, 5, false, false, false, Type.GROUND, Type.ELECTRIC, 75, 50, false),
  new PokemonSpecies(Species.MIENFOO, 5, false, false, false, Type.FIGHTING, null, 180, 50, false),
  new PokemonSpecies(Species.MIENSHAO, 5, false, false, false, Type.FIGHTING, null, 45, 50, false),
  new PokemonSpecies(Species.DRUDDIGON, 5, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.GOLETT, 5, false, false, false, Type.GROUND, Type.GHOST, 190, null, false),
  new PokemonSpecies(Species.GOLURK, 5, false, false, false, Type.GROUND, Type.GHOST, 90, null, false),
  new PokemonSpecies(Species.PAWNIARD, 5, false, false, false, Type.DARK, Type.STEEL, 120, 50, false),
  new PokemonSpecies(Species.BISHARP, 5, false, false, false, Type.DARK, Type.STEEL, 45, 50, false),
  new PokemonSpecies(Species.BOUFFALANT, 5, false, false, false, Type.NORMAL, null, 45, 50, false),
  new PokemonSpecies(Species.RUFFLET, 5, false, false, false, Type.NORMAL, Type.FLYING, 190, 100, false),
  new PokemonSpecies(Species.BRAVIARY, 5, false, false, false, Type.NORMAL, Type.FLYING, 60, 100, false),
  new PokemonSpecies(Species.VULLABY, 5, false, false, false, Type.DARK, Type.FLYING, 190, 0, false),
  new PokemonSpecies(Species.MANDIBUZZ, 5, false, false, false, Type.DARK, Type.FLYING, 60, 0, false),
  new PokemonSpecies(Species.HEATMOR, 5, false, false, false, Type.FIRE, null, 90, 50, false),
  new PokemonSpecies(Species.DURANT, 5, false, false, false, Type.BUG, Type.STEEL, 90, 50, false),
  new PokemonSpecies(Species.DEINO, 5, false, false, false, Type.DARK, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.ZWEILOUS, 5, false, false, false, Type.DARK, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.HYDREIGON, 5, false, false, false, Type.DARK, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.LARVESTA, 5, false, false, false, Type.BUG, Type.FIRE, 45, 50, false),
  new PokemonSpecies(Species.VOLCARONA, 5, false, false, false, Type.BUG, Type.FIRE, 15, 50, false),
  new PokemonSpecies(Species.COBALION, 5, true, false, false, Type.STEEL, Type.FIGHTING, 3, null, false),
  new PokemonSpecies(Species.TERRAKION, 5, true, false, false, Type.ROCK, Type.FIGHTING, 3, null, false),
  new PokemonSpecies(Species.VIRIZION, 5, true, false, false, Type.GRASS, Type.FIGHTING, 3, null, false),
  new PokemonSpecies(Species.TORNADUS, 5, true, false, false, Type.FLYING, null, 3, 100, false, true,
		 new PokemonForm("Incarnate Forme", "incarnate", Type.FLYING, null, 3),
		 new PokemonForm("Therian Forme", "therian", Type.FLYING, null, 3)),
  new PokemonSpecies(Species.THUNDURUS, 5, true, false, false, Type.ELECTRIC, Type.FLYING, 3, 100, false, true,
		 new PokemonForm("Incarnate Forme", "incarnate", Type.ELECTRIC, Type.FLYING, 3),
		 new PokemonForm("Therian Forme", "therian", Type.ELECTRIC, Type.FLYING, 3)),
  new PokemonSpecies(Species.RESHIRAM, 5, false, true, false, Type.DRAGON, Type.FIRE, 3, null, false),
  new PokemonSpecies(Species.ZEKROM, 5, false, true, false, Type.DRAGON, Type.ELECTRIC, 3, null, false),
  new PokemonSpecies(Species.LANDORUS, 5, true, false, false, Type.GROUND, Type.FLYING, 3, 100, false, true,
		 new PokemonForm("Incarnate Forme", "incarnate", Type.GROUND, Type.FLYING, 3),
		 new PokemonForm("Therian Forme", "therian", Type.GROUND, Type.FLYING, 3)),
  new PokemonSpecies(Species.KYUREM, 5, false, true, false, Type.DRAGON, Type.ICE, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.DRAGON, Type.ICE, 3),
		 new PokemonForm("Black", "black", Type.DRAGON, Type.ICE, 3),
		 new PokemonForm("White", "white", Type.DRAGON, Type.ICE, 3)),
  new PokemonSpecies(Species.KELDEO, 5, false, false, true, Type.WATER, Type.FIGHTING, 3, null, false, true,
		 new PokemonForm("Ordinary Form", "ordinary", Type.WATER, Type.FIGHTING, 3),
		 new PokemonForm("Resolute", "resolute", Type.WATER, Type.FIGHTING, 3)),
  new PokemonSpecies(Species.MELOETTA, 5, false, false, true, Type.NORMAL, Type.PSYCHIC, 3, 0, false, true,
		 new PokemonForm("Aria Forme", "aria", Type.NORMAL, Type.PSYCHIC, 3),
		 new PokemonForm("Pirouette Forme", "pirouette", Type.NORMAL, Type.FIGHTING, 3)),
  new PokemonSpecies(Species.GENESECT, 5, false, false, true, Type.BUG, Type.STEEL, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.BUG, Type.STEEL, 3),
		 new PokemonForm("Shock Drive", "shock", Type.BUG, Type.STEEL, 3),
		 new PokemonForm("Burn Drive", "burn", Type.BUG, Type.STEEL, 3),
		 new PokemonForm("Chill Drive", "chill", Type.BUG, Type.STEEL, 3),
		 new PokemonForm("Douse Drive", "douse", Type.BUG, Type.STEEL, 3)),
  new PokemonSpecies(Species.CHESPIN, 6, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.QUILLADIN, 6, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.CHESNAUGHT, 6, false, false, false, Type.GRASS, Type.FIGHTING, 45, 87.5, false),
  new PokemonSpecies(Species.FENNEKIN, 6, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.BRAIXEN, 6, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.DELPHOX, 6, false, false, false, Type.FIRE, Type.PSYCHIC, 45, 87.5, false),
  new PokemonSpecies(Species.FROAKIE, 6, false, false, false, Type.WATER, null, 45, 87.5, false, false,
		 new PokemonForm("Normal", "", Type.WATER, null, 45),
		 new PokemonForm("Battle Bond", "battle-bond", Type.WATER, null, 45, false, "")),
  new PokemonSpecies(Species.FROGADIER, 6, false, false, false, Type.WATER, null, 45, 87.5, false, false,
		 new PokemonForm("Normal", "", Type.WATER, null, 45),
		 new PokemonForm("Battle Bond", "battle-bond", Type.WATER, null, 45, false, "")),
  new PokemonSpecies(Species.GRENINJA, 6, false, false, false, Type.WATER, Type.DARK, 45, 87.5, false, false,
		 new PokemonForm("Normal", "", Type.WATER, Type.DARK, 45),
		 new PokemonForm("Battle Bond", "battle-bond", Type.WATER, Type.DARK, 45, false, ""),
		 new PokemonForm("Ash", "ash", Type.WATER, Type.DARK, 45)),
  new PokemonSpecies(Species.BUNNELBY, 6, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.DIGGERSBY, 6, false, false, false, Type.NORMAL, Type.GROUND, 127, 50, false),
  new PokemonSpecies(Species.FLETCHLING, 6, false, false, false, Type.NORMAL, Type.FLYING, 255, 50, false),
  new PokemonSpecies(Species.FLETCHINDER, 6, false, false, false, Type.FIRE, Type.FLYING, 120, 50, false),
  new PokemonSpecies(Species.TALONFLAME, 6, false, false, false, Type.FIRE, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.SCATTERBUG, 6, false, false, false, Type.BUG, null, 255, 50, false, false,
		 new PokemonForm("Meadow Pattern", "meadow", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Icy Snow Pattern", "icy-snow", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Polar Pattern", "polar", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Tundra Pattern", "tundra", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Continental Pattern", "continental", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Garden Pattern", "garden", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Elegant Pattern", "elegant", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Modern Pattern", "modern", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Marine Pattern", "marine", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Archipelago Pattern", "archipelago", Type.BUG, null, 255, false, ""),
		 new PokemonForm("High Plains Pattern", "high-plains", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Sandstorm Pattern", "sandstorm", Type.BUG, null, 255, false, ""),
		 new PokemonForm("River Pattern", "river", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Monsoon Pattern", "monsoon", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Savanna Pattern", "savanna", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Sun Pattern", "sun", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Ocean Pattern", "ocean", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Jungle Pattern", "jungle", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Fancy Pattern", "fancy", Type.BUG, null, 255, false, ""),
		 new PokemonForm("Poké Ball Pattern", "poke-ball", Type.BUG, null, 255, false, "")),
  new PokemonSpecies(Species.SPEWPA, 6, false, false, false, Type.BUG, null, 120, 50, false, false,
		 new PokemonForm("Meadow Pattern", "meadow", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Icy Snow Pattern", "icy-snow", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Polar Pattern", "polar", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Tundra Pattern", "tundra", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Continental Pattern", "continental", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Garden Pattern", "garden", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Elegant Pattern", "elegant", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Modern Pattern", "modern", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Marine Pattern", "marine", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Archipelago Pattern", "archipelago", Type.BUG, null, 120, false, ""),
		 new PokemonForm("High Plains Pattern", "high-plains", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Sandstorm Pattern", "sandstorm", Type.BUG, null, 120, false, ""),
		 new PokemonForm("River Pattern", "river", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Monsoon Pattern", "monsoon", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Savanna Pattern", "savanna", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Sun Pattern", "sun", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Ocean Pattern", "ocean", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Jungle Pattern", "jungle", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Fancy Pattern", "fancy", Type.BUG, null, 120, false, ""),
		 new PokemonForm("Poké Ball Pattern", "poke-ball", Type.BUG, null, 120, false, "")),
  new PokemonSpecies(Species.VIVILLON, 6, false, false, false, Type.BUG, Type.FLYING, 45, 50, false, false,
		 new PokemonForm("Meadow Pattern", "meadow", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Icy Snow Pattern", "icy-snow", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Polar Pattern", "polar", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Tundra Pattern", "tundra", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Continental Pattern", "continental", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Garden Pattern", "garden", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Elegant Pattern", "elegant", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Modern Pattern", "modern", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Marine Pattern", "marine", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Archipelago Pattern", "archipelago", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("High Plains Pattern", "high-plains", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Sandstorm Pattern", "sandstorm", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("River Pattern", "river", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Monsoon Pattern", "monsoon", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Savanna Pattern", "savanna", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Sun Pattern", "sun", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Ocean Pattern", "ocean", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Jungle Pattern", "jungle", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Fancy Pattern", "fancy", Type.BUG, Type.FLYING, 45),
		 new PokemonForm("Poké Ball Pattern", "poke-ball", Type.BUG, Type.FLYING, 45)),
  new PokemonSpecies(Species.LITLEO, 6, false, false, false, Type.FIRE, Type.NORMAL, 220, 12.5, false),
  new PokemonSpecies(Species.PYROAR, 6, false, false, false, Type.FIRE, Type.NORMAL, 65, 12.5, true),
  new PokemonSpecies(Species.FLABEBE, 6, false, false, false, Type.FAIRY, null, 225, 0, false, false,
		 new PokemonForm("Red Flower", "red", Type.FAIRY, null, 225),
		 new PokemonForm("Yellow Flower", "yellow", Type.FAIRY, null, 225),
		 new PokemonForm("Orange Flower", "orange", Type.FAIRY, null, 225),
		 new PokemonForm("Blue Flower", "blue", Type.FAIRY, null, 225),
		 new PokemonForm("White Flower", "white", Type.FAIRY, null, 225)),
  new PokemonSpecies(Species.FLOETTE, 6, false, false, false, Type.FAIRY, null, 120, 0, false, false,
		 new PokemonForm("Red Flower", "red", Type.FAIRY, null, 120),
		 new PokemonForm("Yellow Flower", "yellow", Type.FAIRY, null, 120),
		 new PokemonForm("Orange Flower", "orange", Type.FAIRY, null, 120),
		 new PokemonForm("Blue Flower", "blue", Type.FAIRY, null, 120),
		 new PokemonForm("White Flower", "white", Type.FAIRY, null, 120)),
  new PokemonSpecies(Species.FLORGES, 6, false, false, false, Type.FAIRY, null, 45, 0, false, false,
		 new PokemonForm("Red Flower", "red", Type.FAIRY, null, 45),
		 new PokemonForm("Yellow Flower", "yellow", Type.FAIRY, null, 45),
		 new PokemonForm("Orange Flower", "orange", Type.FAIRY, null, 45),
		 new PokemonForm("Blue Flower", "blue", Type.FAIRY, null, 45),
		 new PokemonForm("White Flower", "white", Type.FAIRY, null, 45)),
  new PokemonSpecies(Species.SKIDDO, 6, false, false, false, Type.GRASS, null, 200, 50, false),
  new PokemonSpecies(Species.GOGOAT, 6, false, false, false, Type.GRASS, null, 45, 50, false),
  new PokemonSpecies(Species.PANCHAM, 6, false, false, false, Type.FIGHTING, null, 220, 50, false),
  new PokemonSpecies(Species.PANGORO, 6, false, false, false, Type.FIGHTING, Type.DARK, 65, 50, false),
  new PokemonSpecies(Species.FURFROU, 6, false, false, false, Type.NORMAL, null, 160, 50, false, true,
		 new PokemonForm("Natural Form", "", Type.NORMAL, null, 160),
		 new PokemonForm("Heart Trim", "heart", Type.NORMAL, null, 160, false),
		 new PokemonForm("Star Trim", "star", Type.NORMAL, null, 160, false),
		 new PokemonForm("Diamond Trim", "diamond", Type.NORMAL, null, 160, false),
		 new PokemonForm("Debutante Trim", "debutante", Type.NORMAL, null, 160, false),
		 new PokemonForm("Matron Trim", "matron", Type.NORMAL, null, 160, false),
		 new PokemonForm("Dandy Trim", "dandy", Type.NORMAL, null, 160, false),
		 new PokemonForm("La Reine Trim", "la-reine", Type.NORMAL, null, 160, false),
		 new PokemonForm("Kabuki Trim", "kabuki", Type.NORMAL, null, 160, false),
		 new PokemonForm("Pharaoh Trim", "pharaoh", Type.NORMAL, null, 160, false)),
  new PokemonSpecies(Species.ESPURR, 6, false, false, false, Type.PSYCHIC, null, 190, 50, false),
  new PokemonSpecies(Species.MEOWSTIC, 6, false, false, false, Type.PSYCHIC, null, 75, 50, false, false,
		 new PokemonForm("Male", "male", Type.PSYCHIC, null, 75, false, ""),
		 new PokemonForm("Female", "female", Type.PSYCHIC, null, 75, false)),
  new PokemonSpecies(Species.HONEDGE, 6, false, false, false, Type.STEEL, Type.GHOST, 180, 50, false),
  new PokemonSpecies(Species.DOUBLADE, 6, false, false, false, Type.STEEL, Type.GHOST, 90, 50, false),
  new PokemonSpecies(Species.AEGISLASH, 6, false, false, false, Type.STEEL, Type.GHOST, 45, 50, false, true,
		 new PokemonForm("Shield Forme", "shield", Type.STEEL, Type.GHOST, 45, false, ""),
		 new PokemonForm("Blade Forme", "blade", Type.STEEL, Type.GHOST, 45)),
  new PokemonSpecies(Species.SPRITZEE, 6, false, false, false, Type.FAIRY, null, 200, 50, false),
  new PokemonSpecies(Species.AROMATISSE, 6, false, false, false, Type.FAIRY, null, 140, 50, false),
  new PokemonSpecies(Species.SWIRLIX, 6, false, false, false, Type.FAIRY, null, 200, 50, false),
  new PokemonSpecies(Species.SLURPUFF, 6, false, false, false, Type.FAIRY, null, 140, 50, false),
  new PokemonSpecies(Species.INKAY, 6, false, false, false, Type.DARK, Type.PSYCHIC, 190, 50, false),
  new PokemonSpecies(Species.MALAMAR, 6, false, false, false, Type.DARK, Type.PSYCHIC, 80, 50, false),
  new PokemonSpecies(Species.BINACLE, 6, false, false, false, Type.ROCK, Type.WATER, 120, 50, false),
  new PokemonSpecies(Species.BARBARACLE, 6, false, false, false, Type.ROCK, Type.WATER, 45, 50, false),
  new PokemonSpecies(Species.SKRELP, 6, false, false, false, Type.POISON, Type.WATER, 225, 50, false),
  new PokemonSpecies(Species.DRAGALGE, 6, false, false, false, Type.POISON, Type.DRAGON, 55, 50, false),
  new PokemonSpecies(Species.CLAUNCHER, 6, false, false, false, Type.WATER, null, 225, 50, false),
  new PokemonSpecies(Species.CLAWITZER, 6, false, false, false, Type.WATER, null, 55, 50, false),
  new PokemonSpecies(Species.HELIOPTILE, 6, false, false, false, Type.ELECTRIC, Type.NORMAL, 190, 50, false),
  new PokemonSpecies(Species.HELIOLISK, 6, false, false, false, Type.ELECTRIC, Type.NORMAL, 75, 50, false),
  new PokemonSpecies(Species.TYRUNT, 6, false, false, false, Type.ROCK, Type.DRAGON, 45, 87.5, false),
  new PokemonSpecies(Species.TYRANTRUM, 6, false, false, false, Type.ROCK, Type.DRAGON, 45, 87.5, false),
  new PokemonSpecies(Species.AMAURA, 6, false, false, false, Type.ROCK, Type.ICE, 45, 87.5, false),
  new PokemonSpecies(Species.AURORUS, 6, false, false, false, Type.ROCK, Type.ICE, 45, 87.5, false),
  new PokemonSpecies(Species.SYLVEON, 6, false, false, false, Type.FAIRY, null, 45, 87.5, false),
  new PokemonSpecies(Species.HAWLUCHA, 6, false, false, false, Type.FIGHTING, Type.FLYING, 100, 50, false),
  new PokemonSpecies(Species.DEDENNE, 6, false, false, false, Type.ELECTRIC, Type.FAIRY, 180, 50, false),
  new PokemonSpecies(Species.CARBINK, 6, false, false, false, Type.ROCK, Type.FAIRY, 60, null, false),
  new PokemonSpecies(Species.GOOMY, 6, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.SLIGGOO, 6, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.GOODRA, 6, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.KLEFKI, 6, false, false, false, Type.STEEL, Type.FAIRY, 75, 50, false),
  new PokemonSpecies(Species.PHANTUMP, 6, false, false, false, Type.GHOST, Type.GRASS, 120, 50, false),
  new PokemonSpecies(Species.TREVENANT, 6, false, false, false, Type.GHOST, Type.GRASS, 60, 50, false),
  new PokemonSpecies(Species.PUMPKABOO, 6, false, false, false, Type.GHOST, Type.GRASS, 120, 50, false, false,
		 new PokemonForm("Average Size", "", Type.GHOST, Type.GRASS, 120),
		 new PokemonForm("Small Size", "small", Type.GHOST, Type.GRASS, 120),
		 new PokemonForm("Large Size", "large", Type.GHOST, Type.GRASS, 120),
		 new PokemonForm("Super Size", "super", Type.GHOST, Type.GRASS, 120)),
  new PokemonSpecies(Species.GOURGEIST, 6, false, false, false, Type.GHOST, Type.GRASS, 60, 50, false, false,
		 new PokemonForm("Average Size", "", Type.GHOST, Type.GRASS, 60),
		 new PokemonForm("Small Size", "small", Type.GHOST, Type.GRASS, 60),
		 new PokemonForm("Large Size", "large", Type.GHOST, Type.GRASS, 60),
		 new PokemonForm("Super Size", "super", Type.GHOST, Type.GRASS, 60)),
  new PokemonSpecies(Species.BERGMITE, 6, false, false, false, Type.ICE, null, 190, 50, false),
  new PokemonSpecies(Species.AVALUGG, 6, false, false, false, Type.ICE, null, 55, 50, false),
  new PokemonSpecies(Species.NOIBAT, 6, false, false, false, Type.FLYING, Type.DRAGON, 190, 50, false),
  new PokemonSpecies(Species.NOIVERN, 6, false, false, false, Type.FLYING, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.XERNEAS, 6, false, true, false, Type.FAIRY, null, 45, null, false, true,
		 new PokemonForm("Neutral Mode", "neutral", Type.FAIRY, null, 45),
		 new PokemonForm("Active Mode", "active", Type.FAIRY, null, 45)),
  new PokemonSpecies(Species.YVELTAL, 6, false, true, false, Type.DARK, Type.FLYING, 45, null, false),
  new PokemonSpecies(Species.ZYGARDE, 6, true, false, false, Type.DRAGON, Type.GROUND, 3, null, false, false,
		 new PokemonForm("50% Forme", "50", Type.DRAGON, Type.GROUND, 3, false, ""),
		 new PokemonForm("10% Forme", "10", Type.DRAGON, Type.GROUND, 3),
		 new PokemonForm("50% Forme Power Construct", "50-pc", Type.DRAGON, Type.GROUND, 3, false, ""),
		 new PokemonForm("10% Forme Power Construct", "10-pc", Type.DRAGON, Type.GROUND, 3, false, "10"),
		 new PokemonForm("Complete Forme", "complete", Type.DRAGON, Type.GROUND, 3)),
  new PokemonSpecies(Species.DIANCIE, 6, false, false, true, Type.ROCK, Type.FAIRY, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.ROCK, Type.FAIRY, 3),
		 new PokemonForm("Mega", SpeciesFormKey.MEGA, Type.ROCK, Type.FAIRY, 3)),
  new PokemonSpecies(Species.HOOPA, 6, false, false, true, Type.PSYCHIC, Type.GHOST, 3, null, false, false,
		 new PokemonForm("Hoopa Confined", "", Type.PSYCHIC, Type.GHOST, 3),
		 new PokemonForm("Hoopa Unbound", "unbound", Type.PSYCHIC, Type.DARK, 3)),
  new PokemonSpecies(Species.VOLCANION, 6, false, false, true, Type.FIRE, Type.WATER, 3, null, false),
  new PokemonSpecies(Species.ROWLET, 7, false, false, false, Type.GRASS, Type.FLYING, 45, 87.5, false),
  new PokemonSpecies(Species.DARTRIX, 7, false, false, false, Type.GRASS, Type.FLYING, 45, 87.5, false),
  new PokemonSpecies(Species.DECIDUEYE, 7, false, false, false, Type.GRASS, Type.GHOST, 45, 87.5, false),
  new PokemonSpecies(Species.LITTEN, 7, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.TORRACAT, 7, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.INCINEROAR, 7, false, false, false, Type.FIRE, Type.DARK, 45, 87.5, false),
  new PokemonSpecies(Species.POPPLIO, 7, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.BRIONNE, 7, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.PRIMARINA, 7, false, false, false, Type.WATER, Type.FAIRY, 45, 87.5, false),
  new PokemonSpecies(Species.PIKIPEK, 7, false, false, false, Type.NORMAL, Type.FLYING, 255, 50, false),
  new PokemonSpecies(Species.TRUMBEAK, 7, false, false, false, Type.NORMAL, Type.FLYING, 120, 50, false),
  new PokemonSpecies(Species.TOUCANNON, 7, false, false, false, Type.NORMAL, Type.FLYING, 45, 50, false),
  new PokemonSpecies(Species.YUNGOOS, 7, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.GUMSHOOS, 7, false, false, false, Type.NORMAL, null, 127, 50, false),
  new PokemonSpecies(Species.GRUBBIN, 7, false, false, false, Type.BUG, null, 255, 50, false),
  new PokemonSpecies(Species.CHARJABUG, 7, false, false, false, Type.BUG, Type.ELECTRIC, 120, 50, false),
  new PokemonSpecies(Species.VIKAVOLT, 7, false, false, false, Type.BUG, Type.ELECTRIC, 45, 50, false),
  new PokemonSpecies(Species.CRABRAWLER, 7, false, false, false, Type.FIGHTING, null, 225, 50, false),
  new PokemonSpecies(Species.CRABOMINABLE, 7, false, false, false, Type.FIGHTING, Type.ICE, 60, 50, false),
  new PokemonSpecies(Species.ORICORIO, 7, false, false, false, Type.FIRE, Type.FLYING, 45, 25, false, false,
		 new PokemonForm("Baile Style", "baile", Type.FIRE, Type.FLYING, 45, false, ""),
		 new PokemonForm("Pom-Pom Style", "pompom", Type.ELECTRIC, Type.FLYING, 45),
		 new PokemonForm("Pau Style", "pau", Type.PSYCHIC, Type.FLYING, 45),
		 new PokemonForm("Sensu Style", "sensu", Type.GHOST, Type.FLYING, 45)),
  new PokemonSpecies(Species.CUTIEFLY, 7, false, false, false, Type.BUG, Type.FAIRY, 190, 50, false),
  new PokemonSpecies(Species.RIBOMBEE, 7, false, false, false, Type.BUG, Type.FAIRY, 75, 50, false),
  new PokemonSpecies(Species.ROCKRUFF, 7, false, false, false, Type.ROCK, null, 190, 50, false, false,
		 new PokemonForm("Normal", "", Type.ROCK, null, 190),
		 new PokemonForm("Own Tempo", "own-tempo", Type.ROCK, null, 190, false, "")),
  new PokemonSpecies(Species.LYCANROC, 7, false, false, false, Type.ROCK, null, 90, 50, false, false,
		 new PokemonForm("Midday Form", "midday", Type.ROCK, null, 90, false, ""),
		 new PokemonForm("Midnight Form", "midnight", Type.ROCK, null, 90),
		 new PokemonForm("Dusk Form", "dusk", Type.ROCK, null, 90)),
  new PokemonSpecies(Species.WISHIWASHI, 7, false, false, false, Type.WATER, null, 60, 50, false, false,
		 new PokemonForm("Solo Form", "", Type.WATER, null, 60),
		 new PokemonForm("School", "school", Type.WATER, null, 60)),
  new PokemonSpecies(Species.MAREANIE, 7, false, false, false, Type.POISON, Type.WATER, 190, 50, false),
  new PokemonSpecies(Species.TOXAPEX, 7, false, false, false, Type.POISON, Type.WATER, 75, 50, false),
  new PokemonSpecies(Species.MUDBRAY, 7, false, false, false, Type.GROUND, null, 190, 50, false),
  new PokemonSpecies(Species.MUDSDALE, 7, false, false, false, Type.GROUND, null, 60, 50, false),
  new PokemonSpecies(Species.DEWPIDER, 7, false, false, false, Type.WATER, Type.BUG, 200, 50, false),
  new PokemonSpecies(Species.ARAQUANID, 7, false, false, false, Type.WATER, Type.BUG, 100, 50, false),
  new PokemonSpecies(Species.FOMANTIS, 7, false, false, false, Type.GRASS, null, 190, 50, false),
  new PokemonSpecies(Species.LURANTIS, 7, false, false, false, Type.GRASS, null, 75, 50, false),
  new PokemonSpecies(Species.MORELULL, 7, false, false, false, Type.GRASS, Type.FAIRY, 190, 50, false),
  new PokemonSpecies(Species.SHIINOTIC, 7, false, false, false, Type.GRASS, Type.FAIRY, 75, 50, false),
  new PokemonSpecies(Species.SALANDIT, 7, false, false, false, Type.POISON, Type.FIRE, 120, 87.5, false),
  new PokemonSpecies(Species.SALAZZLE, 7, false, false, false, Type.POISON, Type.FIRE, 45, 0, false),
  new PokemonSpecies(Species.STUFFUL, 7, false, false, false, Type.NORMAL, Type.FIGHTING, 140, 50, false),
  new PokemonSpecies(Species.BEWEAR, 7, false, false, false, Type.NORMAL, Type.FIGHTING, 70, 50, false),
  new PokemonSpecies(Species.BOUNSWEET, 7, false, false, false, Type.GRASS, null, 235, 0, false),
  new PokemonSpecies(Species.STEENEE, 7, false, false, false, Type.GRASS, null, 120, 0, false),
  new PokemonSpecies(Species.TSAREENA, 7, false, false, false, Type.GRASS, null, 45, 0, false),
  new PokemonSpecies(Species.COMFEY, 7, false, false, false, Type.FAIRY, null, 60, 25, false),
  new PokemonSpecies(Species.ORANGURU, 7, false, false, false, Type.NORMAL, Type.PSYCHIC, 45, 50, false),
  new PokemonSpecies(Species.PASSIMIAN, 7, false, false, false, Type.FIGHTING, null, 45, 50, false),
  new PokemonSpecies(Species.WIMPOD, 7, false, false, false, Type.BUG, Type.WATER, 90, 50, false),
  new PokemonSpecies(Species.GOLISOPOD, 7, false, false, false, Type.BUG, Type.WATER, 45, 50, false),
  new PokemonSpecies(Species.SANDYGAST, 7, false, false, false, Type.GHOST, Type.GROUND, 140, 50, false),
  new PokemonSpecies(Species.PALOSSAND, 7, false, false, false, Type.GHOST, Type.GROUND, 60, 50, false),
  new PokemonSpecies(Species.PYUKUMUKU, 7, false, false, false, Type.WATER, null, 60, 50, false),
  new PokemonSpecies(Species.TYPE_NULL, 7, true, false, false, Type.NORMAL, null, 3, null, false),
  new PokemonSpecies(Species.SILVALLY, 7, true, false, false, Type.NORMAL, null, 3, null, false, false,
		 new PokemonForm("Type: Normal", "normal", Type.NORMAL, null, 3, false, ""),
		 new PokemonForm("Type: Fighting", "fighting", Type.FIGHTING, null, 3),
		 new PokemonForm("Type: Flying", "flying", Type.FLYING, null, 3),
		 new PokemonForm("Type: Poison", "poison", Type.POISON, null, 3),
		 new PokemonForm("Type: Ground", "ground", Type.GROUND, null, 3),
		 new PokemonForm("Type: Rock", "rock", Type.ROCK, null, 3),
		 new PokemonForm("Type: Bug", "bug", Type.BUG, null, 3),
		 new PokemonForm("Type: Ghost", "ghost", Type.GHOST, null, 3),
		 new PokemonForm("Type: Steel", "steel", Type.STEEL, null, 3),
		 new PokemonForm("Type: Fire", "fire", Type.FIRE, null, 3),
		 new PokemonForm("Type: Water", "water", Type.WATER, null, 3),
		 new PokemonForm("Type: Grass", "grass", Type.GRASS, null, 3),
		 new PokemonForm("Type: Electric", "electric", Type.ELECTRIC, null, 3),
		 new PokemonForm("Type: Psychic", "psychic", Type.PSYCHIC, null, 3),
		 new PokemonForm("Type: Ice", "ice", Type.ICE, null, 3),
		 new PokemonForm("Type: Dragon", "dragon", Type.DRAGON, null, 3),
		 new PokemonForm("Type: Dark", "dark", Type.DARK, null, 3),
		 new PokemonForm("Type: Fairy", "fairy", Type.FAIRY, null, 3)),
  new PokemonSpecies(Species.MINIOR, 7, false, false, false, Type.ROCK, Type.FLYING, 30, null, false, false,
		 new PokemonForm("Red Meteor Form", "red-meteor", Type.ROCK, Type.FLYING, 30, false, ""),
		 new PokemonForm("Orange Meteor Form", "orange-meteor", Type.ROCK, Type.FLYING, 30, false, ""),
		 new PokemonForm("Yellow Meteor Form", "yellow-meteor", Type.ROCK, Type.FLYING, 30, false, ""),
		 new PokemonForm("Green Meteor Form", "green-meteor", Type.ROCK, Type.FLYING, 30, false, ""),
		 new PokemonForm("Blue Meteor Form", "blue-meteor", Type.ROCK, Type.FLYING, 30, false, ""),
		 new PokemonForm("Indigo Meteor Form", "indigo-meteor", Type.ROCK, Type.FLYING, 30, false, ""),
		 new PokemonForm("Violet Meteor Form", "violet-meteor", Type.ROCK, Type.FLYING, 30, false, ""),
		 new PokemonForm("Red Core Form", "red", Type.ROCK, Type.FLYING, 30),
		 new PokemonForm("Orange Core Form", "orange", Type.ROCK, Type.FLYING, 30),
		 new PokemonForm("Yellow Core Form", "yellow", Type.ROCK, Type.FLYING, 30),
		 new PokemonForm("Green Core Form", "green", Type.ROCK, Type.FLYING, 30),
		 new PokemonForm("Blue Core Form", "blue", Type.ROCK, Type.FLYING, 30),
		 new PokemonForm("Indigo Core Form", "indigo", Type.ROCK, Type.FLYING, 30),
		 new PokemonForm("Violet Core Form", "violet", Type.ROCK, Type.FLYING, 30)),
  new PokemonSpecies(Species.KOMALA, 7, false, false, false, Type.NORMAL, null, 45, 50, false),
  new PokemonSpecies(Species.TURTONATOR, 7, false, false, false, Type.FIRE, Type.DRAGON, 70, 50, false),
  new PokemonSpecies(Species.TOGEDEMARU, 7, false, false, false, Type.ELECTRIC, Type.STEEL, 180, 50, false),
  new PokemonSpecies(Species.MIMIKYU, 7, false, false, false, Type.GHOST, Type.FAIRY, 45, 50, false, false,
		 new PokemonForm("Disguised Form", "disguised", Type.GHOST, Type.FAIRY, 45, false, ""),
		 new PokemonForm("Busted Form", "busted", Type.GHOST, Type.FAIRY, 45)),
  new PokemonSpecies(Species.BRUXISH, 7, false, false, false, Type.WATER, Type.PSYCHIC, 80, 50, false),
  new PokemonSpecies(Species.DRAMPA, 7, false, false, false, Type.NORMAL, Type.DRAGON, 70, 50, false),
  new PokemonSpecies(Species.DHELMISE, 7, false, false, false, Type.GHOST, Type.GRASS, 25, null, false),
  new PokemonSpecies(Species.JANGMO_O, 7, false, false, false, Type.DRAGON, null, 45, 50, false),
  new PokemonSpecies(Species.HAKAMO_O, 7, false, false, false, Type.DRAGON, Type.FIGHTING, 45, 50, false),
  new PokemonSpecies(Species.KOMMO_O, 7, false, false, false, Type.DRAGON, Type.FIGHTING, 45, 50, false),
  new PokemonSpecies(Species.TAPU_KOKO, 7, true, false, false, Type.ELECTRIC, Type.FAIRY, 3, null, false),
  new PokemonSpecies(Species.TAPU_LELE, 7, true, false, false, Type.PSYCHIC, Type.FAIRY, 3, null, false),
  new PokemonSpecies(Species.TAPU_BULU, 7, true, false, false, Type.GRASS, Type.FAIRY, 3, null, false),
  new PokemonSpecies(Species.TAPU_FINI, 7, true, false, false, Type.WATER, Type.FAIRY, 3, null, false),
  new PokemonSpecies(Species.COSMOG, 7, true, false, false, Type.PSYCHIC, null, 45, null, false),
  new PokemonSpecies(Species.COSMOEM, 7, true, false, false, Type.PSYCHIC, null, 45, null, false),
  new PokemonSpecies(Species.SOLGALEO, 7, false, true, false, Type.PSYCHIC, Type.STEEL, 45, null, false),
  new PokemonSpecies(Species.LUNALA, 7, false, true, false, Type.PSYCHIC, Type.GHOST, 45, null, false),
  new PokemonSpecies(Species.NIHILEGO, 7, true, false, false, Type.ROCK, Type.POISON, 45, null, false),
  new PokemonSpecies(Species.BUZZWOLE, 7, true, false, false, Type.BUG, Type.FIGHTING, 45, null, false),
  new PokemonSpecies(Species.PHEROMOSA, 7, true, false, false, Type.BUG, Type.FIGHTING, 45, null, false),
  new PokemonSpecies(Species.XURKITREE, 7, true, false, false, Type.ELECTRIC, null, 45, null, false),
  new PokemonSpecies(Species.CELESTEELA, 7, true, false, false, Type.STEEL, Type.FLYING, 45, null, false),
  new PokemonSpecies(Species.KARTANA, 7, true, false, false, Type.GRASS, Type.STEEL, 45, null, false),
  new PokemonSpecies(Species.GUZZLORD, 7, true, false, false, Type.DARK, Type.DRAGON, 45, null, false),
  new PokemonSpecies(Species.NECROZMA, 7, false, true, false, Type.PSYCHIC, null, 255, null, false, false,
		 new PokemonForm("Normal", "", Type.PSYCHIC, null, 255),
		 new PokemonForm("Dusk Mane", "dusk-mane", Type.PSYCHIC, Type.STEEL, 255),
		 new PokemonForm("Dawn Wings", "dawn-wings", Type.PSYCHIC, Type.GHOST, 255),
		 new PokemonForm("Ultra", "ultra", Type.PSYCHIC, Type.DRAGON, 255)),
  new PokemonSpecies(Species.MAGEARNA, 7, false, false, true, Type.STEEL, Type.FAIRY, 3, null, false, false,
		 new PokemonForm("Normal", "", Type.STEEL, Type.FAIRY, 3),
		 new PokemonForm("Original", "original", Type.STEEL, Type.FAIRY, 3)),
  new PokemonSpecies(Species.MARSHADOW, 7, false, false, true, Type.FIGHTING, Type.GHOST, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.FIGHTING, Type.GHOST, 3),
		 new PokemonForm("Zenith", "zenith", Type.FIGHTING, Type.GHOST, 3)),
  new PokemonSpecies(Species.POIPOLE, 7, true, false, false, Type.POISON, null, 45, null, false),
  new PokemonSpecies(Species.NAGANADEL, 7, true, false, false, Type.POISON, Type.DRAGON, 45, null, false),
  new PokemonSpecies(Species.STAKATAKA, 7, true, false, false, Type.ROCK, Type.STEEL, 30, null, false),
  new PokemonSpecies(Species.BLACEPHALON, 7, true, false, false, Type.FIRE, Type.GHOST, 30, null, false),
  new PokemonSpecies(Species.ZERAORA, 7, false, false, true, Type.ELECTRIC, null, 3, null, false),
  new PokemonSpecies(Species.MELTAN, 7, false, false, true, Type.STEEL, null, 3, null, false),
  new PokemonSpecies(Species.MELMETAL, 7, false, false, true, Type.STEEL, null, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.STEEL, null, 3),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.STEEL, null, 3)),
  new PokemonSpecies(Species.GROOKEY, 8, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.THWACKEY, 8, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.RILLABOOM, 8, false, false, false, Type.GRASS, null, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.GRASS, null, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.GRASS, null, 45)),
  new PokemonSpecies(Species.SCORBUNNY, 8, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.RABOOT, 8, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.CINDERACE, 8, false, false, false, Type.FIRE, null, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.FIRE, null, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.FIRE, null, 45)),
  new PokemonSpecies(Species.SOBBLE, 8, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.DRIZZILE, 8, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.INTELEON, 8, false, false, false, Type.WATER, null, 45, 87.5, false, true,
		 new PokemonForm("Normal", "", Type.WATER, null, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.WATER, null, 45)),
  new PokemonSpecies(Species.SKWOVET, 8, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.GREEDENT, 8, false, false, false, Type.NORMAL, null, 90, 50, false),
  new PokemonSpecies(Species.ROOKIDEE, 8, false, false, false, Type.FLYING, null, 255, 50, false),
  new PokemonSpecies(Species.CORVISQUIRE, 8, false, false, false, Type.FLYING, null, 120, 50, false),
  new PokemonSpecies(Species.CORVIKNIGHT, 8, false, false, false, Type.FLYING, Type.STEEL, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.FLYING, Type.STEEL, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.FLYING, Type.STEEL, 45)),
  new PokemonSpecies(Species.BLIPBUG, 8, false, false, false, Type.BUG, null, 255, 50, false),
  new PokemonSpecies(Species.DOTTLER, 8, false, false, false, Type.BUG, Type.PSYCHIC, 120, 50, false),
  new PokemonSpecies(Species.ORBEETLE, 8, false, false, false, Type.BUG, Type.PSYCHIC, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.BUG, Type.PSYCHIC, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.BUG, Type.PSYCHIC, 45)),
  new PokemonSpecies(Species.NICKIT, 8, false, false, false, Type.DARK, null, 255, 50, false),
  new PokemonSpecies(Species.THIEVUL, 8, false, false, false, Type.DARK, null, 127, 50, false),
  new PokemonSpecies(Species.GOSSIFLEUR, 8, false, false, false, Type.GRASS, null, 190, 50, false),
  new PokemonSpecies(Species.ELDEGOSS, 8, false, false, false, Type.GRASS, null, 75, 50, false),
  new PokemonSpecies(Species.WOOLOO, 8, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.DUBWOOL, 8, false, false, false, Type.NORMAL, null, 127, 50, false),
  new PokemonSpecies(Species.CHEWTLE, 8, false, false, false, Type.WATER, null, 255, 50, false),
  new PokemonSpecies(Species.DREDNAW, 8, false, false, false, Type.WATER, Type.ROCK, 75, 50, false, true,
		 new PokemonForm("Normal", "", Type.WATER, Type.ROCK, 75),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.WATER, Type.ROCK, 75)),
  new PokemonSpecies(Species.YAMPER, 8, false, false, false, Type.ELECTRIC, null, 255, 50, false),
  new PokemonSpecies(Species.BOLTUND, 8, false, false, false, Type.ELECTRIC, null, 45, 50, false),
  new PokemonSpecies(Species.ROLYCOLY, 8, false, false, false, Type.ROCK, null, 255, 50, false),
  new PokemonSpecies(Species.CARKOL, 8, false, false, false, Type.ROCK, Type.FIRE, 120, 50, false),
  new PokemonSpecies(Species.COALOSSAL, 8, false, false, false, Type.ROCK, Type.FIRE, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.ROCK, Type.FIRE, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.ROCK, Type.FIRE, 45)),
  new PokemonSpecies(Species.APPLIN, 8, false, false, false, Type.GRASS, Type.DRAGON, 255, 50, false),
  new PokemonSpecies(Species.FLAPPLE, 8, false, false, false, Type.GRASS, Type.DRAGON, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.GRASS, Type.DRAGON, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.GRASS, Type.DRAGON, 45)),
  new PokemonSpecies(Species.APPLETUN, 8, false, false, false, Type.GRASS, Type.DRAGON, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.GRASS, Type.DRAGON, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.GRASS, Type.DRAGON, 45)),
  new PokemonSpecies(Species.SILICOBRA, 8, false, false, false, Type.GROUND, null, 255, 50, false),
  new PokemonSpecies(Species.SANDACONDA, 8, false, false, false, Type.GROUND, null, 120, 50, false, true,
		 new PokemonForm("Normal", "", Type.GROUND, null, 120),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.GROUND, null, 120)),
  new PokemonSpecies(Species.CRAMORANT, 8, false, false, false, Type.FLYING, Type.WATER, 45, 50, false, false,
		 new PokemonForm("Normal", "", Type.FLYING, Type.WATER, 45),
		 new PokemonForm("Gulping Form", "gulping", Type.FLYING, Type.WATER, 45),
		 new PokemonForm("Gorging Form", "gorging", Type.FLYING, Type.WATER, 45)),
  new PokemonSpecies(Species.ARROKUDA, 8, false, false, false, Type.WATER, null, 255, 50, false),
  new PokemonSpecies(Species.BARRASKEWDA, 8, false, false, false, Type.WATER, null, 60, 50, false),
  new PokemonSpecies(Species.TOXEL, 8, false, false, false, Type.ELECTRIC, Type.POISON, 75, 50, false),
  new PokemonSpecies(Species.TOXTRICITY, 8, false, false, false, Type.ELECTRIC, Type.POISON, 45, 50, false, true,
		 new PokemonForm("Amped Form", "amped", Type.ELECTRIC, Type.POISON, 45, false, ""),
		 new PokemonForm("Low-Key Form", "lowkey", Type.ELECTRIC, Type.POISON, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.ELECTRIC, Type.POISON, 45)),
  new PokemonSpecies(Species.SIZZLIPEDE, 8, false, false, false, Type.FIRE, Type.BUG, 190, 50, false),
  new PokemonSpecies(Species.CENTISKORCH, 8, false, false, false, Type.FIRE, Type.BUG, 75, 50, false, true,
		 new PokemonForm("Normal", "", Type.FIRE, Type.BUG, 75),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.FIRE, Type.BUG, 75)),
  new PokemonSpecies(Species.CLOBBOPUS, 8, false, false, false, Type.FIGHTING, null, 180, 50, false),
  new PokemonSpecies(Species.GRAPPLOCT, 8, false, false, false, Type.FIGHTING, null, 45, 50, false),
  new PokemonSpecies(Species.SINISTEA, 8, false, false, false, Type.GHOST, null, 120, null, false, false,
		 new PokemonForm("Phony Form", "phony", Type.GHOST, null, 120, false, ""),
		 new PokemonForm("Antique Form", "antique", Type.GHOST, null, 120, false, "")),
  new PokemonSpecies(Species.POLTEAGEIST, 8, false, false, false, Type.GHOST, null, 60, null, false, false,
		 new PokemonForm("Phony Form", "phony", Type.GHOST, null, 60, false, ""),
		 new PokemonForm("Antique Form", "antique", Type.GHOST, null, 60, false, "")),
  new PokemonSpecies(Species.HATENNA, 8, false, false, false, Type.PSYCHIC, null, 235, 0, false),
  new PokemonSpecies(Species.HATTREM, 8, false, false, false, Type.PSYCHIC, null, 120, 0, false),
  new PokemonSpecies(Species.HATTERENE, 8, false, false, false, Type.PSYCHIC, Type.FAIRY, 45, 0, false, true,
		 new PokemonForm("Normal", "", Type.PSYCHIC, Type.FAIRY, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.PSYCHIC, Type.FAIRY, 45)),
  new PokemonSpecies(Species.IMPIDIMP, 8, false, false, false, Type.DARK, Type.FAIRY, 255, 100, false),
  new PokemonSpecies(Species.MORGREM, 8, false, false, false, Type.DARK, Type.FAIRY, 120, 100, false),
  new PokemonSpecies(Species.GRIMMSNARL, 8, false, false, false, Type.DARK, Type.FAIRY, 45, 100, false, true,
		 new PokemonForm("Normal", "", Type.DARK, Type.FAIRY, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.DARK, Type.FAIRY, 45)),
  new PokemonSpecies(Species.OBSTAGOON, 8, false, false, false, Type.DARK, Type.NORMAL, 45, 50, false),
  new PokemonSpecies(Species.PERRSERKER, 8, false, false, false, Type.STEEL, null, 90, 50, false),
  new PokemonSpecies(Species.CURSOLA, 8, false, false, false, Type.GHOST, null, 30, 25, false),
  new PokemonSpecies(Species.SIRFETCHD, 8, false, false, false, Type.FIGHTING, null, 45, 50, false),
  new PokemonSpecies(Species.MR_RIME, 8, false, false, false, Type.ICE, Type.PSYCHIC, 45, 50, false),
  new PokemonSpecies(Species.RUNERIGUS, 8, false, false, false, Type.GROUND, Type.GHOST, 90, 50, false),
  new PokemonSpecies(Species.MILCERY, 8, false, false, false, Type.FAIRY, null, 200, 0, false),
  new PokemonSpecies(Species.ALCREMIE, 8, false, false, false, Type.FAIRY, null, 100, 0, false, true,
		 new PokemonForm("Vanilla Cream", "vanilla-cream", Type.FAIRY, null, 100, false, ""),
		 new PokemonForm("Ruby Cream", "ruby-cream", Type.FAIRY, null, 100, false),
		 new PokemonForm("Matcha Cream", "matcha-cream", Type.FAIRY, null, 100, false),
		 new PokemonForm("Mint Cream", "mint-cream", Type.FAIRY, null, 100, false),
		 new PokemonForm("Lemon Cream", "lemon-cream", Type.FAIRY, null, 100, false),
		 new PokemonForm("Salted Cream", "salted-cream", Type.FAIRY, null, 100, false),
		 new PokemonForm("Ruby Swirl", "ruby-swirl", Type.FAIRY, null, 100, false),
		 new PokemonForm("Caramel Swirl", "caramel-swirl", Type.FAIRY, null, 100, false),
		 new PokemonForm("Rainbow Swirl", "rainbow-swirl", Type.FAIRY, null, 100, false),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.FAIRY, null, 100)),
  new PokemonSpecies(Species.FALINKS, 8, false, false, false, Type.FIGHTING, null, 45, null, false),
  new PokemonSpecies(Species.PINCURCHIN, 8, false, false, false, Type.ELECTRIC, null, 75, 50, false),
  new PokemonSpecies(Species.SNOM, 8, false, false, false, Type.ICE, Type.BUG, 190, 50, false),
  new PokemonSpecies(Species.FROSMOTH, 8, false, false, false, Type.ICE, Type.BUG, 75, 50, false),
  new PokemonSpecies(Species.STONJOURNER, 8, false, false, false, Type.ROCK, null, 60, 50, false),
  new PokemonSpecies(Species.EISCUE, 8, false, false, false, Type.ICE, null, 60, 50, false, false,
		 new PokemonForm("Ice Face", "", Type.ICE, null, 60),
		 new PokemonForm("No Ice", "no-ice", Type.ICE, null, 60)),
  new PokemonSpecies(Species.INDEEDEE, 8, false, false, false, Type.PSYCHIC, Type.NORMAL, 30, 50, false, false,
		 new PokemonForm("Male", "male", Type.PSYCHIC, Type.NORMAL, 30, false, ""),
		 new PokemonForm("Female", "female", Type.PSYCHIC, Type.NORMAL, 30)),
  new PokemonSpecies(Species.MORPEKO, 8, false, false, false, Type.ELECTRIC, Type.DARK, 180, 50, false, false,
		 new PokemonForm("Full Belly Mode", "full-belly", Type.ELECTRIC, Type.DARK, 180, false, ""),
		 new PokemonForm("Hangry Mode", "hangry", Type.ELECTRIC, Type.DARK, 180)),
  new PokemonSpecies(Species.CUFANT, 8, false, false, false, Type.STEEL, null, 190, 50, false),
  new PokemonSpecies(Species.COPPERAJAH, 8, false, false, false, Type.STEEL, null, 90, 50, false, true,
		 new PokemonForm("Normal", "", Type.STEEL, null, 90),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.STEEL, null, 90)),
  new PokemonSpecies(Species.DRACOZOLT, 8, false, false, false, Type.ELECTRIC, Type.DRAGON, 45, null, false),
  new PokemonSpecies(Species.ARCTOZOLT, 8, false, false, false, Type.ELECTRIC, Type.ICE, 45, null, false),
  new PokemonSpecies(Species.DRACOVISH, 8, false, false, false, Type.WATER, Type.DRAGON, 45, null, false),
  new PokemonSpecies(Species.ARCTOVISH, 8, false, false, false, Type.WATER, Type.ICE, 45, null, false),
  new PokemonSpecies(Species.DURALUDON, 8, false, false, false, Type.STEEL, Type.DRAGON, 45, 50, false, true,
		 new PokemonForm("Normal", "", Type.STEEL, Type.DRAGON, 45),
		 new PokemonForm("G-Max", SpeciesFormKey.GIGANTAMAX, Type.STEEL, Type.DRAGON, 45)),
  new PokemonSpecies(Species.DREEPY, 8, false, false, false, Type.DRAGON, Type.GHOST, 45, 50, false),
  new PokemonSpecies(Species.DRAKLOAK, 8, false, false, false, Type.DRAGON, Type.GHOST, 45, 50, false),
  new PokemonSpecies(Species.DRAGAPULT, 8, false, false, false, Type.DRAGON, Type.GHOST, 45, 50, false),
  new PokemonSpecies(Species.ZACIAN, 8, false, true, false, Type.FAIRY, null, 10, null, false, false,
		 new PokemonForm("Hero of Many Battles", "hero", Type.FAIRY, null, 10, false, ""),
		 new PokemonForm("Crowned", "crowned", Type.FAIRY, Type.STEEL, 10)),
  new PokemonSpecies(Species.ZAMAZENTA, 8, false, true, false, Type.FIGHTING, null, 10, null, false, false,
		 new PokemonForm("Hero of Many Battles", "hero", Type.FIGHTING, null, 10, false, ""),
		 new PokemonForm("Crowned", "crowned", Type.FIGHTING, Type.STEEL, 10)),
  new PokemonSpecies(Species.ETERNATUS, 8, false, true, false, Type.POISON, Type.DRAGON, 255, null, false, true,
		 new PokemonForm("Normal", "", Type.POISON, Type.DRAGON, 255),
		 new PokemonForm("E-Max", "eternamax", Type.POISON, Type.DRAGON, 255)),
  new PokemonSpecies(Species.KUBFU, 8, true, false, false, Type.FIGHTING, null, 3, 87.5, false),
  new PokemonSpecies(Species.URSHIFU, 8, true, false, false, Type.FIGHTING, Type.DARK, 3, 87.5, false, true,
		 new PokemonForm("Single Strike Style", "single-strike", Type.FIGHTING, Type.DARK, 3, false, ""),
		 new PokemonForm("Rapid Strike Style", "rapid-strike", Type.FIGHTING, Type.WATER, 3),
		 new PokemonForm("G-Max Single Strike Style", SpeciesFormKey.GIGANTAMAX_SINGLE, Type.FIGHTING, Type.DARK, 3),
		 new PokemonForm("G-Max Rapid Strike Style", SpeciesFormKey.GIGANTAMAX_RAPID, Type.FIGHTING, Type.WATER, 3)),
  new PokemonSpecies(Species.ZARUDE, 8, false, false, true, Type.DARK, Type.GRASS, 3, null, false, false,
		 new PokemonForm("Normal", "", Type.DARK, Type.GRASS, 3),
		 new PokemonForm("Dada", "dada", Type.DARK, Type.GRASS, 3)),
  new PokemonSpecies(Species.REGIELEKI, 8, true, false, false, Type.ELECTRIC, null, 3, null, false),
  new PokemonSpecies(Species.REGIDRAGO, 8, true, false, false, Type.DRAGON, null, 3, null, false),
  new PokemonSpecies(Species.GLASTRIER, 8, true, false, false, Type.ICE, null, 3, null, false),
  new PokemonSpecies(Species.SPECTRIER, 8, true, false, false, Type.GHOST, null, 3, null, false),
  new PokemonSpecies(Species.CALYREX, 8, true, false, false, Type.PSYCHIC, Type.GRASS, 3, null, false, true,
		 new PokemonForm("Normal", "", Type.PSYCHIC, Type.GRASS, 3),
		 new PokemonForm("Ice", "ice", Type.PSYCHIC, Type.ICE, 3),
		 new PokemonForm("Shadow", "shadow", Type.PSYCHIC, Type.GHOST, 3)),
  new PokemonSpecies(Species.WYRDEER, 8, false, false, false, Type.NORMAL, Type.PSYCHIC, 135, 50, false),
  new PokemonSpecies(Species.KLEAVOR, 8, false, false, false, Type.BUG, Type.ROCK, 115, 50, false),
  new PokemonSpecies(Species.URSALUNA, 8, false, false, false, Type.GROUND, Type.NORMAL, 75, 50, false),
  new PokemonSpecies(Species.BASCULEGION, 8, false, false, false, Type.WATER, Type.GHOST, 135, 50, false, false,
		 new PokemonForm("Male", "male", Type.WATER, Type.GHOST, 135, false, ""),
		 new PokemonForm("Female", "female", Type.WATER, Type.GHOST, 135)),
  new PokemonSpecies(Species.SNEASLER, 8, false, false, false, Type.FIGHTING, Type.POISON, 135, 50, false),
  new PokemonSpecies(Species.OVERQWIL, 8, false, false, false, Type.DARK, Type.POISON, 135, 50, false),
  new PokemonSpecies(Species.ENAMORUS, 8, true, false, false, Type.FAIRY, Type.FLYING, 3, 0, false, true,
		 new PokemonForm("Incarnate Forme", "incarnate", Type.FAIRY, Type.FLYING, 3),
		 new PokemonForm("Therian Forme", "therian", Type.FAIRY, Type.FLYING, 3)),
  new PokemonSpecies(Species.SPRIGATITO, 9, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.FLORAGATO, 9, false, false, false, Type.GRASS, null, 45, 87.5, false),
  new PokemonSpecies(Species.MEOWSCARADA, 9, false, false, false, Type.GRASS, Type.DARK, 45, 87.5, false),
  new PokemonSpecies(Species.FUECOCO, 9, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.CROCALOR, 9, false, false, false, Type.FIRE, null, 45, 87.5, false),
  new PokemonSpecies(Species.SKELEDIRGE, 9, false, false, false, Type.FIRE, Type.GHOST, 45, 87.5, false),
  new PokemonSpecies(Species.QUAXLY, 9, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.QUAXWELL, 9, false, false, false, Type.WATER, null, 45, 87.5, false),
  new PokemonSpecies(Species.QUAQUAVAL, 9, false, false, false, Type.WATER, Type.FIGHTING, 45, 87.5, false),
  new PokemonSpecies(Species.LECHONK, 9, false, false, false, Type.NORMAL, null, 255, 50, false),
  new PokemonSpecies(Species.OINKOLOGNE, 9, false, false, false, Type.NORMAL, null, 100, 50, false, false,
		 new PokemonForm("Male", "male", Type.NORMAL, null, 100, false, ""),
		 new PokemonForm("Female", "female", Type.NORMAL, null, 100)),
  new PokemonSpecies(Species.TAROUNTULA, 9, false, false, false, Type.BUG, null, 255, 50, false),
  new PokemonSpecies(Species.SPIDOPS, 9, false, false, false, Type.BUG, null, 120, 50, false),
  new PokemonSpecies(Species.NYMBLE, 9, false, false, false, Type.BUG, null, 190, 50, false),
  new PokemonSpecies(Species.LOKIX, 9, false, false, false, Type.BUG, Type.DARK, 30, 50, false),
  new PokemonSpecies(Species.PAWMI, 9, false, false, false, Type.ELECTRIC, null, 190, 50, false),
  new PokemonSpecies(Species.PAWMO, 9, false, false, false, Type.ELECTRIC, Type.FIGHTING, 80, 50, false),
  new PokemonSpecies(Species.PAWMOT, 9, false, false, false, Type.ELECTRIC, Type.FIGHTING, 45, 50, false),
  new PokemonSpecies(Species.TANDEMAUS, 9, false, false, false, Type.NORMAL, null, 150, null, false),
  new PokemonSpecies(Species.MAUSHOLD, 9, false, false, false, Type.NORMAL, null, 75, null, false, false,
		 new PokemonForm("Family of Four", "four", Type.NORMAL, null, 75),
		 new PokemonForm("Family of Three", "three", Type.NORMAL, null, 75)),
  new PokemonSpecies(Species.FIDOUGH, 9, false, false, false, Type.FAIRY, null, 190, 50, false),
  new PokemonSpecies(Species.DACHSBUN, 9, false, false, false, Type.FAIRY, null, 90, 50, false),
  new PokemonSpecies(Species.SMOLIV, 9, false, false, false, Type.GRASS, Type.NORMAL, 255, 50, false),
  new PokemonSpecies(Species.DOLLIV, 9, false, false, false, Type.GRASS, Type.NORMAL, 120, 50, false),
  new PokemonSpecies(Species.ARBOLIVA, 9, false, false, false, Type.GRASS, Type.NORMAL, 45, 50, false),
  new PokemonSpecies(Species.SQUAWKABILLY, 9, false, false, false, Type.NORMAL, Type.FLYING, 190, 50, false, false,
		 new PokemonForm("Green Plumage", "green-plumage", Type.NORMAL, Type.FLYING, 190),
		 new PokemonForm("Blue Plumage", "blue-plumage", Type.NORMAL, Type.FLYING, 190),
		 new PokemonForm("Yellow Plumage", "yellow-plumage", Type.NORMAL, Type.FLYING, 190),
		 new PokemonForm("White Plumage", "white-plumage", Type.NORMAL, Type.FLYING, 190)),
  new PokemonSpecies(Species.NACLI, 9, false, false, false, Type.ROCK, null, 255, 50, false),
  new PokemonSpecies(Species.NACLSTACK, 9, false, false, false, Type.ROCK, null, 120, 50, false),
  new PokemonSpecies(Species.GARGANACL, 9, false, false, false, Type.ROCK, null, 45, 50, false),
  new PokemonSpecies(Species.CHARCADET, 9, false, false, false, Type.FIRE, null, 90, 50, false),
  new PokemonSpecies(Species.ARMAROUGE, 9, false, false, false, Type.FIRE, Type.PSYCHIC, 25, 50, false),
  new PokemonSpecies(Species.CERULEDGE, 9, false, false, false, Type.FIRE, Type.GHOST, 25, 50, false),
  new PokemonSpecies(Species.TADBULB, 9, false, false, false, Type.ELECTRIC, null, 190, 50, false),
  new PokemonSpecies(Species.BELLIBOLT, 9, false, false, false, Type.ELECTRIC, null, 50, 50, false),
  new PokemonSpecies(Species.WATTREL, 9, false, false, false, Type.ELECTRIC, Type.FLYING, 180, 50, false),
  new PokemonSpecies(Species.KILOWATTREL, 9, false, false, false, Type.ELECTRIC, Type.FLYING, 90, 50, false),
  new PokemonSpecies(Species.MASCHIFF, 9, false, false, false, Type.DARK, null, 150, 50, false),
  new PokemonSpecies(Species.MABOSSTIFF, 9, false, false, false, Type.DARK, null, 75, 50, false),
  new PokemonSpecies(Species.SHROODLE, 9, false, false, false, Type.POISON, Type.NORMAL, 190, 50, false),
  new PokemonSpecies(Species.GRAFAIAI, 9, false, false, false, Type.POISON, Type.NORMAL, 90, 50, false),
  new PokemonSpecies(Species.BRAMBLIN, 9, false, false, false, Type.GRASS, Type.GHOST, 190, 50, false),
  new PokemonSpecies(Species.BRAMBLEGHAST, 9, false, false, false, Type.GRASS, Type.GHOST, 45, 50, false),
  new PokemonSpecies(Species.TOEDSCOOL, 9, false, false, false, Type.GROUND, Type.GRASS, 190, 50, false),
  new PokemonSpecies(Species.TOEDSCRUEL, 9, false, false, false, Type.GROUND, Type.GRASS, 90, 50, false),
  new PokemonSpecies(Species.KLAWF, 9, false, false, false, Type.ROCK, null, 120, 50, false),
  new PokemonSpecies(Species.CAPSAKID, 9, false, false, false, Type.GRASS, null, 190, 50, false),
  new PokemonSpecies(Species.SCOVILLAIN, 9, false, false, false, Type.GRASS, Type.FIRE, 75, 50, false),
  new PokemonSpecies(Species.RELLOR, 9, false, false, false, Type.BUG, null, 190, 50, false),
  new PokemonSpecies(Species.RABSCA, 9, false, false, false, Type.BUG, Type.PSYCHIC, 45, 50, false),
  new PokemonSpecies(Species.FLITTLE, 9, false, false, false, Type.PSYCHIC, null, 120, 50, false),
  new PokemonSpecies(Species.ESPATHRA, 9, false, false, false, Type.PSYCHIC, null, 60, 50, false),
  new PokemonSpecies(Species.TINKATINK, 9, false, false, false, Type.FAIRY, Type.STEEL, 190, 0, false),
  new PokemonSpecies(Species.TINKATUFF, 9, false, false, false, Type.FAIRY, Type.STEEL, 90, 0, false),
  new PokemonSpecies(Species.TINKATON, 9, false, false, false, Type.FAIRY, Type.STEEL, 45, 0, false),
  new PokemonSpecies(Species.WIGLETT, 9, false, false, false, Type.WATER, null, 255, 50, false),
  new PokemonSpecies(Species.WUGTRIO, 9, false, false, false, Type.WATER, null, 50, 50, false),
  new PokemonSpecies(Species.BOMBIRDIER, 9, false, false, false, Type.FLYING, Type.DARK, 25, 50, false),
  new PokemonSpecies(Species.FINIZEN, 9, false, false, false, Type.WATER, null, 200, 50, false),
  new PokemonSpecies(Species.PALAFIN, 9, false, false, false, Type.WATER, null, 45, 50, false, false,
		 new PokemonForm("Zero Form", "zero", Type.WATER, null, 45),
		 new PokemonForm("Hero Form", "hero", Type.WATER, null, 45)),
  new PokemonSpecies(Species.VAROOM, 9, false, false, false, Type.STEEL, Type.POISON, 190, 50, false),
  new PokemonSpecies(Species.REVAVROOM, 9, false, false, false, Type.STEEL, Type.POISON, 75, 50, false),
  new PokemonSpecies(Species.CYCLIZAR, 9, false, false, false, Type.DRAGON, Type.NORMAL, 190, 50, false),
  new PokemonSpecies(Species.ORTHWORM, 9, false, false, false, Type.STEEL, null, 25, 50, false),
  new PokemonSpecies(Species.GLIMMET, 9, false, false, false, Type.ROCK, Type.POISON, 70, 50, false),
  new PokemonSpecies(Species.GLIMMORA, 9, false, false, false, Type.ROCK, Type.POISON, 25, 50, false),
  new PokemonSpecies(Species.GREAVARD, 9, false, false, false, Type.GHOST, null, 120, 50, false),
  new PokemonSpecies(Species.HOUNDSTONE, 9, false, false, false, Type.GHOST, null, 60, 50, false),
  new PokemonSpecies(Species.FLAMIGO, 9, false, false, false, Type.FLYING, Type.FIGHTING, 100, 50, false),
  new PokemonSpecies(Species.CETODDLE, 9, false, false, false, Type.ICE, null, 150, 50, false),
  new PokemonSpecies(Species.CETITAN, 9, false, false, false, Type.ICE, null, 50, 50, false),
  new PokemonSpecies(Species.VELUZA, 9, false, false, false, Type.WATER, Type.PSYCHIC, 100, 50, false),
  new PokemonSpecies(Species.DONDOZO, 9, false, false, false, Type.WATER, null, 25, 50, false),
  new PokemonSpecies(Species.TATSUGIRI, 9, false, false, false, Type.DRAGON, Type.WATER, 100, 50, false, false,
		 new PokemonForm("Curly Form", "curly", Type.DRAGON, Type.WATER, 100),
		 new PokemonForm("Droopy Form", "droopy", Type.DRAGON, Type.WATER, 100),
		 new PokemonForm("Stretchy Form", "stretchy", Type.DRAGON, Type.WATER, 100)),
  new PokemonSpecies(Species.ANNIHILAPE, 9, false, false, false, Type.FIGHTING, Type.GHOST, 45, 50, false),
  new PokemonSpecies(Species.CLODSIRE, 9, false, false, false, Type.POISON, Type.GROUND, 90, 50, false),
  new PokemonSpecies(Species.FARIGIRAF, 9, false, false, false, Type.NORMAL, Type.PSYCHIC, 45, 50, false),
  new PokemonSpecies(Species.DUDUNSPARCE, 9, false, false, false, Type.NORMAL, null, 45, 50, false, false,
		 new PokemonForm("Two-Segment Form", "two-segment", Type.NORMAL, null, 45, false, ""),
		 new PokemonForm("Three-Segment Form", "three-segment", Type.NORMAL, null, 45)),
  new PokemonSpecies(Species.KINGAMBIT, 9, false, false, false, Type.DARK, Type.STEEL, 25, 50, false),
  new PokemonSpecies(Species.GREAT_TUSK, 9, false, false, false, Type.GROUND, Type.FIGHTING, 30, null, false),
  new PokemonSpecies(Species.SCREAM_TAIL, 9, false, false, false, Type.FAIRY, Type.PSYCHIC, 50, null, false),
  new PokemonSpecies(Species.BRUTE_BONNET, 9, false, false, false, Type.GRASS, Type.DARK, 50, null, false),
  new PokemonSpecies(Species.FLUTTER_MANE, 9, false, false, false, Type.GHOST, Type.FAIRY, 30, null, false),
  new PokemonSpecies(Species.SLITHER_WING, 9, false, false, false, Type.BUG, Type.FIGHTING, 30, null, false),
  new PokemonSpecies(Species.SANDY_SHOCKS, 9, false, false, false, Type.ELECTRIC, Type.GROUND, 30, null, false),
  new PokemonSpecies(Species.IRON_TREADS, 9, false, false, false, Type.GROUND, Type.STEEL, 30, null, false),
  new PokemonSpecies(Species.IRON_BUNDLE, 9, false, false, false, Type.ICE, Type.WATER, 50, null, false),
  new PokemonSpecies(Species.IRON_HANDS, 9, false, false, false, Type.FIGHTING, Type.ELECTRIC, 50, null, false),
  new PokemonSpecies(Species.IRON_JUGULIS, 9, false, false, false, Type.DARK, Type.FLYING, 30, null, false),
  new PokemonSpecies(Species.IRON_MOTH, 9, false, false, false, Type.FIRE, Type.POISON, 30, null, false),
  new PokemonSpecies(Species.IRON_THORNS, 9, false, false, false, Type.ROCK, Type.ELECTRIC, 30, null, false),
  new PokemonSpecies(Species.FRIGIBAX, 9, false, false, false, Type.DRAGON, Type.ICE, 45, 50, false),
  new PokemonSpecies(Species.ARCTIBAX, 9, false, false, false, Type.DRAGON, Type.ICE, 25, 50, false),
  new PokemonSpecies(Species.BAXCALIBUR, 9, false, false, false, Type.DRAGON, Type.ICE, 10, 50, false),
  new PokemonSpecies(Species.GIMMIGHOUL, 9, false, false, false, Type.GHOST, null, 45, null, false, false,
		 new PokemonForm("Chest Form", "chest", Type.GHOST, null, 45, false, ""),
		 new PokemonForm("Roaming Form", "roaming", Type.GHOST, null, 45)),
  new PokemonSpecies(Species.GHOLDENGO, 9, false, false, false, Type.STEEL, Type.GHOST, 45, null, false),
  new PokemonSpecies(Species.WO_CHIEN, 9, true, false, false, Type.DARK, Type.GRASS, 6, null, false),
  new PokemonSpecies(Species.CHIEN_PAO, 9, true, false, false, Type.DARK, Type.ICE, 6, null, false),
  new PokemonSpecies(Species.TING_LU, 9, true, false, false, Type.DARK, Type.GROUND, 6, null, false),
  new PokemonSpecies(Species.CHI_YU, 9, true, false, false, Type.DARK, Type.FIRE, 6, null, false),
  new PokemonSpecies(Species.ROARING_MOON, 9, false, false, false, Type.DRAGON, Type.DARK, 10, null, false),
  new PokemonSpecies(Species.IRON_VALIANT, 9, false, false, false, Type.FAIRY, Type.FIGHTING, 10, null, false),
  new PokemonSpecies(Species.KORAIDON, 9, false, true, false, Type.FIGHTING, Type.DRAGON, 3, null, false, false,
		 new PokemonForm("Apex Build", "apex-build", Type.FIGHTING, Type.DRAGON, 3),
		 new PokemonForm("Limited Build", "limited-build", Type.FIGHTING, Type.DRAGON, 3),
		 new PokemonForm("Sprinting Build", "sprinting-build", Type.FIGHTING, Type.DRAGON, 3),
		 new PokemonForm("Swimming Build", "swimming-build", Type.FIGHTING, Type.DRAGON, 3),
		 new PokemonForm("Gliding Build", "gliding-build", Type.FIGHTING, Type.DRAGON, 3)),
  new PokemonSpecies(Species.MIRAIDON, 9, false, true, false, Type.ELECTRIC, Type.DRAGON, 3, null, false, false,
		 new PokemonForm("Ultimate Mode", "ultimate-mode", Type.ELECTRIC, Type.DRAGON, 3),
		 new PokemonForm("Low-Power Mode", "low-power-mode", Type.ELECTRIC, Type.DRAGON, 3),
		 new PokemonForm("Drive Mode", "drive-mode", Type.ELECTRIC, Type.DRAGON, 3),
		 new PokemonForm("Aquatic Mode", "aquatic-mode", Type.ELECTRIC, Type.DRAGON, 3),
		 new PokemonForm("Glide Mode", "glide-mode", Type.ELECTRIC, Type.DRAGON, 3)),
  new PokemonSpecies(Species.WALKING_WAKE, 9, false, false, false, Type.WATER, Type.DRAGON, 5, null, false),
  new PokemonSpecies(Species.IRON_LEAVES, 9, false, false, false, Type.GRASS, Type.PSYCHIC, 5, null, false),
  new PokemonSpecies(Species.DIPPLIN, 9, false, false, false, Type.GRASS, Type.DRAGON, 45, null, false),
  new PokemonSpecies(Species.POLTCHAGEIST, 9, false, false, false, Type.GRASS, Type.GHOST, 120, null, false, false,
		 new PokemonForm("Counterfeit Form", "counterfeit", Type.GRASS, Type.GHOST, 120),
		 new PokemonForm("Artisan Form", "artisan", Type.GRASS, Type.GHOST, 120)),
  new PokemonSpecies(Species.SINISTCHA, 9, false, false, false, Type.GRASS, Type.GHOST, 60, null, false, false,
		 new PokemonForm("Unremarkable Form", "unremarkable", Type.GRASS, Type.GHOST, 60),
		 new PokemonForm("Masterpiece Form", "masterpiece", Type.GRASS, Type.GHOST, 60)),
  new PokemonSpecies(Species.OKIDOGI, 9, false, true, false, Type.POISON, Type.FIGHTING, 3, 100, false),
  new PokemonSpecies(Species.MUNKIDORI, 9, false, true, false, Type.POISON, Type.PSYCHIC, 3, 100, false),
  new PokemonSpecies(Species.FEZANDIPITI, 9, false, true, false, Type.POISON, Type.FAIRY, 3, 100, false),
  new PokemonSpecies(Species.OGERPON, 9, false, true, false, Type.GRASS, null, 5, 0, false, false,
		 new PokemonForm("Teal Mask", "teal-mask", Type.GRASS, null, 5),
		 new PokemonForm("Wellspring Mask", "wellspring-mask", Type.GRASS, Type.WATER, 5),
		 new PokemonForm("Hearthflame Mask", "hearthflame-mask", Type.GRASS, Type.FIRE, 5),
		 new PokemonForm("Cornerstone Mask", "cornerstone-mask", Type.GRASS, Type.ROCK, 5),
		 new PokemonForm("Teal Mask Terastallized", "teal-mask-tera", Type.GRASS, null, 5),
		 new PokemonForm("Wellspring Mask Terastallized", "wellspring-mask-tera", Type.GRASS, Type.WATER, 5),
		 new PokemonForm("Hearthflame Mask Terastallized", "hearthflame-mask-tera", Type.GRASS, Type.FIRE, 5),
		 new PokemonForm("Cornerstone Mask Terastallized", "cornerstone-mask-tera", Type.GRASS, Type.ROCK, 5)),
  new PokemonSpecies(Species.ARCHALUDON, 9, false, false, false, Type.STEEL, Type.DRAGON, 10, 50, false),
  new PokemonSpecies(Species.HYDRAPPLE, 9, false, false, false, Type.GRASS, Type.DRAGON, 10, 50, false),
  new PokemonSpecies(Species.GOUGING_FIRE, 9, false, false, false, Type.FIRE, Type.DRAGON, 10, null, false),
  new PokemonSpecies(Species.RAGING_BOLT, 9, false, false, false, Type.ELECTRIC, Type.DRAGON, 10, null, false),
  new PokemonSpecies(Species.IRON_BOULDER, 9, false, false, false, Type.ROCK, Type.PSYCHIC, 10, null, false),
  new PokemonSpecies(Species.IRON_CROWN, 9, false, false, false, Type.STEEL, Type.PSYCHIC, 10, null, false),
  new PokemonSpecies(Species.TERAPAGOS, 9, false, true, false, Type.NORMAL, null, 5, 50, false, false,
		 new PokemonForm("Normal Form", "", Type.NORMAL, null, 5),
		 new PokemonForm("Terastal Form", "terastal", Type.NORMAL, null, 5),
		 new PokemonForm("Stellar Form", "stellar", Type.NORMAL, null, 5)),
  new PokemonSpecies(Species.PECHARUNT, 9, false, false, true, Type.POISON, Type.GHOST, 3, null, false),
  new PokemonSpecies(Species.ALOLA_RATTATA, 7, false, false, false, Type.DARK, Type.NORMAL, 255, 50, false),
  new PokemonSpecies(Species.ALOLA_RATICATE, 7, false, false, false, Type.DARK, Type.NORMAL, 127, 50, false),
  new PokemonSpecies(Species.ALOLA_RAICHU, 7, false, false, false, Type.ELECTRIC, Type.PSYCHIC, 75, 50, false),
  new PokemonSpecies(Species.ALOLA_SANDSHREW, 7, false, false, false, Type.ICE, Type.STEEL, 255, 50, false),
  new PokemonSpecies(Species.ALOLA_SANDSLASH, 7, false, false, false, Type.ICE, Type.STEEL, 90, 50, false),
  new PokemonSpecies(Species.ALOLA_VULPIX, 7, false, false, false, Type.ICE, null, 190, 25, false),
  new PokemonSpecies(Species.ALOLA_NINETALES, 7, false, false, false, Type.ICE, Type.FAIRY, 75, 25, false),
  new PokemonSpecies(Species.ALOLA_DIGLETT, 7, false, false, false, Type.GROUND, Type.STEEL, 255, 50, false),
  new PokemonSpecies(Species.ALOLA_DUGTRIO, 7, false, false, false, Type.GROUND, Type.STEEL, 50, 50, false),
  new PokemonSpecies(Species.ALOLA_MEOWTH, 7, false, false, false, Type.DARK, null, 255, 50, false),
  new PokemonSpecies(Species.ALOLA_PERSIAN, 7, false, false, false, Type.DARK, null, 90, 50, false),
  new PokemonSpecies(Species.ALOLA_GEODUDE, 7, false, false, false, Type.ROCK, Type.ELECTRIC, 255, 50, false),
  new PokemonSpecies(Species.ALOLA_GRAVELER, 7, false, false, false, Type.ROCK, Type.ELECTRIC, 120, 50, false),
  new PokemonSpecies(Species.ALOLA_GOLEM, 7, false, false, false, Type.ROCK, Type.ELECTRIC, 45, 50, false),
  new PokemonSpecies(Species.ALOLA_GRIMER, 7, false, false, false, Type.POISON, Type.DARK, 190, 50, false),
  new PokemonSpecies(Species.ALOLA_MUK, 7, false, false, false, Type.POISON, Type.DARK, 75, 50, false),
  new PokemonSpecies(Species.ALOLA_EXEGGUTOR, 7, false, false, false, Type.GRASS, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.ALOLA_MAROWAK, 7, false, false, false, Type.FIRE, Type.GHOST, 75, 50, false),
  new PokemonSpecies(Species.ETERNAL_FLOETTE, 6, false, false, false, Type.FAIRY, null, 120, 0, false),
  new PokemonSpecies(Species.GALAR_MEOWTH, 8, false, false, false, Type.STEEL, null, 255, 50, false),
  new PokemonSpecies(Species.GALAR_PONYTA, 8, false, false, false, Type.PSYCHIC, null, 190, 50, false),
  new PokemonSpecies(Species.GALAR_RAPIDASH, 8, false, false, false, Type.PSYCHIC, Type.FAIRY, 60, 50, false),
  new PokemonSpecies(Species.GALAR_SLOWPOKE, 8, false, false, false, Type.PSYCHIC, null, 190, 50, false),
  new PokemonSpecies(Species.GALAR_SLOWBRO, 8, false, false, false, Type.POISON, Type.PSYCHIC, 75, 50, false),
  new PokemonSpecies(Species.GALAR_FARFETCHD, 8, false, false, false, Type.FIGHTING, null, 45, 50, false),
  new PokemonSpecies(Species.GALAR_WEEZING, 8, false, false, false, Type.POISON, Type.FAIRY, 60, 50, false),
  new PokemonSpecies(Species.GALAR_MR_MIME, 8, false, false, false, Type.ICE, Type.PSYCHIC, 45, 50, false),
  new PokemonSpecies(Species.GALAR_ARTICUNO, 8, true, false, false, Type.PSYCHIC, Type.FLYING, 3, null, false),
  new PokemonSpecies(Species.GALAR_ZAPDOS, 8, true, false, false, Type.FIGHTING, Type.FLYING, 3, null, false),
  new PokemonSpecies(Species.GALAR_MOLTRES, 8, true, false, false, Type.DARK, Type.FLYING, 3, null, false),
  new PokemonSpecies(Species.GALAR_SLOWKING, 8, false, false, false, Type.POISON, Type.PSYCHIC, 70, 50, false),
  new PokemonSpecies(Species.GALAR_CORSOLA, 8, false, false, false, Type.GHOST, null, 60, 25, false),
  new PokemonSpecies(Species.GALAR_ZIGZAGOON, 8, false, false, false, Type.DARK, Type.NORMAL, 255, 50, false),
  new PokemonSpecies(Species.GALAR_LINOONE, 8, false, false, false, Type.DARK, Type.NORMAL, 90, 50, false),
  new PokemonSpecies(Species.GALAR_DARUMAKA, 8, false, false, false, Type.ICE, null, 120, 50, false),
  new PokemonSpecies(Species.GALAR_DARMANITAN, 8, false, false, false, Type.ICE, null, 60, 50, false, true,
		 new PokemonForm("Standard Mode", "", Type.ICE, null, 60),
		 new PokemonForm("Zen Mode", "zen", Type.ICE, Type.FIRE, 60)),
  new PokemonSpecies(Species.GALAR_YAMASK, 8, false, false, false, Type.GROUND, Type.GHOST, 190, 50, false),
  new PokemonSpecies(Species.GALAR_STUNFISK, 8, false, false, false, Type.GROUND, Type.STEEL, 75, 50, false),
  new PokemonSpecies(Species.HISUI_GROWLITHE, 8, false, false, false, Type.FIRE, Type.ROCK, 190, 75, false),
  new PokemonSpecies(Species.HISUI_ARCANINE, 8, false, false, false, Type.FIRE, Type.ROCK, 85, 75, false),
  new PokemonSpecies(Species.HISUI_VOLTORB, 8, false, false, false, Type.ELECTRIC, Type.GRASS, 190, null, false),
  new PokemonSpecies(Species.HISUI_ELECTRODE, 8, false, false, false, Type.ELECTRIC, Type.GRASS, 60, null, false),
  new PokemonSpecies(Species.HISUI_TYPHLOSION, 8, false, false, false, Type.FIRE, Type.GHOST, 45, 87.5, false),
  new PokemonSpecies(Species.HISUI_QWILFISH, 8, false, false, false, Type.DARK, Type.POISON, 45, 50, false),
  new PokemonSpecies(Species.HISUI_SNEASEL, 8, false, false, false, Type.FIGHTING, Type.POISON, 60, 50, true),
  new PokemonSpecies(Species.HISUI_SAMUROTT, 8, false, false, false, Type.WATER, Type.DARK, 45, 87.5, false),
  new PokemonSpecies(Species.HISUI_LILLIGANT, 8, false, false, false, Type.GRASS, Type.FIGHTING, 75, 0, false),
  new PokemonSpecies(Species.HISUI_ZORUA, 8, false, false, false, Type.NORMAL, Type.GHOST, 75, 87.5, false),
  new PokemonSpecies(Species.HISUI_ZOROARK, 8, false, false, false, Type.NORMAL, Type.GHOST, 45, 87.5, false),
  new PokemonSpecies(Species.HISUI_BRAVIARY, 8, false, false, false, Type.PSYCHIC, Type.FLYING, 60, 100, false),
  new PokemonSpecies(Species.HISUI_SLIGGOO, 8, false, false, false, Type.STEEL, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.HISUI_GOODRA, 8, false, false, false, Type.STEEL, Type.DRAGON, 45, 50, false),
  new PokemonSpecies(Species.HISUI_AVALUGG, 8, false, false, false, Type.ICE, Type.ROCK, 55, 50, false),
  new PokemonSpecies(Species.HISUI_DECIDUEYE, 8, false, false, false, Type.GRASS, Type.FIGHTING, 45, 87.5, false),
  new PokemonSpecies(Species.PALDEA_TAUROS, 9, false, false, false, Type.FIGHTING, null, 45, 100, false, false,
		 new PokemonForm("Combat Breed", "combat", Type.FIGHTING, null, 45, false, ""),
		 new PokemonForm("Blaze Breed", "blaze", Type.FIGHTING, Type.FIRE, 45),
		 new PokemonForm("Aqua Breed", "aqua", Type.FIGHTING, Type.WATER, 45)),
  new PokemonSpecies(Species.PALDEA_WOOPER, 9, false, false, false, Type.POISON, Type.GROUND, 255, 50, false),
  new PokemonSpecies(Species.BLOODMOON_URSALUNA, 9, false, false, false, Type.GROUND, Type.NORMAL, 75, 50, false)
);
