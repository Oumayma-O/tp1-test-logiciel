import { test, expect } from 'vitest';
import {fetchRandomUser} from "../src/asyncFunc.js";

test('fetchRandomUser récupère les données d\'un utilisateur aléatoire', async () => {
    const userData = await fetchRandomUser();

    expect(typeof userData).toBe('object');
    expect(userData).toHaveProperty('gender');
    expect(userData).toHaveProperty('name');
    expect(userData).toHaveProperty('location');
    expect(userData).toHaveProperty('email');
    expect(userData).toHaveProperty('login');
    expect(userData).toHaveProperty('dob');
    expect(userData).toHaveProperty('registered');
    expect(userData).toHaveProperty('phone');
    expect(userData).toHaveProperty('cell');
    expect(userData).toHaveProperty('id');
    expect(userData).toHaveProperty('picture');
    expect(userData).toHaveProperty('nat');
});

test('fetchRandomUser échoue lorsque la requête fetch échoue', async () => {
    // Mock fetch to simulate a failed request
    globalThis.fetch = async () => {
        throw new Error('Failed to fetch');
    };
    await expect(fetchRandomUser()).rejects.toThrow('Failed to fetch');
});
