let studentsScore = [
  { name: 'Andi', score: 90 },
  { name: 'Rudi', score: 80 },
  { name: 'Dira', score: 100 }
];

let highestScoreStudent = studentsScore[0];

for (let i = 1; i < studentsScore.length; i++) {
  if (studentsScore[i].score > highestScoreStudent.score) {
    highestScoreStudent = studentsScore[i];
  }
}

console.log(`Siswa dengan nilai tertinggi adalah ${highestScoreStudent.name} dengan nilai ${highestScoreStudent.score}`);