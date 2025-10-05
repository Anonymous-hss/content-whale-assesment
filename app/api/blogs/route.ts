import { NextResponse } from "next/server";

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string; // ISO
  author: { name: string; avatar: string };
  tags: string[];
};

export async function GET() {
  // NOTE: swap with DB/WP later; imgs point to /public/blog/*
  const posts: BlogPost[] = [
    {
      id: "27",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "26",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "25",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "24",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "23",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "22",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "21",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "20",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "19",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "18",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "16",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "19",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog-h.svg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog-n.svg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "15",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog/hero-plant.jpg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "14",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog/hero-plant.jpg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "13",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog/hero-plant.jpg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "12",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog/hero-plant.jpg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "11",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog/hero-plant.jpg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "10",
      title: "Turning Green into Growth: The Accountant’s Role",
      excerpt:
        "Sustainable finance is no longer optional. Here’s how modern firms drive value with greener choices.",
      image: "/blog/hero-plant.jpg",
      date: "2024-09-18",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Industry", "Automation"],
    },
    {
      id: "9",
      title: "8 Top Open-Source LLMs for 2024 and Their Uses",
      excerpt:
        "What we learned putting the best OSS models to work in accounting automation pipelines.",
      image: "/blog/oss-llm.jpg",
      date: "2024-08-13",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Automation", "CA Firms"],
    },
    {
      id: "8",
      title: "GST 3.0: What Changes for MSMEs",
      excerpt:
        "A practical guide to the new rule set—compliance checklists and timelines you can share with clients.",
      image: "/blog/gst.jpg",
      date: "2024-07-03",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["GST", "Accounting"],
    },
    {
      id: "7",
      title: "How Automation is Transforming CA Offices",
      excerpt:
        "From intake to delivery—real workflows, benchmarks and the quick wins.",
      image: "/blog/sparks.jpg",
      date: "2024-06-20",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["CA Firms", "Automation"],
    },
    {
      id: "6",
      title: "Onboarding Playbook for Cloud Accounting",
      excerpt:
        "Templates and steps we use to move legacy books to cloud stacks in 10 business days.",
      image: "/blog/cloud.jpg",
      date: "2024-06-01",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Accounting", "Industry"],
    },
    {
      id: "5",
      title: "TDS/TCS Cheatsheet Q2 2024",
      excerpt:
        "Thresholds, effective dates and edge cases—compiled for your client ops teams.",
      image: "/blog/tds.jpg",
      date: "2024-05-15",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Accounting", "GST"],
    },
    {
      id: "4",
      title: "Audit Readiness: A 30-Day Sprint",
      excerpt: "Cut prep time in half with this checklist and artifact map.",
      image: "/blog/audit.jpg",
      date: "2024-05-01",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["CA Firms"],
    },
    {
      id: "3",
      title: "The Real Cost of Context Switching in Firms",
      excerpt:
        "Why multitasking kills throughput—and how to fix it with simple queues.",
      image: "/blog/cost.jpg",
      date: "2024-04-12",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Industry"],
    },
    {
      id: "2",
      title: "Choosing an AR Automation Stack",
      excerpt:
        "Scoping, vendor shortlisting and the KPIs we track after go-live.",
      image: "/blog/ar.jpg",
      date: "2024-03-19",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Automation", "Accounting"],
    },
    {
      id: "1",
      title: "Building a Modern Reporting Layer",
      excerpt:
        "From spreadsheets to semantic models: patterns that work in mid-market teams.",
      image: "/blog/reporting.jpg",
      date: "2024-03-05",
      author: { name: "Rohit Kadam", avatar: "/blog/authors/rohit.jpg" },
      tags: ["Accounting"],
    },
  ];

  // Sort newest first
  posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  return NextResponse.json({ posts });
}
