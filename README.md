# Dummy Security Scan Results

## Description

This project is made in accordance with the requirements of the [following exercise](https://github.com/guardrailsio/full-stack-engineer-challenge).
The technologies used are React, NodeJs with Express, PostGresSQL and Docker.

## Setup

Run `docker-compose up` to start the containers. The dashboard is accessible at the following url http://localhost:3000 .

## Improvements

### For the API

-   **Scan Service:** We could improve the logic in there to have less random results and maybe have something more sequential ( queued > scanning > result).
-   **Auth:** An Auth service could be added to manage users and their scanning results.
-   **Migrations:** Implementing a migration system for the models with sequelize.

### For the Dashboard

-   **ScanDetails State Management:** Instead of loading all the data at once from the Dashboard, we could fetch only the required data for ScanList and then individually fetch the findings only when the corresponding ScanDetails component is displayed (This is not relevant if the number of findings stays relatively low for each repo).
-   **Error Handling:** The logic for handling axios request and the errors should be implemented in a separate file

### For Docker

-   **[FIXED]React HMR:** The HMR does not currently work when the dashboard is running in the container
-   **[FIXED] DB Data persistence:** The data is erased from the DB when the container is stopped.
