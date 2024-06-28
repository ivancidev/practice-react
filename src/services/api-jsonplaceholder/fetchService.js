const URL = 'https://jsonplaceholder.typicode.com'
export const fetchGet = async (endpoint) => {
    const response = await fetch(`${URL}/${endpoint}`);
    const data = await response.json();
    return data
}