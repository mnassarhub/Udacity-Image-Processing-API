// Import Express And Routes Module
import express, { Application, Request, Response } from 'express';
import routes from './Routes/router';

const app: Application = express();

// Create Home Page Route
app.get('/', (req: Request, res: Response): void => {
  res.status(200).send(
    `<!DOCTYPE html>
    <html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<!-- Set Website Styles -->
		<style>
			* {
				padding: 20px;
				margin: 0px;
				box-sizing: border-box;
				font-size: 30px;
				text-align: center;
			}
			.container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: calc(100vw - 80px);
				height: calc(100vh - 80px);
			}
			h1 {
				text-decoration: underline;
				font-weight: bold;
			}
			.example {
				color: #ff0000;
			}
		</style>
		<title>Resizing API App</title>
	</head>
	<body>
		<div class="container">
			<h1>Welcome To My Resizing API Home Page</h1>
			<p class="description">
				To Resize An Image Please Send A Request With Your Valid
				Width, Heigh And Image Name.
			</p>
			<h3>To Get Valid Request Follow Next Example:</h3>
			<p class="example">
				HTTP://localhost:3000/api/imageResize?name={image-name}&width={num
				>=1}&height={num >=1}
			</p>
		</div>
	</body>
    </html>`
  );
});

// Initialize All Routes
app.use(routes);

// Set Server Configuration
const port = process.env.Port || 3000;
app.listen(port, (): void =>
  console.log(`Server Running On Port: HTTP://localhost:${port}`)
);

export default app;
