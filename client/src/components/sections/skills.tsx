import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';
import type { Skill } from '@shared/schema';

const technicalSkills: Skill[] = [
  { name: "HTML", percentage: 70, category: "technical" },
  { name: "CSS", percentage: 60, category: "technical" },
  { name: "JavaScript", percentage: 40, category: "technical" },
  { name: "Git", percentage: 65, category: "technical" },
  { name: "GitHub", percentage: 65, category: "technical" },
  { name: "React", percentage: 20, category: "technical" },
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
      barRef.current.style.setProperty('--skill-width', `${skill.percentage}%`);
      barRef.current.classList.add('animate');
    }
  }, [entry?.isIntersecting, skill.percentage]);

  return (
    <div ref={setRef} className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-slate-700">{skill.name}</span>
        <span className="text-sm text-slate-500">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3">
        <div
          ref={barRef}
          className={`skill-bar h-3 rounded-full ${colorClass}`}
          style={{ '--skill-width': '0%' } as React.CSSProperties}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Technical expertise and professional skills that drive exceptional results
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <i className="fas fa-code text-blue-600 mr-2"></i>
              Technical Skills
            </h3>
            
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  colorClass="bg-gradient-to-r from-blue-500 to-cyan-500" 
                />
              ))}
            </div>
          </div>
          
          {/* Professional Skills */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <i className="fas fa-users text-blue-600 mr-2"></i>
              Professional Skills
            </h3>
            
            <div className="space-y-6">
              {professionalSkills.map((skill) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  colorClass="bg-gradient-to-r from-emerald-500 to-teal-500" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
