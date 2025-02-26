export const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template 1</title>
    <style>
      :root {
        font-family: "Inter", ui-sans-serif, system-ui, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
      }
      * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
      }
      body {
        display: flex;
        min-height: 100vh;
      }
    </style>
  </head>
  <body>
    {{content}}
  </body>
</html>
`;
