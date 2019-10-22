import { female } from 'female';
import { male } from 'female';
import { last } from 'last';

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
}

function getName(option) {
  const selected = Math.random() * 90;
  for (let i = 0; i <= option.length; i++) {
    if(option[i][1] > selected) return option[i][0];
  }
  return ""  // Return empty string if file is empty
}

function getFirstName(gender = null) {
  if(!gender) {
    gender = Math.random() >= 0.5 ? 'male' : 'female';
  }
  let name
  if (gender == 'male') {
    return capitalize(getName(male))
  } else if (gender == 'female') {
    return capitalize(getName(female))
  } else {
    throw "Only 'male' and 'female' are supported as gender";
  }
}

function getLastName() {
    return capitalize(getName(last))
}

function getFullName(gender = null) {
  return getFirstName(gender).concat(" ", getLastName())
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
}
