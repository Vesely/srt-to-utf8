const fileInput = document.querySelector('input[type="file"]');
const result = document.querySelector('.result');

function download(filename, text) {
  result.setAttribute('href', 'data:text/srt;charset=utf-8,' + encodeURIComponent(text));
  result.setAttribute('download', filename);
  result.innerHTML = `Download <span>${filename}</span>`;

  result.click();
}

fileInput.addEventListener('change', (event) => {
  event.preventDefault();

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.readAsText(file, "windows-1250"); // TODO: auto detect encoding

  reader.onload = (event) => {
    console.log(fileInput.files[0]);
    download(file.name, event.target.result);
  };

  reader.onerror = (event) => {
    console.error(event);
    alert('Error');
  };
});
