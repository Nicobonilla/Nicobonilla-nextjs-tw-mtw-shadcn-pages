import { Button } from "../components/button/Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

type TForm = {
  nombre: string;
  rut: string;
  edad: string;
  celular: string;
  comuna: string;
  email: string;
  rentaImponible: string;
  cantidadCargas: string;
  comentario: string;
};

const iniForm: TForm = {
  nombre: "",
  rut: "",
  edad: "",
  celular: "",
  comuna: "",
  email: "",
  rentaImponible: "", // Asegúrate de que este campo sea tratado correctamente como número
  cantidadCargas: "",
  comentario: "",
};
async function sendEmail(formEmail: TForm) {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formEmail),
    });

    const data = await response.json();
    if (data.message) {
      console.log("Email sent successfully");
      // Handle success (e.g., show a success message)
    } else if (data.error) {
      console.error("Failed to send email:", data.error);
      // Handle failure (e.g., show an error message)
    }
  } catch (error) {
    console.error("Error:", error);
    // Handle network error (e.g., show an error message)
  }
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(false);
  const [formulario, setFormulario] = useState<TForm>(iniForm);
  const router = useRouter();

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (
      formulario.nombre &&
      formulario.rut &&
      formulario.edad &&
      formulario.celular.length > 8 &&
      formulario.rentaImponible &&
      [9, 10].includes(formulario.rut.length) &&
      formulario.rut.length >= 9 &&
      formulario.rut.includes("-") &&
      formulario.email.includes("@") && 
      formulario.email.includes(".")
    ) {
      setErrorSubmit(false);
      sendEmail(formulario);
      setSubmitted(false);
      setFormulario(iniForm);
      router.push("/informacion-isapres-chile");
    } else {
      setErrorSubmit(true);
    }
  };

  return (
    <div>
      <header className="grid-2 text-center">
        <h1
          color="gray"
          className="mb-5 mt-4 text-2xl md:text-4xl text-primary-600"
        >
          Déjanos tus datos y te contactaremos para ayudarte a cotizar Planes de
          ISAPRE
        </h1>
      </header>

      <section className="flex justify-center items-center w-full">
        <form onSubmit={handleSubmit} className="w-full max-w-xl p-5">
          <div className="flex flex-wrap w-full ">
            {/* Nombre Completo - Ocupa todo el ancho */}
            <div className="w-full">
              <label className="text-gray-500 mt-2 text-xs">Nombre Completo</label>
              <input
                name="nombre"
                type="text"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Nombre Completo"
                className="px-4 py-2 w-full rounded border border-gray-500"
                required
              />
              {submitted && !formulario.nombre && (
                <p className="text-red-500 text-xs italic">
                  Debe ingresar un valor válido
                </p>
              )}
            </div>
            <div className="grid grid-cols-2">
              <div className="mr-1">
                <label className="text-gray-500 mt-2 text-xs">R.U.T</label>
                <input
                  name="rut"
                  type="text"
                  value={formulario.rut}
                  onChange={manejarCambio}
                  placeholder="R.U.T"
                  className="px-4 py-2 r-1 w-full rounded border border-gray-500"
                  required
                />
                {submitted &&
                  (!formulario.rut ||
                    !(
                      [9, 10].includes(formulario.rut.length) &&
                      formulario.rut.includes("-")
                    )) && (
                    <p className="text-red-500 text-xs italic">
                      Debe ingresar un valor válido. Ej: 12345678-9
                    </p>
                  )}
              </div>
              <div className="ml-1">
                <label className="text-gray-500 mt-2 text-xs">Edad</label>
                <input
                  name="edad"
                  type="text"
                  value={formulario.edad}
                  onChange={manejarCambio}
                  placeholder="Edad"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                  required
                />
                {submitted && !formulario.edad && (
                  <p className="text-red-500 text-xs italic">
                    Debe ingresar un valor válido
                  </p>
                )}
              </div>
              <div className="mr-1">
                <label className="text-gray-500 mt-2 text-xs">Celular</label>
                <input
                  name="celular"
                  type="tel"
                  value={formulario.celular}
                  onChange={manejarCambio}
                  placeholder="Celular"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                  required
                />
                {submitted &&
                  !(formulario.celular && formulario.celular.length > 8) && (
                    <p className="text-red-500 text-xs italic">
                      Debe ingresar un teléfono de 9 dígitos Ej: 9 1234 1234
                    </p>
                  )}
              </div>
              <div className="ml-1">
                <label className="text-gray-500 mt-2 text-xs">
                  Ciudad / Comuna
                </label>
                <input
                  name="comuna"
                  type="text"
                  value={formulario.comuna}
                  onChange={manejarCambio}
                  placeholder="Ciudad / Comuna"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                />
              </div>
              <div className="mr-1">
                <label className="text-gray-500 mt-2 text-xs">Email</label>
                <input
                  name="email"
                  type="email"
                  value={formulario.email}
                  onChange={manejarCambio}
                  placeholder="Email"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                  required
                />
                {submitted && !(
                  formulario.email &&
                  formulario.email.includes("@") &&
                  formulario.email.includes(".")
                  ) && (
                    <p className="text-red-500 text-xs italic">
                      Debe ingresar un email válido. Ej: email@mail.com
                    </p>
                  )}
              </div>
              <div className="ml-1">
                <label className="text-gray-500 mt-2 text-xs">
                  Renta Imponible
                </label>
                <input
                  name="rentaImponible"
                  type="text"
                  value={formulario.rentaImponible}
                  onChange={manejarCambio}
                  placeholder="Renta Imponible"
                  className="px-4 py-2 w-full rounded border border-gray-500"
                  required
                />
                {submitted && !formulario.rentaImponible && (
                  <p className="text-red-500 text-xs italic">
                    Debe ingresar su renta imponible
                  </p>
                )}
              </div>
            </div>
            <div className="w-full content-center">
              <label className="text-gray-500 mt-2 text-xs">Comentario</label>
              <input
                name="comentario"
                type="textarea"
                value={formulario.comentario}
                onChange={manejarCambio}
                placeholder="Tu comentario.."
                className="px-4 py-2 w-full rounded border border-gray-500"
              />
            </div>
            <div className="w-full justify-center items-center cursor-pointer">
              <Button xl onClick={handleSubmit} >
                COTIZAR GRATIS{" "}
              </Button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
