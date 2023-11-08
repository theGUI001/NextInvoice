import { Metadata } from "next"
import { lusitana } from "@/app/ui/fonts"

export const metadata: Metadata = {
	title: "Users"
}

export default function Page() {
	return (
		<div className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Users Page</div >
	)
}
