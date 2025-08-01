import type { PersonalInfo } from "@shared/schema";

const personalInfo: PersonalInfo = {
  name: "Marcelo Reyna Rangel",
  title: "Frontend Developer",
  phone: "81-26-55-00-31",
  email: "marcelo.reyran@gmail.com",
  location: "Monterrey, México",
  description:
    "I am a proactive person, excellent teammate, organized and responsible. I really enjoy learning new things, so my goal is a challenging and dynamic position where I can share my experience and add new knowledge.",
  interests: [
    "Software",
    "Games",
    "Music",
    "Travel",
    "Cars",
    "Sports",
    "Books",
    "Shopping",
  ],
  profileImage: "/assets/profile.jpeg",
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="text-center lg:text-left">
            <div className="inline-block p-1 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-8">
              <img
                src={personalInfo.profileImage}
                alt={`${personalInfo.name} - ${personalInfo.title}`}
                className="w-80 h-80 object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {personalInfo.description}
              </p>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-phone text-blue-600 mr-3"></i>
                  <div>
                    <span className="text-sm text-slate-500">Phone</span>
                    <p className="font-semibold">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-blue-600 mr-3"></i>
                  <div>
                    <span className="text-sm text-slate-500">Email</span>
                    <p className="font-semibold">{personalInfo.email}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-blue-600 mr-3"></i>
                  <div>
                    <span className="text-sm text-slate-500">Location</span>
                    <p className="font-semibold">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-briefcase text-blue-600 mr-3"></i>
                  <div>
                    <span className="text-sm text-slate-500">Position</span>
                    <p className="font-semibold">{personalInfo.title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {personalInfo.interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <i className="fas fa-download mr-2"></i>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
