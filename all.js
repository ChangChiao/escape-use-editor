var myToolbar = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block"],
  [{ 'size': [] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
  ['link'],
  ["image"], //add image here
];

function imageHandler() {
  var range = this.quill.getSelection();
  var value = prompt("please copy paste the image url here.");
  if (value) {
    this.quill.insertEmbed(range.index, "image", value, Quill.sources.USER);
  }
}

const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    imageResize: {
      displaySize: true, // default false
    },
    toolbar: {
      container: myToolbar,
      handlers: {
        image: imageHandler,
      },
    },
  },
});
