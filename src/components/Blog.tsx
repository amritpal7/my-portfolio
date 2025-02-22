import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"; // If using React Router

const blogPosts = [
  {
    id: 1,
    title: "Optimizing React Performance with useMemo & useCallback",
    date: "Feb 15, 2025",
    excerpt:
      "Learn how to enhance your React app’s performance by using useMemo and useCallback effectively...",
    link: "/blog/react-performance",
  },
  {
    id: 2,
    title: "Building a Scalable Redux Store for Large Applications",
    date: "Jan 28, 2025",
    excerpt:
      "A deep dive into structuring a Redux store for maintainability and scalability...",
    link: "/blog/redux-architecture",
  },
  {
    id: 3,
    title: "Framer Motion: Adding Stunning Animations to Your UI",
    date: "Dec 10, 2024",
    excerpt:
      "An introduction to Framer Motion and how it can be used to create fluid animations in React...",
    link: "/blog/framer-motion",
  },
  {
    id: 4,
    title: "Dark Mode in CSS: A Complete Guide",
    date: "Nov 05, 2024",
    excerpt:
      "Implementing dark mode with CSS variables and prefers-color-scheme...",
    link: "/blog/dark-mode",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 flex justify-center">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Blog
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="w-full p-6 bg-muted/30 border-border text-left rounded-lg shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    {post.title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  <Button asChild className="w-full">
                    <Link to={post.link}>Read More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
