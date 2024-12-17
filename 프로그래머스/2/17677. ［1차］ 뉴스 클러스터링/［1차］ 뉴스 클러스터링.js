function makeMultiSet(str) {
    const result = [];
    str = str.toLowerCase(); // 소문자로 통일

    for (let i = 0; i < str.length - 1; i++) {
        const pair = str[i] + str[i + 1];
        if (pair.match(/[a-z]{2}/)) { // 영문자 두 글자만 유효
            result.push(pair);
        }
    }
    return result;
}

function getIntersection(map1, map2) {
    const intersection = [];
    for (const [key, value] of map1) {
        if (map2.has(key)) {
            const count = Math.min(value, map2.get(key)); // 최소 등장 횟수
            for (let i = 0; i < count; i++) {
                intersection.push(key);
            }
        }
    }
    return intersection;
}

function getUnion(map1, map2) {
    const union = [];
    const keys = new Set([...map1.keys(), ...map2.keys()]);
    for (const key of keys) {
        const count = Math.max(map1.get(key) || 0, map2.get(key) || 0); // 최대 등장 횟수
        for (let i = 0; i < count; i++) {
            union.push(key);
        }
    }
    return union;
}

function getCountMap(array) {
    const map = new Map();
    array.forEach(item => map.set(item, (map.get(item) || 0) + 1));
    return map;
}

function solution(str1, str2) {
    const multiSet1 = makeMultiSet(str1);
    const multiSet2 = makeMultiSet(str2);

    const map1 = getCountMap(multiSet1);
    const map2 = getCountMap(multiSet2);

    const intersection = getIntersection(map1, map2);
    const union = getUnion(map1, map2);

    if (union.length === 0) return 65536; // 공집합인 경우
    const similarity = Math.floor((intersection.length / union.length) * 65536);
    return similarity;
}

function getUnion(map1, map2) {
    const union = [];
    const allKeys = new Set([...map1.keys(), ...map2.keys()]);
    for (const key of allKeys) {
        const maxCount = Math.max(map1.get(key) || 0, map2.get(key) || 0);
        for (let i = 0; i < maxCount; i++) {
            union.push(key);
        }
    }
    return union;
}
