//? awaiting call
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}
awaitCall();

//?Handling Errors with Await
async function awaitCall() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Failed to fetch data:', error.message);
    }
}
awaitCall();

//?Awaiting Concurrent Requests
async function concurrentRequests() {
    const [response1, response2] = await Promise.all([
        fetch('https://api.example.com/data1'),
        fetch('https://api.example.com/data2')
    ]);

    const data1 = await response1.json();
    const data2 = await response2.json();

    console.log('Response 1:', data1);
    console.log('Response 2:', data2);
}

// Example usage:
concurrentRequests();
