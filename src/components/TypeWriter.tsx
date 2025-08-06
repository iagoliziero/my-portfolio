import TypeWriter from 'typewriter-effect'

const TypeWriterEffect = (): JSX.Element => {
    return ( 
        <TypeWriter options={{
            strings: ['Criador de Soluções', 'Desenvolvedor Full Stack', 'Desenvolvedor Back-end', 'Desenvolvedor Front-end'],
            autoStart: true,
            loop: true,
            cursor: '|',
            delay: 100,
            deleteSpeed: 50,
          }}/>
     );
}
 
export default TypeWriterEffect;