function solution(today, terms, privacies) {
    const termMap = terms.reduce((acc, term) => {
        const [code, period] = term.split(' ');
        acc[code] = parseInt(period, 10);
        return acc;
    }, {});

    const todayDate = convertToDate(today);

    const toDestroy = privacies.map((privacy, index) => {
        const [date, termCode] = privacy.split(' ');
        const expireDate = calculateExpireDate(date, termMap[termCode]);
        return { index: index + 1, expireDate };
    }).filter(privacy => privacy.expireDate <= todayDate)
      .map(privacy => privacy.index);

    return toDestroy;
}

function convertToDate(dateString) {
    const [year, month, day] = dateString.split('.').map(Number);
    return year * 12 * 28 + (month - 1) * 28 + day;
}

function calculateExpireDate(startDate, months) {
    const [year, month, day] = startDate.split('.').map(Number);
    const totalDays = year * 12 * 28 + (month - 1) * 28 + day + months * 28;
    return totalDays;
}