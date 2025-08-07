import { Send } from "lucide-react";
import Input from "./Input";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const CardContact = (): JSX.Element => {
  {
    /* Email Box Mechanism */
  }

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {

    const serviceID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    e.preventDefault();
    if (!form.current) return;
    emailjs
      .sendForm(
        serviceID,
        templateID,
        form.current!,
        publicKey
      )
      .then(
        () => {
          toast.success("Mensagem enviada com sucesso!");
          form.current?.reset();
        },
        (error) => {
          {
            /* Message Error with Toasty */
          }
          toast.error("Erro ao enviar a mensagem, porfavor tente novamente.");
          console.error(error);
        }
      );
  };

  return (
    <div className="px-6 mil:px-3 w-screen md:max-w-[33rem] mil:max-w-[30rem] ">
      {/* Toasty Container */}
      <ToastContainer
        className={"z-50"}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className=" min-w-full items-center justify-center">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex gap-5 flex-col bg-white/5 p-6 rounded-xl border-slate-300/30 border hover:bg-white/10 transition-all ease-in-out duration-300"
        >
          <Input type="text" name="name" placeholder="Seu nome">
            {" "}
            Nome *{" "}
          </Input>
          <Input type="email" name="email" placeholder="seuemail@gmail.com">
            {" "}
            Email *{" "}
          </Input>
          <Input type="text" name="subject" placeholder="Assunto do email">
            Assunto *{" "}
          </Input>
          <label className="text-white/70 text-start"> Mensagem * </label>
          <textarea
            name="message"
            className="p-4 text-white bg-transparent rounded-xl w-full h-40 border-slate-300/30 border focus:border-purple-400 transition-all ease-in-out duration-300 outline-none"
            required
            placeholder="Conte-me sobre seu projeto..."
          />
          <button
            type="submit"
            className="mt-5 flex items-center justify-center gap-2
                    w-full p-3 text-[16px]
                    bg-gradient-to-r from-purple-600 to-pink-600
                    rounded-xl text-white font-semibold shadow-lg
                    hover:bg-purple-600
                    transform transition hover:-translate-y-1
                    motion-reduce:transition-none motion-reduce:hover:transform-none
                    hover:from-purple-700 hover:to-pink-700"
          >
            <span>
              <Send size={20} />
            </span>
            Enviar Mensagem
          </button>
        </form>
      </section>
    </div>
  );
};

export default CardContact;
