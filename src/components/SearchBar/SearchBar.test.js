import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SearchBar from './';

Enzyme.configure({
  adapter: new EnzymeAdapter()
});


describe('Search Bar component', () => {

  // Test para comprobar si el componente Search Bar se procesa/es renderizado
  it('Should render without errors', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test para comprobar si la entrada de texto del usuario fue repetida
  // Se pasa el metodo onTermChange como prop al componente Search Bar, y se le 
  // asigna una funcion vacia
  // Se debe hacer esto porque el componente espera que su componente padre (en este
  // caso el componente App) le pase un callback
  it('User text is echoed', () => {
    const wrapper = shallow(<SearchBar onTermChange={() => {}} />);
    
    wrapper.find("input").simulate("change", {
      target: {value: "hello"}
    });
    
    expect(wrapper.find("input").props().value).toEqual("hello");
  });

  // Test para comprobar que cuando se envía el formulario, el evento predeterminado se 
  // cancela (la función de envío predeterminada del navegador no se activa).
  it("when the form is submitted the default event is cancelled", () => {
    const wrapper = shallow(<SearchBar />);
    let prevented = false;

    wrapper.find("form").simulate("submit", {
      preventDefault: () => {
        prevented = true;
      }
    });

    expect(prevented).toBe(true);
  });

  
});


