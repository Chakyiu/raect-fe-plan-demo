var template = {
  plan: [
    {
      name: "Standard Plan",
      element: {
        General: true,
        Specialist: true,
        Physiotherapy: false,
      },
      price: 0,
    },
    {
      name: "Premium Plan",
      element: {
        General: true,
        Specialist: false,
      },
      price: 388,
    },
  ],
};

export default template;
