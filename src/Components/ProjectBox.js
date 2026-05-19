import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import { SiMicrosoftazure } from "react-icons/si";
import MsCertificate from '../Microsoft_Internship_Certificate_-_Rudri_Jani_-_1760747.pdf';

const projects = {

  /* ── Production / Full-stack ───────────────────────────── */

  "CalTrack": {
    badge: null,
    description: "Full-stack AI nutrition tracker. FastAPI + PostgreSQL backend with JWT auth and automated calorie goal calculation (Mifflin-St Jeor). React 18 + TypeScript + Vite frontend with a Groq Llama AI assistant, image-based food analysis, PDF import, analytics dashboard, and dark/light mode.",
    tech: "FastAPI · PostgreSQL · React · TypeScript · Groq LLM",
    github: "https://github.com/rudri1202/CalTrack",
    demo: "",
  },
  "YUMI": {
    badge: null,
    description: "Weather-aware bilingual AI chatbot (English & Japanese) that helps users prep for outings with personalised item recommendations. FastAPI + React + Vite + Groq LLM. Integrates Open-Meteo weather API, voice via Web Speech APIs, and shopping platforms (Amazon, Rakuten, Mercari, 7NOW).",
    tech: "FastAPI · React · Groq LLM · Web Speech API · Open-Meteo",
    github: "https://github.com/rudri1202/YUMI",
    demo: "",
  },
  "PackMan-Insights": {
    badge: "Microsoft Internship",
    description: "Cloud analytics platform built during my internship at Microsoft. Monitors Python and npm package download metrics at scale using Azure Functions for serverless automation and Azure Data Explorer for querying. Visualised through Grafana dashboards.",
    tech: "Azure Functions · Azure Data Explorer · Grafana · Python",
    github: "https://github.com/rudri1202/PackMan-Insights",
    certificate: MsCertificate,
  },
  "SkillSync": {
    badge: null,
    description: "Web application for syncing and showcasing skills. React + Vite frontend with Tailwind CSS, Firebase/Firestore as the real-time backend. Live on Vercel.",
    tech: "React · Vite · Firebase · Tailwind CSS",
    github: "https://github.com/rudri1202/SkillSync",
    demo: "https://skill-sync-1fub.vercel.app",
  },
  "Marudhra Drishti": {
    badge: "Smart India Hackathon",
    description: "Teacher/mentor dashboard for tracking at-risk students using AI/ML predictions. Features centralised risk visualisation, colour-coded status, search/filter, and detailed student profiles. Mobile-responsive with accessibility focus.",
    tech: "React 18 · Material UI · Chart.js · Axios · Context API",
    github: "https://github.com/rudri1202/SIH_frontend",
    demo: "",
  },
  "Generic Data Encryption Module": {
    badge: null,
    description: "Secure and scalable encryption module using Java and Spring Boot. Implements AES/RSA algorithms with custom annotations via aspect-oriented programming. Designed with microservices architecture and design patterns, ensuring reusability. Tested with Postman and REST APIs.",
    tech: "Java · Spring Boot · Redis · AES/RSA · Microservices",
    github: "",
    demo: "",
  },

  /* ── Systems & Distributed Computing ──────────────────── */

  "Peer-to-Peer Gossip Network": {
    badge: null,
    description: "Distributed P2P network implementing the gossip protocol with asynchronous peer communication, seed-based discovery, message broadcasting, and dead-peer liveness detection. Built in Python with timestamped logging and real-time monitoring.",
    tech: "Python · Distributed Systems · P2P · Gossip Protocol",
    github: "https://github.com/rudri1202/Peer-to-peer-gossip",
    demo: "",
  },
  "OMNeT++ Network Topology Generator": {
    badge: null,
    description: "Dynamically generates network topologies for OMNeT++ simulations. Implements Byzantine fault tolerance and a gossip-based consensus algorithm for server ranking. Client modules (Tic9) and server modules (Toc9) communicate via NED network definitions.",
    tech: "C++ · OMNeT++ · Byzantine Fault Tolerance · Python",
    github: "https://github.com/rudri1202/omnet-network-topology-generator",
    demo: "",
  },
  "Microservices Architecture": {
    badge: null,
    description: "Node.js-based microservices architecture demonstrating service decomposition, inter-service communication, and cloud deployment concepts. Built as part of Virtualisation and Cloud Computing coursework.",
    tech: "Node.js · Microservices · Cloud Computing",
    github: "https://github.com/rudri1202/Microservices",
    demo: "",
  },

  /* ── Algorithms & Systems ──────────────────────────────── */

  "Minimum Cost Metro Navigation": {
    badge: null,
    description: "Metro route mapping system in C++ using AVL trees and graph algorithms to calculate minimum-fare routes between stations. Supports dynamic map updates. Demonstrates depth in tree-based data structures and OOP design.",
    tech: "C++ · DSA · AVL Trees · Graph Algorithms",
    github: "https://github.com/rudri1202/Minimum-Cost-Metro-Navigation-System",
    demo: "",
  },
  "MIPS Processor Simulator": {
    badge: null,
    description: "Python-based MIPS processor simulator handling R-type, I-type, and J-type instructions without pipelining. Simulates memory, registers, and program flow to execute instructions sequentially — a deep dive into computer architecture and assembly translation.",
    tech: "Python · Computer Architecture · MIPS · Jupyter",
    github: "https://github.com/rudri1202/MIPS-processor-using-Python",
    demo: "",
  },
  "Android Process Monitor": {
    badge: null,
    description: "Android application for real-time process monitoring built in Kotlin with Jetpack Compose. Displays CPU and memory stats via coroutines, supports process search and termination — demonstrating OS fundamentals on Android.",
    tech: "Kotlin · Jetpack Compose · Coroutines · Android",
    github: "https://github.com/rudri1202/AndroidProcessMonitor",
    demo: "",
  },

  /* ── Machine Learning ──────────────────────────────────── */

  "Music Genre Classification": {
    badge: null,
    description: "ML pipeline for audio genre classification using MFCC analysis, spectral features, and spectrograms. Applied PCA, LDA, and classifiers including XGBoost with librosa for feature extraction and scikit-learn for the modelling pipeline.",
    tech: "Python · librosa · scikit-learn · XGBoost · MFCC",
    github: "https://github.com/rudri1202/MusicGenreClassification",
    demo: "",
  },
  "Face Detection & Clustering": {
    badge: null,
    description: "Three-part facial analysis system: a face clustering web app, a detection + clustering pipeline, and a deep learning approach using PCA and LDA for dimensionality reduction. Covers both classical and neural network-based facial recognition.",
    tech: "Python · PCA · LDA · Deep Learning · OpenCV",
    github: "https://github.com/rudri1202/Face_Detection_Recognition_nd_Clustering",
    demo: "",
  },
  "Neural Networks from Scratch": {
    badge: null,
    description: "Implementation of neural networks from the ground up — forward pass, backpropagation, and gradient descent — without ML frameworks. Includes detailed Jupyter notebooks and a report documenting the theory and results.",
    tech: "Python · NumPy · Jupyter · Backpropagation",
    github: "https://github.com/rudri1202/Neural-Networks",
    demo: "",
  },
  "Perceptron & Eigenfaces": {
    badge: null,
    description: "Perceptron algorithm implementation paired with eigenface-based facial recognition. Uses PCA to project faces into eigenspace and a perceptron classifier for recognition. Includes training/testing scripts, data files, and a PDF report.",
    tech: "Python · PCA · Perceptron · Eigenfaces",
    github: "https://github.com/rudri1202/Perceptron-and-Eigen-Faces",
    demo: "",
  },
  "K-Means Clustering from Scratch": {
    badge: null,
    description: "K-means clustering algorithm implemented from scratch without ML libraries — covers centroid initialisation, assignment, and update steps. Includes Jupyter notebooks with visualisations and a full report.",
    tech: "Python · NumPy · Matplotlib · Jupyter",
    github: "https://github.com/rudri1202/ML_K_means",
    demo: "",
  },
  "Decision Tree & Linear Regression": {
    badge: null,
    description: "From-scratch implementations of decision tree (with information gain / Gini split) and linear regression (gradient descent). Academic project with full Jupyter notebook walkthroughs and PDF documentation.",
    tech: "Python · NumPy · Jupyter · Decision Tree · Regression",
    github: "https://github.com/rudri1202/Decision-Tree-and-Linear-regression",
    demo: "",
  },
  "Naive Bayes & LDA": {
    badge: null,
    description: "Implementation and comparison of Naive Bayes classifier and Linear Discriminant Analysis. Includes Python scripts, Jupyter notebooks, and a detailed PDF report covering theory, experiments, and results.",
    tech: "Python · Naive Bayes · LDA · scikit-learn · Jupyter",
    github: "https://github.com/rudri1202/Naive-Bayes-and-LDA",
    demo: "",
  },
};

const ProjectBox = ({ projectName }) => {
  const project = projects[projectName];
  if (!project) return null;

  return (
    <div className='projectBox'>
      {project.badge && (
        <span className='projectBadge'>
          {projectName === "PackMan-Insights" && <SiMicrosoftazure style={{ marginRight: 5 }} />}
          {project.badge}
        </span>
      )}
      <h3>{projectName}</h3>
      <p>{project.description}</p>
      <p className='projectTech'>{project.tech}</p>
      <div>
        {project.github && (
          <a href={project.github} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><FaGithub /> Github</button>
          </a>
        )}
        {project.demo && (
          <a href={project.demo} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><CgFileDocument /> Demo</button>
          </a>
        )}
        {project.certificate && (
          <a href={project.certificate} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn projectbtn--cert'><CgFileDocument /> Certificate</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
