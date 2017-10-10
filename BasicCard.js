exports.BasicCard = {
  //Constructor for creating and storing new basic cards
function BasicCard(title, front, back) {
    this.title = title;
    this.front = front;
    this.back = back;
    this.entry = "\n{title: '" + this.title + "'," + "\nfront: '" + this.front + "',"
                  + "\nback: '" + this.back + "'};";

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
}

