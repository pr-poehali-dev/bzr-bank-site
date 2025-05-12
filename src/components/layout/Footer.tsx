
import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bzr-deep-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="https://cdn.poehali.dev/files/6273dcfa-f013-4419-9160-dc31eb1aa5da.jpeg" 
                alt="БЗР Банк" 
                className="h-10 w-10 rounded-full bg-white p-1"
              />
              <h3 className="text-xl font-bold text-white">БЗР Банк</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Банк защиты и развития - ваш надежный финансовый партнер для бизнеса и частных лиц.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-bzr-blue hover:text-white transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="text-bzr-blue hover:text-white transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
              <a href="#" className="text-bzr-blue hover:text-white transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="text-bzr-blue hover:text-white transition-colors">
                <Icon name="Linkedin" className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Услуги</h4>
            <ul className="text-gray-300 space-y-2">
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Корпоративным клиентам</Link></li>
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Государственные заказы</Link></li>
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Частным лицам</Link></li>
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Малому бизнесу</Link></li>
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Инвестиции</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">О банке</h4>
            <ul className="text-gray-300 space-y-2">
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">История банка</Link></li>
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Руководство</Link></li>
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Пресс-центр</Link></li>
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Карьера</Link></li>
              <li><Link to="#" className="hover:text-bzr-blue transition-colors">Документы</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-white mb-4">Контакты</h4>
            <ul className="text-gray-300 space-y-3">
              <li className="flex items-start gap-2">
                <Icon name="MapPin" className="h-5 w-5 text-bzr-blue shrink-0 mt-0.5" />
                <span>123456, Москва, ул. Банковская, д. 10</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Phone" className="h-5 w-5 text-bzr-blue shrink-0" />
                <span>+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" className="h-5 w-5 text-bzr-blue shrink-0" />
                <span>info@bzrbank.ru</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Clock" className="h-5 w-5 text-bzr-blue shrink-0" />
                <span>Пн-Пт: 9:00 - 18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-700 text-sm text-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {currentYear} БЗР Банк - Банк защиты и развития. Все права защищены.</p>
            <div className="flex gap-4">
              <Link to="#" className="hover:text-bzr-blue transition-colors">Политика конфиденциальности</Link>
              <Link to="#" className="hover:text-bzr-blue transition-colors">Условия использования</Link>
              <Link to="#" className="hover:text-bzr-blue transition-colors">Карта сайта</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
