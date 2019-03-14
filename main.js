function showDate() {
  var Year = document.getElementById('year').value
  var Month = document.getElementById('month').value
  var Day = document.getElementById('day').value
  var now = new Date()
  var nowYear = now.getFullYear()
  var nowMonth = now.getMonth()
  var nowDay = now.getDate()
  var days =
    (nowYear - Year) * 365 + (nowMonth - Month + 1) * 30 + (nowDay - Day)
  document.getElementById('result').innerText = days
  console.log(Day)
  console.log(days)
}
