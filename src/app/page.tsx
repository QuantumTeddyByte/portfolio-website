import Links from "@/components/links";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
	return (
		<div className="font-base">
			<div className="flex flex-row">
				<h1 className="text-2xl font-heading sm:text-4xl">
					Teddy <a className="text-mainAccent">Malhan</a>
				</h1>
			</div>
			<p className="mt-2 text-lg sm:text-xl">Software Developer</p>
			<div className="mt-8 text-base sm:text-lg">
				<p>
					Hi, my name is Teddy Malhan, and I&apos;m a first-year student at
					Simon Fraser University in BC, Canada, studying in the Computing
					Science program.
				</p>

				<br />

				<p>
					Explore my portfolio to find out more about me and my passion for
					software development or view my{" "}
					<a
						href="resume.pdf"
						className="text-mainAccent"
						download="Teddy_Malhan_Resume.pdf"
					>
						resume
					</a>
				</p>
			</div>

			<div className="flex flex-row justify-center items-center text-mainAccent">
				<Links />
			</div>
		</div>
	);
}
