import TypeWriter from 'typewriter-effect'

const TypeWriterEffect = () => {
    return ( 
        <TypeWriter options={{
            strings: ['Desenvolvedor Full Stack', 'Criador de Soluções', 'Desenvolvedor Backend'],
            autoStart: true,
            loop: true,
            cursor: '|',
            delay: 100,
            deleteSpeed: 50,
          }}/>
     );
}
 
export default TypeWriterEffect;