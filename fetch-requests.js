/*
Make fetch requests in the browser for each of the following tasks.
Paste your code for fetch requests here once you finish each task.
*/

/* =============== 1. Print the status code of the response =============== */

// Your code here 
async function makeGetFetch() {
    const res = await fetch("http://localhost:8000/products");
    console.log("Response status code: ", res.status);
    console.log("Response success boolean: ", res.ok);
    console.log("Response Content-Type Header: ", res.headers.get("Content-Type"));
    console.log("Response Body: ", await res.text())
    // everytime a promise need to use await within async function
}
// makeGetFetch();

// post has body and header, while get does not
async function makePostFetch() {
    const res = await fetch("http://localhost:8000/products",  {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "name=test&description=test&price=1&categories=grocery"
        // body: {
        //     name:"test" ,
        //     description: "test" ,
        //     price: 1,
        //     category: "test"
        // }
    });
    console.log("Response status code: ", res.status);
    console.log("Response success boolean: ", res.ok);
    console.log("Response Content-Type Header: ", res.headers.get("Content-Type"));
    console.log("Response Body: ", await res.text())
    // everytime a promise need to use await within async function
}

makePostFetch()

/* ====== 2. Print true if the status of the response was successful ====== */

// Your code here 



/* =================== 3. Print the Content-Type Header =================== */

// Your code here 



/* ============== 4. Print the body of the response as text =============== */

// Your code here 
