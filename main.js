var arry=[1,2,3,4,5,6,7,8,9,10];
function oddnumber(arry){
	for(i=0;i<arry.length;i++){
		if(arry[i]%2 !=0)
			console.log(arry[i]);
		
	}
}

oddnumber(arry);


var n=5;

function mobile(n){

for(i=1; i<=n; i++){
	
	for(j=1; j<=i; j++){
		
		document.write(i)
	}
	
	document.write("<br>");
}    
}
mobile(n);

document.write("<br>");
document.write("<br>");




var n=5;

function reverce(n){

for(i=n; i>=1; i--){
	
	for(j=1; j<=i; j++){
		
		document.write(j)
	}
	
	document.write("<br>");
}    
}
reverce(n);


var string=prompt("please enter a string");
const reg=/[aeiou]/gi;
var chars=string.match(reg);
console.log(chars.join(','));
console.log(chars.length);

