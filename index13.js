// FETCH API [Application Programming Interface]:-
           // The Fetch API provides an interface for fetching (sending / receiving) resources.
           // It uses Request and Response objects.
           // The fetch() method is used to fetch a resouce (data).

//Example: 
// let promise = fetch(URL,[options])

const url = "https://catfact.ninja/fact" ; 
const btn = document.querySelector("#btn");
const para = document.querySelector("#para");




const getFacts = async() =>{
    console.log("Getting data...")
    let response = await fetch(url)
    console.log(response) // JSON format
    let data = await response.json();
    // console.log(data)
    para.innerText = data.fact;
}
getFacts()

btn.addEventListener("click", getFacts)


// UNDERSTANDING TERMS:
                   // AJAX is Asynchronous JS & XML.
                   // JSON is Javascript Object Notation.
                   // json() method: returns a second promise that resolve with the result of parsing 
                   // the response bod text as JSON.( Input is JSON, output is JS object).

// REQUEST & RESPONSE:
                // HTTP Verbs
                // Response Status Code
                // HTTP response headers also contain details about the responses,such as content type, HTTP status code etc.
