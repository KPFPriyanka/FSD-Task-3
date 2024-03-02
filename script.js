let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  const data = JSON.parse(xhr.response);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log("Name:",data[i].name.common);
    console.log("Region:",data[i].region)
    console.log("Subregion:",data[i].subregion)
    console.log("Populations:",data[i].population)
    //country flags
    console.log("Country Flags:",data[i].flags)
  }
}
//Compare two JSON properties
let obj1 = {name: "person1",age: 5}
let obj2 = {age: 5, name: "person1"}
const data = JSON.parse(obj1.response, obj2.reponse);
console.log(data )
