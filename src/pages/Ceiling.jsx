import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Droplets, Volume2, Thermometer, Recycle, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FloatingActions from '@/components/FloatingActions';

const Ceiling = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const ceilingProducts = [
    {
      id: 'ceiling-1',
      name: 'Acoustic WPC Ceiling Panels',
      category: 'acoustic',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      price: '₹85/sq ft',
      features: ['Sound Absorption', 'Easy Installation', 'Moisture Resistant', 'Fire Retardant'],
      description: 'Professional acoustic ceiling panels that reduce noise while adding aesthetic appeal.'
    },
    {
      id: 'ceiling-2',
      name: 'Designer WPC False Ceiling',
      category: 'designer',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      price: '₹120/sq ft',
      features: ['Custom Designs', 'LED Integration', 'Premium Finish', 'Easy Maintenance'],
      description: 'Elegant false ceiling designs with integrated lighting solutions for modern spaces.'
    },
    {
      id: 'ceiling-3',
      name: 'Waterproof Bathroom Ceiling',
      category: 'waterproof',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101',
      price: '₹95/sq ft',
      features: ['100% Waterproof', 'Anti-Bacterial', 'Easy Clean', 'Mold Resistant'],
      description: 'Specially designed waterproof ceiling panels perfect for bathrooms and wet areas.'
    },
    {
      id: 'ceiling-4',
      name: 'Office Grid Ceiling System',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
      price: '₹75/sq ft',
      features: ['Modular Design', 'Easy Access', 'Professional Look', 'Cost Effective'],
      description: 'Modular grid ceiling system ideal for offices and commercial spaces.'
    },
    {
      id: 'ceiling-5',
      name: 'Luxury Wood Finish Ceiling',
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
      price: '₹150/sq ft',
      features: ['Premium Wood Look', 'Handcrafted Texture', 'Luxury Appeal', 'Durable Finish'],
      description: 'Premium wood-finish ceiling panels that bring natural elegance to any space.'
    },
    {
      id: 'ceiling-6',
      name: 'Eco-Friendly Green Ceiling',
      category: 'eco',
      image: 'https://images.unsplash.com/photo-1545041454-6f53b06c6ed2',
      price: '₹90/sq ft',
      features: ['100% Recyclable', 'Low VOC', 'Energy Efficient', 'Sustainable'],
      description: 'Environmentally friendly ceiling solution made from recycled WPC materials.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Ceilings' },
    { id: 'acoustic', name: 'Acoustic' },
    { id: 'designer', name: 'Designer' },
    { id: 'waterproof', name: 'Waterproof' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'luxury', name: 'Luxury' },
    { id: 'eco', name: 'Eco-Friendly' }
  ];

  const features = [
    {
      icon: <Shield size={32} />,
      title: 'Fire Resistant',
      description: 'All our ceiling panels meet fire safety standards'
    },
    {
      icon: <Droplets size={32} />,
      title: 'Moisture Proof',
      description: 'Perfect for humid environments like bathrooms'
    },
    {
      icon: <Volume2 size={32} />,
      title: 'Sound Absorption',
      description: 'Reduces noise and improves acoustic comfort'
    },
    {
      icon: <Thermometer size={32} />,
      title: 'Temperature Control',
      description: 'Helps maintain optimal room temperature'
    },
    {
      icon: <Recycle size={32} />,
      title: 'Eco-Friendly',
      description: '100% recyclable and sustainable materials'
    },
    {
      icon: <Star size={32} />,
      title: 'Premium Quality',
      description: 'Superior finish and long-lasting durability'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? ceilingProducts 
    : ceilingProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <FloatingActions />
      <Helmet>
        <title>WPC Ceiling Solutions - ShubhAangan | Acoustic & Designer Ceilings</title>
        <meta name="description" content="Premium WPC ceiling solutions including acoustic panels, false ceilings, and waterproof designs. Transform your space with our innovative ceiling systems." />
        <meta name="keywords" content="WPC ceiling, false ceiling, acoustic ceiling, waterproof ceiling, designer ceiling, commercial ceiling" />
      </Helmet>

      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold heading-primary mb-6"
            style={{ color: 'hsl(var(--wpc-text-primary))' }}
          >
            WPC Ceiling Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          >
            Transform your ceiling with our innovative WPC panels. Acoustic, waterproof, and designer solutions for every space.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact">
              <Button size="lg" className="wpc-btn-secondary px-8 py-4 text-lg font-semibold">
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold heading-secondary mb-4">Why Choose WPC Ceilings?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our WPC ceiling solutions offer superior performance, durability, and aesthetic appeal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="wpc-gradient text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`px-6 py-3 ${
                  selectedCategory === category.id
                    ? 'wpc-btn-primary text-white'
                    : 'border-amber-200 text-amber-800 hover:bg-amber-50'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-hover overflow-hidden">
                  <div className="relative">
                    <img  
                      className="w-full h-64 object-cover optimized-image"
                      alt={product.name}
                      src={product.image}
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="product-tag px-3 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 heading-secondary">{product.name}</h3>
                    <p className="text-2xl font-bold text-amber-700 mb-4">{product.price}</p>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature, idx) => (
                          <span key={idx} className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link to="/contact">
                      <Button className="w-full wpc-btn-primary">
                        Get Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">No ceiling products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Ceiling;
