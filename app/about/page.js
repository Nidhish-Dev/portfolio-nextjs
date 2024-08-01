"use client";
import Particles from "../components/particles";
// import {Snippet} from "@nextui-org/snippet";

import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Example() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
      
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="items-center max-w-2xl w-full  gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
{/* 
        <User  
        className="text-white" 
      name="Nidhish Rathore"
      description="Software Engineer"
      avatarProps={{
        src: "/pfp.jpg"
      }}
    /> */}
						<Card >
								<div className="z-10 flex flex-col items-center">
									<span className=" mt-10 my-10 mx-10 font-medium duration-150 text-zinc-200 group-hover:text-white font-display">
            I&apos;m Nidhish Rathore, a Full-Stack software engineer with a robust background in the MERN stack, encompassing MongoDB, Express.js, React, and Node.js, as well as Java for backend development. My expertise also includes working with Next.js to build high-performance, server-side rendered applications. I have a proven track record in designing and implementing dynamic web solutions and scalable backend systems. With a keen eye for detail and a passion for technology, I am committed to delivering exceptional user experiences and driving projects from concept to successful completion.
									</span>
								</div>
					
						</Card>
				

            {/* <Snippet 
      color="default" 
      className="mt-5 mb-5 text-base text-white sm:text-xs md:text-xs lg:text-xs xl:text-sm"
    >
      codenidhish07@gmail.com
    </Snippet> */}
				</div>
			</div>
		</div>
	);
}
