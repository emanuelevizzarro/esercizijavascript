function canPlay() {

    const personName = 'Paul';

    if (true) {
        personName = 'George'; // rendendo una variabile readonly tramite const non mi permette il funzionamento della variabile perchè è di sola lettura e nel console log mi dà un TypeError.
    }

    personName += ' plays football';

    console.log(personName);
}

canPlay();