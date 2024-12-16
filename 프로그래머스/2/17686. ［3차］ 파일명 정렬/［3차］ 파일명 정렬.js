function parseFile(file) {
    const match = file.match(/^([a-zA-Z\-\. ]+)(\d+)(.*)$/); // HEAD, NUMBER, TAIL 추출
    const head = match[1];
    const number = match[2];
    return { head, number: parseInt(number, 10), original: file };
}

function solution(files) {
    return files
        .map((file, index) => ({ ...parseFile(file), index })) // 파일 파싱 및 인덱스 추가
        .sort((a, b) => {
            // 1. HEAD 비교
            const headCompare = a.head.toLowerCase().localeCompare(b.head.toLowerCase());
            if (headCompare !== 0) return headCompare;

            // 2. NUMBER 비교
            const numberCompare = a.number - b.number;
            if (numberCompare !== 0) return numberCompare;

            // 3. 원래 입력 순서 비교
            return a.index - b.index;
        })
        .map(file => file.original); // 원본 파일 이름으로 변환
}