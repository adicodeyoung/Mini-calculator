/*A function is a set of statements that take inputs, do some specific computation,
 and produces output. Basically, a function is a set of statements that performs some tasks
  or does some computation and then return the result to the user.
  Syntax:

function functionName(Parameter1, Parameter2, ..)
{
    // Function body
}

 */
function add(){

    var result=Number(document.getElementById('fn').value) +Number(document.getElementById('sn').value);
    document.getElementById("b1").value=result;
}
function subtraction(){

    var result=Number(document.getElementById('fn').value) - Number(document.getElementById('sn').value);
    document.getElementById("b2").value=result;
}
function multiplication(){

    var result=Number(document.getElementById('fn').value) *Number(document.getElementById('sn').value);
    document.getElementById("b3").value=result;
}
function division(){

    var result=Number(document.getElementById('fn').value) /Number(document.getElementById('sn').value);
    document.getElementById("b4").value=result;
}