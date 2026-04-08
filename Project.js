const BASE_URL="https://latest.currency-api.pages.dev/v1/currencies"

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("#btn")
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg")


// for(code in countryList) {
    //     console.log(code,countryList[code])
    // }
    
    for(let select of dropdowns){
        for (let currcode in countryList){
            let newOption = document.createElement("option");
            newOption.innerText = currcode;
            newOption.value = currcode;
            
            if(select.name === "from" && currcode==="USD"){
                newOption.selected = "selected";
            } else if( select.name === "to" && currcode === "INR"){
                newOption.selected = "selected";
            }
            select.append(newOption);
        }
        
        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target)
        })
    }
    
    
    const updateFlag = (element) =>{
        let currcode = element.value;
        let countryCode = countryList[currcode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
    }
    
    
    const updateExhangeRate = async () =>{
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;
        if (amtVal <= 0 || amtVal === ""){
            alert("Invalid Amount")
            amtVal = 1;
            amount.value = "1";
        } else{
            console.log(amtVal)
        }
        const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
        let response = await fetch(URL);
        let data = await response.json();
        let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
        console.log(rate);
        
        let finalAmount = amtVal * rate;
        console.log(finalAmount)
        msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`
    }
    
    btn.addEventListener("click", (evt)=>{
        evt.preventDefault();
        updateExhangeRate()
    })
    
    window.addEventListener("load", () =>{
        updateExhangeRate()
    })