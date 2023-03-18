import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <>
      <Nav className="justify-content-center bg-dark" activeKey="/home">
        <Nav.Item >
          <Nav.Link href="mailto: rana.nassar99@yahoo.com">  <i class="fa-solid fa-envelope fa-2x"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item >
          <Nav.Link  eventKey="link-1" href='https://github.com/RanaNassar2021?tab=repositories' target="_blank" ><i class="fa-brands fa-square-github fa-2x"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-2" href='https://www.linkedin.com/in/rana-nassar-28a601192' target="_blank" ><i class="fa-brands fa-linkedin fa-2x"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-3"><i class="fa-brands fa-staylinked fa-2x"></i></Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Footer;