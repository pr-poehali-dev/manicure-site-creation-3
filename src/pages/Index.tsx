import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    { name: 'Классический маникюр', price: '1 500 ₽', duration: '60 мин' },
    { name: 'Аппаратный маникюр', price: '1 800 ₽', duration: '60 мин' },
    { name: 'Покрытие гель-лак', price: '2 000 ₽', duration: '90 мин' },
    { name: 'Наращивание ногтей', price: '3 500 ₽', duration: '120 мин' },
    { name: 'Дизайн ногтей', price: 'от 500 ₽', duration: '30 мин' },
    { name: 'Укрепление ногтей', price: '2 200 ₽', duration: '75 мин' }
  ];

  const gallery = [
    {
      url: 'https://cdn.poehali.dev/projects/4b72e982-34eb-4e21-b7a0-f4bb056a5322/files/feedad64-cbf3-452a-969c-8dd754787c1f.jpg',
      alt: 'Элегантный розово-белый маникюр'
    },
    {
      url: 'https://cdn.poehali.dev/projects/4b72e982-34eb-4e21-b7a0-f4bb056a5322/files/1dbdf80d-2990-4846-a59e-e7a31ac9f3e3.jpg',
      alt: 'Пастельный маникюр с шиммером'
    },
    {
      url: 'https://cdn.poehali.dev/projects/4b72e982-34eb-4e21-b7a0-f4bb056a5322/files/44f16ec8-0c70-425b-98fd-5c59f15aab58.jpg',
      alt: 'Минималистичный дизайн ногтей'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время для подтверждения записи.'
    });
    setFormData({ name: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(330,81%,60%,0.08),transparent_50%)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 tracking-tight">
            Красота
            <span className="block text-primary">в деталях</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Профессиональный уход за вашими ногтями в уютной атмосфере
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Записаться на прием
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-full"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Наши работы
            </Button>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-4">Наши работы</h2>
            <p className="text-muted-foreground text-lg">Вдохновляющие примеры наших мастеров</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((image, index) => (
              <div 
                key={index} 
                className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={image.url} 
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg">Услуги и цены</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="border-2 hover:border-primary hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <Icon name="Clock" size={18} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary mt-4">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-4">Записаться</h2>
            <p className="text-muted-foreground text-lg">Оставьте заявку, и мы свяжемся с вами</p>
          </div>
          <Card className="border-2 shadow-2xl animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-14 text-lg rounded-2xl"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-14 text-lg rounded-2xl"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Желаемая услуга"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="h-14 text-lg rounded-2xl"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Комментарий или пожелания"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32 text-lg rounded-2xl"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full text-lg py-6 rounded-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4 bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-foreground mb-4">Контакты</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-2 hover:border-primary hover:shadow-xl transition-all animate-scale-in">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">
                  г. Москва, ул. Примерная, 123
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: '100ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">
                  +7 (999) 123-45-67
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-2 hover:border-primary hover:shadow-xl transition-all animate-scale-in" style={{ animationDelay: '200ms' }}>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Режим работы</h3>
                <p className="text-muted-foreground">
                  Ежедневно: 10:00 - 21:00
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground/5 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Маникюрный салон. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
