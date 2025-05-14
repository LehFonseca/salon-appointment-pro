
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold gradient-heading">BeautyCut</h3>
            <p className="text-gray-600 text-sm">
              Connecting you to the best beauty professionals and salons
              in your area. Book appointments, discover new styles, and
              experience premium beauty services.
            </p>
            <div className="flex gap-4">
              <Link to="#" className="text-gray-400 hover:text-beauty-400">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-beauty-400">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link to="#" className="text-gray-400 hover:text-beauty-400">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">For Customers</h3>
            <div className="grid gap-2">
              <Link to="/find-salon" className="text-gray-600 hover:text-beauty-400 text-sm">Find a Salon</Link>
              <Link to="/booking" className="text-gray-600 hover:text-beauty-400 text-sm">How Booking Works</Link>
              <Link to="/reviews" className="text-gray-600 hover:text-beauty-400 text-sm">Reviews</Link>
              <Link to="/gift-cards" className="text-gray-600 hover:text-beauty-400 text-sm">Gift Cards</Link>
              <Link to="/blog" className="text-gray-600 hover:text-beauty-400 text-sm">Beauty Blog</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">For Businesses</h3>
            <div className="grid gap-2">
              <Link to="/business" className="text-gray-600 hover:text-beauty-400 text-sm">Join as a Business</Link>
              <Link to="/business-resources" className="text-gray-600 hover:text-beauty-400 text-sm">Business Resources</Link>
              <Link to="/success-stories" className="text-gray-600 hover:text-beauty-400 text-sm">Success Stories</Link>
              <Link to="/business-app" className="text-gray-600 hover:text-beauty-400 text-sm">Business App</Link>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-4">Get Help</h3>
            <div className="grid gap-2">
              <Link to="/contact" className="text-gray-600 hover:text-beauty-400 text-sm">Contact Us</Link>
              <Link to="/faq" className="text-gray-600 hover:text-beauty-400 text-sm">FAQ</Link>
              <Link to="/privacy" className="text-gray-600 hover:text-beauty-400 text-sm">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-600 hover:text-beauty-400 text-sm">Terms of Service</Link>
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} BeautyCut. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-beauty-400 text-sm">Privacy</Link>
            <Link to="/terms" className="text-gray-500 hover:text-beauty-400 text-sm">Terms</Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-beauty-400 text-sm">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
