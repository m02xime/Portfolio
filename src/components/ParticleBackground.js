import React from "react";
import Particles from "react-particles-js"
import ParticleConfig from "./Particle-config"

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig}></Particles>
    );
}