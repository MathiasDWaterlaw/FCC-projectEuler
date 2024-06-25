function largestPalindromeProduct(n) {

    let startNumber = Number(1 + '0'.repeat(n-1));
    let endNumber = startNumber * 10 - 1;
    let palindromes = [];

    for ( let i = startNumber; i <= endNumber; i++) {
        for ( let j = startNumber; j <= endNumber; j++ ) {
            let product = i * j;

            if ( String(product) === String(product).split('').reverse().join('') ) {
                palindromes.push(product);
            }
        }
    }

    return console.log(palindromes);
  }
  
  largestPalindromeProduct(3);