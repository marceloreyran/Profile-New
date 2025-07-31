import type { Testimonial } from '@shared/schema';

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Carlos Rodriguez",
    position: "CEO",
    company: "Tech Solutions",
    content: "Marcelo's attention to detail and problem-solving skills are exceptional. He delivered a complex web application on time and exceeded our expectations.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: "2",
    name: "Maria Gonzalez",
    position: "Project Manager",
    company: "Digital Agency",
    content: "Working with Marcelo was a pleasure. His technical expertise and communication skills made our project a success. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5
  },
  {
    id: "3",
    name: "Luis Martinez",
    position: "Startup Founder",
    company: "",
    content: "Marcelo's innovative approach and dedication to quality made our mobile app development smooth and efficient. Outstanding work!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Testimonials</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            What clients and colleagues say about working with me
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-50 p-8 rounded-2xl shadow-lg card-hover">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star"></i>
                  ))}
                </div>
              </div>
              <blockquote className="text-slate-600 mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar}
                  alt={`${testimonial.name} testimonial`}
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.position}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
