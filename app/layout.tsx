import "@/app/ui/global.css"
import { inter } from "@/app/ui/fonts"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: {
		template: '%s | NextInvoice',
		default: 'NextInvoice',
	},
	applicationName: "NextInvoice",
	description: "Simple open-source invoice system",
	creator: "theGUI001",
	metadataBase: new URL("https://nextinvoice.vercel.app/"),
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	)
}
