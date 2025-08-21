import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Sistema de Gestión Empresarial",
      description: "API REST completa desarrollada con Spring Boot para gestión de inventarios, usuarios y reportes. Implementa autenticación JWT y documentación con OpenAPI.",
      technologies: ["Spring Boot", "PostgreSQL", "JWT", "Maven", "Docker"],
      github: "#",
      demo: "#",
      image: "🏢"
    },
    {
      title: "App de Tareas Móvil",
      description: "Aplicación Android nativa construida con Jetpack Compose. Incluye sincronización offline, notificaciones push y arquitectura MVVM limpia.",
      technologies: ["Jetpack Compose", "Room", "Coroutines", "Hilt", "Retrofit"],
      github: "#",
      demo: "#",
      image: "📋"
    },
    {
      title: "Microservicio de Notificaciones",
      description: "Servicio distribuido para envío de notificaciones multi-canal (email, SMS, push). Implementa patrones de circuit breaker y retry.",
      technologies: ["Kotlin", "Spring Cloud", "Redis", "RabbitMQ", "Kubernetes"],
      github: "#",
      demo: "#",
      image: "📧"
    },
    {
      title: "Dashboard Analytics",
      description: "Aplicación web para visualización de métricas en tiempo real. Backend en Spring Boot con WebSockets y frontend reactivo.",
      technologies: ["Spring Boot", "WebSocket", "MongoDB", "Gradle", "Chart.js"],
      github: "#",
      demo: "#",
      image: "📊"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Proyectos Destacados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden border border-border hover:shadow-soft transition-all duration-300 hover:scale-105 bg-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{project.image}</span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      asChild
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;