// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(values) {
    for (const value of values) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(value);
    }
}

// Task 02: Awaiting a Call
async function awaitCall() {
    try {
        const fetchData = new Promise((resolve) => {
            setTimeout(() => resolve("Data from API"), 2000);
        });
        const data = await fetchData;
        console.log(data);
    } catch (error) {
        console.error("An error occurred while fetching data.", error);
    }
}

// Task 03: Handling Errors with Async/Await
async function awaitCallWithErrorHandling() {
    try {
        const fetchData = new Promise((resolve, reject) => {
            setTimeout(() => reject("Failed to fetch data."), 2000);
        });
        const data = await fetchData;
        console.log(data);
    } catch (error) {
        console.error("Error: Unable to fetch data. Please try again later.");
    }
}

// Task 04: Chaining Async/Await
async function chainedAsyncFunctions() {
    const asyncFunc1 = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Function 1 complete");
    };
    const asyncFunc2 = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Function 2 complete");
    };
    const asyncFunc3 = async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log("Function 3 complete");
    };

    await asyncFunc1();
    await asyncFunc2();
    await asyncFunc3();
}

// Task 05: Awaiting Concurrent Requests
async function concurrentRequests() {
    const apiCall1 = new Promise(resolve => setTimeout(() => resolve("API Call 1 Result"), 2000));
    const apiCall2 = new Promise(resolve => setTimeout(() => resolve("API Call 2 Result"), 2000));

    const results = await Promise.all([apiCall1, apiCall2]);
    console.log("Concurrent Results:", results);
}

// Task 06: Awaiting Parallel Calls
async function parallelCalls(urls) {
    const fetchData = url => new Promise(resolve => {
        setTimeout(() => resolve(`Fetched data from ${url}`), 2000);
    });

    const responses = await Promise.all(urls.map(fetchData));
    console.log("Responses:", responses);
}

// Example usage
(async () => {
    console.log("Task 01:");
    await iterateWithAsyncAwait(["Value 1", "Value 2", "Value 3"]);

    console.log("\nTask 02:");
    await awaitCall();

    console.log("\nTask 03:");
    await awaitCallWithErrorHandling();

    console.log("\nTask 04:");
    await chainedAsyncFunctions();

    console.log("\nTask 05:");
    await concurrentRequests();

    console.log("\nTask 06:");
    await parallelCalls(["https://api.example.com/1", "https://api.example.com/2"]);
})();
