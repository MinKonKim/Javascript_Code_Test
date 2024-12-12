function solution(msg) {
    // 초기 사전 생성 (A-Z, 1-26 색인)
    const dictionary = new Object(null);
    for (let i = 0; i < 26; i++) {
        dictionary[String.fromCharCode(65 + i)] = i + 1;
    }
    
    const result = [];
    let nextIndex = 27;
    let w = '';
    
    for (let i = 0; i < msg.length; i++) {
        const c = msg[i];
        const currentWord = w + c;
        
        if (dictionary[currentWord]) {
            // 현재 단어가 사전에 있으면 w 갱신
            w = currentWord;
        } else {
            // 현재 단어가 사전에 없으면
            // w의 색인 번호를 결과에 추가
            result.push(dictionary[w]);
            
            // 새로운 단어를 사전에 추가
            dictionary[currentWord] = nextIndex++;
            
            // w를 현재 글자로 초기화
            w = c;
        }
    }
    
    // 마지막 단어의 색인 번호 추가
    if (w) {
        result.push(dictionary[w]);
    }
    
    return result;
}