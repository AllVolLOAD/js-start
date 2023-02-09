/* III */
function CheezeBoard(ver = 2, hor = 8) {
    let count = 0
    for (let i = 1; i <= ver+1; i++) {
        count += 1
        if (i % 2 === 0) {
            console.log("# ".repeat(hor))
        }
        console.log(" #".repeat(hor))
    }

}

CheezeBoard()
