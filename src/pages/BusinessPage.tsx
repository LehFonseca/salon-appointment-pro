
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessPage = () => {
  return (
    <div className="min-h-screen bg-glam-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-20 md:pb-32">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')",
            backgroundPosition: "center",
            filter: "brightness(0.2)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-glam-950/80 to-glam-900/50"></div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-heading">
              Grow Your Beauty Business with GlamPro
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of beauty professionals who are expanding their clientele, streamlining their operations, and increasing their revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 text-lg py-6 px-8">
                Register Your Business
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-gold-500 text-gold-400 text-lg py-6 px-8">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Everything Your Beauty Business Needs
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              GlamPro offers a comprehensive set of tools designed specifically for beauty professionals, helping you manage and grow your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Appointment Management",
                description: "Easily manage your appointments, reduce no-shows with automated reminders, and streamline your scheduling."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Client Management",
                description: "Keep track of client preferences, history, and contact information to provide personalized service."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Business Analytics",
                description: "Gain insights into your business performance with detailed reports and analytics to make data-driven decisions."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                title: "Service Management",
                description: "Create and manage your service offerings, prices, durations, and assign them to specific staff members."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Photo Gallery",
                description: "Showcase your best work with a professional photo gallery that attracts new clients and builds your reputation."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: "Payment Processing",
                description: "Accept various payment methods, process transactions securely, and manage financial records efficiently."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-glam-900 p-6 rounded-xl border border-glam-700">
                <div className="text-gold-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gold-400">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              How GlamPro Works For Your Business
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Get started with GlamPro in just a few simple steps and transform how you manage your beauty business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Create Your Profile",
                description: "Register your business, add your services, staff, and business hours."
              },
              {
                step: "2",
                title: "Customize Your Page",
                description: "Upload photos, add descriptions, and showcase what makes your business unique."
              },
              {
                step: "3",
                title: "Manage Bookings",
                description: "Start receiving and managing appointments through your personalized dashboard."
              },
              {
                step: "4",
                title: "Grow Your Business",
                description: "Use our marketing tools and analytics to attract and retain more clients."
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="h-16 w-16 rounded-full bg-gold-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold-400 text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gold-400">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block h-0.5 w-full bg-gold-500/20 absolute right-0 top-8 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Choose the plan that's right for your business, with no hidden fees or long-term commitments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "R$99",
                period: "per month",
                description: "Perfect for individuals and small businesses getting started.",
                features: [
                  "Profile listing on GlamPro",
                  "Basic appointment management",
                  "Up to 1 staff member",
                  "Email support",
                  "Client management"
                ],
                buttonText: "Start Free Trial",
                highlighted: false
              },
              {
                name: "Professional",
                price: "R$199",
                period: "per month",
                description: "Ideal for growing businesses looking to expand their online presence.",
                features: [
                  "Everything in Basic",
                  "Advanced appointment management",
                  "Up to 5 staff members",
                  "Phone & email support",
                  "Marketing tools",
                  "Analytics dashboard",
                  "Payment processing"
                ],
                buttonText: "Start Free Trial",
                highlighted: true
              },
              {
                name: "Premium",
                price: "R$299",
                period: "per month",
                description: "For established businesses with multiple locations or large teams.",
                features: [
                  "Everything in Professional",
                  "Unlimited staff members",
                  "Multiple locations",
                  "Priority support",
                  "Advanced analytics",
                  "Custom integrations",
                  "Dedicated account manager"
                ],
                buttonText: "Start Free Trial",
                highlighted: false
              }
            ].map((plan, index) => (
              <div key={index} className={`
                rounded-xl p-6 border 
                ${plan.highlighted 
                  ? "border-gold-400 bg-glam-900/80 transform scale-105 shadow-xl shadow-gold-500/20" 
                  : "border-glam-700 bg-glam-900"}
              `}>
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{plan.name}</h3>
                  <div className="flex items-center justify-center">
                    <span className="text-3xl font-bold text-gold-400">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-3">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="h-5 w-5 text-gold-400 mr-2 shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.highlighted ? 'bg-gold-500 hover:bg-gold-600 text-glam-900' : 'bg-glam-700 hover:bg-glam-600 text-white border border-gold-500'}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 text-gray-400 text-sm">
            All plans come with a 14-day free trial. No credit card required.
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Success Stories
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Hear from beauty professionals who have transformed their businesses with GlamPro.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Since joining GlamPro, my client bookings have increased by 40%. The platform is so intuitive and my clients love how easy it is to book appointments.",
                name: "Carla Mendes",
                role: "Hair Stylist, Rio de Janeiro",
                image: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
              },
              {
                quote: "GlamPro has completely streamlined our operations. The reduced no-shows alone have made it worth every penny. I recommend it to every beauty professional I know.",
                name: "Miguel Torres",
                role: "Barbershop Owner, São Paulo",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80"
              },
              {
                quote: "The analytics tools have helped me understand my business better. I can now make data-driven decisions about services, pricing, and marketing.",
                name: "Ana Silva",
                role: "Nail Salon Owner, Belo Horizonte",
                image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-glam-800 p-6 rounded-xl border border-glam-700">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-gold-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Have questions about GlamPro? Find answers to common questions below.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "How much does GlamPro cost?",
                answer: "GlamPro offers various pricing plans starting from R$99/month. We have options for businesses of all sizes, from individual professionals to large salons with multiple locations."
              },
              {
                question: "Is there a contract or commitment?",
                answer: "No, GlamPro operates on a monthly subscription basis with no long-term contracts. You can upgrade, downgrade, or cancel your plan at any time."
              },
              {
                question: "How do I get started with GlamPro?",
                answer: "Getting started is easy! Simply register for a free 14-day trial, set up your business profile, add your services and staff, and you're ready to start accepting bookings."
              },
              {
                question: "Can I integrate GlamPro with my existing website?",
                answer: "Yes, GlamPro offers widgets and booking buttons that can be easily integrated into your existing website, allowing clients to book appointments directly."
              },
              {
                question: "What payment methods are supported?",
                answer: "GlamPro supports all major credit cards, debit cards, and popular payment platforms including Pix, Mercado Pago, and PagSeguro."
              },
              {
                question: "Can I manage multiple locations with GlamPro?",
                answer: "Yes, our Premium plan supports multiple location management from a single dashboard, making it perfect for businesses with several branches."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-glam-900 rounded-lg p-6 border border-glam-700">
                <h4 className="font-bold text-lg mb-2 text-gold-400">{faq.question}</h4>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-4">Still have questions? We're here to help.</p>
            <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
              <Link to="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-glam-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">
              Ready to Transform Your Beauty Business?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of beauty professionals already growing their business with GlamPro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 text-lg py-6 px-8">
                Start Your Free Trial
                <ArrowRight className="ml-2" size={18} />
              </Button>
              <Button variant="outline" className="border-gold-500 text-gold-400 text-lg py-6 px-8">
                Schedule a Demo
              </Button>
            </div>
            <p className="text-gray-400 mt-4 text-sm">No credit card required. 14-day free trial.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessPage;
