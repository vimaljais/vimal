import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import typescript from "../assets/skills/typescript.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import windows from "../assets/skills/windows.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import nodejs from "../assets/skills/nodejs.svg"
import nextjs from "../assets/skills/nextjs.svg"
import nestjs from "../assets/skills/nestjs.svg"
import graphql from "../assets/skills/graphql.svg"
import aws from "../assets/skills/aws.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import tailwind from "../assets/skills/tailwind.svg"
import react from "../assets/skills/react.svg"


import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="React" img={react} />
                <SkillCard name="NextJS" img={nextjs} />
                <SkillCard name="Tailwind" img={tailwind} />
                <SkillCard name="NestJS" img={nestjs} />
                <SkillCard name="NodeJS" img={nodejs} />
                <SkillCard name="GraphQL" img={graphql} />
                <SkillCard name="AWS" img={aws} />
                <SkillCard name="Docker" img={docker} />
                <SkillCard name="Kubernetes" img={kubernetes} />
                <SkillCard name="TypeScript" img={typescript} />
                <SkillCard name="JavaScript" img={javascript} />
                <SkillCard name="Python" img={python} />
                <SkillCard name="Linux" img={linux} />
                <SkillCard name="Windows" img={windows} />
                <SkillCard name="Git" img={git} />
                <SkillCard name="Express" img={express} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}