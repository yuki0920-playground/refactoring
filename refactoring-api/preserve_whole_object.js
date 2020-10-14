// client
const low = aRoom.daysTemprange.low;
const high = aRoom.daysTemprange.high;
if (!aPlan.withinRange(low, high)) {
  alerts.push('室温が設定値を超えました');
}


// class HeatingPlan
withinRange(bottom, top) {
  return (bottom > this._temparatureRange.low) && (top <= this._temparatureRange.high);
}
