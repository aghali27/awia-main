let endpoint = process.env.DATOCMS_ENDPOINT;
let apiKey = process.env.NEXT_DATOCMS_API_TOKEN;

export async function fetchData(query) {

    const options = {
        method: 'POST',
        headers: { Authorization: apiKey },
        body: JSON.stringify({ query })
    };

    const res = await fetch(endpoint, options);

    //console.log(res);

    if (res.status !== 200) {
        throw new Error('Failed to fetch API');
    }

    const json = await res.json();

    if (json.errors) {
        console.error(json.errors);
        throw new Error('Failed to fetch API');
    }

    return json.data;
}