# AgriParcel Frontend UI Plan

## Purpose

Build the frontend application for AgriParcel AI.

The frontend presents satellite-derived agricultural mapping results
and the government verification application layer.

## Frontend Stack

- React
- TypeScript
- Vite
- MapLibre
- CSS
- FastAPI integration later

## Main Navigation

- Overview
- Map
- Field Objects
- Statistics
- Verification

## Core Screens

### 1. Overview

Show:
- Study area
- Analysis information
- Mapped agricultural area
- Crop-wise area
- Evidence information
- Data/analysis status

### 2. Map

Primary application screen.

Show:
- Study area
- Satellite/map background
- Image-derived Field Objects
- Crop classification
- Paddy
- Banana
- Other
- Uncertain/evidence state where applicable

Do not call Field Objects legal parcels or cadastral parcels.

### 3. Field Objects

Allow the user to:
- View Field Objects
- Select a Field Object
- View its classification
- View classifier agreement
- View evidence quality
- View relevant metadata

### 4. Statistics

Show backend-derived:
- Mapped agricultural area
- Paddy area
- Banana area
- Other area
- Uncertain/unmapped information where available

Never invent statistics.

### 5. Verification

Show:
- Declared area
- Satellite-mapped area
- Difference
- Relative difference
- Evidence quality
- Review status

Possible review statuses:
- Broadly Consistent
- Discrepancy for Review
- Insufficient Evidence / Uncertain

Never display "Verified" as an automatic system conclusion.

## Terminology

Use "Field Object" in the UI.

Do not use:
- Legal parcel
- Cadastral parcel
- Ownership boundary
- Survey-grade boundary

Mapped satellite results must be described as satellite-derived or mapped results.

## Data Rules

The frontend must not:
- Fabricate satellite results
- Fabricate classifications
- Fabricate statistics
- Fabricate accuracy
- Invent backend API responses

Until the backend API is available, UI development may use clearly
identified development placeholders only.

## Backend Integration

The frontend will eventually consume FastAPI outputs including:

- Study-area metadata
- Analysis metadata
- Field-object GeoJSON
- Crop classifications
- Mapped-area statistics
- Uncertainty information
- Classifier agreement
- Evidence quality
- Declaration comparison
- Review status

The frontend must adapt to the actual backend API contract.

## Design

- Light theme
- Professional GIS/government dashboard
- Clean layout
- Clear hierarchy
- Responsive
- Accessible
- No unnecessary animations
- No unnecessary AI/chatbot interface

## Architecture Boundary

Frontend responsibilities:
- Presentation
- Interaction
- Map visualization
- Data visualization
- API consumption
- Loading/error/empty states

Backend responsibilities:
- Satellite processing
- Geospatial processing
- Machine learning
- Validation
- Scientific calculations
- Evidence calculation
- Verification logic
- API data

Do not move backend scientific logic into the frontend.