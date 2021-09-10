//setting the marked options
marked.setOptions({
    breaks: true
})
//function that run when the textarea (#editor) is changed
const updateMarkup = (e) => {
    $("#preview").html(marked(e.value))
}
//initial load of the page. Set up the initial 
//text in the editor and the previewer
$(document).ready(function () {
    $("#editor").val(loadText);
    $("#preview").html(marked(loadText));
    changeColor();
});
//function that clears the editor
const clearEditor = () => {
    $("#editor").val("");
    $("#preview").html(marked(""));
}
//function that randomly changes the background colors
const changeColor = () => {
    $("body").css("background-color", backgroundColorOptions[Math.floor(Math.random() * 6)]);
}
//Options for the background colors
const backgroundColorOptions = ['#f6d7de', '#bed2f8', '#fdfbf6', '#f8f8b0', '#b9f5a9', '#98efab']
//the text added to the editor on load
const loadText =
    `# Markup using marked
  Parsing performed by [marked].
  ## Lists
  Lists are created using numbers. Here is a random list of names:
  1. William
  2. Mason
  3. Benjamin
  5. Emily
  
  The engine will also correct your mistakes. See item 5...
  
  ## Code
  Inline code uses the backticks \`a=2\`. Multi-line code is created using (3) backticks:
  \`\`\`
  const users = [
    { name: 'John', age: 34 },
    { name: 'Amy', age: 20 },
    { name: 'Pat', age: 10 }
  ];
  
  const names = users.map(user => user.name);
  \`\`\`
  
  ## Blockquotes and bold
  You can also make blockquotes using the greater-than sign
  > Be the **change** you wish to see in the world.
  
  The bold text is created with 2 consecutive Asterisk's
  
  ## Images
  Images can also be included (even with default text).
  
  ![A walrus](https://askpari.files.wordpress.com/2010/03/walrus2.jpg?w=112&h=150)
  
  [Marked]: https://marked.js.org/
  `
