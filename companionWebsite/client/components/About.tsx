import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import jonathan from '../icons/jonathan.png';
import kaiwei from '../icons/kaiwei.png';
import micah from '../icons/micah.png';
import shreshth from '../icons/shreshth.png';
import linkedinIcon from "../icons/linkedinIcon.png"
import githubIcon from "../icons/githubIcon.png"

class About extends Component<{}> {
  render() {
    return (
      <div className="box">
      <Card.Group className="cardGroup">
        <Card>
          <Image
            src={jonathan}
            wrapped
            ui={false}
          />
            <Card.Content>
              <Card.Header>Jonathan Barenboim</Card.Header>
              <Card.Description style={{marginTop: "0.5rem", marginBottom: "1rem"}}>Fullstack software engineer at kafkaQ</Card.Description>
            </Card.Content>
          <Card.Content extra>
            <a href="https://www.linkedin.com/in/jonathan-barenboim/" target="_blank">
              <img className="cardicon" src={linkedinIcon} width="35" height="35"/>
            </a>
            <a href="https://github.com/Jbaren01" target="_blank">
              <img src={githubIcon} width="45" height="45"/>
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={kaiwei}
            wrapped
            ui={false}
          />
            <Card.Content>
              <Card.Header>Kai-Wei Hsu</Card.Header>
              <Card.Description style={{marginTop: "0.5rem", marginBottom: "1rem"}}>Fullstack software engineer at kafkaQ</Card.Description>
            </Card.Content>
          <Card.Content extra>
            <a href="https://www.linkedin.com/in/kaiweih/" target="_blank">
              <img className="cardicon" src={linkedinIcon} width="35" height="35"/>
            </a>
            <a href="https://github.com/kaiweih" target="_blank">
              <img src={githubIcon} width="45" height="45"/>
            </a>
          </Card.Content>
        </Card>
        <Card>
          <Image
            src={micah}
            wrapped
            ui={false}
          />
            <Card.Content>
              <Card.Header>Micah Y. Turan</Card.Header>
              <Card.Description style={{marginTop: "0.5rem", marginBottom: "1rem"}}>Fullstack software engineer at kafkaQ</Card.Description>
            </Card.Content>
          <Card.Content extra>
            <a href="https://www.linkedin.com/" target="_blank">
              <img className="cardicon" src={linkedinIcon} width="35" height="35"/>
            </a>
            <a href="https://github.com/ymturan" target="_blank">
              <img src={githubIcon} width="45" height="45"/>
            </a>
          </Card.Content>
          </Card>
        <Card>
          <Image
            src={shreshth}
            wrapped
            ui={false}
          />
            <Card.Content>
              <Card.Header>Shreshth Srivastava</Card.Header>
              <Card.Description style={{marginTop: "0.5rem", marginBottom: "1rem"}}>Fullstack software engineer at kafkaQ</Card.Description>
            </Card.Content>
          <Card.Content extra>
            <a href="https://www.linkedin.com/in/shreshth-srivastava-1baa1a1b7/" target="_blank">
              <img className="cardicon" src={linkedinIcon} width="35" height="35"/>
            </a>
            <a href="https://github.com/Shreshth3" target="_blank">
              <img src={githubIcon} width="45" height="45"/>
            </a>
          </Card.Content>
          </Card>
      </Card.Group>
      </div>
    );
  }
}

export default About;
