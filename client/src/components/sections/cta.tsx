import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function CTA() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Received",
      description: "Our team will review your project details and contact you within 24 hours.",
    });
    form.reset();
  }

  return (
    <section className="py-24 relative overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 tracking-tight">
            Ready to Build the <br />
            <span className="text-primary text-glow">Extraordinary?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            We only take on a limited number of partners each quarter to ensure maximum attention and quality. Secure your slot today.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-white/80">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-bold text-primary">01</span>
              </div>
              <div>
                <h4 className="font-bold">Discovery Call</h4>
                <p className="text-sm text-muted-foreground">30-minute strategy session</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/80">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-bold text-primary">02</span>
              </div>
              <div>
                <h4 className="font-bold">Proposal & Roadmap</h4>
                <p className="text-sm text-muted-foreground">Detailed technical scope</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/80">
               <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-bold text-primary">03</span>
              </div>
              <div>
                <h4 className="font-bold">Kickoff</h4>
                <p className="text-sm text-muted-foreground">Immediate development start</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className="bg-white/5 border-white/10 focus:border-primary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@company.com" className="bg-white/5 border-white/10 focus:border-primary" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your vision..." 
                        className="bg-white/5 border-white/10 focus:border-primary min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white">
                Submit Request
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}