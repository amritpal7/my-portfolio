import { motion } from "framer-motion";
import { timelineData } from "@/data/timelineData";

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 px-6 flex justify-center">
      <div className="max-w-3xl w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Timeline
        </motion.h2>

        <div className="relative border-l-2 border-border">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.id}
              className="pl-6 mb-10 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute -left-4 w-8 h-8 bg-background border-2 border-border rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">
                {item.company} • {item.date}
              </p>
              <p className="mt-2 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
