/* eslint-disable @next/next/no-head-element */
import Background from "../components/Background";
import Header from "../components/Header";
import "../styles/output.css";
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head></head>

			<body className="bg-bg text-primary caret-transparent">
				<Header />
				<Background />
				{children}
			</body>
		</html>
	);
}
