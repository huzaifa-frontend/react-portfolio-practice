// src/App.test.js
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// -------------------------
// Chakra UI Mock
// -------------------------
jest.mock('@chakra-ui/react', () => {
  const actualChakra = jest.requireActual('@chakra-ui/react');
  return {
    ...actualChakra,
    ChakraProvider: ({ children }) => <>{children}</>,
  };
});

// -------------------------
// Framer Motion Mock
// -------------------------
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    button: ({ children, ...props }) => <button {...props}>{children}</button>,
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }) => <>{children}</>,
}));

// -------------------------
// FontAwesome Mock
// -------------------------
jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => <span data-testid="font-awesome-icon" />,
}));

// -------------------------
// Automatic Image Mocks
// All image imports are replaced with a generic stub
// -------------------------
jest.mock('./images/photo1.jpg', () => 'photo1.jpg');
jest.mock('./images/photo2.jpg', () => 'photo2.jpg');
jest.mock('./images/photo3.jpg', () => 'photo3.jpg');
jest.mock('./images/photo4.jpg', () => 'photo4.jpg');

// -------------------------
// App Tests
// -------------------------
describe('App Component', () => {
  test('renders main sections of the portfolio', () => {
    render(<App />);

    // Greeting
    expect(screen.getByText(/Hello, I am Pete!/i)).toBeInTheDocument();

    // Bio (multi-line content)
    expect(screen.getByText(/A frontend developer.*web applications/i)).toBeInTheDocument();

    // Projects section
    expect(screen.getByText(/Featured Projects/i)).toBeInTheDocument();

    // Contact section
    expect(screen.getByText(/Contact me/i)).toBeInTheDocument();

    // Footer with dynamic year
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`Pete.*© ${currentYear}`, 'i'))).toBeInTheDocument();
  });

  test('renders contact form elements', () => {
    render(<App />);

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/type of enquiry/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('renders project cards', () => {
    render(<App />);
    const projectTitles = [
      /React Space/i,
      /React Infinite Scroll/i,
      /Photo Gallery/i,
      /Event planner/i,
    ];
    projectTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test('renders navigation elements', () => {
    render(<App />);
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
  });

  test('renders social media icons', () => {
    render(<App />);
    expect(screen.getAllByTestId('font-awesome-icon').length).toBeGreaterThan(0);
  });
});
