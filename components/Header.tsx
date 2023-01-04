import React from "react";

export default function Header() {
	return (
		<div className="absolute top-0 left-0 flex flex-row h-20 items-center md:text-4xl text-2xl p-3 w-screen">
			<div className="flex-0">LOGO</div>
			<div className="flex-1 flex justify-center items-center">MENU</div>
			<div className="underline cursor-pointer">LOGIN</div>
		</div>
	);
}
