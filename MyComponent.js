const MyComponent = {
  template: `<div>
  <p>{{ myMessage }}</p>
  </div>`,
  data: function () {
    return {
      myMessage: "This is my component!",
    };
  },
};
