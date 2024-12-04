function solution(cacheSize, cities) {
    // 캐시를 리스트로 관리
    let cache = [];
    let totalTime = 0;

    cities.forEach(city => {
        city = city.toLowerCase(); // 대소문자 구분 없이 처리
        if (cache.includes(city)) {
            // cache hit
            totalTime += 1;
            cache = cache.filter(c => c !== city); // 기존 위치 제거
            cache.push(city); // 가장 최근 사용된 데이터로 갱신
        } else {
            // cache miss
            totalTime += 5;
            if (cacheSize > 0 && cache.length >= cacheSize) {
                cache.shift(); // 가장 오래된 데이터 제거
            }
            if (cacheSize > 0) {
                cache.push(city); // 새 데이터 추가
            }
        }
    });

    return totalTime;
}