
'use client';
import { useState } from 'react';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || data.details || 'Failed to send message');
      }

      setStatus('success');
      setEmail('');
      setMessage('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
      console.error('Contact form error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-black/90 border-b border-gray-800 p-4 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-lg md:text-xl">[ 😮 OpenFace ]</div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <a href="#contribute" className="hover:text-white transition-colors">Contribute</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`
          md:hidden 
          absolute 
          top-full 
          left-0 
          right-0 
          bg-black/95 
          border-b 
          border-gray-800
          transform
          transition-all
          duration-300
          ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}
        `}>
          <div className="flex flex-col p-4 space-y-4">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#mission" className="hover:text-white transition-colors">Mission</a>
            <a href="#contribute" className="hover:text-white transition-colors">Contribute</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="hover:text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 md:pt-24 px-4 text-center">
        <pre className="text-green-500 text-[0.6rem] md:text-xs mb-6 whitespace-pre overflow-x-auto">
          {`____ ______   ____   _____/ ____\\____    ____  ____
/  _ \\\\____ \\_/ __ \\/    \\   __\\ / __ \\ _/ ___\\/ __ \\
(  <_> )  |_> >  ___/|   |  \\  |  / __ \\ \\  \\__\\  ___/
\\____/|   __/ \\___  >___|  /__|  (____  /\\___  >___  >
    |__|        \\/     \\/           \\/     \\/    \\/
`}
        </pre>
        <h1 className="text-2xl md:text-4xl mb-4">Open Source AI Model Hub</h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          A community-driven platform for sharing, discovering, and deploying AI models
        </p>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8">Mission</h2>
          <p className="text-gray-400 mb-4 text-sm md:text-base">
            We believe in democratizing AI model development and deployment.
            OpenFace is built to be the community-driven alternative to
            proprietary AI platforms, ensuring knowledge and resources remain
            free and available to all.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8">The Problem</h2>
          <div className="text-gray-400 space-y-4 text-sm md:text-base">
            <p>Centralized control of AI model repositories</p>
            <p>Limited access to production-ready models</p>
            <p>High costs of model hosting and deployment</p>
            <p>Lack of transparency in model development</p>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8">Contribute</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl">Development</h3>
              <a
                href="https://github.com/openface-ai"
                className="inline-block bg-gray-800 px-4 py-2 rounded hover:bg-gray-700"
              >
                GitHub Repository →
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl">Support Us</h3>
              <div className="text-gray-400">
                <p className="mb-2 text-xs md:text-sm break-all">
                  ETH: 0x418FEb7c86D88916fd932A8d5336f3030803BB95
                </p>
                <p className="text-xs md:text-sm break-all">
                  BTC: bc1ppuc8dpkr497qh3ykze4jwfp87j3wl35k588udagzqa400rpwx54snrw2rf
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8">Contact</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-800 p-2 rounded border border-gray-700"
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full bg-gray-800 p-2 rounded border border-gray-700"
            />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500">
                {errorMessage || 'Failed to send message. Please try again.'}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 md:py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center">
            <a href="https://discord.gg/3swfECPMcr" className="hover:text-white">Discord</a>
            <a href="https://github.com/openface-ai/" className="hover:text-white">GitHub</a>
            <a href="https://twitter.com/openface_ai" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

