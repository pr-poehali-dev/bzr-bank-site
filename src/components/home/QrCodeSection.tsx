import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const QrCodeSection = () => {
  return (
    <section className="py-16 bg-bzr-light-blue">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Доверие и партнерство - ключ к успеху
              </h2>
              <p className="text-gray-600 mb-6">
                БЗР Банк предлагает индивидуальные финансовые решения для
                государственных оборонных заказов и выгодные условия для всех
                клиентов. Воспользуйтесь нашим мобильным приложением или
                свяжитесь с нами для получения подробной информации.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-bzr-deep-blue hover:bg-opacity-90">
                  <Icon name="Phone" className="mr-2 h-4 w-4" />
                  Связаться с нами
                </Button>
                <Button
                  variant="outline"
                  className="border-bzr-blue text-bzr-deep-blue"
                >
                  <Icon name="MapPin" className="mr-2 h-4 w-4" />
                  Найти отделение
                </Button>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-md relative">
                {/* Статическое изображение QR-кода вместо динамически генерируемого */}
                <div className="w-48 h-48 bg-white flex items-center justify-center">
                  <div className="w-40 h-40 bg-bzr-deep-blue grid grid-cols-5 grid-rows-5 gap-1 p-2">
                    {/* Стилизованный псевдо-QR код */}
                    <div className="col-span-2 row-span-2 bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="col-span-2 row-span-2 bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="col-span-2 row-span-2 bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="row-span-1 col-span-5 flex">
                      <div className="w-1/3 bg-white"></div>
                      <div className="w-1/3 bg-bzr-deep-blue"></div>
                      <div className="w-1/3 bg-white"></div>
                    </div>
                    <div className="col-span-2 row-span-2 bg-white"></div>
                    <div className="bg-white"></div>
                    <div className="col-span-2 row-span-2 bg-white"></div>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-center text-gray-600">
                Отсканируйте QR-код для перехода на сайт БЗР Банка
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QrCodeSection;
