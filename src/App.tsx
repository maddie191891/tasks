import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import cat from "./Images/cute_cat.jpg";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <div style={{ backgroundColor: "red" }}>
                <h1>This is header text</h1>
            </div>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Madison Holt</p>
            <p>Hello World!</p>
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <img src={cat} alt="A cute cat" width="400" height="500" />
            <p>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </p>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 200,
                                height: 100,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
