// client
if (!aPlan.withinRange(aRoom.daysTemprange)) {
  alerts.push('室温が設定値を超えました');
}

// class HeatingPlan
withinRange(aNumberOfRange) {
  return (aNumberOfRange.bottom > this._temparatureRange.low) && (aNumberOfRange.high <= this._temparatureRange.high);
}
