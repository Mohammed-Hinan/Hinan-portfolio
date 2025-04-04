import Link from "next/link";
import { ReactNode } from "react";

interface PlaygroundCardProps {
  title: string;
  description: string;
  label: string;
  icon: ReactNode;
  href: string;
  gradient: string;
  comingSoon?: boolean;
}

export function PlaygroundCard({
  title,
  description,
  label,
  icon,
  href,
  gradient,
  comingSoon = false,
}: PlaygroundCardProps) {
  return (
    <div className={`group relative rounded-lg overflow-hidden border border-border bg-card hover:shadow-lg transition-all ${comingSoon ? 'opacity-80' : ''}`}>
      <div className={`absolute top-3 left-3 z-10 rounded-full w-8 h-8 flex items-center justify-center bg-gradient-to-br ${gradient}`}>
        {icon}
      </div>
      
      <div className="p-6 pt-14">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium">{title}</h3>
          <span className="text-xs bg-secondary px-2 py-1 rounded">{label}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        {comingSoon ? (
          <div>
            <div className="bg-primary/20 text-primary font-medium rounded-md p-3 mb-2 text-center">
              Coming Soon!
            </div>
            <p className="text-xs text-muted-foreground text-center">This feature is under development</p>
          </div>
        ) : (
          <Link 
            href={href}
            className="block w-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground text-center py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Explore Now
          </Link>
        )}
      </div>
      
      {comingSoon && (
        <div className="absolute inset-0 bg-background/50 backdrop-blur-[1px] pointer-events-none"></div>
      )}
    </div>
  );
}
