
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const serviceCategories = [
  {
    id: "haircuts",
    name: "Haircuts & Styling",
    description: "Professional haircuts and styling services for all hair types",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    services: [
      { name: "Women's Haircut", priceRange: "R$60 - R$150" },
      { name: "Men's Haircut", priceRange: "R$40 - R$100" },
      { name: "Children's Haircut", priceRange: "R$30 - R$60" },
      { name: "Blow Dry & Styling", priceRange: "R$50 - R$120" },
      { name: "Special Occasion Style", priceRange: "R$80 - R$200" },
    ]
  },
  {
    id: "coloring",
    name: "Hair Coloring",
    description: "From subtle highlights to vibrant colors and complete transformations",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
    services: [
      { name: "Full Color", priceRange: "R$120 - R$250" },
      { name: "Highlights/Lowlights", priceRange: "R$150 - R$300" },
      { name: "Balayage", priceRange: "R$200 - R$400" },
      { name: "Ombre", priceRange: "R$180 - R$350" },
      { name: "Color Correction", priceRange: "R$250+ (consultation required)" },
    ]
  },
  {
    id: "treatments",
    name: "Hair Treatments",
    description: "Nourishing treatments to restore and maintain healthy hair",
    image: "https://images.unsplash.com/photo-1532710093739-9470acff878f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    services: [
      { name: "Deep Conditioning", priceRange: "R$50 - R$100" },
      { name: "Keratin Treatment", priceRange: "R$200 - R$500" },
      { name: "Brazilian Blowout", priceRange: "R$250 - R$450" },
      { name: "Scalp Treatment", priceRange: "R$70 - R$150" },
      { name: "Hair Mask", priceRange: "R$40 - R$80" },
    ]
  },
  {
    id: "nails",
    name: "Nail Services",
    description: "Manicures, pedicures, and nail art for beautiful hands and feet",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?ixlib=rb-4.0.3&auto=format&fit=crop&w=1036&q=80",
    services: [
      { name: "Basic Manicure", priceRange: "R$40 - R$60" },
      { name: "Gel Manicure", priceRange: "R$60 - R$90" },
      { name: "Basic Pedicure", priceRange: "R$50 - R$80" },
      { name: "Spa Pedicure", priceRange: "R$70 - R$120" },
      { name: "Nail Art (per nail)", priceRange: "R$10 - R$30" },
    ]
  },
  {
    id: "makeup",
    name: "Makeup Services",
    description: "Professional makeup application for any occasion",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    services: [
      { name: "Natural Everyday Look", priceRange: "R$80 - R$120" },
      { name: "Special Event Makeup", priceRange: "R$120 - R$200" },
      { name: "Bridal Makeup", priceRange: "R$200 - R$400" },
      { name: "Makeup Lesson", priceRange: "R$150 - R$250" },
      { name: "Full Face with Lashes", priceRange: "R$150 - R$250" },
    ]
  },
  {
    id: "spa",
    name: "Spa & Wellness",
    description: "Relaxing treatments for body and mind",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    services: [
      { name: "Swedish Massage (60 min)", priceRange: "R$100 - R$180" },
      { name: "Deep Tissue Massage (60 min)", priceRange: "R$120 - R$200" },
      { name: "Facial Treatment", priceRange: "R$130 - R$250" },
      { name: "Body Scrub", priceRange: "R$80 - R$150" },
      { name: "Full Spa Day Package", priceRange: "R$350 - R$700" },
    ]
  }
];

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredCategories = searchTerm 
    ? serviceCategories.filter(category => 
        category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        category.services.some(service => service.name.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : serviceCategories;
  
  return (
    <div className="min-h-screen bg-glam-900 text-white">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-heading">Our Beauty Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover a wide range of premium beauty services available through our network of professional salons and beauty experts.
            </p>
            
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
              <input
                type="text"
                placeholder="Search for services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 rounded-lg text-base w-full bg-glam-800 text-white border border-glam-700 focus:border-gold-400 focus:ring-gold-400"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-8 bg-glam-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              onClick={() => setActiveCategory(null)}
              variant={activeCategory === null ? "default" : "outline"}
              className={`
                rounded-full text-sm font-medium px-4
                ${activeCategory === null 
                  ? "bg-gold-500 hover:bg-gold-600 text-glam-900" 
                  : "border-gold-500 text-gray-300 hover:bg-glam-700"}
              `}
            >
              All Services
            </Button>
            
            {serviceCategories.map(category => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  rounded-full text-sm font-medium px-4
                  ${activeCategory === category.id 
                    ? "bg-gold-500 hover:bg-gold-600 text-glam-900" 
                    : "border-gold-500 text-gray-300 hover:bg-glam-700"}
                `}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Listings */}
      <section className="py-12 bg-glam-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {filteredCategories
              .filter(category => activeCategory ? category.id === activeCategory : true)
              .map((category) => (
                <div key={category.id} className="bg-glam-800 rounded-xl overflow-hidden border border-glam-700">
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-64 md:h-auto">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <h2 className="text-2xl font-bold mb-2 text-gold-400">{category.name}</h2>
                      <p className="text-gray-300 mb-6">{category.description}</p>
                      
                      <div className="space-y-4">
                        {category.services.map((service, index) => (
                          <div key={index} className="flex justify-between pb-2 border-b border-glam-700">
                            <span className="text-white">{service.name}</span>
                            <span className="text-gold-400 font-medium">{service.priceRange}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-6">
                        <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900">
                          Find Salons
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          {filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-300">No services match your search. Please try different keywords.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-glam-800">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 gradient-heading">Ready to Book Your Service?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Find nearby salons and beauty professionals offering these services. Get the perfect look you've been dreaming of!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gold-500 hover:bg-gold-600 text-glam-900 px-6">
              Find Salons
            </Button>
            <Button variant="outline" className="border-gold-500 text-gold-400">
              Browse Special Offers
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
