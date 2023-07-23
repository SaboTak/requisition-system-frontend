"use client";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard(params) {
  const [navbar, setNavbar] = useState(false);
  return (
    /* Un comentario JSX */
    <div>
      <nav className="w-full bg-gray-800 shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8  ">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <a href="#">
                <h2 className="text-2xl text-white font-bold">requisicion</h2>
              </a>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-white">
                  <Link href="/">Crear requisicion</Link>
                </li>
                <li className="text-white">
                  <Link href="/blogs">Inicio</Link>
                </li>
                <li className="text-white">
                  <Link href="/about">Cerrar sesion</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div class="bg-white">
        <div class="container mx-auto p-6">
          <h1 class="text-3xl font-bold mb-14 mt-6">Requisiciones de Materiales</h1>
          <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-semibold mb-4">
                Solicitud de Materiales #12345
              </h2>
              <p class="text-gray-700 mb-2">Tipo de Material: Papelería</p>
              <p class="text-gray-700 mb-2">Cantidad: 50</p>
              <p class="text-gray-700 mb-2">Solicitante: Juan Pérez</p>
              <p class="text-gray-700 mb-2">Fecha de Solicitud: 01/05/2023</p>
              <div class="mt-4">
                <span class="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg mr-2">
                  Pendiente
                </span>
                <span class="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">
                  Enviado al Supervisor
                </span>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-semibold mb-4">
                Solicitud de Materiales #12344
              </h2>
              <p class="text-gray-700 mb-2">Tipo de Material: Herramientas</p>
              <p class="text-gray-700 mb-2">Cantidad: 5</p>
              <p class="text-gray-700 mb-2">Solicitante: Ana García</p>
              <p class="text-gray-700 mb-2">Fecha de Solicitud: 01/05/2023</p>
              <div class="mt-4">
                <span class="px-3 py-1 bg-green-200 text-green-700 rounded-lg mr-2">
                  Aprobado
                </span>
                <span class="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg">
                  Enviado al Gerente de Operaciones
                </span>
              </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-6">
              <h2 class="text-xl font-semibold mb-4">
                Solicitud de Materiales #12343
              </h2>
              <p class="text-gray-700 mb-2">Tipo de Material: Mobiliario</p>
              <p class="text-gray-700 mb-2">Cantidad: 10</p>
              <p class="text-gray-700 mb-2">Solicitante: María López</p>
              <p class="text-gray-700 mb-2">Fecha de Solicitud: 30/04/2023</p>
              <div class="mt-4">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>

     </div>
  );
  
}
