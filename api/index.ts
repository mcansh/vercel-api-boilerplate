import type { VercelApiHandler } from "@vercel/node";

const handler: VercelApiHandler = (req, res) => {
  return res.status(200).end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  `);
};

export default handler;
