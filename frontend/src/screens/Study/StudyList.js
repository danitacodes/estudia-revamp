import React, { useEffect } from "react";
import { Button, Accordion, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link, useNavigate } from "react-router-dom";
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage'
import { deleteStudyAction, listStudy } from "../../actions/studyActions";
import { useDispatch, useSelector } from "react-redux";

const StudyList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const studyList = useSelector((state) => state.studyList);
  const { loading, error, study } = studyList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const studyDelete = useSelector((state) => state.studyDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = studyDelete;

  const studyCreate = useSelector((state) => state.studyCreate);
  const { success: successCreate } = studyCreate;

  const studyUpdate = useSelector((state) => state.studyUpdate);
  const { success: successUpdate } = studyUpdate;

  useEffect(() => {
    dispatch(listStudy());
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, userInfo, successDelete, successCreate, successUpdate]);

  const deleteHandler = (id) => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteStudyAction(id))
    }
  }
  
  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.username}`}>
      <Link to="/studypage">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="md">
          Create new study
        </Button>
      </Link>
      {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
      {errorDelete && (
        <ErrorMessage variant='danger'>{errorDelete}</ErrorMessage>
      )}
      {loading && <Loading />}
      {loadingDelete && <Loading />}
      {study &&
          study.reverse()
        .map((study) => (
        <Accordion defaultActiveKey="0" key={study._id}>
          <Accordion.Item eventKey="0">
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
                    <p>Subject - {study.subject}</p>
                    <p>Minutes - {study.minutes}</p>
                    <p>Notes- {study.notes}</p>

                    <footer className="blockquote-footer">
                      Created on{" "}
                      <cite title="Source Title">
                        {study.createdAt.substring(0, 10)}
                      </cite>
                    </footer>
                  </blockquote>
                </Accordion.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
    </MainScreen>
  );
};

export default StudyList;
