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

Quill.register("modules/imageUploader", ImageUploader);

const quill = new Quill("#editor", {
  theme: "snow",
  modules: {
    imageResize: {
      displaySize: true, // default false
    },
    toolbar: {
      container: myToolbar,
      handlers: {
        // image: imageHandler,
      },
    },
    imageUploader: {
        upload: file => {
            return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                );
            }, 1000);
            });
        }
    }
  },
});
