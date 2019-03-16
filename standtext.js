const stand = text => {
    const standtext_start = "「";
    const standtext_end = "」";

    let standtext = standtext_start;
    text.split("").forEach(c => {
        standtext += c + " ";
    });
    standtext = standtext.replace(/.$/, standtext_end).replace(/   /g, "  "); //replace triple space with double space
    return standtext;
}
exports.stand = stand;