export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-primary via-primary-light to-background-light relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-accent-cyan/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-accent-amber/20 to-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Let's <span className="bg-gradient-to-r from-accent via-accent-cyan to-accent-amber bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
          Open to opportunities in Machine Learning, Computer Vision, and AI Engineering
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="bg-primary-light/50 backdrop-blur-lg rounded-2xl p-8 text-left border border-white/10 hover:border-accent/30 hover:bg-primary-light/70 transition-all duration-300 hover:scale-105 shadow-card group">
            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-accent transition-colors">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <div className="p-3 bg-accent/20 rounded-lg group-hover:shadow-glow transition-shadow">
                  <svg className="w-6 h-6 flex-shrink-0 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-semibold">Email</p>
                  <a href="mailto:qaimbaaden@gmail.com" className="text-gray-300 hover:text-accent transition-colors font-medium">
                    qaimbaaden@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
                <div className="p-3 bg-accent-cyan/20 rounded-lg group-hover:shadow-glow-cyan transition-shadow">
                  <svg className="w-6 h-6 flex-shrink-0 text-accent-cyan" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1 font-semibold">Location</p>
                  <p className="text-gray-300 font-medium">Tokyo, Japan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-primary-light/50 backdrop-blur-lg rounded-2xl p-8 text-left border border-white/10 hover:border-accent-cyan/30 hover:bg-primary-light/70 transition-all duration-300 hover:scale-105 shadow-card group">
            <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-accent-cyan transition-colors">Connect Online</h3>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/qaim-baaden-5a75a01ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-accent transition-all duration-300 group/link p-4 rounded-xl hover:bg-white/5"
              >
                <div className="bg-accent/20 p-3 rounded-lg group-hover/link:bg-accent/30 transition-all duration-300 group-hover/link:scale-110 group-hover/link:shadow-glow">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">LinkedIn</p>
                  <p className="font-semibold">@qaim-b</p>
                </div>
              </a>

              <a
                href="https://github.com/qaim-b"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-accent-cyan transition-all duration-300 group/link p-4 rounded-xl hover:bg-white/5"
              >
                <div className="bg-accent-cyan/20 p-3 rounded-lg group-hover/link:bg-accent-cyan/30 transition-all duration-300 group-hover/link:scale-110 group-hover/link:shadow-glow-cyan">
                  <svg className="w-6 h-6 text-accent-cyan" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-semibold">GitHub</p>
                  <p className="font-semibold">@qaim-b</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Download CV */}
        <div className="mb-12">
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent to-accent-cyan text-white rounded-2xl hover:shadow-glow-lg hover:scale-105 transition-all duration-300 font-bold text-lg shadow-glow group"
          >
            <svg className="w-6 h-6 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-gray-400 font-medium">
            © 2025 Qaim Baaden • Built with <span className="text-accent">Next.js</span> and passion for creating meaningful technology
          </p>
        </div>
      </div>
    </section>
  )
}
