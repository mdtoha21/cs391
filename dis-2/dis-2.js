const BIN_URL = "https://api.jsonbin.io/v3/b/68cd764243b1c97be9484d2d";  
const API_KEY = "$2a$10$d3UBlzezwf639H7jONGGj.gkmzVzE6T9gBxzdhJOUiJvQ26TzXaq.";                  
const output = document.getElementById("output"); 

async function getData(){

    const res=await fetch(BIN_URL,{headers:{"X-MASTER-KEY":API_KEY}});
    const data=await res.json();

    const singleAffiliate=data.record.affiliates.map(

        a=>
        `
                <li> 
                    ${a.fname} ${a.lname} (${a.isStudent ? "Student" : "NOT Student"})
                
                </li>

        `
    );

    output.innerHTML+=singleAffiliate;


}
