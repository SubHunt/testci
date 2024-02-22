// import sum from './basic';

export default function characterStatus(character) {
    let status = '';
    if (character.health > 50) {
        status = 'healthy';
    } else if (character.health > 14 && character.health < 51) {
        status = 'wounded';
    } else if (character.health > 0 && character.health < 15){
        status = 'critical';
    } else {
        status = 'dead';
      }
    return status;
  }

// console.log('worked');

// console.log(sum([1, 2]));