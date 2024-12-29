function solution(arr) {
    var answer = [];
    const maxLength = arr.length;
    
    function divide(matrix,startCol, startRow, size){
        let result = [0,0];
        
        if(size === 1){
            if(matrix[startCol][startRow]===1) return [0,1];
            else return [1,0];
        }
        
        let oneCnt=0;
        let zeroCnt=0;
        const maxCnt = size*size;
        

        
        for(let i=startCol;i<startCol+size;i++){
            for(let j=startRow;j<startRow+size;j++){
                if(matrix[i][j]==0)zeroCnt++;
                else oneCnt++;
            }
        }
        if(zeroCnt ===maxCnt) return [1,0];
        else if(oneCnt === maxCnt)return [0,1];
        else {
            const nsize = size/2;
            //array1.map((value, index) => value + array2[index]);
            result=divide(matrix,startCol+nsize, startRow+nsize,nsize).map((value, index) => value + result[index]);
            result=divide(matrix,startCol, startRow+nsize,nsize).map((value, index) => value + result[index]);
            result= divide(matrix,startCol+nsize, startRow,nsize).map((value, index) => value + result[index]);
            result= divide(matrix,startCol, startRow,nsize).map((value, index) => value + result[index]);
        }
        return result;
    }
    
    
    return divide(arr,0,0,arr.length);
}