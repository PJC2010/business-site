import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function LoggedOutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 pt-20">
      <div className="max-w-md w-full text-center py-12 px-8 bg-neutral-900/50 border border-neutral-800 rounded-2xl animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-light text-white mb-4">Successfully Logged Out</h1>
        <p className="text-neutral-400 mb-8">
          You have been securely signed out of your account. Thank you for using Castillo & Co.
        </p>
        <div className="space-y-4">
          <Link 
            href="/login"
            className="block w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors"
          >
            Sign Back In
          </Link>
          <Link 
            href="/"
            className="block w-full py-3 border border-neutral-700 text-neutral-300 font-medium rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
