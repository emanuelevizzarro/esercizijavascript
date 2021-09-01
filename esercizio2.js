function canPlay() {

    const personName = 'Paul';

    if (true) {
        personName = 'George'; // nell'if sto cambiando il valore di una costante e questo non è possibile
    }

    personName += ' plays football';

    console.log(personName);
}

canPlay();