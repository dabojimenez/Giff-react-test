import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem>', () => {
    const title = 'manga';
    const url = 'https://one-punche.com/saitame.jpg'
    test('debe hacer un match con el snapshot', () => {
        // renderizamos el item, para hacer la evaluacion contra el sanpchot, es extraer el container
        //y con ese container, hacer el expect
        const { container } = render(<GifItem title={title}
            url={url} />)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={title} url={url} />);
        //para ver el componente usaremos screen, de testing libryry de react
        // screen.debug();
        //tomaremos la imagen y preguntaremos sobre la URL, que sea el mismo que estamos teniendo
        
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        // o
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url)
        expect(alt).toBe(alt)
        
        // console.log(screen.getByRole('img').src);
    })

    test('should mostrar el titulo ene l componente', () => { 
        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();
     })
});