function drawBackground(level, ctx, canvas) {
    switch (level) {
        case 1:
            ctx.fillStyle = '#87ceeb'; // Himmelblau
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#228b22'; // Grasgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 2:
            ctx.fillStyle = '#ff4500'; // Roter Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#8b4513'; // Braunes Gras
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 3:
            ctx.fillStyle = '#191970'; // Nachtblauer Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#2e8b57'; // Dunkelgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 4:
            ctx.fillStyle = '#32cd32'; // Grüner Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#8b4513'; // Braunes Gras
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 5:
            ctx.fillStyle = '#d2691e'; // Orange Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#9acd32'; // Dunkelgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 6:
            ctx.fillStyle = '#ff6347'; // Tomaten Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#32cd32'; // Hellgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 7:
            ctx.fillStyle = '#ff1493'; // Pink Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#228b22'; // Dunkelgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 8:
            ctx.fillStyle = '#0000ff'; // Blau Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#006400'; // Dunkelgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 9:
            ctx.fillStyle = '#ff8c00'; // Oranger Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#556b2f'; // Dunkelolivgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 10:
            ctx.fillStyle = '#7fffd4'; // Aquamarine Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#6b8e23'; // Olivgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 11:
            ctx.fillStyle = '#adff2f'; // Grün Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#a52a2a'; // Braun
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 12:
            ctx.fillStyle = '#f0e68c'; // Khaki Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#228b22'; // Dunkelgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 13:
            ctx.fillStyle = '#bc8f8f'; // Rosarot Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#8b4513'; // Braunes Gras
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 14:
            ctx.fillStyle = '#7cfc00'; // Grün Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#a52a2a'; // Braun
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 15:
            ctx.fillStyle = '#ffd700'; // Gold Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#a52a2a'; // Braun
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 16:
            ctx.fillStyle = '#6a5acd'; // Slate Blau Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#228b22'; // Dunkelgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 17:
            ctx.fillStyle = '#d3d3d3'; // Hellgrau Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#a52a2a'; // Braun
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 18:
            ctx.fillStyle = '#dda0dd'; // Pflaume Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#8b4513'; // Braun
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 19:
            ctx.fillStyle = '#9acd32'; // Gelbgrün Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#8b4513'; // Braun
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
        case 20:
            ctx.fillStyle = '#2e8b57'; // Dunkelgrün Himmel
            ctx.fillRect(0, 0, canvas.width, canvas.height / 2); // Oben (Himmel)
            ctx.fillStyle = '#006400'; // Waldgrün
            ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2); // Unten (Gras)
            break;
    }
}
