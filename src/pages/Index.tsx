
import HeroSection from "@/components/home/HeroSection";
import FeaturedSalons from "@/components/home/FeaturedSalons";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-glam-900 text-white">
      <HeroSection />
      <FeaturedSalons />

      {/* How it works section */}
      <section className="py-12 md:py-16 bg-glam-800 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 gradient-heading">
              How GlamPro Works
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Booking your next beauty appointment is easy and quick with our simple three-step process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-glam-900 p-6 rounded-xl text-center border border-glam-700 gold-glow">
              <div className="bg-gold-500/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-400 text-xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gold-400">Search</h3>
              <p className="text-gray-300">
                Find the perfect salon or service by searching with filters like location, price, and reviews.
              </p>
            </div>
            
            <div className="bg-glam-900 p-6 rounded-xl text-center border border-glam-700 gold-glow">
              <div className="bg-gold-500/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-400 text-xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gold-400">Book</h3>
              <p className="text-gray-300">
                Select your preferred service, date, and time that works best for your schedule.
              </p>
            </div>
            
            <div className="bg-glam-900 p-6 rounded-xl text-center border border-glam-700 gold-glow">
              <div className="bg-gold-500/20 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-gold-400 text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gold-400">Enjoy</h3>
              <p className="text-gray-300">
                Visit the salon, enjoy your service, and leave a review to help others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For businesses section */}
      <section className="py-12 md:py-16 px-4 bg-glam-900">
        <div className="container max-w-6xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Grow Your Beauty Business
            </h2>
            <p className="text-gray-300 mb-4">
              Join thousands of beauty professionals who are growing their business with GlamPro. Our platform helps you reach new clients, manage appointments, and boost your online presence.
            </p>
            <ul className="space-y-3 mb-6 text-gray-300">
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#daa95e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Get discovered by thousands of potential clients</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#daa95e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Manage appointments and reduce no-shows</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#daa95e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Build your online reputation with verified reviews</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gold-500/20 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#daa95e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Access reporting and insights to grow your business</span>
              </li>
            </ul>
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              Register Your Business
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Beauty business owner" 
              className="rounded-lg shadow-xl border border-glam-700"
            />
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-16 bg-glam-800 px-4">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
            Ready to Experience Premium Beauty Services?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Join thousands of satisfied customers who have found their perfect beauty service with GlamPro.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 px-6">
              Find a Salon
            </Button>
            <Button variant="outline" className="border-gold-500 text-gold-400">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
