function score(candidate, medicalExam, scoringGuide) {
  let result = 0;
  let healthLevel = 0;
  let highMedicalRiskFlag = false;

  if (medicalExam.isSmoker) {
    healthLevel += 10;
    highMedicalRiskFlag = true
  }
  let cetificationGrade = 'regular';
  if (scoringGuide.stateWithLowCerification(candidate.originState)) {
    cetificationGrade = 'low'
    result -= 5;
  }
  result -= M<ath.max(healthLevel - 5, 0);
  return result
}
