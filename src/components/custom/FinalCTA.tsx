import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden h-[400px]">
      <div className="absolute inset-0 grid-background opacity-10"></div>
      <div className="relative container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Miss Your <span className="text-gradient">Chance</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the founders who are bringing their ideas to life faster and
            more affordably than ever before. Our schedule fills up quickly -
            book your consultation today.
          </p>
          <Button className="bg-gradient-primary hover:opacity-90 text-white rounded-full px-12 py-6 text-lg">
            Book Your Slot
          </Button>
          <p className="text-sm text-muted-foreground mt-6">
            No commitment required - just a friendly chat about your vision and
            how we can help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
