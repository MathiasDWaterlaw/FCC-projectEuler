function isPrime(number) {

    if ( number === 1 ) {
        return false;

    } else if ( number === 2 ) {
        return true;

    } else if ( number % 2 === 0 ) {
        return false;

    } else {

        for ( let i = 2; i < number; i++ ) {
            if ( number % i === 0 ) {
                return false;
            } 
        }
        return true;
    }

}

function largestPrimeFactor(number) {
    const primeFactorsList = [];

    for ( let i = 1; i <= number; i++ ) {
        if (isPrime(i) && (number % i) === 0) {

            primeFactorsList.push(i);
            number = number / i;
        } 
    }
    return console.log(primeFactorsList[primeFactorsList.length - 1]);
  }

  largestPrimeFactor(600851475143);
  largestPrimeFactor(13195);
  largestPrimeFactor(2);
  largestPrimeFactor(5);
