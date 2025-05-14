
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");
  
  const categories = [
    { id: "general", name: "General Questions" },
    { id: "account", name: "Account & Profile" },
    { id: "booking", name: "Booking & Appointments" },
    { id: "business", name: "For Business" },
    { id: "payments", name: "Payments & Billing" },
    { id: "technical", name: "Technical Support" },
  ];
  
  const faqs = [
    {
      category: "general",
      question: "What is GlamPro?",
      answer: "GlamPro is a platform connecting clients with beauty professionals and salons. Users can discover, book, and review beauty services, while businesses can manage appointments and grow their client base."
    },
    {
      category: "general",
      question: "Which cities do you currently operate in?",
      answer: "GlamPro currently operates in major Brazilian cities including São Paulo, Rio de Janeiro, Belo Horizonte, Brasília, Curitiba, Salvador, and Recife. We're continuously expanding to new locations."
    },
    {
      category: "account",
      question: "How do I create an account?",
      answer: "You can create an account by clicking the 'Register' button in the top right corner of the homepage. Fill in your details, verify your email address, and you're ready to go!"
    },
    {
      category: "account",
      question: "Can I delete my account?",
      answer: "Yes, you can delete your account from your profile settings. Please note that once deleted, all your data will be permanently removed from our system."
    },
    {
      category: "booking",
      question: "How do I book an appointment?",
      answer: "To book an appointment, search for a salon, select the service you want, choose an available date and time, and confirm your booking. You'll receive a confirmation email with all the details."
    },
    {
      category: "booking",
      question: "Can I cancel or reschedule my appointment?",
      answer: "Yes, you can cancel or reschedule your appointment through your profile up to 24 hours before the scheduled time. Later cancellations may incur a fee depending on the salon's policy."
    },
    {
      category: "business",
      question: "How do I register my salon on GlamPro?",
      answer: "To register your salon, go to the 'For Business' page and click 'Register Your Business'. Fill out the required information about your salon, services, and staff. Our team will review your application and get back to you within 48 hours."
    },
    {
      category: "business",
      question: "What are the subscription fees for businesses?",
      answer: "GlamPro offers different subscription plans starting from R$99/month. Each plan includes different features suitable for businesses of various sizes. Visit our 'For Business' page to see detailed pricing."
    },
    {
      category: "payments",
      question: "What payment methods are accepted?",
      answer: "GlamPro accepts credit and debit cards, Pix, and bank transfers. Some salons also offer the option to pay in person at the time of service."
    },
    {
      category: "payments",
      question: "Is my payment information secure?",
      answer: "Yes, GlamPro uses industry-standard security protocols and encryption to protect your payment information. We never store complete credit card details on our servers."
    },
    {
      category: "technical",
      question: "The app is not working properly. What should I do?",
      answer: "First, try refreshing the page or restarting the app. If the issue persists, clear your browser cache or reinstall the app. If you're still experiencing problems, contact our support team with details about the issue."
    },
    {
      category: "technical",
      question: "How can I report a bug?",
      answer: "You can report bugs by emailing support@glampro.com with details about what happened, including any error messages you received and steps to reproduce the issue. Screenshots are very helpful."
    }
  ];
  
  const filteredFaqs = faqs.filter(faq => 
    faq.category === activeCategory && 
    (searchTerm === "" || 
     faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
     faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  return (
    <div className="min-h-screen bg-glam-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-heading">Frequently Asked Questions</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Find answers to commonly asked questions about GlamPro. If you can't find what you're looking for, please contact our support team.
          </p>
          
          <div className="relative max-w-xl mx-auto mt-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
            <Input
              type="text"
              placeholder="Search for questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 rounded-lg text-base w-full bg-glam-800 text-white border-glam-700"
            />
          </div>
        </div>
        
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`
                  whitespace-nowrap
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
        
        <div className="space-y-6">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-glam-800 rounded-xl p-6 border border-glam-700">
              <h2 className="text-xl font-bold mb-3 text-gold-400">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
          
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 bg-glam-800 rounded-xl border border-glam-700">
              <p className="text-xl text-gray-300 mb-4">No questions match your search.</p>
              <Button
                variant="outline"
                className="border-gold-500 text-gold-400"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
        
        <div className="mt-12 bg-glam-800 rounded-xl p-6 border border-glam-700 text-center">
          <h2 className="text-xl font-bold mb-3 text-gold-400">Still have questions?</h2>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Please contact our friendly support team.
          </p>
          <Button asChild className="bg-gold-500 hover:bg-gold-600 text-glam-900">
            <a href="/contact">Contact Support</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
