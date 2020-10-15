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

function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).execute();
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this._candidate = candidate
    this._medicalExam = medicalExam
    this._scoringGuide = scoringGuide
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this._medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true
    }
    let cetificationGrade = 'regular';
    if (this._scoringGuide.stateWithLowCerification(this._candidate.originState)) {
      cetificationGrade = 'low'
      result -= 5;
    }
    result -= M < ath.max(healthLevel - 5, 0);
    return result;
  }
}
