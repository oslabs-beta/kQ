// rcc tab to show react boilerplate
import React, { Component } from 'react';

class Docs extends Component {
  render() {
    return (
      <div className="box">
        {/* Table of Contents */}
        <h2 className="box-background title">Table of Contents</h2>
        <ul style={{ 'padding-left': '15px' }}>
          <li>Installing our NPM package</li>
          <li>Getting Started</li>
          <li>Breaking down our metrics</li>
          <li>Testing with our Kafka application simulator</li>
        </ul>

        {/* Installating our NPM package */}
        <h2 className="box-background title">Installing our NPM package</h2>
        <p className="box-background">
          <code className="box-background code">
            npm install kafkaq-monitor
          </code>
        </p>

        {/* Getting started */}
        <h2 className="box-background title">Getting Started</h2>
        <h3 className="box-background title">Producer</h3>
        <p className="box-background">
          To monitor performance data from your Kafka producer, import
          trackProducer to your producer module.
        </p>
        <p className="box-background">
          <code className="box-background code">
            const {'{'} trackProducer {'}'} =
            require('../../kafkaq-monitor/index.js')
          </code>
        </p>
        <p className="box-background">
          Then, invoke trackProducer with your producer as the argument after
          your producer is connected.
        </p>
        <code className="box-background">trackProducer(producer)</code>
        <h3 className="box-background title">Consumer</h3>
        <p className="box-background">
          To monitor performance data from your Kafka consumer, import
          trackConsumer to your consumer module.
        </p>
        <p className="box-background">
          <code className="box-background code">
            const {'{'} trackConsumer {'}'} =
            require('../../kafkaq-monitor/index.js')
          </code>
        </p>
        <p className="box-background">
          Then, invoke trackConsumer with your consumer as the argument after
          your consumer is connected.
        </p>
        <code className="box-background">trackConsumer(consumer)</code>
        {/* Breaking down our metrics */}
        <h2 className="box-background title">Breaking down our metrics</h2>
        <p>
          kafkaQ's UI offers an simple, yet clean way for you to monitor your
          application. Our analytics are broken down into 2 categories:
          <strong> producer</strong> and <strong>consumer</strong>. Within each
          of these categories we track data size, processing time, and pending
          duration. For each, metric, we display the average, smallest, and
          largest values, along with a dynamic bar graph. Each of these
          statistics is updated in real-time.
          {/* In order to make thorough
          conclusions about your system's performance, we break down each metric
          and show you what the average request, the smallest request, and the
          largest request look like. Additionally, we provide a dynamic bar
          chart that is update in real-time as data flows through your system.
          With our application, you can identify the cause behind latency,
          enabling a swift response whether that means increasing the quantity
          of brokers or modifying your system architecture. In this way, kafkaQ
          works to ensure that your users will have a seamless experience with
          your application. */}
        </p>
        <p>
          <strong className="title">Data Size:</strong> The volume of data
          passing through a producer/consumer at a given time can be invaluable
          for your system's health. We provide details about the number of
          requests being processed, which helps identify system vulnerabilities
          at scale. If a drastic increase in requests is associated with high
          latency, increasing the number of brokers in your system is
          imperative.
        </p>
        <p>
          <strong className="title">Processing Time:</strong> The speed with
          which your application processes inbound messages can have significant
          effects on the user experience. To assist your needs, we track the
          amount of time your Kafka system used to track your application's
          performance in milliseconds. If you find that processing time has
          increased to an unacceptable extent, this can prompt deeper analyses
          into your system architecture.
        </p>
        <p>
          <strong className="title">Pending duration:</strong> With large
          quantities of requests being processed simulntaneously, it's possible
          to have a build-up at some point in your system. This metric tracks
          how long each requests spent in the "pending" phase prior to being
          analyzed. If this number increases, it is a strong signal that you
          should further distribute the load your system is handling.
        </p>
        {/* Testing Kafka with our simulator */}
        <h2 className="box-background title">
          Testing with our Kafka application simulator
        </h2>
        <p>
          If you haven't yet set up your Kafka application, but you want to see
          how kafkaQ works, we've got you covered. In this section, we'll show
          you how to set up our Kafka application simulator and track its
          metrics using kafkaQ.
        </p>
        <p>
          First, clone our repo (using{' '}
          <code className="code">
            git clone https://github.com/oslabs-beta/kafkaQ.git
          </code>
          ) and cd into it (using <code className="code">cd kafkaq</code>). From
          here, we will split the instructions into 3 sections for clarity.
        </p>
        {/* Section I: Starting Kafka */}
        <h3 className="title">Section I: Starting Kafka</h3>
        <p>
          We will be using Docker images to start Kafka, so make sure to install
          Docker and create an account.
        </p>
        <ol>
          <li>
            Start by ensuring that Docker is running with{' '}
            <code className="code">docker run hello-world</code>. You should see
            something similar to this:
          </li>
          <li>
            Now, we will start a Kafka zookeeper instance. Run this command to
            start a zookeeper instance and expose it on port 2181:{' '}
            <code className="code">
              docker run --name zookeeper -p 2181:2181 zookeeper
            </code>
          </li>
          <li>
            For our next step, you will need to copy your computer's reference
            on your local network. On a Mac, you can find this by going to
            Systems Preferences > Sharing. Under the section "Computer Name",
            you should be able to find it. See the example below:
          </li>
          <li>
            Now that you have your local computer's reference, you're ready to
            start Kafka. Make sure to replace [LOCAL_COMPUTER] with this
            reference (note that you should NOT include the square brackets).
            Run the following command:{' '}
            <code className="code">
              docker run --name kafka -p 9092:9092 -e
              KAFKA_ZOOKEEPER_CONNECT=[LOCAL_COMPUTER]:2181 -e
              KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://[LOCAL_COMPUTER]:9092 -e
              KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 confluentinc/cp-kafka
            </code>
          </li>
        </ol>
        <p>
          This is all you need to do to start Kafka! Make sure to save your
          local computer's reference as we will use that in future sections.
        </p>
        {/* Section II: Set up the Kafka application simulator */}
        <h3 className="title">
          Section II: Set up the Kafka application simulator
        </h3>
        <ol>
          <li>
            Cd into the kafkaApplicationSimulator directory (
            <code className="code">cd kafkaApplicationSimulator</code>)
          </li>
          <li>
            Start the server for our Kafka application simulator using{' '}
            <code className="code">npm run server</code> (CHANGE THIS NAME).
            This server has a route that will connect a producer and send a
            message, which we will use later.
          </li>
          <li>
            Start your Kafka consumer with{' '}
            <code className="code">
              node kafkaApplicationSimulator/consumer.js
            </code>
            (CHANGE THIS TO A PACKAGE.JSON SCRIPT). You should see output
            similar to this:
          </li>
          (THIS NEXT PART WILL CHANGE ONCE WE SWITCH BACK TO GIN)
          <li>
            Finally, we'll need to send some data through our system. To do so,
            run our Go script using{' '}
            <code className="code">
              go run kafkaApplicationSimulator/generate_data.go
            </code>{' '}
            (ADD AN PACKAGE.JSON SCRIPT FOR THIS IF WE KEEP IT). Note that if
            you have not installed Go, you will need to run brew install golang
            before completing this step. For future reference, if you would like
            to increase or decrease the volume of data sent through your system,
            simply change the NUM_STRINGS variable in
            kafkaApplicationSimulator/generate_data.go
          </li>
        </ol>
        {/* Section III: Viewing your metrics */}
        <h3 className="title">Section III: Viewing your metrics</h3>
        <ol>
          <li>
            Run <code className="code">yarn start</code> to open the Electron
            application, and you should be able to view your data in real-time!
          </li>
        </ol>
        <p>
          If your metrics aren't changing, you may not have any data flowing
          through your system. Try re-running the Go script as described in Step
          4 of the previous section.
        </p>
      </div>
    );
  }
}

export default Docs;
