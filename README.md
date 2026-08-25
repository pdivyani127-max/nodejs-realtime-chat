# REST API Integration – Weather Data Application

## Overview
This project demonstrates REST API fundamentals by integrating a public weather API into a simple web application.

## Concepts Covered
- REST API fundamentals
- HTTP GET requests
- JSON responses
- Request and response handling
- Error and loading states
- Query parameters
- Visual presentation of API data
- Practical industry use cases

## How it works
The application sends a GET request to the Open-Meteo public API using latitude and longitude. The returned JSON weather data is displayed in a responsive interface.

## Run
Open `index.html` in a browser. No API key or build step is required.

## Example GET request
`https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,relative_humidity_2m,wind_speed_10m`

## REST API benefits
REST APIs provide standardized communication between applications, enable service reuse, support independent front-end/back-end development, and make integrations scalable.

## Industry applications
Weather, maps, payments, e-commerce, social platforms, logistics, and mobile applications commonly consume REST APIs.
