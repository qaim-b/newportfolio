export default function BeyondEngineering() {
  return (
    <section id="beyond" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
          Beyond Engineering
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Learning leadership through community building
        </p>

        <div className="max-w-4xl mx-auto">
          {/* Main Feature */}
          <div className="bg-gradient-to-br from-accent to-primary text-white rounded-lg p-8 md:p-12 shadow-xl mb-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="bg-white/20 p-4 rounded-lg">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  Founder, UM Global Buddies Football Team
                </h3>
                <p className="text-white/90 text-lg">University of Malaya</p>
              </div>
            </div>

            <p className="text-xl leading-relaxed mb-6">
              "Sport as a universal language for connection"
            </p>

            <p className="text-white/90 leading-relaxed mb-8">
              Started a football team that brought together over 50 international students from diverse backgrounds.
              Organized weekly matches and cultural exchange events, learning how to build a community where friendships could grow
              across borders and languages.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-white/80">International Students</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold mb-2">Weekly</p>
                <p className="text-white/80">Matches & Events</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <p className="text-4xl font-bold mb-2">1</p>
                <p className="text-white/80">Unified Community</p>
              </div>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="bg-background rounded-lg p-8">
            <h3 className="text-2xl font-bold text-primary mb-6">What I'm Still Learning</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Building Communities from Scratch",
                  description: "How to create structure and culture where none existed before",
                },
                {
                  title: "Inclusive Leadership",
                  description: "Ways to help everyone feel welcome regardless of background or skill level",
                },
                {
                  title: "Cultural Bridge-Building",
                  description: "How to facilitate connections between people from different countries and cultures",
                },
                {
                  title: "Sustained Engagement",
                  description: "Approaches to keep a volunteer community active and motivated over time",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-1">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Connection to Engineering */}
          <div className="mt-12 p-6 border-l-4 border-accent bg-background rounded-r-lg">
            <p className="text-gray-700 leading-relaxed">
              <span className="font-bold text-primary">The connection?</span> Just like in engineering and AI,
              I'm learning that building successful teams requires understanding diverse needs, creating inclusive systems,
              and maintaining long-term engagement. These experiences help me collaborate better in multicultural
              engineering teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
