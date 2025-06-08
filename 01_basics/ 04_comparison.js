//console.log(2>1)
//console.log(2>=1)
//console.log(2==1)

//console.log("2">1)//True
//console.log("02">1)//True

//console.log(null>0)//false
//console.log(null==0)//false
//console.log(null>=0)//true
/*the reason is  that an equality check == 
and comparison >,<,>=,<= work differently
comparison convert null to a number treating 
it as 0 */
// strict check (===)//It do not convert datatypes
//console.log("2"===3)