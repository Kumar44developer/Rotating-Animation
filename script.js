const squares = document.querySelectorAll(".squares");
squares.forEach((square,index)=>{
square.style.borderWidth = (index + 1) * 4 + "px";
        square.style.animationName = `rotate-${index}`;
