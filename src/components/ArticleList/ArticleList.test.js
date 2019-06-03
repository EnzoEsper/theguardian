import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import ArticleList from './';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});

// Mock de datos para pasar al componente ArticleList
const mockArticles = [
  {
    webUrl: "https://google.com",
    webTitle: "This is google"
  }
];

describe("Article List component", () => {

  // Test para comporbar si el componente es renderizado, esta vez usando snapshot
  //Cada vez que se ejecuta este test, compara el DOM actual con el existente en la carpeta
  // __snapshots__
  it("Renders without errors ", () => {
    const wrapper = shallow(<ArticleList articles={mockArticles}/>);

    expect(wrapper).toMatchSnapshot();
  });

  // Test para comprobar que retorne el arreglo vacio por defecto cuando no se pasen datos
  it("Returns the default empty array when there is no data to map trough", () => {
    const wrapper = shallow(<ArticleList articles={[]}/>);

    expect(wrapper).toMatchSnapshot();
  });

  // Test para comprobar que el componente no se rompe incluso cuando se le pasa como prop el // arreglo de articulos vacio, se hace chequeando que no hay etiquetas <li> (ya que, en  
  // caso de haber algun articulo/datos, si se procesarian y habrian etiquetas <li> ) 
  it("Doesn't break without articles", ()=> {
    const wrapper = shallow(<ArticleList articles={[]}/>);

    expect(wrapper.find('li')).toHaveLength(0);
  });

  // Comprueba que el componente presenta los resultados de búsqueda cuando los articulos/el estado cambia
  it("Renders search results when the articles change", () => {
    const wrapper = mount(<ArticleList articles={[]} />);

    wrapper.setProps({
      articles: [{ webUrl: "http://google.com", webTitle: "Google Search" }]
    });

    // console.log(wrapper.debug());
    expect(wrapper.find("a").prop("href")).toEqual("http://google.com");
  });


});

