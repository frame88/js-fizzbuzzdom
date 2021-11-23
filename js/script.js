/* 
creare un for (i=0; i<=100; i++), all'interno del for:
if (i%3 == 0) print FIZZ
if-else (i%5 == 0) print BUZZ
if-else ((i%5 == 0 ) && (i%3 == 0)) print FIZZBUZZ
else print i
in tutte e 4 le condizioni modificare il colore di background e il numero (o parola)
*/
const container = document.querySelector('.container');

for (let i = 1; i<101; i++) {
    const stickernumb = i;
    const div = document.createElement('div');
    div.classList.add('box');
    div.append(stickernumb);
    
    container.append(div);
}

