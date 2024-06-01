import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
	I&apos;m in my second semester at <a className="text-mainAccent">Simon Fraser University, BC</a>. I like to work on computer science and software development projects in my free time and absolutely adore tinkering with <a className="text-mainAccent">Rust</a> and <a className="text-mainAccent">Golang</a>, not to mention I&apos;m always excited about new <a className="text-mainAccent">NodeJS modules and JavaScript/TypeScript frameworks.</a> And have I mentioned I use <a className="text-mainAccent">BSD</a>, by the way?
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
