---
title: 'CiteRight: Automating Literature Review'
date: 2025-05-08
permalink: /posts/2025/05/citeright-rag-literature-review/
excerpt: "A deep dive into how I built CiteRight, an AI-powered assistant that generates structured, high-quality literature reviews using Retrieval Augmented Generation (RAG) and GPT-4."
tags:
  - RAG
  - Literature Review Automation
  - Machine Learning
  - Academic Research
  - LLM Applications
---

<!-- # CiteRight: Automating Literature Reviews with RAG + GPT-4 -->

A deep dive into how I built an AI-powered assistant to generate structured, high-quality literature reviews in minutes.

## Introduction

Academic research often begins with a comprehensive literature review, a critical foundation that demands weeks of effort to find, read, analyze, and synthesize dozens of papers. 

To address this challenge, I developed **CiteRight**, an AI-powered literature review generator that leverages **Retrieval Augmented Generation (RAG)**. With minimal input—just a paper title and a problem statement—CiteRight can generate a structured, high-quality literature review in minutes.

In this post, I'll walk you through the journey of building CiteRight, its architecture, key technologies used, and how it transforms academic research workflows.

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

<div style="text-align: center; margin: 20px auto; max-width: 600px;">
    <img src="/images/blog/CiteRight/citeright-architecture.png" alt="CiteRight Architecture Diagram" style="width: 100%; height: auto;"/>
    <div style="font-size: 0.9em; color: #666; margin-top: 10px; font-style: italic;">
        Figure 1: CiteRight system architecture: from user input to final literature review generation using RAG and LLMs.
    </div>
</div>

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

## User Experience

<div style="text-align: center; margin: 20px auto; max-width: 800px;">
    <img src="/images/blog/CiteRight/Streamlit_UI.png" alt="CiteRight User Interface" style="width: 100%; height: auto; border: 1px solid #ddd; border-radius: 5px;"/>
    <div style="font-size: 0.9em; color: #666; margin-top: 10px; font-style: italic;">
        Figure 2: CiteRight Streamlit interface — showing the input form for research queries and parameters.
    </div>
</div>

CiteRight is designed for simplicity, speed, and usability. The user workflow follows a straightforward three-stage process:

### 1. Research Input Stage
The left panel collects the core research inputs:

- **Paper Title:** Defines the research topic.
- **Problem Statement:** Describes the specific research question or focus.
- **Seed Papers (optional):** Known relevant papers to guide retrieval.

This minimal input approach reduces the setup time from days to minutes.

### 2. Processing Stage
After clicking **"Generate Literature Review"**, CiteRight automatically:

- Extracts search keywords.
- Retrieves papers from ArXiv.
- Curates the most relevant papers.
- Synthesizes the literature review.

### 3. Results Stage
The right panel presents:

- A fully structured literature review (introduction, approaches, findings, gaps, conclusion).
- Academic citations following standard formats.
- Expandable paper details with abstracts and links.

Users can easily copy the review, explore referenced papers, or refine the input for deeper iterations.

## Implementation Details

### Key Methods

- **Keyword Extraction:** Prompt engineering is used to extract precise academic search terms from user input.
- **Paper Retrieval and Curation:** Papers are retrieved from ArXiv, then filtered for relevance to the research problem.
- **Information Extraction:** For each paper, key methods, findings, and relevance are extracted.
- **Review Synthesis:** Paper summaries are synthesized into a structured literature review with standard academic sections.

## Code Snippets

Below are key excerpts from CiteRight's backend that showcase how the system retrieves papers, generates keywords, and synthesizes structured literature reviews.

### Keyword Extraction Logic
```python
from backend.llm_client import call_llm

def generate_keywords(title, problem):
    if not title or not problem:
        raise ValueError("Title and problem statement are required")

    # Construct prompt for keyword generation
    prompt = f"""
    Generate 5-7 specific search keywords for this research topic.
    Return ONLY the keywords as a comma-separated list.

    Title: {title}
    Problem: {problem}
    """

    try:
        # Call LLM to generate keywords
        response = call_llm(prompt)

        # Parse response (comma-separated or line-by-line)
        if "," in response:
            return [k.strip() for k in response.split(",") if k.strip()]

        lines = [line.strip() for line in response.split("\n") if line.strip()]
        cleaned_lines = []
        for line in lines:
            # Handle different list formats
            if ". " in line and line.split(". ")[0].isdigit():
                cleaned_lines.append(line.split(". ", 1)[1])
            elif line.startswith(("•", "-", "*")):
                cleaned_lines.append(line[1:].strip())
            else:
                cleaned_lines.append(line)

        return cleaned_lines

    except Exception as e:
        print(f"Error generating keywords: {e}")
        return [title.strip()]
```

### Paper Curation Algorithm
```python
import arxiv
from typing import List, Dict, Any

def fetch_papers(keywords: List[str], seed_ids: List[str] = None, max_results: int = 20) -> List[Dict[Any, Any]]:
    results = []
    seen_ids = set()

    try:
        # Combine keywords into a single OR-based query
        combined_query = " OR ".join([f'"{keyword}"' for keyword in keywords])

        # Set up ArXiv client with retries and delay
        client = arxiv.Client(page_size=max_results, delay_seconds=3, num_retries=3)
        search = arxiv.Search(query=combined_query, max_results=max_results, sort_by=arxiv.SortCriterion.Relevance)

        # Fetch and filter papers
        for paper in client.results(search):
            if paper.entry_id not in seen_ids:
                seen_ids.add(paper.entry_id)
                results.append({
                    'id': paper.entry_id,
                    'title': paper.title,
                    'authors': [author.name for author in paper.authors],
                    'abstract': paper.summary,
                    'pdf_url': paper.pdf_url,
                    'published': paper.published.strftime('%Y-%m-%d') if hasattr(paper, 'published') else ''
                })

        return results

    except Exception as e:
        print(f"Error searching ArXiv: {e}")
        return []
```

### Literature Review Generation Prompt
```python
from backend.llm_client import call_llm
from typing import List, Dict, Any
import re

def generate_review(problem: str, papers: List[Dict[Any, Any]]) -> str:
    if not papers:
        return "No papers available for review."

    try:
        # Preprocess papers: extract year and first author last name
        for paper in papers:
            if 'published' in paper and paper['published']:
                match = re.search(r'(\d{4})', paper['published'])
                paper['year'] = match.group(1) if match else 'n.d.'
            else:
                paper['year'] = 'n.d.'

            if 'authors' in paper and paper['authors']:
                first_author = paper['authors'][0]
                paper['first_author_last'] = first_author.split()[-1]
            else:
                paper['first_author_last'] = 'Unknown'

        # Format abstracts for the review prompt
        abstracts = ""
        for i, paper in enumerate(papers):
            abstracts += f"Paper {i+1}:\n"
            abstracts += f"Title: {paper.get('title', 'Unknown')}\n"
            abstracts += f"Authors: {', '.join(paper.get('authors', ['Unknown']))}\n"
            abstracts += f"Year: {paper.get('year', 'n.d.')}\n"
            abstracts += f"Abstract: {paper.get('abstract', 'Not available')}\n\n"

        # Create the literature review prompt
        prompt = f"""
        Create a comprehensive literature review based on the following research problem and paper abstracts.

        Research Problem:
        {problem}

        Available Papers:
        {abstracts}

        Please structure the literature review with the following sections:
        1. Introduction
        2. Current Approaches
        3. Key Findings
        4. Research Gaps
        5. Conclusion

        Use proper academic citation format [Author, Year].
        Highlight common themes and contradictions.
        """

        # Call LLM to generate the final review
        review = call_llm(prompt, max_tokens=2500, temperature=0.4)
        return review

    except Exception as e:
        print(f"Error generating literature review: {e}")
        return f"Error generating literature review: {str(e)}"
```

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
- Atlas: Few-shot Learning with Retrieval-Augmented Language Models - [Paper Link](https://arxiv.org/abs/2208.03299)
- OpenAI API Documentation - [API Reference](https://platform.openai.com/docs/)
- ArXiv API Documentation - [API Reference](https://info.arxiv.org/help/api/index.html)
<!-- - LangChain - [GitHub Repository](https://github.com/langchain-ai/langchain) -->