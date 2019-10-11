function inverse()
{
    if(document.body.style.color != "white")
    {
        document.body.style.backgroundColor = "black"; 
        document.body.style.color = "white";
    }
    else
    {
        document.body.style.backgroundColor = "white"; 
        document.body.style.color = "black";
    }
}