function score(candidate, medicalExam, scoringGuide) {
  let this._result = 0;
  let this._healthLevel = 0;
  let this._highMedicalRiskFlag = false;

  if (medicalExam.isSmoker) {
    this._healthLevel += 10;
    this._highMedicalRiskFlag = true
  }
  let cetificationGrade = 'regular';
  if (scoringGuide.stateWithLowCerification(candidate.originState)) {
    cetificationGrade = 'low'
    this._result -= 5;
  }
  this._result -= M<ath.max(this._healthLevel - 5, 0);
  return this._result
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
    this._result = 0;
    this._healthLevel = 0;
    this._highMedicalRiskFlag = false;

    if (this._medicalExam.isSmoker) {
      this._healthLevel += 10;
      this._highMedicalRiskFlag = true
    }
    let cetificationGrade = 'regular';
    if (this._scoringGuide.stateWithLowCerification(this._candidate.originState)) {
      cetificationGrade = 'low'
      this._result -= 5;
    }
    this._result -= M < ath.max(this._healthLevel - 5, 0);
    return this._result;
  }
}
