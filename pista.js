function showDownloadPopup(imageId) {
    
    // Get the modal
    var modal = document.getElementById("imageDownloadModal");
    
    var modalImage = document.getElementById("modalImage");
    modalImage.src = imageId.src;

    var modalImage = document.getElementById("modalHeader");
    modalHeader.innerHTML = imageId.alt;
    
    // When the user clicks the button, open the modal 
    
    modal.style.display = "block";
    
}

/*
function showDownloadPopup(imgElement) {
    var modal = document.getElementById("imageDownloadModal");
    var modalImg = document.getElementById("modalImage");
    var modalHeader = document.getElementById("modalHeader");
    
    modalImg.src = imgElement.src;
    modalHeader.textContent = imgElement.alt;
    
    modal.style.display = "block";
}
*/

function downloadImage() {

    var modalImage = document.getElementById("modalImage");
    console.log(modalImage.src);
    
    const link = document.createElement('a');
    //link.setAttribute('download', file);
    link.download = "testimage.jpg";
    link.href = modalImage.src;
    //document.body.appendChild(link);
    link.click();
    link.remove();
    //document.body.removeChild(link);
    
}