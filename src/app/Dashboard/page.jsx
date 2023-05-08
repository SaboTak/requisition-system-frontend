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

      <div className="flex justify-center items-center mt-8">
        <h1 className="text-2xl font-bold text-purple-500">
          Tabla del menu de requisicion
        </h1>
      </div>
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold mb-4">Lista de Requisiciones</h1>
        <table class="w-full border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-200 text-gray-700 text-sm">
              <th class="py-2 px-4 border">ID</th>
              <th class="py-2 px-4 border">Fecha</th>
              <th class="py-2 px-4 border">Tipo</th>
              <th class="py-2 px-4 border">Estado</th>
              <th class="py-2 px-4 border">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-sm">
              <td class="py-2 px-4 border">1</td>
              <td class="py-2 px-4 border">2023-05-05</td>
              <td class="py-2 px-4 border">Materiales de oficina</td>
              <td class="py-2 px-4 border">En espera de aprobación</td>
              <td class="py-2 px-4 border">
                <a href="#" class="text-blue-500 hover:text-blue-700 mr-2">
                  Ver Detalles
                </a>
              </td>
            </tr>
            <tr class="text-sm">
              <td class="py-2 px-4 border">2</td>
              <td class="py-2 px-4 border">2023-05-04</td>
              <td class="py-2 px-4 border">Herramientas</td>
              <td class="py-2 px-4 border">Aprobada</td>
              <td class="py-2 px-4 border">
                <a href="#" class="text-blue-500 hover:text-blue-700 mr-2">
                  Ver Detalles
                </a>
              </td>
            </tr>
            <tr class="text-sm">
              <td class="py-2 px-4 border">3</td>
              <td class="py-2 px-4 border">2023-05-02</td>
              <td class="py-2 px-4 border">Equipo de cómputo</td>
              <td class="py-2 px-4 border">Rechazada</td>
              <td class="py-2 px-4 border">
                <a href="#" class="text-blue-500 hover:text-blue-700 mr-2">
                  Ver Detalles
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-white">
        <div class="container mx-auto p-6">
          <h1 class="text-3xl font-bold mb-6">Requisiciones de Materiales</h1>
          <div class="grid grid-cols-1 bg-black md:grid-cols-2 lg:grid-cols-3 gap-4">
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

      <div class="container mx-auto my-4">
        <div class="text-center my-4">
          <h1 class="text-4xl font-bold text-gray-800">
            Sistema de Requisiciones
          </h1>
          <p class="text-lg text-gray-700">
            Bienvenido al sistema de requisiciones de materiales
          </p>
        </div>

        <div class="flex flex-col md:flex-row justify-between md:space-x-4">
          <div class="w-full md:w-1/4 bg-white shadow rounded-lg p-4">
            <h2 class="text-lg font-bold text-gray-800 mb-2">
              Nueva Requisición
            </h2>
            <form>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="tipo">
                  Tipo de Material:
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="tipo"
                  type="text"
                  placeholder="Ingrese el tipo de material"
                ></input>
              </div>
              <div class="mb-4">
                <label
                  class="block text-gray-700 font-bold mb-2"
                  for="cantidad"
                >
                  Cantidad:
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="cantidad"
                  type="number"
                  placeholder="Ingrese la cantidad"
                ></input>
              </div>
              <div class="flex justify-end">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div class="w-full md:w-3/4 bg-white shadow rounded-lg p-4">
            <h2 class="text-lg font-bold text-gray-800 mb-2">
              Requisiciones Pendientes
            </h2>
            <table class="table-auto w-full">
              <thead>
                <tr>
                  <th class="px-4 py-2">Tipo de Material</th>
                  <th class="px-4 py-2">Cantidad</th>
                  <th class="px-4 py-2">Estado</th>
                  <th class="px-4 py-2">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="border px-4 py-2">Lápices</td>
                  <td class="border px-4 py-2">50</td>
                  <td class="border px-4 py-2">En Espera</td>
                  <td class="border px-4 py-2">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus"></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="bg-gray-100">
        <div class="container mx-auto my-4 p-4">
          <h1 class="text-3xl font-bold text-gray-800 mb-4">
            Requisiciones Pendientes
          </h1>
          <div class="bg-white shadow-md rounded-md overflow-hidden">
            <table class="table-auto w-full">
              <thead class="bg-gray-100">
                <tr>
                  <th class="p-2 text-left">#</th>
                  <th class="p-2 text-left">Fecha</th>
                  <th class="p-2 text-left">Usuario</th>
                  <th class="p-2 text-left">Materiales</th>
                  <th class="p-2 text-left">Estado</th>
                  <th class="p-2 text-left"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="p-2">1</td>
                  <td class="p-2">03/05/2023</td>
                  <td class="p-2">Juan Perez</td>
                  <td class="p-2">10 cajas de papel</td>
                  <td class="p-2">
                    <span class="bg-yellow-500 text-white py-1 px-2 rounded-md text-xs font-bold">
                      Pendiente
                    </span>
                  </td>
                  <td class="p-2">
                    <button class="bg-blue-500 text-white py-1 px-2 rounded-md text-xs font-bold">
                      Ver Detalles
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">2</td>
                  <td class="p-2">02/05/2023</td>
                  <td class="p-2">Ana Rodriguez</td>
                  <td class="p-2">5 monitores LCD</td>
                  <td class="p-2">
                    <span class="bg-green-500 text-white py-1 px-2 rounded-md text-xs font-bold">
                      Aprobado
                    </span>
                  </td>
                  <td class="p-2">
                    <button class="bg-blue-500 text-white py-1 px-2 rounded-md text-xs font-bold">
                      Ver Detalles
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="p-2">3</td>
                  <td class="p-2">01/05/2023</td>
                  <td class="p-2">Maria Garcia</td>
                  <td class="p-2">20 cajas de cartón</td>
                  <td class="p-2">
                    <span class="bg-red-500 text-white py-1 px-2 rounded-md text-xs font-bold">
                      Rechazado
                    </span>
                  </td>
                  <td class="p-2">
                    <button class="bg-blue-500 text-white py-1 px-2 rounded-md text-xs font-bold">
                      Ver Detalles
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="bg-gray-200">
    <div class="container mx-auto mt-10">
        <div class="flex justify-between items-center mb-10">
            <h1 class="text-2xl font-bold">Tabla de Requisiciones</h1>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onclick="mostrarFormulario()">Nueva Requisición</button>
        </div>

        <div class="hidden mb-10" id="formulario">
            <h2 class="text-xl mb-4 font-bold">Nueva Requisición</h2>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="material">
                        Material
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="material" type="text" placeholder="Ingrese el material"></input>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 font-bold mb-2" for="cantidad">
                        Cantidad
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cantidad" type="number" placeholder="Ingrese la cantidad"></input>
                </div>
                <div class="flex items-center justify-between">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onclick="crearRequisicion()">Guardar</button>
                    <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onclick="ocultarFormulario()">Cancelar</button>
                </div>
            </form>
        </div>

        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">Material</th>
                    <th class="px-4 py-2">Cantidad</th>
                    <th class="px-4 py-2">Estado</th>
                </tr>
            </thead>
            <tbody id="tabla-requisiciones">
               
            </tbody>
        </table>
    </div>
   

</div>
<div class="max-w-md mx-auto mt-8">

    <form class="bg-white shadow-md rounded px-4 pt-4 pb-4 mb-4" onsubmit="addRequisition(event)">
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="material">
      Material
    </label>
    <input class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="material" type="text" placeholder="Material" required></input>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="quantity">
      Cantidad
    </label>
    <input class="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" placeholder="Ingresa la Cantidad" required></input>
  </div>
  <div class="mb-4">
    <label class="block text-gray-700 font-bold mb-2" for="comment">
      Comentario
    </label>
    <textarea class="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="comment" placeholder="Agregue un comentario..." rows="3"></textarea>
  </div>
  <div class="flex items-center justify-center">
    <button class="bg-cyan-500 shadow-lg shadow-cyan-500/50 ... hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
      Crear requisición
    </button>
  </div>
</form>
              

</div>

    </div>
  );
  
}
