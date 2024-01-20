import Image from "next/image";
import SpedImage from '../../public/speed250.jpg'
import SpedsecondImage from '../../public/speed500.jpg'
import { ChatWsp } from "@/components/ChatWsp";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3 py-6 lg:flex-row items-center justify-between">
      <h1 className="mt-3 text-center font-bold">
        Tienda de Bebida Energizante Speed Unlimited.
      </h1>
      <p>Consulte por envíos</p>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <Image
            src={SpedImage}
            className="h-full w-full object-cover"
            alt="lata de speed"
            width={300}
            height={300}
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-bold leading-relaxed text-blue-gray-900 antialiased">
              SPEED UNLIMITED x500
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              $650.00
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Ideal para todo tipo de eventos.
          </p>
        </div>
      </div>
      <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <Image
            src={SpedsecondImage}
            className="h-full w-full object-cover"
            alt="lata de speed"
            width={250}
            height={300}
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              Speed Unlmited x500
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              $650.00
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            Ideal para todo tipo de eventos.
          </p>
        </div>
      </div>
      <ChatWsp/>
    </main>
  );
}
