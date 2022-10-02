import React, { useEffect, useState } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import axios from 'axios'

const StudyList = () => {
    const [studies, setStudies] = useState([])

    const fetchStudies = async () => {
        const { data } = await (await axios.get('http://localhost:5000/api/study'))

        setStudies(data);
    }
    console.log(studies)
    const deleteHandler = () => {
        if (window.confirm("Are you sure?")) {
        }
    };

    useEffect(() => {
        fetchStudies()
    }, [])



  return (
    <MainScreen title="Welcome Back Danita Codes">
      <Link to="/studypage">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="md">
          Create new study
        </Button>
      </Link>
            {studies.map((study) => (
                <Accordion defaultActiveKey='0' key={study._id}>
                    <Accordion.Item eventKey='0'>
                    <Card style={{ margin: 10 }}>
                    <Accordion.Header style={{ display: "flex" }}>
                      <span
                        style={{
                          color: "black",
                          textDecoration: "none",
                          flex: 1,
                          cursor: "pointer",
                          alignSelf: "center",
                          fontSize: 18,
                        }}
                      >
                        {study.assignment}
                      </span>
    
                      <div>
                        <Button href={`/study/${study._id}`}>Edit</Button>
                        <Button
                          variant="danger"
                          className="mx-2"
                          onClick={() => deleteHandler(study._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </Accordion.Header>
                    <Accordion.Collapse eventKey="0">
                      <Accordion.Body>
                        <blockquote className="blockquote mb-0">
                        <p>
                          Subject - {study.subject}
                        </p>
                        <p>
                         Minutes - {study.minutes}
                        </p>
                        <p>
                        Notes- {study.notes}
                        </p>
                        
                        <footer className="blockquote-footer">
                            Created on{" "}
                        <cite title="Source Title">
                            {/* {study.createdAt.substring(0, 10)} */}
                        </cite>
                        </footer>
    
                      </blockquote>
                      </Accordion.Body>
                    </Accordion.Collapse>
                  </Card>
                    </Accordion.Item>
                    
                  </Accordion>
                ))
            }
      
              
            

      {/* <Accordion>
        <Accordion.Item>
          <Card style={{ margin: 10 }}>
            <Accordion.Header style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              ></span>

              <div>
                            <Button >Edit</Button>
                            <Button 
                                variant='danger'
                                className='mx-2'
                                onClick={() => deleteHandler()}
                            >
                                Delete
                            </Button>
            </div>
            </Accordion.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Subject -</p>
                  <p>Minutes -</p>
                  <p>Notes -</p>
                  <footer className="blockquote-footer">
                    Created on <cite title="Source Title"></cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion.Item>
      </Accordion> */}
    </MainScreen>
  );
};

export default StudyList;
