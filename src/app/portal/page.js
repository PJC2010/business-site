import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import DocumentPortal from '@/components/DocumentPortal';

export default function PortalPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('portal_token');

  if (!token) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <DocumentPortal />
    </div>
  );
}
