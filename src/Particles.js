import Particles from "react-tsparticles";
import ParticlesParams from "./assets/particles.json";

const ParticlesComponent = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesParams}
      ></Particles>
    </div>
  );
};

export default ParticlesComponent;
