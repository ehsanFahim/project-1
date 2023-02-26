	
	const cursor = document.querySelector(".cursor");
    var timeout;
    //follow cursor on mousemove
    document.addEventListener("mousemove", (e) => {
        let x = e.pageX;
        let y = e.pageY;
        cursor.style.top = y + "px";
        cursor.style.left = x + "px";
        cursor.style.display = "block"

        //cursor effect on mouse stopped
        function moueStopped() {
            cursor.style.display = "none"
        }
        clearTimeout(timeout)
        timeout = setTimeout(moueStopped, 1000);
    });
    //cursor effects on mouseout
    document.addEventListener("mouseout", () => {
        cursor.style.display = "none"
    });

