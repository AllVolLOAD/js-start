/* III */
function CheezeBoard(ver = 2, hor = 8) {

    for (let i = 1; i != ver+1; i++) {
        if (i % 2 === 0) {
            console.log("# ".repeat(hor));
            continue;
        }
        console.log(" #".repeat(hor))
    }

}

CheezeBoard(5,5)

