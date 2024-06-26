const ip = "10.0.22.16:3001";

//Frontenden: result = await Call("GET", "api/movies", {}) vagy result = await Call("POST", "api/post", {adat: 1, nev: "valami"})
export async function Call(rest,route, args){
    var requestOptions = {};
    var myHeaders = new Headers();
    var raw = JSON.stringify(args);
    if(rest === "GET"){
        myHeaders.append("X-Token", args.token);
         requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          }; 
    }
    if(rest === "POST"){
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("X-Token", args.token);
        requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
          };
   }
   console.log(requestOptions)
   try {
    const response = await fetch(`http://${ip}/${route}`, requestOptions);
    const data = await response.json();
    return data; // Return the data from the API call
} catch (error) {
    console.log(error)
    throw error; // Throw any errors that occur during the API call
}
}
 