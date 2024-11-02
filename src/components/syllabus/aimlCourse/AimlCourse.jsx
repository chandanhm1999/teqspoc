"use client";

import { useState } from "react";
import Image from "next/image";
import TextLight from "./TextLight";

const AimlCourse = () => {
  const [syllabus] = useState([
    {
      section: "Introduction to AI and ML",
      topics: [
        "What is AI? History and milestones in AI",
        "Differences between AI, ML, and Data Science",
        "Types of AI: Narrow AI, General AI, Super AI",
        "Introduction to Machine Learning: Supervised, Unsupervised, and Reinforcement Learning",
      ],
    },
    {
      section: "Mathematical Foundations of Machine Learning",
      topics: [
        "Linear Algebra for Machine Learning: Vectors, Matrices, Tensors",
        "Probability and Statistics: Bayes Theorem, Conditional Probability, Probability Distributions",
        "Optimization Techniques: Gradient Descent, Stochastic Gradient Descent",
      ],
    },
    {
      section: "Supervised Learning - Regression",
      topics: [
        "Linear Regression",
        "Polynomial Regression",
        "Logistic Regression",
        "Evaluation Metrics: MSE, RMSE, MAE, R-Squared",
        "Implementation using Scikit-learn",
      ],
    },
    {
      section: "Supervised Learning - Classification",
      topics: [
        "K-Nearest Neighbors (KNN)",
        "Decision Trees",
        "Random Forests",
        "Support Vector Machines (SVM)",
        "Evaluation Metrics: Accuracy, Precision, Recall, F1 Score",
        "Hands-on with a classification problem",
      ],
    },
    {
      section: "Unsupervised Learning",
      topics: [
        "Introduction to Clustering",
        "K-Means Clustering",
        "Hierarchical Clustering",
        "Principal Component Analysis (PCA) and Dimensionality Reduction",
        "Use cases and applications",
      ],
    },
    {
      section: "Neural Networks and Deep Learning Basics",
      topics: [
        "Introduction to Neural Networks: Perceptrons, Activation Functions",
        "Backpropagation and Gradient Descent in Neural Networks",
        "Deep Learning: Concepts and Need for Deep Networks",
        "Popular Deep Learning Frameworks (TensorFlow, Keras, PyTorch)",
        "Implementation of basic Neural Network",
      ],
    },
    {
      section: "Convolutional Neural Networks (CNN)",
      topics: [
        "CNN Architecture: Convolutional Layers, Pooling Layers, Fully Connected Layers",
        "Image Recognition and Object Detection with CNNs",
        "Popular CNN Architectures (AlexNet, VGGNet, ResNet)",
        "Hands-on with CNN for image classification",
      ],
    },
    {
      section: "Recurrent Neural Networks (RNN) and LSTMs",
      topics: [
        "Sequential Data and RNNs",
        "Long Short-Term Memory (LSTM) Networks",
        "Applications of RNNs in Natural Language Processing (NLP)",
        "Sentiment Analysis, Text Generation",
        "Practical implementation of RNN/LSTM",
      ],
    },
    {
      section: "Reinforcement Learning",
      topics: [
        "Basics of Reinforcement Learning: Markov Decision Process",
        "Exploration vs Exploitation, Reward Maximization",
        "Q-Learning and Deep Q-Networks (DQN)",
        "Applications of RL: Game AI, Robotics",
        "Implementation of a simple RL agent",
      ],
    },
    {
      section: "Advanced Topics in AI",
      topics: [
        "Transfer Learning",
        "Generative Adversarial Networks (GANs)",
        "Autoencoders",
        "AI in Healthcare, Autonomous Systems, and Finance",
      ],
    },
    {
      section: "AI Ethics and Fairness",
      topics: [
        "Ethical Challenges in AI",
        "Bias in Machine Learning Algorithms",
        "Fairness, Transparency, and Accountability",
        "Legal and societal impacts of AI",
      ],
    },
    {
      section: "AI and ML Project Work",
      topics: [
        "Project: Implementing a real-world AI or ML model",
        "Model Evaluation and Tuning (Cross-validation, Grid Search, Random Search)",
        "Final Model Presentation and Evaluation",
      ],
    },
  ]);

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap justify-between">
        {/* Right column for syllabus details */}
        <div className="w-full md:w-8/12 mb-8">
          <div className="relative">
            <Image
              src="/assets/sys/robo.jpg"
              alt="AI/ML Course Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
              AI & ML Course Syllabus
            </h2>
          </div>

          <div className="mt-6 ml-4">
            {syllabus.map((module, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-xl font-bold text-gray-600 mb-4">{module.section}</h3>
                <ul className="list-disc list-inside space-y-2">
                  {module.topics.map((topic, idx) => (
                    <li key={idx} className="text-gray-700 text-[16px]">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Left column for syllabus list */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4 text-start">
            AI & ML 
            <TextLight text={"Syllabus"} />
          </h3>
          <ul className="list-none space-y-4">
            {syllabus.map((module, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 hover:bg-blue-100 p-3 rounded-lg transition duration-200 ease-in-out cursor-pointer"
              >
                <p className="text-gray-800 font-medium">
                  {index + 1}. {module.section}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default AimlCourse;
