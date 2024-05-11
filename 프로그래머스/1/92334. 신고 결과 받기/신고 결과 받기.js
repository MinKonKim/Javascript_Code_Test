function solution(id_list, report, k) {
  var answer = [];

  let report_list = new Map(id_list.map((name) => [name, []]));
  let reported_cnt = new Map(id_list.map((name) => [name, 0]));

  report.forEach((rep) => {
    let [from, to] = rep.split(" ");

    if (!report_list.get(from).includes(to)) {
      report_list.get(from).push(to);
      reported_cnt.set(to, reported_cnt.get(to) + 1);
    }
  });
  for (let value of report_list.values()) {
    let reporting_cnt = 0;
    value.forEach((name) => {
      if (reported_cnt.get(name) >= k) {
        reporting_cnt++;
      }
    });
    answer.push(reporting_cnt);
  }

  return answer;
}
