"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: "How to Convert SGPA to CGPA: A Step-by-Step Calculation Guide",
    date: "May 10, 2026",
    readTime: "4 min read",
    link: "/blog/how-to-convert-sgpa-to-cgpa"
  },
  {
    title: "GPA vs. CGPA: The Ultimate Guide for International Students (2026)",
    date: "May 10, 2026",
    readTime: "6 min read",
    link: "/blog/difference-between-gpa-and-cgpa-guide"
  },
  {
    title: "How to Write a 1,000-Word Essay in 2 Hours: A Student's Survival Guide",
    date: "May 8, 2026",
    readTime: "5 min read",
    link: "/blog/how-to-write-1000-word-essay-fast"
  }
];

const LatestBlogPosts = () => {
  return (
    <section className="py-16 md:py-24 border-t border-border bg-card/30">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              Latest from the Blog
            </h2>
            <p className="mt-3 text-muted-foreground">
              Practical guides, study hacks, and academic insights to help you succeed in your studies.
            </p>
          </div>
          <Link 
            to="/blog" 
            className="inline-flex items-center text-sm font-semibold text-primary hover:underline group"
          >
            View All Articles <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                to={post.link} 
                className="tool-card group flex flex-col h-full rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-primary" /> {post.readTime}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-6 flex-1">
                  {post.title}
                </h3>
                <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                  Read Article <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;