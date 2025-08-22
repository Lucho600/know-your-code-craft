import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí implementarías la lógica de envío del formulario
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "amdtrespalacios@gmail.com",
      href: "mailto:amdtrespalacios@gmail.com"
    },
    {
      icon: Phone,
      title: "Teléfono",
      value: "+57 311 406 2565",
      href: "tel:+573114062565"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      value: "Bucaramanga, Colombia",
      href: "none"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Hablemos
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  ¿Tienes un proyecto en mente?
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Me encantaría conocer tu idea y ayudarte a convertirla en realidad. 
                  Estoy disponible para proyectos de desarrollo backend, aplicaciones móviles 
                  y consultorías técnicas.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, title, value, href }) => (
                  <Card key={title} className="p-4 border border-border hover:shadow-soft transition-all duration-300">
                    {/*<a
                      href={href}
                      className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <div className="p-2 bg-primary/10 rounded-full">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{title}</p>
                        <p className="text-sm">{value}</p>
                      </div>
                    </a>*/}
                    {href !== "none" ? (
                        <a
                            href={href}
                            className="flex items-center space-x-4 text-muted-foreground hover:text-primary transition-colors"
                        >
                          <div className="p-2 bg-primary/10 rounded-full">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{title}</p>
                            <p className="text-sm">{value}</p>
                          </div>
                        </a>
                    ) : (
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="p-2 bg-primary/10 rounded-full">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{title}</p>
                            <p className="text-sm">{value}</p>
                          </div>
                        </div>
                    )}

                  </Card>
                ))}
              </div>
            </div>

            {/* Formulario de contacto */}
            <Card className="p-8 border border-border shadow-soft">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;