/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Performance from './components/Performance';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import NanoAudit from './components/NanoAudit';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen text-text-primary font-sans selection:bg-accent-blue/20 selection:text-text-primary relative bg-bg-void overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Services />
        <Performance />
        <Portfolio />
        <Process />
        <NanoAudit />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
