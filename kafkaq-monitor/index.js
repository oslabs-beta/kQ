// const printHello = () => console.log('hello');

let num = 0;

const trackProducer = (producer) => {
  const { REQUEST } = producer.events;
  const sendListener = producer.on(REQUEST, (e) => {
    console.log(`REQUEST size: ${e.payload.size}`);
    console.log(`REQUEST duration: ${e.payload.duration}`);
    console.log(`REQUEST sentAt: ${e.payload.sentAt}\n`);
    num += e.payload.size;
    console.log(`num is: ${num}`)
  })
  
  // printHello();
}

module.exports = { trackProducer };
