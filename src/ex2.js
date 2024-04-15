export function trier(tableau) {
    const elementsNumeriques = tableau.filter(element => typeof element === 'number');

    if (elementsNumeriques.length <= 1) {
        return elementsNumeriques;
    }

    return elementsNumeriques.sort((a, b) => a - b);
}
