import Image from "next/image";
import SignoMomentaneo from "../source/signo.jpg";
import { BiChevronLeft } from "@react-icons/all-files/bi/BiChevronLeft";

export default function Requisitation(params) {
  return (
    <div className="fontPoppins bg-mi-gama-200">
		<div className="grid grid-cols-2 gap-5 grid-span-1 relative">
			<div className=" p-2 w-full bg-mi-gama-50 p-5 h-full">
				<div>
					<Image className="mx-auto p-3 pb-5" src={SignoMomentaneo} />
				</div>

				<div className="w-full text-justify text-white">
					<p className="mx-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos quaerat error harum omnis aliquid et. Dolor quo ducimus blanditiis cumque sed ex alias perspiciatis. Ipsam enim inventore corrupti voluptate!
					Dolorem laborum architecto qui, ipsa sunt cum labore harum quis omnis nostrum perferendis adipisci repellendus accusamus molestiae libero amet consequuntur quibusdam quisquam! Odio voluptates incidunt quam enim modi quis aliquid?
					Dolor eum debitis officiis cupiditate numquam delectus, recusandae, laboriosam, dolores voluptatibus eos voluptas. Dignissimos fuga impedit voluptatum quae! Distinctio itaque at quidem laborum suscipit aperiam amet quia ad molestiae maxime?</p>
				</div>

				<div className="text-center m-5">
					<button className="bg-mi-gama-300 px-5 py-2 rounded hover:bg-mi-gama-400" type="submit">FIRMAR</button>
				</div>

				<button className="absolute top-2 left-3 text-white" type="submit"> <h1 className="text-2xl"><BiChevronLeft /></h1></button>
			</div>

			<div className="grid-rows-3 m-5 grid-span-1">
				<div className="grid-cols-3 gap-1">
					<div>
						<h1>Inicial Date</h1>
						<h1>01/01/23</h1>
					</div>

					<div>
						<h1>In progress</h1>
					</div>

					<div>
						<h1>Last Date</h1>
						<h1>04/04/23</h1>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
}
