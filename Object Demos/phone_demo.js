const phone = {
    make: 'Apple',
    model: 'iPhone 12',
    year: 2020,
    color: 'black',
    storage: 128,
    call: function (number) {
      console.log(`Calling ${number}...`);
    },
    text: function (number, message) {
      console.log(`Sending text to ${number}: ${message}`);
    },
  };

phone.call(1234567890)
phone.text(1234567890, 'Hey are you there?')