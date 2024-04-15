import { test ,expect} from 'vitest';
import {transformer} from "../src/ex1";

test('Transformer une chaine vide',()=>{
    const chaineVide="";
    const resultat = transformer(chaineVide);
    expect(resultat).toBe('');
});

test('Transformer une chaine miniscule',()=>{
    const chaineMinuscules = 'tp test logiciel';
    const resultat = transformer(chaineMinuscules);
    expect(resultat).toBe('TP TEST LOGICIEL');
});

test('Transformer une chaine speciale',()=>{
    const chaineSpeciale = '@#$%!';
    const resultat = transformer(chaineSpeciale);
    expect(resultat).toEqual('@#$%!');});

//4

test('Transformer une chaîne déjà en majuscules', () => {
    const chaineMajuscules = 'WORLD';
    const resultat = transformer(chaineMajuscules);
    expect(resultat).toEqual('WORLD');
});

test('Transformer une chaîne avec des espaces', () => {
    const chaineAvecEspaces = 'la la land';
    const resultat = transformer(chaineAvecEspaces);
    expect(resultat).toEqual('LA LA LAND');
});

test('Transformer une chaîne avec des chiffres', () => {
    const chaineAvecChiffres = '1 2 3 symba';
    const resultat = transformer(chaineAvecChiffres);
    expect(resultat).toEqual('1 2 3 SYMBA');
});
