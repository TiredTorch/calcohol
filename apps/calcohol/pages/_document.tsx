import Document, {
	Head, Html, Main, NextScript
} from "next/document";

class CalcoholDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta
						httpEquiv="X-UA-Compatible"
						content="IE=edge"
					/>
					<link
						rel="manifest"
						href="/manifest.json"
					/>
					<link
						rel="apple-touch-icon"
						sizes="192x192"
						href="/icons/icon-192x192.png"
					/>
					<meta
						name="theme-color"
						content="#f1b377"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default CalcoholDocument;
