import _ from 'underscore';

/**
 * @param {array<string>} tiposCarta  Ejemplo: ['C','D','H','S'];
 * @param {array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {Array<string>}
 */

export const crearDeck = ( tiposCarta, tiposEspeciales ) => {

    if ( !tiposCarta || tiposCarta.length === 0 ) 
        throw new Error('tiposCarta es obligatorio como un arreglo de string');

    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) 
        throw new Error('tiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}