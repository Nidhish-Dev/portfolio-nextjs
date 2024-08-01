"use client";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import React from 'react'
import Particles from "../components/particles";


function page() {
  return (
    <div className="text-white">
    <Navigation />
    <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
    <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
    <div className="container mt-40 mx-auto items-center max-w-2xl">
      <card>
    <p >I'm Nidhish Rathore, a Full-Stack software engineer with a robust background in the MERN stack, encompassing MongoDB, Express.js, React, and Node.js, as well as Java for backend development. My expertise also includes working with Next.js to build high-performance, server-side rendered applications. I have a proven track record in designing and implementing dynamic web solutions and scalable backend systems. With a keen eye for detail and a passion for technology, I am committed to delivering exceptional user experiences and driving projects from concept to successful completion.
    </p>
    </card>
    </div>
  </div>
  )
}

export default page
