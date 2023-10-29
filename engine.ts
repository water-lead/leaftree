import OpenAI from 'openai';
import jsPDF from 'jspdf';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  const { prompt, industry1, industry2, idea1, idea2, idea3, idea4, idea5 } = await req.json();

  // Ask OpenAI for a completion based on the given prompt
  const response = await openai.completions.create({
    model: 'gpt-4-32k',
    temperature: 1.0,
    max_tokens: 750,
    prompt:
    '
    You are creative design agent. 

    Your task is to find designs that emerge at the intersection of two broad industries: ${industry1} & ${industry2}.

    Theses designs are further categorized by up to five ideas: ${idea1}, ${idea2}, ${idea3}, ${idea4} & ${idea5}. 

    The most amazing design will combine all industries & ideas. 

    A good design will combine more than one industry & idea but not all of them. 

    A weak design will use only one industry & two ideas. 
    
    The ideas will be entered in order of importance to the desired design outcome.

    Please give a detailed analysis of each suggested design, the analysis should include specific industry applications.

    The analysis should also include Merit & Novelty investigations: Merit is determined by dividing the functionality or purpose of the design by the accuracy of the information used to generate the design. Functionality is based on five factors: accessibility, cost-effectiveness, efficiency, sustainability & flexibility (you may estimate these values on a scale from 0 t0 1). The accuracy of the information can be based on the Open AI model we are using, in this case 'gpt-4-32k'.
    Novelty is determined by dividing the Originality of the design - this is how distinct the design is - by the Persistence of the information used in generating the design or how credible the information is.
    
    Each design should generate a text-to-image prompt to represent the industry application, they should be defined with the following variable names: ${image-text1}, ${image-text2}, ${image-text3}, ${image-text4}, ${image-text5} for each respective design.
    '
  });

  // Extract image prompts from the generated text
  const designPattern = /Image Prompt: ([^\n]+)/g;
  let match;
  const imagePrompts: string[] = [];

  while ((match = designPattern.exec(response.data.choices[0].text)) !== null) {
    imagePrompts.push(match[1]);
  }

  // Assign prompts to respective variables
  const [image_text1, image_text2, image_text3, image_text4, image_text5] = imagePrompts;

  // Generate images for each prompt
  const imageResponse1 = await openai.imageGeneration.create({
    model: 'dalle-or-latest-model',
    prompt: image_text1
  });

  const imageResponse2 = await openai.imageGeneration.create({
    model: 'dalle-or-latest-model',
    prompt: image_text2
  });

    const imageResponse3 = await openai.imageGeneration.create({
    model: 'dalle-or-latest-model',
    prompt: image_text3
  });

  const imageResponse4 = await openai.imageGeneration.create({
    model: 'dalle-or-latest-model',
    prompt: image_text4
  });

    const imageResponse5 = await openai.imageGeneration.create({
    model: 'dalle-or-latest-model',
    prompt: image_text5
  });

  // Use jsPDF to generate a PDF
  const doc = new jsPDF();
  doc.setFontSize(12);
  doc.setFont('Raleway-Medium', 'normal');
  
  // Split the text into lines so it fits into the PDF
  const lines = doc.splitTextToSize(response.data.choices[0].text, 190);
  doc.text(lines, 10, 10);
  
  // Save the PDF
  doc.save('Confluence Studio - Design Generation.pdf');
}
