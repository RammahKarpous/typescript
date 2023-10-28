function greet ( name: string | null ) {
    if (name) {
        console.log(name.toUpperCase());
    } else {
        console.log("Hello there!");
    }
}

greet(null)