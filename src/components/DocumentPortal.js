"use client";
import { useState, useEffect } from 'react';
import { auth, storage } from '@/lib/firebase';
import { ref, uploadBytes, listAll, getDownloadURL, getMetadata } from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';

export default function DocumentPortal() {
  const [user, setUser] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchDocuments(currentUser.uid);
      } else {
        setLoading(false);
      }
    });
    return () => unsubscribe();
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
            url: url,
            date: new Date(metadata.timeCreated).toLocaleDateString(),
            size: (metadata.size / 1024 / 1024).toFixed(2) + ' MB',
            category: 'Upload'
          };
        })
      );
      
      setDocuments(docs);
    } catch (error) {
      console.error("Error fetching documents:", error);
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
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Failed to upload document.");
    } finally {
      setUploading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      await fetch('/api/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) return <div className="text-white">Loading portal...</div>;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Secure Portal</h1>
          <p className="text-neutral-400">Welcome back. Access and manage your documents.</p>
        </div>
        <div className="flex gap-4">
          <label className="cursor-pointer px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
            {uploading ? 'Uploading...' : 'Upload Document'}
            <input type="file" className="hidden" onChange={handleFileUpload} disabled={uploading} />
          </label>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 border border-neutral-700 rounded-lg text-neutral-300 hover:bg-neutral-800 transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {documents.length === 0 ? (
          <div className="p-12 text-center border border-dashed border-neutral-800 rounded-xl">
            <p className="text-neutral-500">No documents found. Upload your first file above.</p>
          </div>
        ) : (
          documents.map((doc) => (
            <div 
              key={doc.id}
              className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between hover:border-neutral-700 transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center text-2xl group-hover:bg-neutral-700 transition-colors">
                  📄
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{doc.name}</h3>
                  <div className="flex space-x-3 text-sm text-neutral-500">
                    <span>{doc.category}</span>
                    <span>•</span>
                    <span>{doc.date}</span>
                    <span>•</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              </div>
              <a 
                href={doc.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors text-center"
              >
                Download
              </a>
            </div>
          ))
        )}
      </div>

      <div className="mt-12 p-8 bg-blue-900/10 border border-blue-500/20 rounded-2xl">
        <h2 className="text-xl font-semibold text-blue-400 mb-2">Security Note</h2>
        <p className="text-neutral-400">
          Your documents are stored securely and are only accessible through this portal. 
          Make sure to sign out when using a public device.
        </p>
      </div>
    </div>
  );
}
