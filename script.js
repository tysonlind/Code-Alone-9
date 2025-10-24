// Use this function to get an image source out of the the image upload box.
function getImageFromUpload(){
    let image = document.querySelector("#imageUpload").files[0];
    return URL.createObjectURL(image);
}

