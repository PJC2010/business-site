"use client";
import { useState, useEffect } from 'react';
import { auth, db, storage } from '@/lib/firebase';
import { ref, uploadBytes, listAll, getDownloadURL, getMetadata } from 'firebase/storage';
import { doc, onSnapshot } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const StatCard = ({ label, value, sub }) => (
  <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-1">
    <span className="text-xs font-medium text-secondary uppercase tracking-widest">{label}</span>
    <span className="text-3xl font-bold text-primary">{value}</span>
    {sub && <span className="text-xs text-secondary">{sub}</span>}
  </div>
);

const QuickAction = ({ icon, label, onClick, href }) => {
  const cls =
    "flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-background hover:border-accent hover:bg-card transition-all group cursor-pointer w-full text-left";
  const inner = (
    <>
      <span className="text-xl">{icon}</span>
      <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">{label}</span>
      <span className="ml-auto text-border group-hover:text-accent transition-colors text-xs">→</span>
    </>
  );
  if (href) return <a href={href} className={cls}>{inner}</a>;
  return <button onClick={onClick} className={cls}>{inner}</button>;
};

export default function DocumentPortal() {
  const [user, setUser] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [docsExpanded, setDocsExpanded] = useState(false);
  const [portalData, setPortalData] = useState(null);

  useEffect(() => {
    let unsubPortal = null;

    const unsubAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchDocuments(currentUser.uid);

        // Live listener on clients/{uid} in Firestore
        const clientRef = doc(db, 'clients', currentUser.uid);
        unsubPortal = onSnapshot(clientRef, (snap) => {
          setPortalData(snap.exists() ? snap.data() : null);
        });
      } else {
        setLoading(false);
      }
    });

    return () => {
      unsubAuth();
      if (unsubPortal) unsubPortal();
    };
  }, []);

  const fetchDocuments = async (userId) => {
    try {
      const storageRef = ref(storage, `uploads/${userId}`);
      const result = await listAll(storageRef);
      const docs = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);
          const metadata = await getMetadata(item);
          return {
            id: item.fullPath,
            name: item.name,
            url,
            date: new Date(metadata.timeCreated).toLocaleDateString(),
            size: (metadata.size / 1024 / 1024).toFixed(2) + ' MB',
          };
        })
      );
      setDocuments(docs);
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !user) return;
    setUploading(true);
    try {
      const storageRef = ref(storage, `uploads/${user.uid}/${file.name}`);
      await uploadBytes(storageRef, file);
      await fetchDocuments(user.uid);
      setDocsExpanded(true);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload document.');
    } finally {
      setUploading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      await fetch('/api/logout', { method: 'POST' });
      window.location.href = '/logged-out';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const displayName = portalData?.clientName || user?.displayName || user?.email?.split('@')[0] || 'there';
  const lastLogin = user?.metadata?.lastSignInTime
    ? new Date(user.metadata.lastSignInTime).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : '—';

  const activeProjects = portalData?.activeProjects ?? 1;
  const phases = portalData?.phases ?? [
    { phase: 'Discovery & Strategy', status: 'completed' },
    { phase: 'Design & Development', status: 'active' },
    { phase: 'Launch & Optimization', status: 'pending' },
  ];
  const engagementNote = portalData?.engagementNote ?? 'Have a question about your project? Reach out and we\'ll respond within one business day.';

  const visibleDocs = docsExpanded ? documents : documents.slice(0, 3);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
          <span className="text-secondary text-sm">Loading your portal…</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">

      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
        <div>
          <p className="text-xs font-medium text-accent uppercase tracking-widest mb-1">Client Portal</p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Welcome back, {displayName}.
          </h1>
          <p className="text-secondary mt-1 text-sm">Here's what's happening with your account.</p>
        </div>
        <button
          onClick={handleSignOut}
          className="self-start sm:self-auto px-4 py-2 border border-border rounded-lg text-secondary hover:text-primary hover:border-neutral-600 transition-all text-sm"
        >
          Sign Out
        </button>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard label="Documents" value={documents.length} sub={documents.length === 1 ? '1 file shared' : `${documents.length} files shared`} />
        <StatCard label="Active Projects" value={activeProjects} sub={activeProjects === 1 ? 'In progress' : 'In progress'} />
        <StatCard label="Last Login" value={lastLogin} sub="Session active" />
      </div>

      {/* Mid Section: Engagement + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Current Engagement */}
        <div className="lg:col-span-3 bg-card border border-border rounded-xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Current Engagement</h2>
            <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">Active</span>
          </div>

          <div className="space-y-3">
            {phases.map(({ phase, status }) => (
              <div key={phase} className="flex items-center gap-3">
                <div
                  className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                    status === 'completed'
                      ? 'bg-green-500'
                      : status === 'active'
                      ? 'bg-accent ring-2 ring-accent/30'
                      : 'bg-border'
                  }`}
                />
                <span className={`text-sm ${status === 'pending' ? 'text-secondary' : 'text-primary'}`}>
                  {phase}
                </span>
                {status === 'active' && (
                  <span className="ml-auto text-xs text-accent font-medium">In Progress</span>
                )}
                {status === 'completed' && (
                  <span className="ml-auto text-xs text-green-500 font-medium">Complete</span>
                )}
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-border">
            <p className="text-xs text-secondary leading-relaxed">{engagementNote}</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 space-y-4">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Quick Actions</h2>
          <div className="space-y-2">
            <label className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border bg-background hover:border-accent hover:bg-card transition-all group cursor-pointer w-full">
              <span className="text-xl">📎</span>
              <span className="text-sm font-medium text-secondary group-hover:text-primary transition-colors">
                {uploading ? 'Uploading…' : 'Upload a Document'}
              </span>
              <span className="ml-auto text-border group-hover:text-accent transition-colors text-xs">→</span>
              <input type="file" className="hidden" onChange={handleFileUpload} disabled={uploading} />
            </label>
            <QuickAction icon="📅" label="Schedule a Call" href="/#contact" />
            <QuickAction icon="✉️" label="Contact Us" href="/#contact" />
          </div>
        </div>
      </div>

      {/* Documents Section */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-border">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Shared Documents</h2>
          {documents.length > 3 && (
            <button
              onClick={() => setDocsExpanded(!docsExpanded)}
              className="text-xs text-accent hover:underline"
            >
              {docsExpanded ? 'Show less' : `View all ${documents.length}`}
            </button>
          )}
        </div>

        {documents.length === 0 ? (
          <div className="px-6 py-12 text-center">
            <p className="text-secondary text-sm">No documents yet. Use Quick Actions above to upload your first file.</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {visibleDocs.map((doc) => (
              <div
                key={doc.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 hover:bg-background transition-colors gap-3"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 bg-background border border-border rounded-lg flex items-center justify-center text-base flex-shrink-0">
                    📄
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary leading-tight">{doc.name}</p>
                    <p className="text-xs text-secondary mt-0.5">{doc.date} · {doc.size}</p>
                  </div>
                </div>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-auto text-xs px-4 py-2 border border-border rounded-lg text-secondary hover:text-primary hover:border-neutral-600 transition-all"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
