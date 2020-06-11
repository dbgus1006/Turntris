function Init()
{
    if(init == false)
    {
        myCanvas = document.getElementById("MyCanvas");
        Context = myCanvas.getContext("2d");
        init = true;
    }
}