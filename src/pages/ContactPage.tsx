
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-glam-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have questions or feedback about GlamPro? Our team is here to help.
            Reach out to us through any of the channels below.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-glam-800 rounded-xl p-6 border border-glam-700">
            <h2 className="text-xl font-bold mb-6 text-gold-400">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gold-400 mb-1">Name</label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Your name" 
                    className="bg-glam-900 border-glam-700 text-white placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gold-400 mb-1">Email</label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-glam-900 border-glam-700 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gold-400 mb-1">Subject</label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject of your message" 
                  className="bg-glam-900 border-glam-700 text-white placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gold-400 mb-1">Message</label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message" 
                  rows={6}
                  className="bg-glam-900 border-glam-700 text-white placeholder:text-gray-500"
                />
              </div>
              
              <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="space-y-6">
            <div className="bg-glam-800 rounded-xl p-6 border border-glam-700">
              <h2 className="text-xl font-bold mb-6 text-gold-400">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex">
                  <MapPin className="h-5 w-5 text-gold-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Address</p>
                    <p className="text-gray-300">Av. Paulista, 1234, São Paulo, SP, Brazil</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Phone className="h-5 w-5 text-gold-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p className="text-gray-300">+55 (11) 3456-7890</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="h-5 w-5 text-gold-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p className="text-gray-300">contact@glampro.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-5 w-5 text-gold-400 mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-white">Business Hours</p>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-300">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-glam-800 rounded-xl p-6 border border-glam-700">
              <h2 className="text-xl font-bold mb-6 text-gold-400">Follow Us</h2>
              <div className="flex space-x-4">
                <Link to="#" className="bg-glam-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-glam-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                <Link to="#" className="bg-glam-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-glam-900" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </Link>
                <Link to="#" className="bg-glam-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-glam-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                </Link>
                <Link to="#" className="bg-glam-700 h-10 w-10 rounded-full flex items-center justify-center hover:bg-gold-500 transition-colors group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white group-hover:text-glam-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-glam-800 rounded-xl p-6 border border-glam-700 mb-12">
          <h2 className="text-xl font-bold mb-6 text-gold-400">Our Location</h2>
          <div className="h-80 w-full rounded-lg overflow-hidden">
            {/* This would be a Google Map in a real application */}
            <div className="w-full h-full bg-glam-700 flex items-center justify-center">
              <p className="text-gray-300">Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
        
        <div className="bg-glam-800 rounded-xl p-6 border border-glam-700">
          <h2 className="text-xl font-bold mb-6 text-gold-400">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How quickly can I expect a response to my inquiry?",
                answer: "We strive to respond to all inquiries within 24 business hours. For urgent matters, please contact us by phone."
              },
              {
                question: "Do you offer support on weekends?",
                answer: "Our customer support team is available Monday through Saturday. On Sundays and holidays, you can leave a message and we'll get back to you on the next business day."
              },
              {
                question: "How can I report a technical issue with the platform?",
                answer: "For technical issues, please email support@glampro.com with details of the problem you're experiencing, including screenshots if possible."
              }
            ].map((faq, index) => (
              <div key={index}>
                <h3 className="font-bold text-white">{faq.question}</h3>
                <p className="text-gray-300 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link to="/faq" className="text-gold-400 hover:text-gold-300 underline">
              View all FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
