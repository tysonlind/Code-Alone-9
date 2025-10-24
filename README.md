# Social Media Post Generator

This project is a simple Social Media Post Generator. Users can type a username, enter post text, select an image, and apply image styles. The preview updates live as the user interacts with the inputs. A video demonstrating the final product is posted on Canvas.

---

## Features

1. **Live Username Preview**  
   - As the user types in the username input field, the username in the preview updates in real-time.
   
2. **Image Upload & Preview**  
   - Users can select an image to use in their post.  
   - The image in the preview updates immediately when a new image is selected.  
   - Use the provided `getImageFromUpload` function to grab the uploaded image source.

3. **Live Post Text Preview**  
   - Users can type text in a textarea.  
   - The preview updates on each keystroke.  
   - If the textarea is empty, the preview shows the default text: `"Your post will show here..."`.

4. **Image Style Selection**  
   - Users can choose an image style from a set of options.  
   - The selected style is applied as a class to the image in the preview.  
   - **Example:** If the user selects `Standard`, the image will have the classes:  
     `"post-image standard"`.

---

## Instructions

1. **Username Input**  
   - Type in the username field to update the preview username instantly.

2. **Post Text**  
   - Enter text in the textarea to update the post preview in real-time.

3. **Image Upload**  
   - Choose an image file from your device.  
   - The preview image updates automatically using `getImageFromUpload`.

4. **Image Styles**  
   - Select a style from the dropdown.  
   - The selected class is applied to the preview image.  
   - The image always retains the base class `"post-image"` along with the style class (e.g., `"post-image standard"`).

---

## Provided Function

```javascript
// Use this function to get an image source out of the the image upload box.
function getImageFromUpload(){
    let image = document.querySelector("#imageUpload").files[0];
    return URL.createObjectURL(image);
}

