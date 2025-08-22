import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                &lt;ATL Dev /&gt;
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Desarrollador especializado en crear soluciones robustas y escalables 
                con Kotlin, Java y las mejores tecnologías del ecosistema JVM.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-foreground">Enlaces Rápidos</h4>
              <div className="space-y-2">
                {[
                  { name: 'Sobre mí', href: '#about' },
                  { name: 'Habilidades', href: '#skills' },
                  { name: 'Proyectos', href: '#projects' },
                  { name: 'Contacto', href: '#contact' }
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-4 text-foreground">Sígueme</h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:tu@email.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} ATL Dev. Hecho con{" "}
              <Heart className="w-4 h-4 text-red-500" />
              {" "}y mucho café
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;