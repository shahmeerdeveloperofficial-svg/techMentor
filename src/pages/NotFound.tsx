import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div className="text-6xl font-extrabold font-mono text-[#8746F5]">404</div>
        <h1 className="text-3xl font-extrabold text-[#F8F7FC]">Page Not Found</h1>
        <p className="text-sm text-[#A9A7BA] leading-relaxed">
          The requested page route could not be found. Please check the URL or return to our homepage.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="purple-gradient-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#211F30] border border-[#383348] text-sm font-semibold text-[#F8F7FC] hover:border-[#8746F5] transition-colors"
          >
            <span>Browse Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
