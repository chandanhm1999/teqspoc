"use client";

import { useState } from "react";
import Image from "next/image";
import { FaQuestionCircle, FaLightbulb } from "react-icons/fa";
import TextLight from "./TextLight";

const Amilr = () => {
  const [faqs] = useState([
    {
      question: "What is the difference between AI, Machine Learning, and Deep Learning?",
      answer: 
        "AI is the broader concept of creating machines that simulate human intelligence. Machine Learning is a subset of AI where machines learn from data. Deep Learning is a subset of Machine Learning that uses neural networks with many layers.",
    },
    {
      question: "What is supervised learning?",
      answer: 
        "Supervised learning is a type of machine learning where the model is trained on labeled data, meaning each training example is paired with an output label.",
    },
    {
      question: "What is unsupervised learning?",
      answer: 
        "Unsupervised learning involves training a model on data without labeled responses, aiming to find hidden patterns or structures (e.g., clustering).",
    },
    {
      question: "What is overfitting, and how can it be avoided?",
      answer: 
        "Overfitting occurs when a model performs well on training data but poorly on unseen data. It can be avoided using regularization, simplifying the model, increasing training data, or applying cross-validation.",
    },
    {
      question: "What is the difference between classification and regression?",
      answer: 
        "Classification predicts a label (e.g., spam or not spam), while regression predicts a continuous value (e.g., predicting house prices).",
    },
    {
      question: "What is a confusion matrix?",
      answer: 
        "A confusion matrix shows the performance of a classification model by comparing actual and predicted values, including metrics like True Positives, False Positives, False Negatives, and True Negatives.",
    },
    {
      question: "What is precision and recall?",
      answer: 
        "Precision measures the accuracy of positive predictions: TP / (TP + FP). Recall measures the ability to find all positive samples: TP / (TP + FN).",
    },
    {
      question: "What is the bias-variance tradeoff?",
      answer: 
        "Bias refers to the error from overly simplistic models. Variance refers to error from complex models. The tradeoff is finding a balance to minimize total error.",
    },
    {
      question: "What is cross-validation, and why is it important?",
      answer: 
        "Cross-validation assesses how well a model generalizes to unseen data by splitting data into folds and evaluating performance across subsets.",
    },
    {
      question: "What is the purpose of regularization in ML models?",
      answer: 
        "Regularization techniques like L1 and L2 penalize model complexity to prevent overfitting and improve generalization.",
    },
    {
      question: "What is the difference between bagging and boosting?",
      answer: 
        "Bagging reduces variance by training models on different data subsets (e.g., Random Forest). Boosting reduces bias by sequentially improving model errors (e.g., AdaBoost).",
    },
    {
      question: "What is the difference between L1 and L2 regularization?",
      answer: 
        "L1 regularization (Lasso) encourages sparsity by penalizing the absolute value of coefficients, while L2 (Ridge) penalizes their square, keeping all features.",
    },
    {
      question: "What is Gradient Descent?",
      answer: 
        "Gradient Descent is an optimization algorithm used to minimize a loss function by iteratively adjusting parameters in the opposite direction of the gradient.",
    },
    {
      question: "Explain the working of a Decision Tree.",
      answer: 
        "A Decision Tree splits data based on feature values to make decisions, using metrics like Gini impurity or entropy to select the best split.",
    },
    {
      question: "What is the difference between a Decision Tree and a Random Forest?",
      answer: 
        "A Decision Tree is a single tree structure, while a Random Forest is an ensemble of trees that uses bagging to reduce variance and improve accuracy.",
    },
    {
      question: "What is a support vector machine (SVM)?",
      answer: 
        "An SVM is a supervised learning algorithm that finds the optimal hyperplane to separate data into different classes.",
    },
    {
      question: "Explain the k-means clustering algorithm.",
      answer: 
        "K-means clustering partitions data into k clusters by minimizing variance within clusters, iteratively assigning points and updating centroids.",
    },
    {
      question: "What is Principal Component Analysis (PCA)?",
      answer: 
        "PCA is a dimensionality reduction technique that transforms data into a new coordinate system, with variance maximized along principal components.",
    },
    {
      question: "What is the difference between a generative and discriminative model?",
      answer: 
        "A generative model learns joint probability distributions (e.g., Naive Bayes), while a discriminative model learns conditional probabilities (e.g., Logistic Regression).",
    },
    {
      question: "What is the kernel trick in SVM?",
      answer: 
        "The kernel trick allows SVM to perform non-linear classification by implicitly mapping data into a higher-dimensional space.",
    },
    {
      question: "What are Convolutional Neural Networks (CNNs)?",
      answer: 
        "CNNs are neural networks designed for processing images, using convolutional layers for feature extraction and pooling layers for downsampling.",
    },
    {
      question: "Explain the difference between RNNs and LSTMs.",
      answer: 
        "RNNs handle sequential data with hidden states, while LSTMs address the vanishing gradient problem with gates to control information flow.",
    },
    {
      question: "What are Generative Adversarial Networks (GANs)?",
      answer: 
        "GANs consist of a Generator that creates synthetic data and a Discriminator that evaluates its authenticity, training in a competitive manner.",
    },
    {
      question: "What is Transfer Learning?",
      answer: 
        "Transfer Learning involves using a pre-trained model on a related problem, fine-tuning it on new data instead of training from scratch.",
    },
    {
      question: "Explain Q-learning in Reinforcement Learning.",
      answer: 
        "Q-learning is a reinforcement learning algorithm where an agent learns action values by maximizing cumulative rewards.",
    },
    {
      question: "What are autoencoders?",
      answer: 
        "Autoencoders are neural networks for dimensionality reduction, with encoders compressing data into latent space and decoders reconstructing it.",
    },
    {
      question: "What is the vanishing gradient problem, and how can it be solved?",
      answer: 
        "The vanishing gradient problem occurs when gradients become too small during backpropagation. Solutions include using ReLU, LSTMs, or batch normalization.",
    },
    {
      question: "What is the difference between stochastic and batch gradient descent?",
      answer: 
        "Stochastic Gradient Descent updates parameters for each example, while Batch Gradient Descent updates them using the entire dataset.",
    },
    {
      question: "What are activation functions in neural networks?",
      answer: 
        "Activation functions introduce non-linearity. Examples include Sigmoid, ReLU, Tanh, and Softmax.",
    },
    {
      question: "What is the purpose of dropout in neural networks?",
      answer: 
        "Dropout is a regularization technique that prevents overfitting by randomly ignoring neurons during training.",
    },
  ]);
   

  return (
    <main className="container mx-auto mt-8 px-4">
      <div className="flex flex-wrap justify-between">
        {/* Left column for questions */}
        <div className="w-full md:w-3/12 mb-8">
          <h3 className="text-2xl font-extrabold mb-4">
            Questions
            <TextLight text={"Courses"} />
          </h3>
          <ul className="list-none space-y-4">
            {faqs.map((faq, index) => (
              <li
                key={index}
                className="flex items-start space-x-3 hover:bg-gray-50 p-2 rounded transition duration-200 ease-in-out cursor-pointer"
              >
                <p className="text-gray-800 font-light">
                  {index + 1}. {faq.question}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column for answers */}
        <div className="w-full md:w-8/12 mb-8">
          <div className="relative">
            <Image
              src="/assets/resourse/interview/ml.jpg"
              alt="Featured Image"
              width={1200}
              height={600}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 rounded-lg"></div>
            <h2 className="absolute bottom-4 left-4 text-white text-3xl font-extrabold z-10">
            AI/ML Interview Questions
            </h2>
          </div>
          <p className="text-gray-700 mt-6 mb-4 leading-relaxed">
            Are you preparing for a AI/ML interview? Here are 19
            essential questions to help you succeed in your interview and
            demonstrate your mastery of AI/ML.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Top AI/ML Interview Questions & Answers
            </h3>
            <div className="divide-y divide-gray-300">
              {faqs.map((faq, index) => (
                <div key={index} className="py-4 flex items-start space-x-4">
                  <div>
                    <h4 className="text-lg font-semibold bg-gradient-to-b from-[#47aff9] via-[#10a1bb] to-[#0c130f] text-transparent bg-clip-text">
                      {index + 1}. {faq.question}
                    </h4>
                    <div className="flex items-start mt-2 space-x-2">
                      <FaLightbulb className="w-5 h-5 text-yellow-500" />
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Amilr;