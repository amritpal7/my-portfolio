import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MoonStar, Sun, Menu } from "lucide-react";
import { Switch } from "./ui/switch";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-background/80 shadow-md border-b border-border z-50">
      <div
        className="max-w-6xl mx-auto flex items-center justify-between p-4
        bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 dark:border-black/50
        rounded-b-lg shadow-lg"
      >
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <nav className="hidden md:flex space-x-6">
          {[
            "Home",
            "About",
            "Projects",
            "Timeline",
            // "Testimonials",
            // "Blog",
            "Contact",
          ].map(section => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary transition"
            >
              {section}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/amritpal7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 hover:text-primary" />
          </a>
          <a
            href="https://www.linkedin.com/in/amritpal-singh-6939a0aa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 hover:text-primary" />
          </a>
          <div className="flex items-center space-x-2">
            <Sun className="w-5 h-5 text-yellow-500" />
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
            <MoonStar className="w-5 h-5 text-gray-500" />
            <Sheet>
              <SheetTrigger className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                <Menu className="w-6 h-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                {/* Sidebar Navigation */}
                <nav className="flex flex-col space-y-4 mt-12">
                  {[
                    "Home",
                    "Projects",
                    "Timeline",
                    // "Testimonials",
                    // "Blog",
                    "Contact",
                  ].map(section => (
                    <Link
                      key={section}
                      to={section.toLowerCase()}
                      smooth={true}
                      duration={500}
                      className="cursor-pointer text-lg font-medium hover:text-primary transition"
                    >
                      {section}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
