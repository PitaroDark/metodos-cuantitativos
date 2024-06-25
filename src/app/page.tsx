import Image from "next/image";
import homeImage from "@/assets/imageHome.jpg";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row lg:h-[700px] md:h-[500px] h-[100px] w-full">
        <div className="flex flex-col lg:w-1/2 md:w-1/2 w-screen text-left text-gray-800 dark:text-gray-200 pl-10 justify-center items-center md:items-end lg:items-end">
          <h1 className="lg:text-6xl md:text-4xl text-3xl font-bold mb-2">
            Bienvenido
          </h1>
          <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold">
            Analisis de sensibilidad
          </h2>
          <h3 className="lg:text-3xl md:text-2xl text-xl font-semibold">
            Cambios en el vector A
          </h3>
        </div>
        <div className="relative lg:w-screen md:w-1/2 w-0">
          <Image src={homeImage} alt="Home Image" layout="fill" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 from-10%" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 from-10%" />
        </div>
      </div>
      <div className="container relative mx-auto mt-10 mb-20">
        <h2 className="lg:text-4xl md:text-3xl sm:text-xl font-semibold text-center mb-5">
          Análisis de sensibilidad
        </h2>
        <p className="text-justify p-5">
          El análisis de sensibilidad es una herramienta de gestión que permite
          a las organizaciones predecir los resultados de un proyecto, ayudando
          a comprender las incertidumbres, las limitaciones y los alcances de un
          modelo de decisión. También conocido como análisis hipotético, permite
          determinar cómo los diferentes valores de una variable independiente
          pueden afectar a una variable dependiente particular. Es útil en una
          amplia gama de temas además de la gestión de proyectos, como finanzas,
          ingeniería, geografía, biología, etc.
        </p>
        <p className="text-justify p-5">
          Existen dos tipos de análisis de sensibilidad: el local y el global.
          El primero es una técnica que estudia el impacto de un solo parámetro
          a la vez en función al costo, manteniendo las variables de manera
          fija. El análisis de sensibilidad global, en cambio, utiliza una
          muestra global con el propósito de explorar el espacio de diseño.
        </p>
        <p className="text-justify p-5">
          El análisis de sensibilidad permite a las empresas pronosticar el
          éxito o fracaso de un proyecto utilizando datos confiables y certeros.
          Al estudiar todas las variables y los posibles resultados, los
          directores de proyectos pueden me tomar mejores decisiones respecto al
          proyecto, el negocio o las inversiones.
        </p>
      </div>
      <div className="relative h-40">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 from-1%" />
      </div>
      <div className="bg-slate-800">
        <div className="container relative mx-auto pt-20 pb-20">
          <h2 className="lg:text-4xl md:text-3xl sm:text-xl font-semibold text-center mb-5">
            Cambios en el Vector A
          </h2>
          <p className="text-justify p-5">
            En el contexto de la Programación Lineal (PL), el vector A, también
            conocido como matriz de coeficientes, representa los requisitos de
            recursos para cada actividad o variable de decisión del problema.
            Cada fila del vector A corresponde a una restricción, y cada columna
            representa una variable de decisión. Los elementos del vector A,
            denominados coeficientes, indican la cantidad de un recurso
            específico que se consume por unidad de cada variable de decisión.
          </p>
          <p className="text-justify p-5">
            Los cambios en el vector A se refieren a cualquier modificación en
            los valores de sus elementos, es decir, en los coeficientes que
            representan los requisitos de recursos para cada actividad o
            variable de decisión. Estos cambios pueden surgir de diversas
            situaciones, como:
          </p>
          <ul className="list-disc space-y-10 p-5 pl-20">
            <li className="text-justify">
              <b>Variaciones en los precios de los recursos:</b> Si el precio de
              un recurso aumenta, es probable que se reduzcan los coeficientes
              asociados a ese recurso en el vector A, ya que se buscaría
              utilizar menos del mismo para optimizar los costos.
            </li>
            <li className="text-justify">
              <b>Cambios en la tecnología:</b> La implementación de nuevas
              tecnologías puede modificar la eficiencia de las actividades, lo
              que se traduce en cambios en los coeficientes del vector A. Por
              ejemplo, una nueva máquina podría reducir la cantidad de mano de
              obra necesaria para producir una unidad de un producto.
            </li>
            <li className="text-justify">
              <b>Modificaciones en las restricciones:</b> Si una restricción se
              modifica, como aumentar la disponibilidad de un recurso o cambiar
              el límite de producción de un producto, los coeficientes del
              vector A relacionados con esa restricción también se verán
              afectados.
            </li>
          </ul>
        </div>
      </div>
      <div className="relative h-40">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800 from-1%" />
      </div>
      <div className="container relative mx-auto pt-20 pb-20">
        <h2 className="lg:text-4xl md:text-3xl sm:text-xl font-semibold text-center mb-5">
          Tipos de cambios en el vector A
        </h2>
        <p className="text-justify p-5">
          Los cambios en el vector A pueden clasificarse en dos tipos
          principales según su naturaleza y efecto en el modelo de programación
          lineal:
        </p>
        <p className="text-justify p-5">
          <b>1. Cambios no basicos:</b>
          Estos cambios implican la alteración de los coeficientes de las
          restricciones del modelo, que representan los requisitos de recursos
          para cada actividad o variable de decisión. Por ejemplo, si la
          disponibilidad de un recurso disminuye, los coeficientes asociados a
          ese recurso en las restricciones también se reducirán, lo que puede
          afectar la factibilidad y la solución óptima del problema.
        </p>
        <p className="text-justify p-5">
          <b>2. Nuevas variables:</b> Estos cambios implican la adición de
          nuevas variables al modelo, lo que puede requerir la creación de
          nuevas restricciones para reflejar los requisitos de recursos
          adicionales. Por ejemplo, si se introduce una nueva máquina en un
          proceso de producción, se deberán agregar variables para representar
          la cantidad de productos que se pueden producir con esa máquina y las
          restricciones asociadas a su capacidad.
        </p>
        <p className="text-justify p-5">
          <b>3. Nuevas restricciones:</b> Estos cambios implican la adición de
          nuevas restricciones al modelo, lo que puede requerir la creación de
          nuevas variables para reflejar los requisitos de recursos adicionales.
          Por ejemplo, si se establece una nueva restricción de producción
          máxima para un producto, se deberán agregar variables para representar
          la cantidad de productos que se pueden producir bajo esa restricción y
          las variables asociadas a los recursos necesarios.
        </p>
        <p className="text-justify p-5">
          En resumen, los cambios en el vector A pueden tener un impacto
          significativo en el modelo de programación lineal, ya que afectan los
          requisitos de recursos, las restricciones y las variables del
          problema. Es importante considerar estos cambios al realizar un
          análisis de sensibilidad para evaluar la robustez y la viabilidad de
          la solución óptima del modelo.
        </p>
      </div>
      <div className="relative h-40">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 from-1%" />
      </div>
      <footer className="bg-slate-800 text-center text-white p-5">
        <p>
          &copy; 2024 Ikari Vargas (Pitaro Dark) - Todos los derechos reservados
        </p>
      </footer>
    </>
  );
}
