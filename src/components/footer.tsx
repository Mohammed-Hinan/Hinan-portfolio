import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border py-6 flex flex-col sm:flex-row justify-center items-center">
      
      <div className="flex items-center gap-6 mt-4 sm:mt-0">
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          Mohammed Hinan A K
        </Link>
       
      </div>
    </footer>
  );
}
