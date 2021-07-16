import React from "react";

const ArrayMethods = () => {
  let array = [
    {
      id: 1,
      title: "qtech",
      description: "React js developer",
    },
    {
      id: 2,
      title: "qtech",
      description: "Mobile developer",
    },
    {
      id: 1,
      title: "qtech",
      description: "SalesForce developer",
    },
  ];
  console.log(array);


  
//search particular value using filter
//filter
const method1 = array.filter((item, index) => {
    return item.description === "React js developer"
})
console.log("filter", method1);

//map
const method2 = array.map((item, index) => {
    return item.id;
})
console.log("mapid", method2);

//map
const method3 = array.map((item, index) => {
    return item.title
})
console.log("maptitle", method3);

//map
const method4 = array.map((item, index) => {
    return item.description
})
console.log("mapDescription", method4);

//findindex
const method5 = array.findIndex((item, index) => {
    return item.id
})
console.log("findindex", method5);

//forEach
const method6 = array.forEach((item, index) => {
    return item;
})
console.log("forEach", method6);

//splice add item
const method7 = array.splice("1","0", "varsha","yashwant");
console.log("splice add item", array);

//splice  remove item
const method8 = array.splice("1","1")
console.log("splice remove item", array)

//slice 
const method9 = array.slice(0,3)
console.log("slice" ,method9);

//reduce
const array1 = [ 1, 2, 3, 4, 5]

const method10 = array1.reduce((prev , currv) => {
    return prev + currv * 2
},0)
console.log("reduce",method10)

//replace
const Array2 = "hi my name is varsha"
const method11 = Array2.replace(" ","/");
console.log("replace", method11);


//replaceall
const Array3 = "hi my name is varsha"
const method12 = Array3.replaceAll(" ","/");
console.log("replaceall", method12);

//replace using regular expression
const array4 = "hii my name is varsha Name is";
const method13 = array4.replace(/ /g, '#');
console.log("regular expression", method13);

//replace using global
const array5 = "there is varsha and also my name is Varsha."
const method14 = array5.replace(/varsha/g, "???")
console.log("replace using global", method14);


//replace for global search
const method15 = array5.replace(/varsha/gi, "???")
console.log("replace using global", method15);

//replace without method
const array6 = "my name is varsha";
const method16 = array6.split(" ").join("")
console.log("without method", method16);

//replace without mrethod, using regular exp
const array7 = " hello     world ";
 const method17 = array7.split(/\s+/g).join("");
console.log("using regular exp", method17);

 
  return (
    <>
      <p>Javacsript Array Methods</p>
    </>
  );
};
export default ArrayMethods;
