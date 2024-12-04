export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-200 font-mono">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-black/90 border-b border-gray-800 p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-xl">[ 😮 OpenFace ]</div>
          <div className="space-x-6">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#mission" className="hover:text-white">
              Mission
            </a>
            <a href="#contribute" className="hover:text-white">
              Contribute
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 text-center">
        <pre className="text-green-500 text-xs mb-6">
          {` ____  ____  _____ _      _____ ____ ____ _____
/  _ \\/  __\\/  __// \\  /|  __//   _/  __/  __/
| | \\||  \\/||  \\  | |\\ ||  \\  |  / |  \\  |  \\
| |_/||  __/|  /_ | | \\||  /_ |  \\_|  /_ |  /_
\\____/\\_/   \\____\\\\_/  \\\\____\\\\____\\____\\____\\
`}
          {`

            `}
        </pre>
        <h1 className="text-4xl mb-4">Open Source AI Model Hub</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A community-driven platform for sharing, discovering, and deploying AI
          models
        </p>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8">{/* Mission */} Mission</h2>
          <p className="text-gray-400 mb-4">
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
          <h2 className="text-2xl mb-8">{/* The Problem */} The Problem</h2>
          <div className="text-gray-400 space-y-4">
            <p>[ ] Centralized control of AI model repositories</p>
            <p>[ ] Limited access to production-ready models</p>
            <p>[ ] High costs of model hosting and deployment</p>
            <p>[ ] Lack of transparency in model development</p>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8">{/* Contribute */} Contribute</h2>
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
                <p className="mb-2">ETH: 0x418FEb7c86D88916fd932A8d5336f3030803BB95</p>
                <p>BTC: bc1ppuc8dpkr497qh3ykze4jwfp87j3wl35k588udagzqa400rpwx54snrw2rf</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      {/* <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl mb-8"> Contact</h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 p-2 rounded border border-gray-700"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-gray-800 p-2 rounded border border-gray-700"
            />
            <button
              type="submit"
              className="bg-green-600 px-6 py-2 rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-x-6">
            <a
              href="https://discord.gg/3swfECPMcr"
              className="hover:text-white"
            >
              Discord
            </a>
            <a
              href="https://github.com/openface-ai/"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/openface_ai"
              className="hover:text-white"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}