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
    <section id="about" className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold rounded-full shadow-lg">
              Get to Know Me
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 mx-auto rounded-full shadow-lg"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Image */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-soft"></div>
              <div className="relative p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl shadow-2xl">
                <img
                  src={personalInfo.profileImage}
                  alt={`${personalInfo.name} - ${personalInfo.title}`}
                  className="w-80 h-80 object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-xl animate-float">
                <i className="fas fa-code text-white text-xl"></i>
              </div>
            </div>
          </div>

          {/* Enhanced About Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
              <p className="text-xl text-slate-700 leading-relaxed pl-8 font-light">
                {personalInfo.description}
              </p>
            </div>

            {/* Enhanced Personal Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-phone text-white"></i>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 font-medium">Phone</span>
                    <p className="font-bold text-slate-800">{personalInfo.phone}</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-envelope text-white"></i>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 font-medium">Email</span>
                    <p className="font-bold text-slate-800">{personalInfo.email}</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-map-marker-alt text-white"></i>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 font-medium">Location</span>
                    <p className="font-bold text-slate-800">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:animate-pulse">
                    <i className="fas fa-briefcase text-white"></i>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500 font-medium">Position</span>
                    <p className="font-bold text-slate-800">{personalInfo.title}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Interests */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-4">
                {personalInfo.interests.map((interest, index) => (
                  <span
                    key={interest}
                    className="group px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 rounded-2xl text-sm font-semibold hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-500 transform hover:scale-110 shadow-lg hover:shadow-xl"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
