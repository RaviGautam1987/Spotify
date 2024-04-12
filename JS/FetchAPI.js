let url="https://catfact.ninja/fact";
fetch(url)
.then((response)=>{
    console.log(response);
    return response.json()
    // .then((data)=>{
    //     console.log(data);
    // })
})
.then((data)=>{
    console.log("Data1 = ",data.fact);
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data2)=>{
    console.log("Data2 = ",data2.fact);
})
.catch((err)=>{
    console.log("Error: ",err);
});