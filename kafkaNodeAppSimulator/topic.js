const kafka = require('kafka-node');

run();
async function run() {
  try {
    const client = new kafka.KafkaClient({ kafkaHost: 'Weis-NB.local:9092' });
    const admin = new kafka.Admin(client);
    // specify details of the topic that is going to be created
    // var topics = [
    //   {
    //     topic: 'Users-4',
    //     partitions: 2,
    //     replicationFactor: 1,
    //   },
    // ];
    // creates topic
    // console.log(`creating topic...`);
    // admin.createTopics(topics, (error, response) => {
    //   // result is an array of any errors if a given topic could not be created
    //   if (error) {
    //     console.log(`create topic error; ${error}`);
    //   } else {
    //     console.log(`create topic response: ${JSON.stringify(response)}`);
    //     console.log(`topic created!`);
    //   }
    // });
    // the below function lists existing topics
    admin.listTopics((err, res) => {
      console.log(res);
    });
  } catch (err) {
    console.error(`ERROR: ${err}`);
  }
}
