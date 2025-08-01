import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import type { Skill } from "@shared/schema";

const technicalSkills: Skill[] = [
  { name: "HTML", percentage: 80, category: "technical" },
  { name: "CSS", percentage: 70, category: "technical" },
  { name: "JavaScript", percentage: 60, category: "technical" },
  { name: "Git", percentage: 65, category: "technical" },
  { name: "GitHub", percentage: 65, category: "technical" },
  { name: "React", percentage: 50, category: "technical" },
];

const professionalSkills: Skill[] = [
  { name: "Communication", percentage: 75, category: "professional" },
  { name: "Creativity", percentage: 80, category: "professional" },
  { name: "Teamwork", percentage: 90, category: "professional" },
  { name: "Autodidact", percentage: 100, category: "professional" },
  { name: "Leadership", percentage: 90, category: "professional" },
  { name: "Adaptability", percentage: 90, category: "professional" },
];

interface SkillBarProps {
  skill: Skill;
  colorClass: string;
}

function SkillBar({ skill, colorClass }: SkillBarProps) {
  const [setRef, entry] = useIntersectionObserver({ threshold: 0.5 });
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (entry?.isIntersecting && barRef.current) {
      barRef.current.style.setProperty("--skill-width", `${skill.percentage}%`);
      barRef.current.classList.add("animate");
    }
  }, [entry?.isIntersecting, skill.percentage]);

  return (
    <div ref={setRef} className="skill-item group">
      <div className="flex justify-between items-center mb-4">
        <span className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors duration-300">{skill.name}</span>
        <span className="text-lg font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">{skill.percentage}%</span>
      </div>
      <div className="relative">
        <div className="w-full bg-slate-200 rounded-full h-4 shadow-inner">
          <div
            ref={barRef}
            className={`skill-bar h-4 rounded-full ${colorClass} shadow-lg relative overflow-hidden`}
            style={{ "--skill-width": "0%" } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gradient-to-br from-white via-slate-50 to-cyan-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-400 rounded-full filter blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-full shadow-lg">
              My Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            Skills & Abilities
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
          <p className="text-xl text-slate-700 mt-8 max-w-3xl mx-auto font-light leading-relaxed">
            Technical expertise and professional skills that drive exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Enhanced Technical Skills */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 hover:shadow-blue-500/25 transition-all duration-500">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg animate-pulse-soft">
                  <i className="fas fa-code text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-black gradient-text">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-8">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                    <SkillBar
                      skill={skill}
                      colorClass="bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Professional Skills */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 hover:shadow-emerald-500/25 transition-all duration-500">
              <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-4 shadow-lg animate-pulse-soft">
                  <i className="fas fa-users text-white text-2xl"></i>
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Professional Skills
                </h3>
              </div>

              <div className="space-y-8">
                {professionalSkills.map((skill, index) => (
                  <div key={skill.name} className="animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                    <SkillBar
                      skill={skill}
                      colorClass="bg-gradient-to-r from-emerald-500 to-teal-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
