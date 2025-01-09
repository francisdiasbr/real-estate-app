# Intelligent Real Estate Search Platform

Read in Portuguese: [README.pt.md](README.pt.md)

## Description

This is a real estate app that allows users to search for properties and view property details.

The search for properties is done by the user, through a intelligent search bar that uses OpenAI chat completion to search for properties, allowing the user to search for properties by name, location, price, etc in a natural language using just one field.

The search is done by the backend, using a vector database to store the properties and the embedings, and then using the chat completion to search for the most relevant properties based on the user's search.


- The second script runs to create a REST API to get the properties data from the database and suggest properties to the user based on the user's search, using chat completion to go through the database and find the most relevant properties based on the user's search.

In frontend:
- The user can search for properties in a natural language using one Input field;
- After the user submits the search, the user receives a list of properties that match the search, through endpoint POST /search, created in the backend;
- The user can view the property details through the endpoint GET /property/:id, created in the backend


[video here]


## Telas

- Home
- Property Details

[images here]

## Tecnologies

App Structure:
- React Native with Typescript in a Expo environment
- React Navigation (Navigation between screens)
- Redux (State Management)


## Vision
Imagine a real estate platform that understands exactly what you're looking for, even when you express it in your own words. Our application revolutionizes property searching by replacing complex filter forms with a single, intelligent search bar that understands natural language queries like "show me sunny 3-bedroom houses near parks in Seattle under $800,000" or "pet-friendly apartments with a gym in downtown."


## How It Works
At its core, the platform leverages cutting-edge AI technology to transform the traditional property search experience:

- Natural Language Understanding: Powered by OpenAI's chat completion, the search bar interprets complex human queries and translates them into precise property matches.
- Smart Property Matching: Behind the scenes, a sophisticated vector database stores property information in a way that allows for semantic searching - meaning it understands the context and meaning behind your search, not just keywords.
- Seamless User Experience: Users can simply type what they're looking for in plain English, and the system does the heavy lifting of understanding requirements and finding relevant matches.


## Technical Innovation
The platform consists of two main components:
- Backend Intelligence

  - A vector database that stores property details and their semantic embeddings
  - An AI-powered search engine that processes natural language queries
  - RESTful API endpoints for property search and detailed property information

- Frontend Simplicity
  - A clean, intuitive interface centered around a single powerful search bar
  - Real-time property suggestions as users type their queries
  - Detailed property views with all relevant information

This platform bridges the gap between how people naturally think about their ideal property and how they search for it, making the entire real estate search process more intuitive, efficient, and enjoyable.