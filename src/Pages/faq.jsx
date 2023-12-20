import React, { useState } from 'react';
import './faq.css'
const dataCollection = [
  {
    question: 'What are universal human rights?',
    answer: 'Universal human rights are fundamental freedoms and entitlements inherent to all individuals, irrespective of nationality or status. Enshrined in the Universal Declaration of Human Rights (UDHR), they encompass civil, political, economic, social, and cultural rights, aiming to ensure dignity, equality, and justice worldwide. Despite challenges, the international community continues to advocate for their protection and promotion. '
  }, {
    question: 'How do court proceedings work?',
    answer: 'Court proceedings involve a structured legal process where parties present evidence and arguments before a judge or jury. The plaintiff initiates the case, followed by the defendant\'s response. Discovery, pre-trial motions, and a trial where evidence is presented and legal arguments are made precede a final judgment, which may be appealed by dissatisfied parties.'
  }, {
question: 'Can my rights be taken away in certain situations?',
    answer: 'Yes, in specific situations, governments may restrict individual rights for reasons like national security or public health. However, these limitations must be proportionate, lawful, and subject to legal scrutiny. Individuals typically have the right to challenge such restrictions in court.'
  }, {
question: 'What should I do if I\'m arrested?',
    answer: 'If you\'re arrested, stay calm and comply with law enforcement. You have the right to remain silent and consult with an attorney. Avoid self-incrimination, request legal representation, and do not waive your rights during questioning. Seek legal advice promptly to understand your options and ensure a fair legal process.'
  },{
question: 'What are my rights in a divorce or separation?',
    answer: 'In a divorce or separation, you have the right to legal representation. You may negotiate terms or, if necessary, seek court intervention for matters like child custody, spousal support, and the division of assets. It\'s essential to understand and assert your rights throughout the process, possibly with the guidance of a family law attorney.'
  },{
question: 'How do legal settlements and negotiations occur?',
    answer: 'Legal settlements and negotiations involve parties in a legal dispute reaching an agreement outside of court. Attorneys for each side communicate and negotiate terms, often involving concessions and compromises. Once an agreement is reached, it is documented in a legally binding settlement agreement, resolving the dispute without the need for a trial.'
  },{
question: 'How does international law protect human rights? ',
    answer: 'International law protects human rights through treaties, conventions, and agreements that establish standards accepted by the global community. International bodies like the United Nations monitor compliance and provide mechanisms for addressing violations. Individuals can seek recourse through international courts and tribunals, demonstrating a commitment to upholding human rights on a global scale.'
  },{
question: 'How does property ownership and transfer work?',
    answer: 'Property ownership and transfer involve legal processes. To acquire property, individuals typically go through a purchase, inherit, or receive it as a gift. Transfer is formalized through deeds, with legal requirements varying by jurisdiction, ensuring a transparent and lawful transition of ownership.'
  },{
question: 'How are laws created and changed?',
    answer: 'Laws are created and changed through a legislative process involving the introduction, debate, and approval of bills in a legislative body, such as a parliament or congress. Proposed laws undergo committee review, public hearings, and voting before becoming statutes. Amendments and repeals can occur through a similar process, allowing for the evolution of legal frameworks.'
  },{
question: 'What are the rights of an accused person in India?',
    answer: 'An accused person in India has the right to legal representation, the presumption of innocence until proven guilty, and protection against self-incrimination.'
  },{
question: 'What is the process for buying property in India?',
    answer: 'To buy property in India, one must verify land titles, obtain a sale deed, and register the property with the local authorities. Legal documentation and due diligence are crucial steps in this process.'
  },{
question: 'How does the civil litigation process work in India?',
    answer: 'Civil litigation in India involves filing a plaint, serving notice to the defendant, presenting evidence, and attending court hearings. The resolution may include compensation, injunctions, or specific performance orders.'
  },{
question: 'How is online privacy protected in India?',
    answer: 'Online privacy in India is protected through the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, which mandate entities to implement security measures for handling personal data and ensure its confidentiality.'
  },{
question: 'What are the income tax regulations in India?',
    answer: ' Income tax regulations in India govern the assessment and taxation of income. Taxpayers need to file annual returns, declare income, and adhere to tax slabs based on their earnings.'
  },
];

const Faq = () =>{
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return
    }
    setActiveAccordion(index);
  };

  return (
    <>
    <div className='faq-section'>
      <div className="faq-header">
         <div className='faq-header-text '>
         <div className='faq-texts '>
         <span className="faq-accordion__title">Frequently Asked Questions</span>
          <h6 className='h1-faq'>Let's answer some of your questions</h6>
         </div>
          </div>
          <div className="faq-header-image">
         <img src="/faq-img.png" alt="faq-img" />
         </div>
        </div>
      <div className="faq-container ">
        <div className="accordion__faq">
          { dataCollection.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>
                <div className="accordion__faq-heading">
                  <h3 className={accordion === index ? "active" : ""}>{item.question}</h3>
                  <div>
                    {accordion === index ?
                      <span className="faq-verticle">-</span> : <span className="horizental">+</span>}
                  </div>
                </div>
                {/* {console.log({item.answer})} */}
                <div><p className={accordion === index ? "active" : "inactive"} >{item.answer}</p></div>
              </div>
            )
          }
        </div>
      </div>
      </div>
    </>
  );
}

export default Faq;
