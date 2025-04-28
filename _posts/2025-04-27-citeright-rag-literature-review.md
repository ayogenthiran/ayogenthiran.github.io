---
title: 'CiteRight: Automating Literature Review & Argument Builder'
date: 2025-04-27
permalink: /posts/2025/04/citeright-rag-literature-review/
excerpt: "A deep dive into how I built CiteRight, an AI-powered assistant that generates structured, high-quality literature reviews using Retrieval Augmented Generation (RAG) and GPT-4."
tags:
  - RAG
  - Literature Review Automation
  - Machine Learning
  - Academic Research
  - LLM Applications
---

# CiteRight: Automating Literature Reviews with RAG + GPT-4

A deep dive into how I built an AI-powered assistant to generate structured, high-quality literature reviews in minutes.

## Introduction

Academic research often begins with a comprehensive literature review—a critical foundation that demands weeks of effort to find, read, analyze, and synthesize dozens of papers. 

To address this challenge, I developed **CiteRight**, an AI-powered literature review generator that leverages **Retrieval Augmented Generation (RAG)**. With minimal input—just a paper title and a problem statement—CiteRight can generate a structured, high-quality literature review in minutes.

In this post, I’ll walk you through the journey of building CiteRight, its architecture, key technologies used, and how it transforms academic research workflows.

## What is Retrieval-Augmented Generation (RAG)?

**Retrieval-Augmented Generation (RAG)** is a technique that enhances the capabilities of large language models (LLMs) by incorporating external information sources into the generation process. 

### How RAG Works:

1. **Retrieve**: Search for relevant documents based on a query.
2. **Augment**: Incorporate retrieved documents into the input context.
3. **Generate**: Use an LLM to produce a response based on both pre-trained knowledge and retrieved documents.

**Advantages of RAG:**
- **More accurate and grounded answers** through external knowledge.
- **Access to up-to-date information** without retraining the model.
- **Reduced hallucination** by grounding generation on real documents.
- **Clear source attribution**, enhancing trust and verifiability.

## CiteRight: Project Overview

**CiteRight** is built to automate the creation of literature reviews with minimal researcher input. It accepts a paper title and problem statement, fetches relevant academic papers, and synthesizes them into a structured review.

**Who can benefit?**
- **Academic Researchers:** Speed up project kickoffs.
- **Graduate Students:** Quickly grasp new domains.
- **Research Teams:** Maintain knowledge consistency.
- **Grant Writers:** Build literature context efficiently.
- **Journal Editors:** Assess research context rapidly.

## Architecture Overview

Below is the architecture that powers CiteRight:

<div style="text-align: center; margin: 20px auto; max-width: 600px;">
    <img src="/images/blog/CiteRight/citeright-architecture.png" alt="CiteRight Architecture Diagram" style="width: 100%; height: auto;"/>
    <div style="font-size: 0.9em; color: #666; margin-top: 10px; font-style: italic;">
        Figure 1: CiteRight system architecture: from user input to final literature review generation using RAG and LLMs.
    </div>
</div>

**Explanation:**
- The frontend collects user input (title, problem statement).
- A keyword generator extracts search terms.
- A paper fetcher queries ArXiv for relevant papers.
- Extracted papers are passed to a review generator.
- An LLM synthesizes a structured literature review.
- Final output is displayed to the user with references and highlights.

This modular design ensures scalability, robustness, and adaptability to various research domains.

## System Architecture

CiteRight follows a modular architecture, with distinct components that transform simple user input into a detailed literature review.

### Frontend (UI)

- **Built with Streamlit**.
- Collects paper title, problem statement, and optional seed papers.
- Displays generated literature reviews, references, and keywords.

### Backend Components

- **Orchestrator:** Coordinates the end-to-end process, tracks flow, and handles errors.
- **Keyword Generator:** Uses an LLM to generate optimized search keywords.
- **Paper Fetcher:** Searches ArXiv with keywords and curates relevant papers.
- **Literature Review Generator:** Analyzes retrieved papers, synthesizes key information, and identifies research gaps.

### External Services

- **ArXiv API:** Retrieves open-access academic papers.
- **OpenAI API:** Powers LLM-based keyword generation and review synthesis.

## Implementation Details

### Key Methods

- **Keyword Extraction:**  
  Prompt engineering is used to extract precise academic search terms from user input.

- **Paper Retrieval and Curation:**  
  Papers are retrieved from ArXiv, then filtered for relevance to the research problem.

- **Information Extraction:**  
  For each paper, key methods, findings, and relevance are extracted to feed into the review generator.

- **Review Synthesis:**  
  Paper summaries are synthesized into a structured review with sections like introduction, background, approaches, findings, gaps, and conclusion.


## Challenges and Solutions

- **Handling API Rate Limits:**  
  Implemented delay mechanisms and retries for robust paper fetching from ArXiv.

- **Ensuring Review Quality:**  
  Introduced a two-stage LLM process—first summarize individual papers, then synthesize them collectively.

- **Optimizing Processing Time:**  
  Added caching layers to minimize redundant API calls and accelerate review generation.


## Future Improvements

Several enhancements are planned for CiteRight:
- **Vector Database Integration:** Semantic search for better paper matching.
- **PDF Processing:** Deeper analysis by parsing full paper content.
- **Citation Management:** Integration with BibTeX and citation tools.
- **Domain-Specific Models:** Fine-tuning for specialized academic fields.
- **User Feedback Loop:** Continuous learning from researcher feedback.


## Conclusion

CiteRight showcases the transformative potential of RAG systems in academic workflows. By combining retrieval (ArXiv search) with generation (GPT-4 synthesis), it automates a traditionally tedious task while maintaining high quality.

Rather than replacing researchers, CiteRight acts as a **research assistant**—freeing up time for innovation and deeper exploration.

By making literature reviews faster and more accessible, CiteRight aims to accelerate the pace of scientific discovery.


## Demo and Source Code

- **GitHub Repository:** [https://github.com/ayogenthiran/CiteRight](https://github.com/ayogenthiran/citeright-rag)
- **YouTube:** [Watch the Demo](https://youtube.com/your-demo-link-here)


## References

- Lewis, P., Perez, E., Piktus, A., Petroni, F., Karpukhin, V., Guu, K., Riedel, S. "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks." *arXiv preprint arXiv:2005.11401*, 2020. [Paper Link](https://arxiv.org/abs/2005.11401)
- Atlas: Few-shot Learning with Retrieval-Augmented Language Models - [Paper Link](https://arxiv.org/abs/2112.04426)
- OpenAI API Documentation - [API Reference](https://platform.openai.com/docs/)
- ArXiv API Documentation - [API Reference](https://info.arxiv.org/help/api/index.html)
- LangChain - [GitHub Repository](https://github.com/langchain-ai/langchain)
- ArXiv API Documentation - [API Reference](https://info.arxiv.org/help/api/index.html)
