import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-screen text-center px-6"
    >
      <motion.h1
        className="text-5xl font-bold tracking-tight lg:text-6xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hi, I'm <span className="text-primary">Amrit pal S.</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-muted-foreground max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        A passionate web developer crafting modern, scalable, and elegant
        solutions for the web.
      </motion.p>
      <motion.div
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Button className="px-6 py-3 text-lg" asChild>
          <a href="#projects">View Projects</a>
        </Button>
        <Button variant="outline" className="px-6 py-3 text-lg" asChild>
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
