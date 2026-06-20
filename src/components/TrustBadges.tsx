"use client";

import React from 'react';
import { Lock, Zap, CheckCircle, Heart, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const badges = [
  {
    icon: Lock,
    title: "100% Private",
    subtitle: "All calculations run in your browser",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "Instant Results",
    subtitle: "Use tools instantly, no downloads",
    color: "text-primary"
  },
  {
    icon: CheckCircle,
    title: "Accurate & Reliable",
    subtitle: "Used by 50K+ students worldwide",
    color: "text-primary"
  },
  {
    icon: Heart,
    title: "Free Forever",
    subtitle: "No hidden charges or paywalls",
    color: "text-primary"
  },
  {
    icon: Shield,
    title: "Secure & Fast",
    subtitle: "HTTPS encrypted performance",
    color: "text-primary"
  }
];

const TrustBadges = () => {
  return (
    <section className="py-12 border-t border-border bg-card/20">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {badges.map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-xl border border-border/50 bg-background/40 hover:border-primary/30 transition-colors"
            >
              <div className={`mb-3 p-2 rounded-full bg-primary/10 ${badge.color}`}>
                <badge.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">
                {badge.title}
              </h3>
              <p className="mt-1 text-[11px] text-muted-foreground leading-tight">
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;