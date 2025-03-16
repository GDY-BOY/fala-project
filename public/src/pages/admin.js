import { useSession } from 'next-auth/react';
import { useState } from 'react';

export default function Admin() {
  const { data: session } = useSession();
  const [videoUrl, setVideoUrl] = useState('');
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  if (!session) return <a href="/api/auth/signin">Login</a>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const slug = Math.random().toString(36).substring(7);

    const res = await fetch('/api/save-video', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug, videoUrl, text }),
    });

    if (res.ok) {
      const emailRes = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, link: `${window.location.origin}/?id=${slug}` }),
      });

      if (emailRes.ok) {
        setMessage('Video saved and email sent successfully!');
        setVideoUrl('');
        setText('');
        setEmail('');
      } else {
        setMessage('Failed to send email.');
      }
    } else {
      setMessage('Failed to save video.');
    }
  };

  return (
    <div>
      <h1>Admin Panel - Add Videos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Video URL (YouTube embed link):</label>
          <input
            type="text"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Supplementary Text:</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email Address:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save and Send Email</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}