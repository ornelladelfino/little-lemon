/* export const fetchData = async (date) => {
    const response = await fetch(`https://raw.githubusercontent.com/courseraap/capstone/main/api.js`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  }; */

  // Simulate API fetch function for available times
export const fetchData = async (date) => {
    const times = [
      "09:00 AM",
      "10:00 AM",
      "11:00 AM",
      "12:00 PM",
      "01:00 PM",
      "02:00 PM",
      "03:00 PM",
      "04:00 PM",
      "05:00 PM",
    ];
    // Simulating network request delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(times);
      }, 1000);
    });
  };
  
  // Simulate API submit function
  export const submitAPI = async (formData) => {
    // Simulate a successful form submission
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Form data submitted:', formData);
        resolve(true);
      }, 1000);
    });
  };
  