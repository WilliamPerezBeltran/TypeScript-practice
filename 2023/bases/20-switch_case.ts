let month: string;
month = 'Jul';

switch (month) {
  case 'Jan':
    console.log('no se sumer');
    break;
  case 'Feb':
    console.log('no se sumer');
    break;
  case 'Mar':
    console.log('no se sumer');
    break;
  case 'Apr':
    console.log('no se sumer');
    break;
  case 'May':
    console.log('no se sumer');
    break;
  case 'Jun':
    console.log('Es sumer');
    break;
  case 'Jul':
    console.log('Es sumer');
    break;
  case 'Ago':
    console.log('Es sumer');
    break;
  case 'Sep':
    console.log('no se sumer');
    break;
  case 'Oct':
    console.log('no se sumer');
    break;
  case 'Nob':
    console.log('no se sumer');
    break;
  case 'Dec':
    console.log('no se sumer');
    break;
}

switch (month) {
  case 'Jun':
    console.log('Es sumer');
    break;
  case 'Jul':
    console.log('Es sumer');
    break;
  case 'Ago':
    console.log('Es sumer');
    break;
  default:
    console.log('no se sumer');
    break;
}

function isSummer(month: string): boolean {
  let summer = false;
  switch (month) {
    case 'Jun':
      summer = true;
      break;
    case 'Jul':
      summer = true;
      break;
    case 'Ago':
      summer = true;
      break;
  }

  return summer;
}

console.log(isSummer('Jul'));
console.log(isSummer('Dec'));
console.log(isSummer('Ago'));
console.log(isSummer('Jan'));
console.log('==========================');

let isSummmer = function (month: string): boolean {
  let summer = false;
  switch (month) {
    case 'Jun':
      summer = true;
      break;
    case 'Jul':
      summer = true;
      break;
    case 'Ago':
      summer = true;
      break;
  }

  return summer;
};

console.log(isSummmer('Jan'));
console.log('==========================');

let isSummmmer = (month: string): boolean => {
  let summer = false;
  switch (month) {
    case 'Jun':
      summer = true;
      break;
    case 'Jul':
      summer = true;
      break;
    case 'Ago':
      summer = true;
      break;
  }

  return summer;
};

console.log(isSummmmer('Jan'));
