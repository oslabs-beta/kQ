// rcc tab to show react boilerplate
import React, { Component } from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import jonathan from '../../images/jonathan.jpeg';
import kaiwei from '../../images/kaiwei.jpeg';
import micah from '../../images/micah.jpeg';
import shreshth from '../../images/shreshth.jpeg';

const About = () => (
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

export default About;

// class About extends Component {
//   render() {
//     return (
//       <div>
//         <figure>
//           <img
//             src="https://i.insider.com/5bbee09094750c4dad3be123?width=1100&format=jpeg&auto=webp"
//             width="250"
//             height="250"
//             alt="Micah"
//           ></img>
//           <figcaption>Micah</figcaption>
//           <p>Micah is the backend master</p>
//         </figure>
//         <figure>
//           <img
//             src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D560%26cropX2%3D1783%26cropY1%3D231%26cropY2%3D1455"
//             width="250"
//             height="250"
//             alt="Jonathan"
//           ></img>
//           <figcaption>Jonathan</figcaption>
//           <p>Jonathan is the frontend supreme leader</p>
//         </figure>
//         <figure>
//           <img
//             src="https://www.gannett-cdn.com/-mm-/c658d5ef1b1f082808d78f9cb4c7bf8fdb40caee/c=0-233-3000-1928/local/-/media/2015/11/16/USATODAY/USATODAY/635832974544947991-AP-STEVE-JOBS-OPERA-74950121.JPG"
//             width="250"
//             height="250"
//             alt="Kaiwei"
//           ></img>
//           <figcaption>Kaiwei</figcaption>
//           <p>Kaiwei is the best moral supporter</p>
//         </figure>
//         <figure>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnUKAV_UiB42aR61coceXW3paNF0B68yg3eg&usqp=CAU"
//             width="250"
//             height="250"
//             alt="Shreshth"
//           ></img>
//           <figcaption>Shreshth</figcaption>
//           <p>Shreshth is DER MASTER</p>
//         </figure>
//       </div>
//     );
//   }
// }

// export default About;
