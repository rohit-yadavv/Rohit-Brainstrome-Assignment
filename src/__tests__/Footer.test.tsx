import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer Component', () => {
  test('renders footer sections', () => {
    render(<Footer />);
    
    expect(screen.getByText('About FoodieHub')).toBeInTheDocument();
    expect(screen.getByText('For Restaurants')).toBeInTheDocument();
    expect(screen.getByText('Learn More')).toBeInTheDocument();
    expect(screen.getByText('Social Links')).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} FoodieHub. All rights reserved.`)).toBeInTheDocument();
  });
});