import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Sobre Mí
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Soy un desarrollador apasionado con experiencia en el desarrollo de aplicaciones 
                robustas y escalables utilizando <span className="text-foreground font-semibold">Kotlin</span> y{" "}
                <span className="text-foreground font-semibold">Java</span>.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mi experiencia abarca desde el desarrollo backend con{" "}
                <span className="text-foreground font-semibold">Spring Boot</span> hasta la creación 
                de aplicaciones móviles modernas con{" "}
                <span className="text-foreground font-semibold">Android Jetpack Compose</span>.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Me enfoco en escribir código limpio, mantenible y eficiente, siguiendo las mejores 
                prácticas de la industria y los principios de arquitectura de software.
              </p>
            </div>

            <div className="space-y-4">
              <Card className="p-6 border border-border hover:shadow-soft transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Experiencia</h3>
                <p className="text-muted-foreground">
                  [X] años desarrollando aplicaciones empresariales y móviles
                </p>
              </Card>

              <Card className="p-6 border border-border hover:shadow-soft transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Enfoque</h3>
                <p className="text-muted-foreground">
                  Arquitectura limpia, testing y desarrollo ágil
                </p>
              </Card>

              <Card className="p-6 border border-border hover:shadow-soft transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3 text-foreground">Objetivo</h3>
                <p className="text-muted-foreground">
                  Crear soluciones tecnológicas que impacten positivamente
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;