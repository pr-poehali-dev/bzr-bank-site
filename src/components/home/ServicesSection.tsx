
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const services = [
  {
    icon: 'Shield',
    title: 'Банковское сопровождение гособоронзаказа',
    description: 'Специализированное сопровождение государственных оборонных заказов в соответствии с законодательством РФ.',
    link: '#'
  },
  {
    icon: 'Building',
    title: 'Корпоративный бизнес',
    description: 'Комплексные банковские решения для предприятий различного масштаба и сфер деятельности.',
    link: '#'
  },
  {
    icon: 'CreditCard',
    title: 'Расчетно-кассовое обслуживание',
    description: 'Выгодные тарифы на расчетные счета, быстрые платежи и переводы, удобный интернет-банкинг.',
    link: '#'
  },
  {
    icon: 'PiggyBank',
    title: 'Вклады для частных лиц',
    description: 'Выгодные процентные ставки по вкладам с различными условиями и сроками размещения.',
    link: '#'
  },
  {
    icon: 'Home',
    title: 'Ипотечное кредитование',
    description: 'Специальные программы ипотечного кредитования для покупки квартир в новостройках и на вторичном рынке.',
    link: '#'
  },
  {
    icon: 'BarChart',
    title: 'Инвестиции и ценные бумаги',
    description: 'Брокерское обслуживание, доверительное управление, услуги депозитария.',
    link: '#'
  },
  {
    icon: 'Briefcase',
    title: 'Малый и средний бизнес',
    description: 'Кредитование, расчетно-кассовое обслуживание, зарплатные проекты для малого бизнеса.',
    link: '#'
  },
  {
    icon: 'Lock',
    title: 'Банковские гарантии',
    description: 'Предоставление всех видов банковских гарантий для обеспечения исполнения контрактов и обязательств.',
    link: '#'
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-bzr-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            БЗР Банк предлагает широкий спектр финансовых услуг для государственных структур, 
            корпоративных и частных клиентов
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="service-card h-full flex flex-col">
              <CardHeader>
                <div className="w-12 h-12 bg-bzr-light-blue rounded-lg flex items-center justify-center mb-3">
                  <Icon name={service.icon} className="h-6 w-6 text-bzr-deep-blue" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="text-bzr-deep-blue hover:text-bzr-blue gap-1 p-0">
                  Подробнее <Icon name="ArrowRight" className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-bzr-deep-blue hover:bg-opacity-90">
            Все услуги и тарифы <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
