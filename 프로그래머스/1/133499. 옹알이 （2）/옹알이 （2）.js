
function solution(babbling) {
  // 유효한 발음 정의
  const validPronunciations = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    let isValid = true;

    // 연속하는 발음 체크를 위해 이전 발음 저장
    let previousPronunciation = "";

    // 각 단어를 유효한 발음으로 분할
    for (let pronunciation of validPronunciations) {
      word = word.split(pronunciation).join(" " + pronunciation + " ");
    }

    // 분할한 발음을 배열로 변환
    let splittedWords = word.trim().split(/\s+/);
    
    for (let splitWord of splittedWords) {
      // 빈 문자열이거나 유효하지 않은 발음이 포함된 경우
      if (splitWord === "" || !validPronunciations.includes(splitWord)) {
        isValid = false;
        break;
      }
      // 연속하는 같은 발음이 발생할 경우
      if (previousPronunciation === splitWord) {
        isValid = false;
        break;
      }
      previousPronunciation = splitWord;
    }

    if (isValid) {
      count++;
    }
  }
  return count;
}

solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]);
