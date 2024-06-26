// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to n?

function smallestMult(n) {

    let increasingNumber = n - 1;
    let result = false;

    const checkDivider = (rangeNumber, increasedNumber) => {

        for ( let i = 1; i <= rangeNumber; i++ ) {
            if ( increasedNumber % i !== 0 ) {

                return false;
            }
        }
        return increasedNumber;
    }

    while ( result === false ) {
        increasingNumber += 1;
        result = checkDivider(n, increasingNumber);
    }

    return increasingNumber;
}
  
  smallestMult(5);
  smallestMult(7);
  smallestMult(10);
  smallestMult(13);
  smallestMult(20);