// 29기 정수진

function getEven () {
    let testArray = [];
    for (i=1; i<51; i++) {
        if (i % 2 == 0) {
            testArray.push(i);
        }
    }
    return testArray;
}