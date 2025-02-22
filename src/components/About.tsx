// import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 text-center max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <div className="flex flex-col items-center space-y-4">
        <Avatar className="w-24 h-24 border-2 border-primary">
          <AvatarImage src="/me.jpg" alt="Amrit pal singh" />
          <AvatarFallback>YN</AvatarFallback>
        </Avatar>

        <p className="text-muted-foreground leading-relaxed px-4">
          I'm a passionate frontend developer with expertise in **React,
          TypeScript, TailwindCSS**, and modern UI/UX principles. I love
          building **minimalist, elegant, and highly interactive** web
          applications.
        </p>

        <p className="text-muted-foreground leading-relaxed px-4">
          Currently looking for a Job, I'm always seeking to **improve user
          experience, optimize performance, and create seamless web
          applications**.
        </p>
      </div>
    </section>
  );
};

export default About;
