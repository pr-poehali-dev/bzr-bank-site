
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

const testimonials = [
  {
    id: 1,
    name: 'Игорь Петрович',
    company: 'ООО "Оборонтех"',
    position: 'Финансовый директор',
    content: 'Сотрудничаем с БЗР Банком более 5 лет в рамках сопровождения гособоронзаказов. Высокий профессионализм сотрудников, оперативность принятия решений и индивидуальный подход к нашим специфическим задачам - вот почему мы выбрали и остаёмся с БЗР Банком.',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
    rating: 5
  },
  {
    id: 2,
    name: 'Елена Сергеевна',
    company: 'ИП Сергеева Е.С.',
    position: 'Предприниматель',
    content: 'Изначально обратилась в БЗР Банк для открытия расчетного счета для бизнеса. Меня приятно удивили выгодные условия и качественный сервис. Со временем перевела в банк всё свое финансовое обслуживание: и личные счета, и бизнес.',
    avatar: 'https://randomuser.me/api/portraits/women/63.jpg',
    rating: 5
  },
  {
    id: 3,
    name: 'Алексей Николаев',
    company: 'АО "Промтехресурс"',
    position: 'Генеральный директор',
    content: 'БЗР Банк - это надежный партнер, который помогает нашей компании эффективно развиваться. Особенно ценим их опыт работы с оборонными предприятиями и понимание специфики нашего бизнеса. Рекомендую их услуги всем, кто работает в данной сфере.',
    avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
    rating: 5
  },
  {
    id: 4,
    name: 'Марина Дмитриева',
    company: 'Частный клиент',
    position: '',
    content: 'Являюсь клиентом банка уже 3 года. Очень довольна ипотечной программой, которую мне предложили специалисты БЗР Банка. Процентная ставка ниже, чем у многих конкурентов, а обслуживание всегда на высоте!',
    avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
    rating: 4
  },
  {
    id: 5,
    name: 'Сергей Васильев',
    company: 'ООО "Инновационные системы"',
    position: 'Коммерческий директор',
    content: 'Благодарим БЗР Банк за оперативное оформление банковской гарантии для участия в государственном тендере. Процесс был максимально прозрачным и быстрым, что позволило нам успешно выиграть контракт.',
    avatar: 'https://randomuser.me/api/portraits/men/55.jpg',
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Icon 
          key={i} 
          name="Star" 
          className={`h-4 w-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill={i < rating ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Что говорят наши клиенты</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Доверие и удовлетворенность клиентов - наша главная ценность
          </p>
        </div>
        
        <div className="mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2 p-1">
                  <div className="testimonial-card h-full flex flex-col">
                    <div className="mb-4">
                      <StarRating rating={testimonial.rating} />
                    </div>
                    <p className="text-gray-700 mb-4 flex-grow italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center mt-2">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">
                          {testimonial.position}
                          {testimonial.position && testimonial.company && ', '}
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
