import "./App.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from "react-bootstrap/Nav";

function SecondSection (props){
    const projects = props.Data.map((project)=>{
        return(
           
            <div key={project.id} className="col-12 col-md-5 m-2">          
            <Card key={project.id}>
                <Card.Img variant="top" src={project.img}/>
                <Card.Body>
                    <Card.Title>{project.cardTitle}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Nav>
                        <Nav.Link href={project.URL} target="_blank">
                        <Button>Check it out</Button>
                        </Nav.Link>
                    </Nav>
                   
                </Card.Body>
            </Card>
            </div>

        )
    })
return(
    <div id="second-section">
        <div className="container">
            <div className="row  justify-content-center "> 
           <div className="text-light fs-3 m-4">
           <h2 id="sample">Sample of work & React projects</h2>
           </div>
            {projects}
            </div>
        </div>
     
    </div>
)
}

export default SecondSection;