import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error('Contact form error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = (data: InsertContactMessage) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  const contactInfo = {
    phone: "81-26-55-00-31",
    email: "marcelo.reyran@gmail.com",
    location: "Monterrey, México"
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-xl text-slate-600 mt-6 max-w-2xl mx-auto">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-slate-600 text-lg mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hello, feel free to reach out!
              </p>
            </div>
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-slate-600">{contactInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-slate-600">{contactInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-600">{contactInfo.location}</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300">
                  <i className="fab fa-dribbble text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    {...form.register('name')}
                    className="w-full"
                  />
                  {form.formState.errors.name && (
                    <p className="text-sm text-red-600">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    {...form.register('email')}
                    className="w-full"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-600">{form.formState.errors.email.message}</p>
                  )}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  placeholder="Project Inquiry"
                  {...form.register('subject')}
                  className="w-full"
                />
                {form.formState.errors.subject && (
                  <p className="text-sm text-red-600">{form.formState.errors.subject.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  {...form.register('message')}
                  className="w-full resize-none"
                />
                {form.formState.errors.message && (
                  <p className="text-sm text-red-600">{form.formState.errors.message.message}</p>
                )}
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
