import { female } from 'female';
import { male } from 'female';
import { last } from 'last';

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

function get_name(option) {
  const selected = Math.random() * 90;
  const names = option //TODO get proper array
  for (let i = 0; i <= names.length; i++) {
    if(names[i][1] > selected) return names[i][0];
  }
  return ""  // Return empty string if file is empty
}

exports.get_first_name(gender = null) {
  if(!gender) {
    gender = Math.random() >= 0.5 ? 'male' : 'female';
  }
  let name
  if (gender == 'male') {
    return capitalize(get_name(male))
  } else if (gender == 'female') {
    return capitalize(get_name(female))
  } else {
    throw "Only 'male' and 'female' are supported as gender";
  }
}

exports.get_last_name() {
    return capitalize(get_name(last))
}

exports.get_full_name(gender = null) {
  return get_first_name(gender).concat(" ", get_last_name())
}
