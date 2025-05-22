function solution(d, budget) {
    let result = 0;
    let leftBudget = budget;
    //예산이 적은 애들 먼저 처리?
    const costSort = d.sort((a,b) => a-b);
    
    for(cost of costSort) {
        //예산 초과면 조기 리턴
        if(leftBudget < cost) return result
        
        leftBudget = leftBudget - cost      
        result++ 
        console.log(leftBudget, result)
    }
    return result;
}