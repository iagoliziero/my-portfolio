const ContactFooter = (): JSX.Element => {
    return ( 
         <div className="flex flex-col items-start mt-5 gap-4">
          <h3 className="h3-footer"> Contato </h3>
          <div className="flex flex-col gap-2 justify-center items-start text-start">
            <p className="p-footer"> contatoiagoliziero@gmail.com </p>
            <p className="p-footer"> +55 (11) 91962-0763 </p>
            <p className="p-footer"> São Paulo, SP </p>
          </div>
        </div>
     );
}
 
export default ContactFooter;