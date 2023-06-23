function handleFile(input) {
    var file = input.files[0];
    var reader = new FileReader();
  
    reader.onload = function (e) {
      var previewContainer = document.getElementById('preview-container');
      previewContainer.innerHTML = '';
  
      if (file.type === 'application/pdf') {
        // Create an embed element to display the PDF
        var embed = document.createElement('embed');
        embed.setAttribute('src', e.target.result);
        embed.setAttribute('type', 'application/pdf');
        embed.setAttribute('width', '800px');
        embed.setAttribute('height', '800px');
        // embed.setAttribute('margin-left', '800px');
    
        previewContainer.appendChild(embed);
      } else if (file.type === 'image/jpeg' || file.type === 'image/png') {
        // Create an image element to display the image
        var image = document.createElement('img');
        image.setAttribute('src', e.target.result);
        previewContainer.appendChild(image);
      }
  
      previewContainer.style.display = 'grid';

    };
  
    reader.readAsDataURL(file);
    document.getElementById('x').remove();
    const form = document.getElementById('t');
    form.style.display = 'none';
    const btn = document.getElementById('btnn');
    btn.style.display = 'grid';
    document.getElementById('y').innerHTML = "File Conversion";
    document.getElementById('s').innerHTML = "Preview ";
    document.getElementById('e').style.backgroundColor = "rgb(240, 236, 230)"
  }



  