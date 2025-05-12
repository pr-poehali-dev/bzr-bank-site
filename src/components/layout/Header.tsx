
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img 
            src="https://cdn.poehali.dev/files/6273dcfa-f013-4419-9160-dc31eb1aa5da.jpeg" 
            alt="БЗР Банк" 
            className="h-12 w-12 rounded-full"
          />
          <div>
            <h1 className="text-xl font-bold text-bzr-deep-blue">БЗР Банк</h1>
            <p className="text-xs text-bzr-blue">Банк защиты и развития</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors">Главная</Link>
          <Link to="#services" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors">Услуги</Link>
          <Link to="#about" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors">О нас</Link>
          <Link to="#testimonials" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors">Отзывы</Link>
          <Link to="#contacts" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors">Контакты</Link>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="outline" 
            className="border-bzr-blue text-bzr-deep-blue hover:bg-bzr-light-blue"
          >
            Войти
          </Button>
          <Button className="bg-bzr-deep-blue hover:bg-bzr-navy text-white">
            Стать клиентом
          </Button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? "X" : "Menu"} className="h-6 w-6 text-bzr-deep-blue" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 px-4 shadow-lg animate-fade-in">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors px-2 py-1">Главная</Link>
            <Link to="#services" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors px-2 py-1">Услуги</Link>
            <Link to="#about" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors px-2 py-1">О нас</Link>
            <Link to="#testimonials" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors px-2 py-1">Отзывы</Link>
            <Link to="#contacts" className="text-bzr-deep-blue hover:text-bzr-blue transition-colors px-2 py-1">Контакты</Link>
            
            <div className="flex flex-col gap-2 pt-2">
              <Button 
                variant="outline" 
                className="border-bzr-blue text-bzr-deep-blue hover:bg-bzr-light-blue w-full"
              >
                Войти
              </Button>
              <Button className="bg-bzr-deep-blue hover:bg-bzr-navy text-white w-full">
                Стать клиентом
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
