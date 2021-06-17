
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'

const styles={
  tam:{
      with:"800px",
      height:"400px"
  }
}
function Inicio(){

    return(

      <CardGroup>
      <Card>
        <Card.Img variant="top" src="https://www.globalpropiedadgestion.com/wp-content/uploads/2016/06/logo-gestoria1-400x400.png" />
        <Card.Body>
          <Card.Title>Registrate!!</Card.Title>
          <Card.Text>
            Registrate con tus datos, para poder ingresar a la página
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Paso 1</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.kindpng.com/picc/m/273-2738790_login-login-logo-hd-png-download.png" />
        <Card.Body>
          <Card.Title>Logueate!!</Card.Title>
          <Card.Text>
            Ingresa tu Usuario (email) y contraseña y podras acceder al catálogo de productos.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Paso 2</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://www.kindpng.com/picc/m/424-4245845_no-tiene-artculos-en-su-carrito-de-compras.png" />
        <Card.Body>
          <Card.Title>Compra!!</Card.Title>
          <Card.Text>
            Una vez logueado podras comprar y ver los detalles de los productos
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Paso 3</small>
        </Card.Footer>
      </Card>
    </CardGroup>
      

    )

}
export default Inicio;