document.writeln("<table border='1' width='300'>");

for (let i = 1; i < 11; i++) {
    document.writeln("<tr align='center'>");

    for (let j = 1; j < 11; j++) {

        let color;

        if ((i + j) % 2 == 0) {
            color = "red";
        } else {
            color = "yellow";
        }

        document.writeln("<td bgcolor='" + color + "'>" + (i * j) + "</td>");
    }

    document.writeln("</tr>");
}

document.writeln("</table>");