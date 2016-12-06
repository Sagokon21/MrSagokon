$("#getIMT").click(function() 
{ 
var m = $("#mass").val(); 
var h = $("#height").val()/100.0; 
var result = (m/(h*h)).toFixed(2); 
$("#imtResult").html("Ваш результат "+ result); 
if (result <=16) 
{ 
$("#imtResult").html(" Выраженный дефицит массы тела " + result); 
} 
if (result >= 16 && result <=18.5) 
{ 
$("#imtResult").html(" Недостаточная (дефицит) масса тела " + result); 
} 
if (result >= 18.5 && result <=24.99) 
{ 
$("#imtResult").html(" Норма " + result);
} 
  if (result >= 25 && result <=30) 
{ 
$("#imtResult").html(" Избыточная масса тела  " + result);
} 
  if (result >= 30 && result <=35) 
{ 
$("#imtResult").html(" 	Ожирение 1 степени " + result);
} 
  if (result >= 35 && result <=40) 
{ 
$("#imtResult").html(" Ожирение 2 степени " + result);
} 
if (result >=40) 
{ 
$("#imtResult").html(" Ожирение 3 степени  " + result);
} 
});