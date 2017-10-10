exports.ClozeCard = {
//Constructor for creating and storing cloze cards
function ClozeCard(title, fullText, cloze) {
 
    this.title = title;
    this.fullText = fullText;
    this.cloze = cloze;

     //searches the text to make sure the cloze is part of the question
    var isPresent = fullText.search(cloze);
     
     //creates the partial text as long as cloze is included
    if (isPresent>=0) {
    var partialText = fullText.replace(cloze, '...');
    this.partialText = partialText;
    this.entry = "\n{title: '" + this.title + "'," + "\nfullText: '" + this.fullText + "',"
          + "\ncloze: '" + this.cloze + "'," + "\npartialText: '" + this.partialText + "'};";

        fs.appendFile('flashcards.txt', this.entry, function(err) {
           if (err) {
             console.log(err);
           }
           else {
             console.log("\nContent added to flashcards.txt!");
             console.log("\n----------------\n");
           }
        });

        readFiles("flashcards.txt");

     }
    else {
        console.log("Oops, check for misspelling or make sure the cloze is part of the full text");
    }
}
}