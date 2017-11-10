let a,b,result;
a=0; 
b=1;
result=b;

for (var i = 0; i < 100; i++)
{
    document.write(result + "<br>");
    result = a+b;
    a=b;
    b=result;
}
