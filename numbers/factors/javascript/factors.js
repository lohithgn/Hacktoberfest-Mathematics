function factors(number)
{
    let factorList = [];
    let numCounter = number*-1;
    while(numCounter <= number)
    {
        if(0 === (number % numCounter))factorList.push(numCounter)
        ++numCounter;
    } 
    return factorList;
}