function confuseReader() {
    {
        x = "Guess my scope..."; // AL NO TENER LET O VAR LA VARIABLE SERA HOISTED (ELEVADA A LO MAS ALTO EN ESTE CONTEXT)
    }
    
    console.log("Inside the function:", x);
}

confuseReader();
console.log("Outside of function:", x);