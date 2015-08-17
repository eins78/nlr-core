formatTime = (h, m) ->
  m = m < 10 ? '0' + m : m
  "#{h}:#{m}"

exports.formatTime = formatTime;

exports.formatTimeInterval = (interval) ->
  bh = interval[0][0]
  bm = interval[0][1]
  eh = interval[1][0]
  em = interval[1][1]

  "#{formatTime(bh, bm)} - #{formatTime(eh, em)}"
