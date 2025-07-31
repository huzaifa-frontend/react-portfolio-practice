import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header, Landing Section, and Footer', () => {
  render(<App />);
  
  // Check if key components are rendered
  const headerElement = screen.getByRole('banner'); // Assuming your Header has a banner role
  const landingSectionElement = screen.getByText(/contact me/i); // Assuming the "Contact me" text is in the LandingSection
  const footerElement = screen.getByText(/Pete • © 2022/i); // Assuming this is the footer text

  expect(headerElement).toBeInTheDocument();
  expect(landingSectionElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});

test('renders alert message when alert context is triggered', () => {
  // You can mock the Alert context and trigger an alert to test if it shows up.
  render(<App />);
  
  // Trigger an alert here, depending on how you manage the context
  
  // Example: Check if an alert is rendered (you can adjust based on your context implementation)
  const alertMessage = screen.getByText(/Thanks for your submission/i); // Modify this text based on what the alert shows
  
  expect(alertMessage).toBeInTheDocument();
});
