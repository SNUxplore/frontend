

const faqs = [
  {
    Intent: "one",
    question: "How many credits are required to finish undergrad",
    answer:
      "All undergrad programs require at least 120 credit hours of formal coursework",
  },
  {
    Intent: "two",
    question: ["What is a CCC"],
    answer:
      "A CCC is a set of courses aimed to expose students to essential practice and knowledge from eight categories",
  },
  {
    Intent: "three",
    question: "What is University wide elective",
    answer:
      "Set of courses students are required to choose to help them develop their knowledge in the field of interest that might lead to specialized choice of a Minor",
  },
  {
    Intent: "four",
    question: "what are the departments in school of engineering",
    answer:
      "There are 5 departments in school of engineering: Chemical Engineering, Civil Engineering, Electrical Engineering, Mechanical Engineering, Computer science and Engineering",
  },
  {
    Intent: "five",
    question: "What are the departments in school of natural science",
    answer: "Chemistry, Life Science, Physics and Mathematics",
  },
  {
    Intent: "six",
    question: "Eligibility for admission in economics and finance",
    answer:
      "Class 12th scores and Shiv Nadar University Scholastic Aptitude Test (SNUSAT) and Academic Proficiency Test (APT)",
  },
];

console.log("==================Paste in Code editor==================");

faqs.forEach((item) => {
  console.log(`
const ${item.Intent}Handler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === '${item.Intent}';
    },
    handle(handlerInput) {
        const speakOutput = '${item.answer}'
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
}
    `);
});

console.log("==================Paste in Intend JSON Editor==================");

faqs.forEach((item) => {
  console.log(`
  {
    "name": "${item.Intent}",
    "slots": [],
    "samples": [
      "${item.question}"
    ]
},
  `);
});
