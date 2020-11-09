import React, { Component } from 'react';

class QuickStart extends Component<{}> {
  render(): JSX.Element {
    const indent = { marginLeft: '15px' };

    return (
      <div className="box">
        <h1 className="box-background title">Quick Start</h1>
        <p className="box-background">
          kafkaQ is incredibly easy to incorporate into your application. Let's
          walk through the steps you'll need to take.
        </p>
        <ol className="box-background">
          <li className="box-background">
            In your project's root directory, run
            <code className="box-background code">
              {' '}
              npm install kafkaq-monitor
            </code>
          </li>
          <li className="box-background">
            In the producer script of your Kafka application, import our
            <code className="code"> trackProducer </code> method and invoke it
            immediately after the code connecting your producer, passing in your
            producer as an argument. Here's an example:
            <br />
            <br></br>
            <p>
              <p className="box-background"></p>
              <code className="box-background code">
                <span className="token keywords">const</span>
                <span className="token symbols"> {'{'} </span>
                <span className="token names"> Kafka </span>
                <span className="token symbols"> {'}'} </span>
                <span className="token equation"> = </span>
                <span className="token keywordReq"> require</span>
                <span className="token symbols">('</span>
                <span className="token string">kafkajs</span>
                <span className="token symbols">');</span>
                <br></br>
                <span className="token keywords">const</span>
                <span className="token symbols"> {'{'} </span>
                <span className="token names"> trackProducer </span>
                <span className="token symbols"> {'}'} </span>
                <span className="token equation"> = </span>
                <span className="token keywordReq"> require</span>
                <span className="token symbols">('</span>
                <span className="token string">kafkaq-monitor</span>
                <span className="token symbols">');</span>
                <span className="token comments"> // kafkaQ's NPM package</span>
                <br></br>
                <br></br>
                <span className="token keywords">const </span>
                <span className="token names">kafka</span>
                <span className="token equation"> = </span>
                <span className="token keywords"> new</span>
                <span className="token func"> Kafka</span>
                <span className="token symbols">({'{'} </span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  clientId
                </span>
                <span className="token symbols">: '</span>
                <span className="token names">myapp</span>
                <span className="token symbols">',</span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  brokers
                </span>
                <span className="token symbols">: [`${'{'}</span>
                <span className="token names">process</span>
                <span className="token symbols">.</span>
                <span className="token key">env</span>
                <span className="token symbols">.</span>
                <span className="token key">LOCAL_COMPUTER</span>
                <span className="token symbols">{'}'}:</span>
                <span className="token names">9092</span>
                <span className="token symbols">`]</span>
                <br></br>
                <span className="token symbols">{'}'});</span>
                <br></br>
                <br></br>
                <span className="token keywords">const </span>
                <span className="token names"> producer</span>
                <span className="token equation"> = </span>
                <span className="token names">kafka</span>
                <span className="token symbols">.</span>
                <span className="token func">producer</span>
                <span className="token symbols">();</span>
                <br></br>
                <span className="token keywords">await </span>
                <span className="token names"> producer</span>
                <span className="token symbols">.</span>
                <span className="token func">connect</span>
                <span className="token symbols">();</span>
                <br></br>
                <br></br>
                <span className="token func"> trackProducer</span>
                <span className="token symbols">(</span>
                <span className="token names">producer</span>
                <span className="token symbols">);</span>
                <span className="token comments">
                  {' '}
                  // Invoke kafkaQ's trackProducer method with your producer as
                  the argument
                </span>
                <br></br>
                <br></br>
                <span className="token keywords">const </span>
                <span className="token names"> result</span>
                <span className="token equation"> = </span>
                <span className="token keywords">await </span>
                <span className="token names">producer</span>
                <span className="token symbols">.</span>
                <span className="token func">send</span>
                <span className="token symbols">({'{'}</span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  topic
                </span>
                <span className="token symbols">: '</span>
                <span className="token names">Users</span>
                <span className="token symbols">',</span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  messages
                </span>
                <span className="token symbols">: [{'{'}</span>
                <span className="token key"> value</span>
                <span className="token symbols">: '</span>
                <span className="token names">test</span>
                <span className="token symbols">',</span>
                <span className="token key"> partition</span>
                <span className="token symbols">:</span>
                <span className="token names">0 </span>
                <span className="token symbols">{'}'}]</span>
                <br></br>
                <span className="token symbols">{'}'});</span>
                <br></br>
                <br></br>
                <span className="token keywords">await </span>
                <span className="token names"> producer</span>
                <span className="token symbols">.</span>
                <span className="token func">disconnect</span>
                <span className="token symbols">();</span>
              </code>
            </p>
            <br></br>
            <br></br>
          </li>
          <li className="box-background">
            Similarly, in the consumer script of your application, import our{' '}
            <code className="code"> trackConsumer </code> method and invoke it
            immediately after your consumer subscribes to a topic, passing in
            your consumer as an argument. Here's an example:
            <br />
            <br></br>
            <p>
              <p className="box-background"></p>
              <code className="box-background code">
                <span className="token keywords">const</span>
                <span className="token symbols"> {'{'} </span>
                <span className="token names"> Kafka </span>
                <span className="token symbols"> {'}'} </span>
                <span className="token equation"> = </span>
                <span className="token keywordReq"> require</span>
                <span className="token symbols">('</span>
                <span className="token string">kafkajs</span>
                <span className="token symbols">');</span>
                <br></br>
                <span className="token keywords">const</span>
                <span className="token symbols"> {'{'} </span>
                <span className="token names"> trackConsumer </span>
                <span className="token symbols"> {'}'} </span>
                <span className="token equation"> = </span>
                <span className="token keywordReq"> require</span>
                <span className="token symbols">('</span>
                <span className="token string">kafkaq-monitor</span>
                <span className="token symbols">');</span>
                <span className="token comments"> // kafkaQ's NPM package</span>
                <br></br>
                <br></br>
                <span className="token keywords">const </span>
                <span className="token names">kafka</span>
                <span className="token equation"> = </span>
                <span className="token keywords"> new</span>
                <span className="token func"> Kafka</span>
                <span className="token symbols">({'{'} </span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  clientId
                </span>
                <span className="token symbols">: '</span>
                <span className="token names">myapp</span>
                <span className="token symbols">',</span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  brokers
                </span>
                <span className="token symbols">: [`${'{'}</span>
                <span className="token names">process</span>
                <span className="token symbols">.</span>
                <span className="token key">env</span>
                <span className="token symbols">.</span>
                <span className="token key">LOCAL_COMPUTER</span>
                <span className="token symbols">{'}'}:</span>
                <span className="token names">9092</span>
                <span className="token symbols">`]</span>
                <br></br>
                <span className="token symbols">{'}'});</span>
                <br></br>
                <br></br>
                <span className="token keywords">const </span>
                <span className="token names"> consumer</span>
                <span className="token equation"> = </span>
                <span className="token names">kafka</span>
                <span className="token symbols">.</span>
                <span className="token func">consumer</span>
                <span className="token symbols">({'{'}</span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  groupId
                </span>
                <span className="token symbols">: '</span>
                <span className="token names">test</span>
                <span className="token symbols">',</span>
                <br></br>
                <span className="token symbols">{'}'});</span>
                <br></br>
                <br></br>

                <span className="token keywords">await </span>
                <span className="token names"> consumer</span>
                <span className="token symbols">.</span>
                <span className="token func">connect</span>
                <span className="token symbols">();</span>
                <br></br>
                <br></br>

                <span className="token keywords">await </span>
                <span className="token names"> consumer</span>
                <span className="token symbols">.</span>
                <span className="token func">subscribe</span>
                <span className="token symbols">({'{'}</span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  topic
                </span>
                <span className="token symbols">: '</span>
                <span className="token names">Users</span>
                <span className="token symbols">',</span>
                <br></br>
                <span className="token key" style={indent}>
                  {' '}
                  fromBeginning
                </span>
                <span className="token symbols">: </span>
                <span className="token key">true</span>
                <br></br>
                <span className="token symbols">{'}'});</span>
                <br></br>
                <br></br>
                <span className="token func"> trackConsumer</span>
                <span className="token symbols">(</span>
                <span className="token names">consumer</span>
                <span className="token symbols">);</span>
                <span className="token comments">
                  {' '}
                  // Invoke kafkaQ's trackconsumer method with your consumer as
                  the argument
                </span>
                <br></br>
                <br></br>
                <span className="token keywords">await </span>
                <span className="token names">consumer</span>
                <span className="token symbols">.</span>
                <span className="token func">run</span>
                <span className="token symbols">({'{'}</span>
                <br></br>
                <span className="token key"> eachMessage</span>
                <span className="token key"> async</span>
                <span className="token symbols"> (</span>
                <span className="token names">result</span>
                <span className="token symbols">)</span>
                <span className="token key"> ={'>'} </span>
                <span className="token symbols">{'{'}</span>
                <br></br>
                <span className="token comments" style={indent}>
                  // Execute some code for each message
                </span>
                <br></br>
                <span className="token symbols">{'}'},</span>
                <br></br>
                <span className="token symbols">{'}'});</span>
                <br></br>
                <br></br>
              </code>
            </p>
          </li>
        </ol>

        <p>
          That's all! In just 4 lines of code, you were able to integrate kafkaQ
          and track your metrics in real-time. Feel free to view our
          documentation for more details about our system's details.
        </p>
      </div>
    );
  }
}

export default QuickStart;
