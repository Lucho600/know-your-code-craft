import { Card } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes",
      skills: ["Kotlin", "Java", "SQL", "JavaScript", "TypeScript"],
      icon: "💻"
    },
    {
      title: "Backend",
      skills: ["Spring Boot", "Spring Security", "JPA/Hibernate", "Maven", "Gradle"],
      icon: "⚙️"
    },
    {
      title: "Android",
      skills: ["Jetpack Compose", "MVVM", "Room", "Retrofit", "Coroutines"],
      icon: "📱"
    },
    {
      title: "Base de Datos",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "H2"],
      icon: "🗄️"
    },
    {
      title: "Herramientas",
      skills: ["Git", "Docker", "IntelliJ IDEA", "Android Studio", "Postman"],
      icon: "🛠️"
    },
    {
      title: "Metodologías",
      skills: ["Clean Architecture", "TDD", "Scrum", "GitFlow", "CI/CD"],
      icon: "📋"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Habilidades Técnicas
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="p-6 border border-border hover:shadow-soft transition-all duration-300 hover:scale-105 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center mb-4">
                  <span className="text-4xl mb-3 block">{category.icon}</span>
                  <h3 className="text-xl font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="bg-muted/50 rounded-full px-3 py-2 text-sm text-center font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                      style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;