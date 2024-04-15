export async function fetchRandomUser() {
    const response = await fetch('https://randomuser.me/api/');
    if (!response.ok) {
        throw new Error('Failed to fetch random user');
    }
    const data = await response.json();
    console.log(data);
    return data.results[0];
}

fetchRandomUser();
