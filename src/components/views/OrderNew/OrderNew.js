import React from 'react'
import PropTypes from 'prop-types'

class OrderNew extends React.Component {
  static propTypes = {
    fetchProducts: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
  }

  componentDidMount(){
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  render() {
    const { loading: { active, error }, products } = this.props;

    const Wrapper = props => (
      <div>
        <h2>NewOrder view</h2>
        {props.children}
      </div>
    );

    if(active || !products.length){
      return (
        <Wrapper>
          <p>Loading...</p>
        </Wrapper>
      );
    } else if(error) {
      return (
        <Wrapper>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Wrapper>
      );
    } else {
      return (
        <Wrapper>
          <ul>
            {products.map(({id, name, price}) => (
              <li key={id}>{name}, {price}</li>
            ))}
          </ul>
        </Wrapper>
      );
    }
  }
}

export default OrderNew;

// componentDidMount. Ta metoda jest uruchamiana przez Reacta w momencie, gdy ten komponent zostanie stworzony i wyświetlony na stronie – czyli zamontowany (mounted).
//Ma to tę olbrzymią zaletę, że jeśli otworzymy nasz panel np. na stronie głównej, to nie będą pobierane produkty z API. Pozwoli nam to na szybkie działanie strony, ponieważ dane będą pobierane tylko w razie potrzeby.
//W kodzie JSX tego komponentu umieścimy trzy wersje kodu – jedną na czas pobierania danych z serwera, drugą na wypadek błędu, i wreszcie trzecią wyświetlającą listę produktów.

// W efekcie mamy trzy warianty zawartości tego komponentu, które zależą od statusu połączenia z API. 
// Aby nie powtarzać tego samego kodu, stworzyliśmy sobie podręczny komponent Wrapper, który wykorzystujemy w każdym wyrażeniu return.