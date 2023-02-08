
/* II */
let x=1
while (x <= 100)
{
    if (x % 3 === 0) {
 
        console.log('Fuzz')
        x += 1;
        if (x % 5 == 0) {
            console.log('FuzzBuzz')
        }
    }
    if (x % 3 != 0 && x % 5 === 0) {

        console.log('Buzz');
        x += 1;

    
    }

    x += 1
}
