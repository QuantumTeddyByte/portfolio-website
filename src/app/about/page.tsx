import Experience from '@/components/sections/experience'
import Skills from '@/components/sections/skills'

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
	I&apos;m currently in my second semester during my first year at Simon Fraser University. I like to work on <a className="text-mainAccent">Rust, Golang</a> in my free time along with exploring <a className="text-mainAccent"> NodeJS modules and Javascript/Typescript frameworks</a>. Big time Linux Nerd.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
