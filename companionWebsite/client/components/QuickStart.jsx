import React, { Component } from 'react';

class QuickStart extends Component {
  render() {
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
                  <span class="token keywords">const</span>
                  <span class="token symbols"> {'{'} </span>
                  <span class="token names"> Kafka </span>
                  <span class="token symbols"> {'}'} </span>
                  <span class="token equation"> = </span>
                  <span class="token keywordReq"> require</span>
                  <span class="token symbols">('</span>                
                  <span class="token string">kafkajs</span>
                  <span class="token symbols">');</span>
                  <br></br>
                  <span class="token keywords">const</span>
                  <span class="token symbols"> {'{'} </span>
                  <span class="token names"> trackProducer </span>
                  <span class="token symbols"> {'}'} </span>
                  <span class="token equation"> = </span>
                  <span class="token keywordReq"> require</span>
                  <span class="token symbols">('</span>
                  <span class="token string">kafkaq-monitor</span>
                  <span class="token symbols">');</span>
                  <span class="token comments"> // kafkaQ's NPM package</span>
                  <br></br>
                  <br></br>
                  <span class="token keywords">const </span>
                  <span class="token names">kafka</span>
                  <span class="token equation"> = </span>
                  <span class="token keywords"> new</span>
                  <span class="token func"> Kafka</span>
                  <span class="token symbols">({'{'} </span>
                  <br></br>
                  <span class="token key">  clientId</span>
                  <span class="token symbols">: '</span>
                  <span class="token names">myapp</span>
                  <span class="token symbols">',</span>
                  <br></br>
                  <span class="token key">  brokers</span>
                  <span class="token symbols">: [`${'{'}</span>
                  <span class="token names">process</span>
                  <span class="token symbols">.</span>
                  <span class="token key">env</span>
                  <span class="token symbols">.</span>
                  <span class="token key">LOCAL_COMPUTER</span>
                  <span class="token symbols">{'}'}:</span>
                  <span class="token names">9092</span>
                  <span class="token symbols">`]</span>
                  <br></br>
                  <span class="token symbols">{'}'});</span>
                  <br></br>
                  <br></br>
                  <span class="token keywords">const </span>
                  <span class="token names">  producer</span>
                  <span class="token equation"> = </span>
                  <span class="token names">kafka</span>
                  <span class="token symbols">.</span>
                  <span class="token func">producer</span>
                  <span class="token symbols">();</span>
                  <br></br>
                  <span class="token keywords">await </span>
                  <span class="token names">  producer</span>
                  <span class="token symbols">.</span>
                  <span class="token func">connect</span>
                  <span class="token symbols">();</span>
                  <br></br>
                  <br></br>
                  <span class="token func"> trackProducer</span>
                  <span class="token symbols">(</span>
                  <span class="token names">producer</span>
                  <span class="token symbols">);</span>
                  <span class="token comments"> // Invoke kafkaQ's trackProducer method with your producer as the argument</span>
                  <br></br>
                  <br></br>
                  <span class="token keywords">const </span>
                  <span class="token names">  result</span>
                  <span class="token equation"> = </span>
                  <span class="token keywords">await </span>
                  <span class="token names">producer</span>
                  <span class="token symbols">.</span>
                  <span class="token func">send</span>
                  <span class="token symbols">({'{'}</span>
                  <br></br>
                  <span class="token key">  topic</span>
                  <span class="token symbols">: '</span>
                  <span class="token names">Users</span>
                  <span class="token symbols">',</span>
                  <br></br>
                  <span class="token key">  messages</span>
                  <span class="token symbols">: [{'{'}</span>
                  <span class="token key">  value</span>
                  <span class="token symbols">: '</span>
                  <span class="token names">test</span>
                  <span class="token symbols">',</span>
                  <span class="token key">  partition</span>
                  <span class="token symbols">:</span>
                  <span class="token names">0 </span>
                  <span class="token symbols">{'}'}]</span>
                  <br></br>
                  <span class="token symbols">{'}'});</span>
                  <br></br>
                  <br></br>
                  <span class="token keywords">await </span>
                  <span class="token names">  producer</span>
                  <span class="token symbols">.</span>
                  <span class="token func">disconnect</span>
                  <span class="token symbols">();</span>
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
                  <span class="token keywords">const</span>
                  <span class="token symbols"> {'{'} </span>
                  <span class="token names"> Kafka </span>
                  <span class="token symbols"> {'}'} </span>
                  <span class="token equation"> = </span>
                  <span class="token keywordReq"> require</span>
                  <span class="token symbols">('</span>                
                  <span class="token string">kafkajs</span>
                  <span class="token symbols">');</span>
                  <br></br>
                  <span class="token keywords">const</span>
                  <span class="token symbols"> {'{'} </span>
                  <span class="token names"> trackConsumer </span>
                  <span class="token symbols"> {'}'} </span>
                  <span class="token equation"> = </span>
                  <span class="token keywordReq"> require</span>
                  <span class="token symbols">('</span>
                  <span class="token string">kafkaq-monitor</span>
                  <span class="token symbols">');</span>
                  <span class="token comments"> // kafkaQ's NPM package</span>
                  <br></br>
                  <br></br>
                  <span class="token keywords">const </span>
                  <span class="token names">kafka</span>
                  <span class="token equation"> = </span>
                  <span class="token keywords"> new</span>
                  <span class="token func"> Kafka</span>
                  <span class="token symbols">({'{'} </span>
                  <br></br>
                  <span class="token key">  clientId</span>
                  <span class="token symbols">: '</span>
                  <span class="token names">myapp</span>
                  <span class="token symbols">',</span>
                  <br></br>
                  <span class="token key">  brokers</span>
                  <span class="token symbols">: [`${'{'}</span>
                  <span class="token names">process</span>
                  <span class="token symbols">.</span>
                  <span class="token key">env</span>
                  <span class="token symbols">.</span>
                  <span class="token key">LOCAL_COMPUTER</span>
                  <span class="token symbols">{'}'}:</span>
                  <span class="token names">9092</span>
                  <span class="token symbols">`]</span>
                  <br></br>
                  <span class="token symbols">{'}'});</span>
                  <br></br>
                  <br></br>
                  <span class="token keywords">const </span>
                  <span class="token names">  consumer</span>
                  <span class="token equation"> = </span>
                  <span class="token names">kafka</span>
                  <span class="token symbols">.</span>
                  <span class="token func">consumer</span>
                  <span class="token symbols">({'{'}</span>
                  <br></br>
                  <span class="token key">  groupId</span>
                  <span class="token symbols">: '</span>
                  <span class="token names">test</span>
                  <span class="token symbols">',</span>
                  <br></br>
                  <span class="token symbols">{'}'});</span>
                  <br></br>
                  <br></br>

                  <span class="token keywords">await </span>
                  <span class="token names">  consumer</span>
                  <span class="token symbols">.</span>
                  <span class="token func">connect</span>
                  <span class="token symbols">();</span>
                  <br></br>
                  <br></br>

                  <span class="token keywords">await </span>
                  <span class="token names">  consumer</span>
                  <span class="token symbols">.</span>
                  <span class="token func">subscribe</span>
                  <span class="token symbols">({'{'}</span>
                  <br></br>
                  <span class="token key">  topic</span>
                  <span class="token symbols">: '</span>
                  <span class="token names">Users</span>
                  <span class="token symbols">',</span>
                  <br></br>
                  <span class="token key">  fromBeginning</span>
                  <span class="token symbols">: </span>
                  <span class="token key">true</span>
                  <br></br>
                  <span class="token symbols">{'}'});</span>
                  <br></br>
                  <br></br>
                  <span class="token func"> trackConsumer</span>
                  <span class="token symbols">(</span>
                  <span class="token names">consumer</span>
                  <span class="token symbols">);</span>
                  <span class="token comments"> // Invoke kafkaQ's trackconsumer method with your consumer as the argument</span>
                  <br></br>
                  <br></br>
                  <span class="token keywords">await </span>
                  <span class="token names">consumer</span>
                  <span class="token symbols">.</span>
                  <span class="token func">run</span>
                  <span class="token symbols">({'{'}</span>
                  <br></br>
                  <span class="token key">  eachMessage</span>
                  <span class="token key">  async</span>
                  <span class="token symbols"> (</span>
                  <span class="token names">result</span>
                  <span class="token symbols">)</span>
                  <span class="token key">  => </span>
                  <span class="token symbols">{'{'}</span>
                  <br></br>
                  <span class="token comments">// Execute some code for each message</span>
                  <br></br>
                  <span class="token symbols">{'}'},</span>
                  <br></br>
                  <span class="token symbols">{'}'});</span>
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
      </div >
    );
  }
}

export default QuickStart;
