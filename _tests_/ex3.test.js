import { test ,expect} from 'vitest';
import {isPriceInRange} from "../src/ex3";

test('Prix à la limite inférieure de la plage', () => {
    const price = 100;
    const min = 100;
    const max = 200;
    const result = isPriceInRange(price, min, max);
    console.log('Résultat:', result);
    expect(result).toBeTruthy();
});

test('Prix à la limite supérieure de la plage', () => {
    const price = 200;
    const min = 100;
    const max = 200;
    const result = isPriceInRange(price, min, max);
    console.log('Résultat:', result);
    expect(result).toBeTruthy();
});

test('Prix juste en dessous de la limite supérieure de la plage', () => {
    const price = 199;
    const min = 100;
    const max = 200;
    const result = isPriceInRange(price, min, max);
    console.log('Résultat:', result);
    expect(result).toBeTruthy();
});

test('Prix juste au-dessus de la limite inférieure de la plage', () => {
    const price = 101;
    const min = 100;
    const max = 200;
    const result = isPriceInRange(price, min, max);
    console.log('Résultat:', result);
    expect(result).toBeTruthy();
});

test('Prix inférieur à la limite inférieure de la plage', () => {
    const price = 99;
    const min = 100;
    const max = 200;
    const result = isPriceInRange(price, min, max);
    console.log('Résultat:', result);
    expect(result).toBeFalsy();
});

test('Prix supérieur à la limite supérieure de la plage', () => {
    const price = 201;
    const min = 100;
    const max = 200;
    const result = isPriceInRange(price, min, max);
    console.log('Résultat:', result);
    expect(result).toBeFalsy();
});
