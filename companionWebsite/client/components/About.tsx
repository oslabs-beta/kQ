import React, { PureComponent } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
// import jonathan from '../../images/jonathan.jpeg';
// import kaiwei from '../../images/kaiwei.jpeg';
// import micah from '../../images/micah.jpeg';
// import shreshth from '../../images/shreshth.jpeg';

class About extends PureComponent<{}> {
  render() {
    return (
      <Card.Group>
        <Card>
          <Image
            src="https://ca.slack-edge.com/T016VMCKF7Y-U0184UNUU5A-ebb0296f7d44-512"
            // src={jonathan}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Jonathan</Card.Header>
            <Card.Meta>
              <span className="date">The frontend supreme leader</span>
            </Card.Meta>
            <Card.Description>Most productive in the bathroom</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              link="true"
              href="https://www.linkedin.com/in/jonathan-barenboim/"
              size="small"
              color="blue"
              icon="linkedin"
            />
            <Button
              link="true"
              href="https://github.com/Jbaren01"
              size="small"
              icon="github square"
            />
          </Card.Content>
        </Card>

        <Card>
          <Image
            src="https://ca.slack-edge.com/T016VMCKF7Y-U01804E3AMT-d8f5a30fc3a3-512"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Kaiwei</Card.Header>
            <Card.Meta>
              <span className="date">The what?</span>
            </Card.Meta>
            <Card.Description>Says hi</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              link="true"
              href="https://www.linkedin.com/in/kaiweih/"
              size="small"
              color="blue"
              icon="linkedin"
            />
            <Button
              link="true"
              href="https://github.com/kaiweih"
              size="small"
              icon="github square"
            />
          </Card.Content>
        </Card>
        <Card>
          <Image
            src="https://ca.slack-edge.com/T016VMCKF7Y-U017GJNM9GT-g5dbb1757404-512"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Micah</Card.Header>
            <Card.Meta>
              <span className="date">The backend master</span>
            </Card.Meta>
            <Card.Description>Is changing Zoom background...</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              link="true"
              href="https://www.linkedin.com/"
              size="small"
              color="blue"
              icon="linkedin"
            />
            <Button
              link="true"
              href="https://github.com/ymturan"
              size="small"
              icon="github square"
            />
          </Card.Content>
        </Card>
        <Card>
          <Image
            src="https://ca.slack-edge.com/T016VMCKF7Y-U01926ZBSG4-cd26cda9860d-512"
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>Shreshth</Card.Header>
            <Card.Meta>
              <span className="date">The source of truth</span>
            </Card.Meta>
            <Card.Description>DER MASTER</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              link="true"
              href="https://www.linkedin.com/in/shreshth-srivastava-1baa1a1b7/"
              size="small"
              color="blue"
              icon="linkedin"
            />
            <Button
              link="true"
              href="https://github.com/Shreshth3"
              size="small"
              icon="github square"
            />
          </Card.Content>
        </Card>
      </Card.Group>
    );
  }
}

export default About;
