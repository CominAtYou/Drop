# Drop
A frontend for uploading files written with Tailwind.

See a demo here: https://codepen.io/CominAtYou/full/WNKZbZR

## Running it Yourself

### Requirements
- Node.js 16+

### Steps
- Clone the repo
- Open a terminal in the repo
- Run the following:

```
$ npm i
$ npx tailwindcss -i ./src/css/styles.css -o ./out/output.css
```

The resulting CSS will be in `./out/output.css`. Pop open the HTML file in a web browser, and you're all done!

> **Note**
> `./src/css/styles.css` is *not* the CSS file for the final product. It is a file that contains custom styles for Tailwind to copy over when it is building the actual CSS file. When running Drop, ensure that you are using `output.css` and not `styles.css`.

> **Note**
> Drop's HTML contains several missing elements that are designed to be inserted server-side. They are:
> - `#avatar-img`: This is the img element to the right of the title text. Ideally, this should contain the profile picture of the user currently signed in. If you're not hosting behind any authentication mechanism, you can remove this element, but this will make it impossible to bring up the `#popup-modal` modal.
> - `#location-select`: This is the location dropdown. The option values for this element were designed to be added server-side, though there is no harm in adding them to the HTML file itself.
> - `#modal-avatar-img`: Image in the modal that is displayed when clicking on `#avatar-img`. This is supposed to be the profile picture of the user that is currently signed in, but it doesn't have to be.
> - `#modal-username`: The username of the user currently signed in. This can be ignored if you're not using any authentication, or set to anything else.
