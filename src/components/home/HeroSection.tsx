
import React from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-bzr-deep-blue to-bzr-blue py-16 md:py-24 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-white"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full border-2 border-white"></div>
        <div className="absolute top-40 right-40 w-20 h-20 rounded-full border-2 border-white"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-up">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Банк защиты и развития
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-bzr-light-blue font-light">
              Доверие и партнерство - ключ к успеху
            </p>
            <p className="text-white/90 mb-8 text-lg max-w-lg">
              Специализированные финансовые решения для предприятий оборонной промышленности 
              и выгодные условия для всех клиентов
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-bzr-deep-blue hover:bg-bzr-light-blue">
                <Icon name="Shield" className="mr-2 h-5 w-5" />
                Для гособоронзаказа
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <Icon name="Users" className="mr-2 h-5 w-5" />
                Для частных клиентов
              </Button>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-white/20 rounded-full blur-md"></div>
              <div className="relative bg-white p-3 rounded-full">
                <img 
                  src="https://cdn.poehali.dev/files/6273dcfa-f013-4419-9160-dc31eb1aa5da.jpeg" 
                  alt="БЗР Банк" 
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                <div className="bg-bzr-blue rounded-full p-3">
                  <Icon name="Star" className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
            <Icon name="Shield" className="h-8 w-8 text-bzr-light-blue mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Надежная защита</h3>
            <p className="text-white/80">Безопасность ваших финансов - наш главный приоритет</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
            <Icon name="TrendingUp" className="h-8 w-8 text-bzr-light-blue mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Стабильное развитие</h3>
            <p className="text-white/80">Инновационные решения для роста вашего бизнеса</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors">
            <Icon name="Handshake" className="h-8 w-8 text-bzr-light-blue mb-3" />
            <h3 className="text-xl font-semibold text-white mb-2">Надежное партнерство</h3>
            <p className="text-white/80">Индивидуальный подход к каждому клиенту</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
