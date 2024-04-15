import {trier} from "../src/ex2";
import { test ,expect} from 'vitest';

test('Trier un tableau vide', () => {
    const tableauVide = [];
    const resultat = trier(tableauVide);
    console.log('Résultat:', resultat);
    expect(resultat).toEqual([]);
});

test('Trier un tableau déjà trié', () => {
    const tableauTrié = [1, 2, 3, 4, 5];
    const resultat = trier(tableauTrié);
    console.log('Résultat:', resultat);
    expect(resultat).toEqual([1, 2, 3, 4, 5]);
});

test('Trier un tableau inversé', () => {
    const tableauInverse = [5, 4, 3, 2, 1];
    const resultat = trier(tableauInverse);
    console.log('Résultat:', resultat);
    expect(resultat).toEqual([1, 2, 3, 4, 5]);
});

test('Trier un tableau avec des éléments non numériques', () => {
    const tableauNonNumerique = [1, 'a', 3, 'b', 5];
    const resultat = trier(tableauNonNumerique);
    console.log('Résultat:', resultat);
    expect(resultat).toEqual([1, 3, 5]);
});

test('Trier un tableau avec des éléments en double', () => {
    const tableauDouble = [3, 1, 5, 3, 2, 1];
    const resultat = trier(tableauDouble);
    console.log('Résultat:', resultat);
    expect(resultat).toEqual([1, 1, 2, 3, 3, 5]);
});
