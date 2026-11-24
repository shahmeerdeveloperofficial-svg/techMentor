import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center space-x-2 text-xs text-[#A9A7BA]">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#C7A7FF] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <li>
                <ChevronRight className="w-3 h-3 text-[#383348]" />
              </li>
              <li>
                {item.path && !isLast ? (
                  <Link
                    to={item.path}
                    className="hover:text-[#C7A7FF] transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-[#F8F7FC] font-medium" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
