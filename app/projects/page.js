"use client";
import { Github, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const projects = [
	{
		href: "https://nidhish-dev.github.io/Chatify/",
		handle: "Chatify",
	},
	{
		href: "https://portfolio-nidhishr07.vercel.app/",
		handle: "PORTFOLIO",
	},
	{
		href: "https://nidhishr7.github.io/MoviesX/",
		handle: "MoviesX",
	},
	{
		href: "https://neeraj-design.github.io/Portfolio/",
		handle: "Neeraj's Portfolio",
	},
	{
		href: "https://nidhish-dev.github.io/Contact_me/",
		handle: "Contact ME",
	},
	{
		href: "https://nidhish-dev.github.io/Weather/",
		handle: "Weather",
	},
];

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
					{projects.map((s, index) => (
						<Card key={index}>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center duration-700 group   lg:pb-20 md:p-16"
							>
								
								{/* <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span> */}
								<div className="z-10 flex flex-col items-center">
									<span className="text-xl font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
