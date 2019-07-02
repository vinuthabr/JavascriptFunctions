var newobj = [
    {value:"US",email:"Always",sms:"Always",gmail:"Optional"},
    {value:"MI",email:"Optional",sms:"Always",gmail:"OptionalPreselected"},
    {value:"CA",email:"OptionalPreselected",sms:"Optional",gmail:"Optional"}
];
console.log(newobj);

//function1 to find an object using key
function find(item){
for(i=0;i<newobj.length;i++){
if(newobj[i].sms=="Optional")
return newobj[i];}}
console.log(find(newobj));

//function2 to sort an object using key
  function compare(a, b) {
    const valueA = a.value.toUpperCase();
    const valueB = b.value.toUpperCase();
    
    let comparison = 0;
    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }
    return comparison;
  }
  console.log(newobj.sort(compare));
  
//function3 to find unique values 
  function Unique(){
    return [... new Set(newobj.map(data => data.sms))];  
    }
  console.log(Unique());

//function4 to assign one object to another
var object1 = [
  {value:"US",email:"Always",sms:"Always",gmail:"Optional"},
  {value:"MI",email:"Optional",sms:"Always",gmail:"OptionalPreselected"},
  {value:"CA",email:"OptionalPreselected",sms:"Optional",gmail:"Optional"}
];
var object2 = [
    {value:"NA",email:"Always",sms:"Always",gmail:"Optional"},
    {value:"MI",email:"Optional",sms:"Optional",gmail:"OptionalPreselected"},
    {value:"AU",email:"OptionalPreselected",sms:"Optional",gmail:"Optional"}
];
function assign(){
return Object.assign(object1,object2); }
console.log(assign());


