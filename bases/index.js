var fs = require('fs');

fs.readFile('lista.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }

  let list = data.toString().split(',');
  list = list[0].toString().split('\n');
  list.shift();

  let array = [];
  let n = 6;

  for (const element of list) {
    if (
      element != 'CONTROL FLOW STATEMENTS' ||
      element != 'FUNCTIONS' ||
      element != 'CLASSES' ||
      element != 'INTERFACES' ||
      element != 'GENERICS'
    ) {
      rowName =
        n <= 9
          ? `0${n}-${element.split(' ').join('_').toLowerCase()}.ts`
          : `${n}-${element.split(' ').join('_').toLowerCase()}.ts`;
      // console.log(`0${n}${element.split(' ').join('_').toLowerCase()}.ts`);

      console.log(rowName);
      n++;

      const data = '';

      fs.writeFile(rowName, data, (err) => {
        if (err) {
          throw err;
        }
        console.log('Data has been written to file successfully.');
      });
    }
  }
});
