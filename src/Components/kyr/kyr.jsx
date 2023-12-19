import React, { useState, useEffect } from 'react';
import '../styles/legalChatbot.css';

const DecisionNode = ({ question, options, handleOptionClick }) => {
  const isLeaf = !options;

  return (
    <div className="decision-node">
      <p>{question}</p>
      {!isLeaf && (
        <div className="options">
          {options.map((option, index) => (
            <button key={index} onClick={() => handleOptionClick(option.action)}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const LegalChatDecisionTree = () => {
  const [currentNode, setCurrentNode] = useState(initialDecisionTree);
  const [isLoading, setIsLoading] = useState(false);

  const handleOptionClick = (action) => {
    setIsLoading(true);

    // Simulate a 3-second delay before changing the node
    setTimeout(() => {
      const nextNode = action();
      setCurrentNode(nextNode);
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="legal-chat-decision-tree">
      <DecisionNode {...currentNode} handleOptionClick={handleOptionClick} />
      {isLoading && <div className="loading">Loading...</div>}
    </div>
  );
};

const initialDecisionTree = {
  question: "Which kind of loss?",
  options: [
    {
      label: "Physical",
      action: () => ({
        question: "Which type of injury happened?",
        options: [
          {
            label: "Accidental",
            action: () => ({
              question: "Where did the accident happen?",
              options: [
                {
                  label: "At workplace",
                  action: () => ({
                    question: "select the most matching example",
                    options: [
                        {
                            label:"example1",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example2",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example3",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        }
                    ]
                  }),
                },
                {
                  label: "At home",
                  action: () => ({
                    question: "select the most matching example",
                    options: [
                        {
                            label:"example1",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example2",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example3",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        }
                    ]
                  }),
                },
                {
                  label: "While traveling",
                  action: () => ({
                    question: "select the most matching example",
                    options: [
                        {
                            label:"example1",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example2",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example3",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        }
                    ]
                  }),
                },
              ],
            }),
          },
          {
            label: "Deliberate",
            action: () => ({
              question: "Where did the deliberate injury happen?",
              options: [
                {
                  label: "At workplace",
                  action: () => ({
                    question: "select the most matching example",
                    options: [
                        {
                            label:"example1",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example2",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example3",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        }
                    ]
                  }),
                },
                {
                  label: "At home",
                  action: () => ({
                    question: "select the most matching example",
                    options: [
                        {
                            label:"example1",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example2",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example3",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        }
                    ]
                  }),
                },
                {
                  label: "While traveling",
                  action: () => ({
                    question: "select the most matching example",
                    options: [
                        {
                            label:"example1",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example2",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        },
                        {
                            label:"example3",
                            action:()=>({
                                question:"according to your choices we found out this info",
                                options:null
                            })
                        }
                    ]
                  }),
                },
              ],
            }),
          },
        ],
      }),
    },
    {
      label: "Financial",
      action: () => ({
        question: "What type of financial loss?",
        options: [
          {
            label: "Business disputes",
            action: () => ({
                question: "select the most matching example",
                options: [
                    {
                        label:"example1",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    },
                    {
                        label:"example2",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    },
                    {
                        label:"example3",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    }
                ]
              }),
          },
          {
            label: "Land disputes",
            action: () => ({
                question: "select the most matching example",
                options: [
                    {
                        label:"example1",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    },
                    {
                        label:"example2",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    },
                    {
                        label:"example3",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    }
                ]
              }),
          },
          {
            label: "Fraud",
            action: () => ({
                question: "select the most matching example",
                options: [
                    {
                        label:"example1",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    },
                    {
                        label:"example2",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    },
                    {
                        label:"example3",
                        action:()=>({
                            question:"according to your choices we found out this info",
                            options:null
                        })
                    }
                ]
              }),
          },
        ],
      }),
    },
  ],
};

export default LegalChatDecisionTree;
