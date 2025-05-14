
import HeroSection from "@/components/home/HeroSection";
import FeaturedSalons from "@/components/home/FeaturedSalons";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedSalons />

      {/* How it works section */}
      <section className="py-12 md:py-16 bg-gray-50 px-4">
        <div className="container max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              How BeautyCut Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Booking your next beauty appointment is easy and quick with our simple three-step process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="bg-beauty-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-beauty-500 text-xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Search</h3>
              <p className="text-gray-600">
                Find the perfect salon or service by searching with filters like location, price, and reviews.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="bg-beauty-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-beauty-500 text-xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Book</h3>
              <p className="text-gray-600">
                Select your preferred service, date, and time that works best for your schedule.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="bg-beauty-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-beauty-500 text-xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Enjoy</h3>
              <p className="text-gray-600">
                Visit the salon, enjoy your service, and leave a review to help others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For businesses section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container max-w-6xl flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Grow Your Beauty Business
            </h2>
            <p className="text-gray-600 mb-4">
              Join thousands of beauty professionals who are growing their business with BeautyCut. Our platform helps you reach new clients, manage appointments, and boost your online presence.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="bg-beauty-100 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Get discovered by thousands of potential clients</span>
              </li>
              <li className="flex items-start">
                <div className="bg-beauty-100 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Manage appointments and reduce no-shows</span>
              </li>
              <li className="flex items-start">
                <div className="bg-beauty-100 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Build your online reputation with verified reviews</span>
              </li>
              <li className="flex items-start">
                <div className="bg-beauty-100 p-1 rounded-full mr-3 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3334 4.33334L6.00002 11.6667L2.66669 8.33334" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Access reporting and insights to grow your business</span>
              </li>
            </ul>
            <Button className="bg-beauty-400 hover:bg-beauty-500">
              Register Your Business
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Beauty business owner" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-12 md:py-16 bg-beauty-50 px-4">
        <div className="container max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Experience Premium Beauty Services?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join thousands of satisfied customers who have found their perfect beauty service with BeautyCut.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button className="bg-beauty-400 hover:bg-beauty-500 px-6">
              Find a Salon
            </Button>
            <Button variant="outline" className="border-beauty-400 text-beauty-500">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
