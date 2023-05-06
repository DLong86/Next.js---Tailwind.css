import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import aston from "../public/aston-martin-23-1.jpeg";
import mclaren from "../public/1988 McLaren Honda MP4 4 formula f 1 race racing h wallpaper.jpg";
import hunt from "../public/Formula 1 1976 1976 McLaren M26 formula f 1 race racing wallpaper.jpg";
import lemans from "../public/lemans-1681949595681-7507.jpg";

export default function Home() {
	return (
		<main className="bg-white px-10">
			<section className="min-h-screen">
				<nav className="py-10 mb-12 flex justify-between">
					<h1 className="text-xl">Dave</h1>
					<ul className="flex items-center">
						<li>
							<BsFillMoonStarsFill className="cursor-pointer text-2xl" />
						</li>
						<li>
							<a
								className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
								href="#"
							>
								Profile
							</a>
						</li>
					</ul>
				</nav>
				<div className="text-center p-10">
					<h2 className="text-5xl uppercase py-2 text-teal-600 font-medium">
						Dave Long
					</h2>
					<h3 className="text-2xl py-2">Software Engineer</h3>
					<p className="text-md py-5 leading-8 text-gray-800">
						providing services for programming needs
					</p>
				</div>
				<div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
					<AiFillInstagram />
					<AiFillLinkedin />
				</div>
				<div className="relative">
					<Image src={aston} alt="aston-martin-23" className="mx-auto" />
				</div>
			</section>
			{/* section 2 */}
			<section>
				<div>
					<h3 className="text-3xl py-1">Skills I use</h3>
					<p className="text-md py-2 leading-8 text-gray-800">
						Lorem ipsum dolor sit amet{" "}
						<span className="text-teal-500">consectetur</span> adipisicing elit.
						Eveniet, commodi! Ea enim impedit nisi.{" "}
						<span className="text-teal-500">Fuga</span> laborum voluptates eos
						corporis in assumenda odit alias, dolorum aliquam!
					</p>
					<p className="text-md py-2 leading-8 text-gray-800">
						Lorem ipsum dolor sit amet{" "}
						<span className="text-teal-500">consectetur</span> adipisicing elit.
						Eveniet, commodi! Ea enim impedit nisi.{" "}
						<span className="text-teal-500">Fuga</span> laborum voluptates eos
						corporis in assumenda odit alias, dolorum aliquam! laborum
						voluptates eos corporis in assumenda odit alias, dolorum aliquam!
						laborum voluptates eos corporis in assumenda odit alias, dolorum
						aliquam!
					</p>
				</div>
				<div>
					<div className="text-center shadow-lg p-10 rounded-xl my-10">
						<Image
							src={mclaren}
							width={200}
							height={200}
							alt="McLaren mp4/4"
							className="mx-auto"
						/>
						<h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
						<p className="py-2">Legendary cars from legendary engineers.</p>
					</div>
					<div className="text-center shadow-lg p-10 rounded-xl my-10">
						<Image
							src={hunt}
							width={200}
							height={200}
							alt="James Hunt"
							className="mx-auto"
						/>
						<h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
						<p className="py-2">Legendary cars from legendary engineers.</p>
					</div>
					<div className="text-center shadow-lg p-10 rounded-xl my-10">
						<Image
							src={lemans}
							width={200}
							height={200}
							alt="Le Mans"
							className="mx-auto"
						/>
						<h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
						<p className="py-2">Legendary cars from legendary engineers.</p>
					</div>
				</div>
			</section>
		</main>
	);
}
