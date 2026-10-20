var motoGP = [
  {
    circuit: 'Losail',
    location: 'Qatar',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  },
  {
    circuit: 'Autodromo',
    location: 'Argentine',
    winner: {
      firstName: 'Cal',
      lastName: 'Crutchlow',
      country: 'UK'
    }
  },
  {
    circuit: 'De Jerez',
    location: 'Spain',
    winner: {
      firstName: 'Valentino',
      lastName: 'Rossi',
      country: 'Italy'
    }
  },
  {
    circuit: 'Mugello',
    location: 'Italy',
    winner: {
      firstName: 'Andrea',
      lastName: 'Dovizioso',
      country: 'Italy'
    }
  }
];

function groupWinnersByCountry(data) {
  var result = {};

  data.forEach(function(item) {
    var country = item.winner.country;
    var fullName = item.winner.firstName + ' ' + item.winner.lastName;
    var winLoc = item.circuit + ', ' + item.location;

    if (!result[country]) {
      result[country] = {
        winningCircuits: [],
        totalWin: 0
      };
    }

    result[country].winningCircuits.push({
      name: fullName,
      winLocation: winLoc
    });

    result[country].totalWin += 1;
  });

  return result;
}

function printCustom(obj) {
  let output = '{\n';
  const countries = Object.keys(obj);

  countries.forEach((country, index) => {
    const data = obj[country];
    output += `  ${country}: {\n`;
    output += `    winningCircuits: [\n`;

    data.winningCircuits.forEach((item, itemIndex) => {
      output += `      { name: '${item.name}', winLocation: '${item.winLocation}' }`;
      if (itemIndex < data.winningCircuits.length - 1) {
        output += `,\n`;
      } else {
        output += `\n`;
      }
    });

    output += `    ],\n`;
    output += `    totalWin: ${data.totalWin}\n`;
    output += `  }`;

    if (index < countries.length - 1) {
      output += `,\n`;
    } else {
      output += `\n`;
    }
  });

  output += '}';
  console.log(output);
}

// Menampilkan hasil yang persis dengan perintah soal
var outputData = groupWinnersByCountry(motoGP);
printCustom(outputData);