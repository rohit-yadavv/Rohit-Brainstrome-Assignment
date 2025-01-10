import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card text-card-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About FoodieHub</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">About Us</a></li>
              <li><a href="#" className="hover:text-primary">Team</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">For Restaurants</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Partner With Us</a></li>
              <li><a href="#" className="hover:text-primary">Apps For You</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Privacy</a></li>
              <li><a href="#" className="hover:text-primary">Security</a></li>
              <li><a href="#" className="hover:text-primary">Terms</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Social Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">Facebook</a></li>
              <li><a href="#" className="hover:text-primary">Twitter</a></li>
              <li><a href="#" className="hover:text-primary">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} FoodieHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;