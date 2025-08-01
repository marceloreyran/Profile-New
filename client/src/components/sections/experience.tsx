import type { Education, WorkExperience } from "@shared/schema";

const education: Education[] = [
  {
    degree: "Master's Degree in Software Engineering and Computer Systems",
    institution: "UNIR",
    period: "",
    description:
      "Logical reasoning skills, problem solving, decision making, observation, analysis and synthesis skills and interest in research and innovation, as well as knowledge of and interest in exact sciences of software and computer science.",
  },
  {
    degree: "Software Technology Engineer",
    institution: "UVM",
    period: "",
    description:
      "Apply autonomous learning strategies at different levels and fields of knowledge that allow you to make timely and relevant decisions in the personal, academic and professional spheres. Use logical, formal, mathematical, iconic, verbal and non-verbal languages according to their stage of life, to understand, interpret and express ideas, feelings, theories and currents of thought with an ecumenical approach.",
  },
];

const workExperience: WorkExperience[] = [
  {
    position: "IT Analist",
    company: "TRESANDE",
    period: "",
    description:
      "Activities carried out in position, Administrative area, Hardware and Software Support, Hardware and Software monitoring, Equipment connectivity, Databases",
  },
  {
    position: "IT Analist",
    company: "GNSYS",
    period: "",
    description:
      "Activities carried out in the position, client portfolio management, review and updating of contracts, payment of fees and services, processing of contracts with government agencies.",
  },
];

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  isEducation?: boolean;
}

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  isEducation = false,
}: TimelineItemProps) {
  const colorClasses = isEducation
    ? "bg-blue-600 text-blue-600 bg-blue-100"
    : "bg-emerald-600 text-emerald-600 bg-emerald-100";

  return (
    <div className="relative pl-12 pb-8">
      <div
        className={`absolute left-2 w-4 h-4 ${colorClasses.split(" ")[0]} rounded-full border-4 border-white shadow`}
      ></div>
      <div className="bg-slate-50 p-6 rounded-lg">
        <div className="mb-2">
          <h4 className="text-lg font-semibold text-slate-800">{title}</h4>
        </div>
        <p className={`${colorClasses.split(" ")[1]} font-medium mb-3`}>
          {subtitle}
        </p>
        <p className="text-slate-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            My professional journey and academic achievements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <i className="fas fa-graduation-cap text-blue-600 mr-2"></i>
              Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500"></div>

              {/* Education Items */}
              {education.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.degree}
                  subtitle={item.institution}
                  period={item.period}
                  description={item.description}
                  isEducation={true}
                />
              ))}
            </div>
          </div>

          {/* Work Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <i className="fas fa-briefcase text-blue-600 mr-2"></i>
              Work Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500"></div>

              {/* Experience Items */}
              {workExperience.map((item, index) => (
                <TimelineItem
                  key={index}
                  title={item.position}
                  subtitle={item.company}
                  period={item.period}
                  description={item.description}
                  isEducation={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
