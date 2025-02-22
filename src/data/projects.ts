import todo from "@/assets/projects/todo.png";
import portfolio from "@/assets/projects/portfolio.png";
// Project data
export const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A sleek, minimal, and fully responsive portfolio built with React and ShadCN UI.",
    tech: ["React", "TypeScript", "ShadCN UI", "Framer Motion"],
    image: portfolio,
    live: "https://your-portfolio.com",
    github: "https://github.com/amritpal7/my-portfolio",
  },
  {
    id: 2,
    title: "Todo App with Supabase",
    description:
      "A feature-rich Todo App using Redux, Supabase, and TailwindCSS for seamless task management.",
    tech: ["React", "Redux", "Supabase", "ShadCN UI"],
    image: todo,
    live: "https://todo-vite-app-flame.vercel.app/",
    github: "https://github.com/amritpal7/todo-vite-app",
  },
  {
    id: 3,
    title: "E-Commerce Dashboard",
    description:
      "An admin panel for managing orders, products, and analytics with a clean UI.",
    tech: ["Next.js", "TailwindCSS", "ShadCN UI", "Supabase"],
    image: "/projects/dashboard.png",
    live: "https://your-dashboard.com",
    github: "https://github.com/yourusername/dashboard",
  },
  {
    id: 4,
    title: "AI Blog Generator",
    description:
      "A blogging platform that generates AI-powered articles using OpenAI API.",
    tech: ["React", "TypeScript", "OpenAI API", "ShadCN UI"],
    image: "/projects/ai-blog.png",
    live: "https://your-aiblog.com",
    github: "https://github.com/yourusername/ai-blog",
  },
];
