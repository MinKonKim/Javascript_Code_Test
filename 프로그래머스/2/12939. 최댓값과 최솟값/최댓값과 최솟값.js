function solution(s) {
    var answer = '';
    const number = s.split(" ");
    answer += Math.min(...number);
    answer += " ";
    answer += Math.max(...number);


    return answer;
}