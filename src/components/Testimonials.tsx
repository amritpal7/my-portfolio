import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 flex justify-center">
      <div className="max-w-4xl w-full">
        <motion.h2
          className="text-4xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testi, index) => (
            <motion.div
              key={testi.id}
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="w-full p-6 bg-muted/30 border-border text-center rounded-lg shadow-md">
                <CardContent>
                  <Avatar className="mx-auto mb-4">
                    <AvatarImage src={testi.image} alt={testi.name} />
                    <AvatarFallback>{testi.name[0]}</AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold">{testi.name}</h3>
                  <p className="text-sm text-muted-foreground">{testi.role}</p>
                  <p className="mt-3 text-sm italic">"{testi.feedback}"</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
