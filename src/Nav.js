import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
      <Nav className="justify-content-start" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="mailto: rana.nassar99@yahoo.com">  <i class="fa-solid fa-envelope fa-2x"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-1" href='https://github.com/RanaNassar2021?tab=repositories' target="_blank" ><i class="fa-brands fa-square-github fa-2x"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-2" href='https://www.linkedin.com/in/rana-nassar-28a601192' target="_blank"><i class="fa-brands fa-linkedin fa-2x"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-3" href='#second-section'><i class="fa-brands fa-staylinked fa-2x"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-4" href="mailto: rana.nassar9925@gmail.com"><i class="fa-brands fa-google fa-2x"></i></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link  eventKey="link-5" href=' https://wa.me/201096001563' target="_blank"><i class="fa-brands fa-whatsapp fa-2x"></i></Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;